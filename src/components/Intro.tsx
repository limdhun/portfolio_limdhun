import SectionFadeIn from "./SectionFadeIn";

export default function Intro() {
    return (
        <SectionFadeIn>
            <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto my-6">
                <h2 className="text-2xl font-bold mb-2">🐔️ 자기소개</h2>
                <p className="text-gray-700">
                    안녕하세요, 무슨무슨 강동훈입니다. <br />
                    이것은 포트폴리오 페이지 첫 구성 틀입니다.
                </p>
            </div>
        </SectionFadeIn>
    );
}