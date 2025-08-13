// src/components/ProjectCard.tsx
import { useEffect, useRef, useState } from "react";

type ProjectCardProps = {
    thumbnail: string;
    title: string;
    tags: string[];
    description: string;
    expandedContent?: React.ReactNode;
};

export default function ProjectCard({
                                        thumbnail,
                                        title,
                                        tags,
                                        description,
                                        expandedContent,
                                    }: ProjectCardProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    // 페이드 인
    useEffect(() => {
        const io = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.2 }
        );
        if (rootRef.current) io.observe(rootRef.current);
        return () => io.disconnect();
    }, []);

    // 펼침 높이 계산
    const recalc = () => {
        if (expanded && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    };
    useEffect(recalc, [expanded, expandedContent]);
    useEffect(() => {
        // 창 크기 바뀌면 펼친 상태에서 높이 재계산
        const onResize = () => recalc();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [expanded]);

    return (
        <div
            ref={rootRef}
            className={`bg-white rounded-xl shadow p-6 text-black border-2 border-black transition-all duration-700 ease-out transform
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            {/* 썸네일 */}
            <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                    src={thumbnail}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* 제목 */}
            <h3 className="mt-4 font-inter text-xl font-bold text-black">{title}</h3>

            {/* 태그 */}
            <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="border border-gray-300 bg-white text-black text-xs font-medium px-3 py-1 rounded-full"
                    >
            #{tag}
          </span>
                ))}
            </div>

            {/* 설명 */}
            <p className="mt-3 text-sm leading-relaxed text-gray-800 whitespace-pre-line">
                {description}
            </p>

            {/* 펼쳐지는 추가 내용 */}
            {expandedContent && (
                <div
                    style={{ height: `${contentHeight}px` }}
                    className="overflow-hidden transition-all duration-500 ease-in-out mt-2"
                >
                    <div
                        ref={contentRef}
                        className="text-black text-sm leading-relaxed
                       [&_a]:text-blue-600 [&_a:hover]:underline"
                    >
                        {expandedContent}
                    </div>
                </div>
            )}

            {/* 펼치기/접기 버튼 */}
            {expandedContent && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="mt-3 text-blue-600 text-sm font-semibold hover:underline"
                >
                    {expanded ? "접기 ▲" : "펼치기 ▼"}
                </button>
            )}
        </div>
    );
}
