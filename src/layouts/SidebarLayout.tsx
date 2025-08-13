import type {ReactNode} from "react";
import TocSidebar from "../components/TocSidebar";

const SIDEBAR_WIDTH = 192; // 왼쪽 바 고정 폭 (20% 줄인 폭)

export default function SidebarLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#FAF8F5] to-[#FFF8DC]">
            {/* 왼쪽 고정 바 */}
            <TocSidebar />

            {/* 오른쪽 본문: 바 폭만큼 항상 여백 확보 (본문은 절대 흔들리지 않음) */}
            <div className="px-8 pb-8" style={{ marginLeft: SIDEBAR_WIDTH }}>
                {children}
            </div>
        </div>
    );
}
