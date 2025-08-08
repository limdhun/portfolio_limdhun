import SectionFadeIn from "./SectionFadeIn";

export default function IntroAbout() {
    return (
        <SectionFadeIn>
            <div className="max-w-4xl mx-auto my-6">
                <div className="relative w-full">
                    <img
                        src={`${import.meta.env.BASE_URL}images/IntroAboutShape.png`}
                        alt="aboutme"
                        className="w-full h-auto object-contain select-none pointer-events-none"
                    />
                    <div className="absolute inset-0">
                        <div className="absolute left-[12%] right-[12%] top-[10%] bottom-[10%] flex flex-col">
                            <h2 className="font-inter text-black text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-2">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <img
                                    src={`${import.meta.env.BASE_URL}icons/developer.png`}
                                    alt="aboutme icon"
                                    className="w-6 h-6"
                                />
                                About Me
                            </h2>
                            <p className="font-nanum text-black text-lg sm:text-2xl leading-relaxed">
                                안녕하세요. 더 나은 코드를 끊임없이 탐구하는 풀스택 개발자 <b>강동훈</b>입니다.<br /><br />
                                저는 문제를 만나면 단순히 고치는 데서 멈추지 않고, 원인을 끝까지 파고들어 재발하지 않도록 개선하는 걸 좋아합니다.
                                개발 과정에서 구조와 유지보수를 항상 염두에 두고, 작은 UI 정렬부터 배포 환경 설정까지 세심하게 챙깁니다.
                                새로운 기술을 접하면 직접 적용해보고, 더 효율적인 방법을 찾기 위해 실험을 멈추지 않습니다.<br /><br />
                                동료와 함께 목표를 향해 나아가는 협업의 즐거움을 알고, 함께 성장하는 환경을 만들고자 노력합니다.
                                저에게 개발은 단순한 일이 아니라, 계속 배우고 발전하는 과정 그 자체입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionFadeIn>
    );
}
