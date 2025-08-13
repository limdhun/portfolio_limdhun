// src/components/TocSidebar.tsx
import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

const ITEMS: TocItem[] = [
    { id: "about",          label: "About" },
    { id: "education",      label: "Education" },
    { id: "skills",         label: "Skills" },
    { id: "contact",        label: "Contact" },
    { id: "projects",       label: "Projects" },
    { id: "other-activity", label: "Other Activity" },
];

const WIDTH = 192; // 바 폭
const BTN   = 40;  // 토글 버튼 정사각

export default function TocSidebar({ items = ITEMS }: { items?: TocItem[] }) {
    // 초기 진입 기본: 펼침
    const [open, setOpen] = useState<boolean>(() => {
        try {
            const v = localStorage.getItem("toc:open");
            return v === null ? true : v !== "0";
        } catch {
            return true;
        }
    });

    useEffect(() => {
        try {
            if (localStorage.getItem("toc:open") === null) localStorage.setItem("toc:open", "1");
        } catch {
            //
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("toc:open", open ? "1" : "0");
        } catch {
            //
        }
    }, [open]);

    const [active, setActive] = useState<string>(items[0]?.id ?? "");

    // 섹션 가시성 감지 → active 동기화
    useEffect(() => {
        const targets = items
            .map(i => (typeof document !== "undefined" ? document.getElementById(i.id) : null))
            .filter(Boolean) as Element[];

        if (targets.length === 0) return;

        const io = new IntersectionObserver(
            (entries) => {
                // 화면 상단에 가장 가까운 교차 섹션 선택
                const vis = entries
                    .filter(e => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
                    )[0];

                const id = vis?.target?.id;
                if (id) setActive(id);
            },
            {
                root: null,
                // 작은 섹션도 잘 잡히도록 관대하게
                rootMargin: "-15% 0px -70% 0px",
                threshold: 0, // 살짝만 보여도 감지
            }
        );

        targets.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, [items]);

    // 클릭 즉시 하이라이트 + 스무스 스크롤
    const scrollTo =
        (id: string) =>
            (e: React.MouseEvent | React.KeyboardEvent) => {
                e.preventDefault();
                setActive(id); // 클릭 즉시 활성화
                const el = document.getElementById(id);
                if (!el) return;
                // active 렌더 후 스크롤 시작
                requestAnimationFrame(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            };

    return (
        // 뷰포트 기준 '고정' (본문과 완전히 분리)
        <div className="fixed left-0 top-0 z-[100] h-screen" style={{ width: WIDTH }}>
            {/* 바 패널: 슬라이드로만 숨김/표시. 본문은 영향 없음 */}
            <aside
                className="absolute inset-0 bg-white text-gray-900 border-r border-gray-200
                   overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-out"
                style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
            >
                <div className="px-4 py-3 border-b border-gray-200">
                    <div className="text-xs font-bold uppercase tracking-wide text-black">CONTENTS</div>
                </div>

                <nav className="p-3">
                    <ul className="space-y-1">
                        {items.map(({ id, label }) => {
                            const isActive = active === id;
                            return (
                                <li key={id}>
                                    <button
                                        onClick={scrollTo(id)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") scrollTo(id)(e);
                                        }}
                                        aria-current={isActive ? "true" : undefined}
                                        className={`w-full text-left rounded-lg px-3 py-2 text-sm transition
                      ${isActive ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-800 hover:bg-gray-50"}`}
                                    >
                                        {label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {/* 토글 버튼: 바 '오른쪽 바깥'에 고정. open=경계선 1줄 규칙 */}
            <button
                onClick={() => setOpen(v => !v)}
                aria-label={open ? "목차 접기" : "목차 펼치기"}
                className={`absolute top-24 bg-white text-black border border-gray-300
                    flex items-center justify-center transition-all duration-300
                    rounded-r-lg ${open ? "rounded-l-none border-l-0" : "rounded-l-lg"}`}
                style={{ left: open ? WIDTH : 0, width: BTN, height: BTN }}
            >
                {open ? "◀" : "▶"}
            </button>
        </div>
    );
}
