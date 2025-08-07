import SectionFadeIn from "./SectionFadeIn";

export default function IntroAbout() {
  return (
    <SectionFadeIn>
      <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto my-6 text-black">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <img src="/icons/developer.png" alt="email" className="w-5 h-5" />
            About Me</h2>
        <p className="text-gray-700">
          안녕하세요, 풀스택 개발자 강동훈입니다. <br />
          이것은 포트폴리오 페이지입니다.
        </p>
      </div>
    </SectionFadeIn>
  );
}
