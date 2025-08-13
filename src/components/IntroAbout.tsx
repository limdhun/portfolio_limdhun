import SectionFadeIn from "./SectionFadeIn";

export default function IntroAbout() {
    return (
        <SectionFadeIn>

            <div className="bg-white rounded-xl shadow p-6 w-full max-w-screen-lg mx-auto my-6 text-black">
                <h2 className="font-inter text-2xl font-bold mb-3 flex items-center gap-2">
                    <img
                        src={`${import.meta.env.BASE_URL}icons/developer.png`}
                        alt="aboutme icon"
                        className="w-5 h-5"
                    />
                    <span>About Me</span>
                </h2>
                <p className="font-nanum text-gray-800 text-lg leading-relaxed">
                    안녕하세요. 더 나은 코드를 끊임없이 탐구하는 풀스택 개발자 <b>강동훈</b>입니다.<br /><br />
                    저는 문제를 만나면 단순히 고치는 데서 멈추지 않고, 원인을 끝까지 파고들어 재발하지 않도록 개선하는 걸 좋아합니다.
                    개발 과정에서 구조와 유지보수를 항상 염두에 두고, 작은 UI 정렬부터 배포 환경 설정까지 세심하게 챙깁니다.
                    새로운 기술을 접하면 직접 적용해보고, 더 효율적인 방법을 찾기 위해 실험을 멈추지 않습니다.<br /><br />
                    동료와 함께 목표를 향해 나아가는 협업의 즐거움을 알고, 함께 성장하는 환경을 만들고자 노력합니다.
                    저에게 개발은 단순한 일이 아니라, 계속 배우고 발전하는 과정 그 자체입니다.
                </p>
            </div>
        </SectionFadeIn>
    );
}
