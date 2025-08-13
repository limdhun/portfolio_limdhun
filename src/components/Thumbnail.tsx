// src/components/Thumbnail.tsx
import { useEffect, useState } from "react";

export default function Thumbnail() {
    const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");

    useEffect(() => {
        // 페이지 진입 시 본문을 살짝 숨겨둠 (아래 3)과 연동)
        document.body.classList.add("booting");

        const t1 = setTimeout(() => setPhase("fade"), 800);       // 썸네일 0.8s 보여주고
        const t2 = setTimeout(() => {
            setPhase("gone");                                       // 완전히 제거
            document.body.classList.remove("booting");              // 본문 페이드인 허용
        }, 800 + 700); // 페이드 0.7s

        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    if (phase === "gone") return null;

    return (
        <div
            aria-hidden
            className={`fixed inset-0 z-[1000] flex items-center justify-center
                  bg-gradient-to-b from-[#FAF8F5] to-[#FFF8DC]
                  ${phase === "fade" ? "opacity-0" : "opacity-100"}
                  transition-opacity duration-700 pointer-events-none`}
        >
            <img
                src={`${import.meta.env.BASE_URL}images/thumbnail.png`}
                alt=""
                className="w-[min(90vw,1000px)] h-auto select-none"
            />
        </div>
    );
}
