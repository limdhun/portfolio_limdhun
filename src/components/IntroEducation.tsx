import SectionFadeIn from "./SectionFadeIn";

export default function IntroEducation() {
  return (
    <SectionFadeIn>
        <div className="bg-white rounded-xl shadow p-6 w-full max-w-screen-lg mx-auto my-6 text-black">
        <h2 className="font-inter text-2xl font-bold mb-2 flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}icons/education.png`} alt="education" className="w-5 h-5" />
            <span>Education</span>
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>부경대학교 전자공학과 졸업(2019.03.04 ~ 2025.02.21)</li>
          <li>
              신세계아이앤씨 K-디지털트레이닝 풀스택 부트캠프 8차<br/>
              <span className="pl-6 block">
                  AI플랫폼을 활용한 (리테일)서비스 개발 과정(2024.12.30 ~ 2025.07.11)
              </span>
          </li>
        </ul>
      </div>
    </SectionFadeIn>
  );
}
