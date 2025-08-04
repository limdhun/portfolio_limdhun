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
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // 펼치기 상태가 바뀔 때마다 실제 높이를 계산해서 적용
    useEffect(() => {
        if (expanded && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [expanded, expandedContent]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out transform
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            bg-white border border-2 border-black rounded-xl p-6 flex flex-col gap-4`}
        >
            {/* 이미지 영역 */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                    src={thumbnail}
                    alt={title}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* 제목 */}
            <h3 className="text-lg font-bold">{title}</h3>

            {/* 태그 영역 */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="border border-black bg-white text-black font-bold text-xs px-3 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* 설명 (항상 보이는 부분) */}
            <p className="text-black text-sm whitespace-pre-line">
                {description}
            </p>

            {/* 펼쳐지는 추가 내용 */}
            {expandedContent && (
                <div
                    style={{ height: `${contentHeight}px` }}
                    className="overflow-hidden transition-all duration-500 ease-in-out mt-2"
                >
                    <div ref={contentRef} className="text-black text-sm">
                        {expandedContent}
                    </div>
                </div>
            )}

            {/* 버튼 */}
            {expandedContent && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-blue-500 text-sm font-semibold mt-2 self-start hover:underline"
                >
                    {expanded ? "접기 ▲" : "펼치기 ▼"}
                </button>
            )}
        </div>
    );
}
