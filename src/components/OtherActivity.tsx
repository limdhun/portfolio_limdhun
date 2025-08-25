// src/components/OtherActivity.tsx
import SectionFadeIn from "./SectionFadeIn";

export default function OtherActivity() {
    return (
        <SectionFadeIn>
            <div className="bg-white rounded-xl shadow p-6 w-full max-w-screen-lg mx-auto my-6 text-black">
                <h2 className="font-inter text-2xl font-bold mb-4 text-black flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}icons/other.png`} alt="other activity" className="w-5 h-5" />
                    Other Activity
                </h2>

                {/* ⬇︎ NEW: 각 활동 블록 사이 간격 */}
                <div className="space-y-4 sm:space-y-5">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="sm:w-1/3 text-gray-600 text-sm">
                            2023.03.27 ~ 2024.12.29 <br />
                            부경대학교 전자공학과<br/>CSL(통신시스템연구실)<br/>
                            지도교수 : 임창헌
                        </div>
                        <div className="sm:w-2/3">
                            <p className="font-semibold">Spectrum Sensing 연구 활동</p>

                            <ul className="list-disc list-inside text-gray-700 text-sm">
                                <li>무선 주파수 대역에 사용 중인 채널이 있는지 감지하는 기술</li>
                                <li>스펙트럼 센싱 기술 MATLAB 시뮬레이션</li>
                                <li>Energy Detection 기반 Cooperative Spectrum Sensing 연구</li>
                                <li>RNN / LSTM 모델 기반 스펙트럼 센싱 연구</li>
                            </ul>
                            <div className="mt-3 text-xm">
                                🔗 <a href={`${import.meta.env.BASE_URL}docs/An_Optimal_Receiver_for_the_Fusion_Center_in_Cooperative_Spectrum_Sensing.pdf`} target="_blank" className="text-blue-600 underline">에너지 검파 기반 협력 스펙트럼 센싱 기술 논문</a>
                            </div>
                            <p className="text-gray-700 text-sm">25.08.20 J-KICS(한국통신학회 논문지) 게재 승인 (추후 게재 예정)</p>

                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="sm:w-1/3 text-gray-600 text-sm">
                            2023.07.21 ~ 2024.01.18 <br />
                            부경대학교 학습동아리 수상
                        </div>
                        <div className="sm:w-2/3">
                            <p className="font-semibold">2023학년도 「부경학습동아리」 우수성과팀 선발</p>
                            <ul className="list-disc list-inside text-gray-700 text-sm">
                                <li>과학기술정보통신부 ICT 표준 챌린지 참여</li>
                                <li>AI(데이터 전처리 및 Object Detection) 스터디/세미나 진행</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="sm:w-1/3 text-gray-600 text-sm">
                            2024.08.07 ~ 2025.01.31 <br />
                            부경대학교 또래상담자 활동
                        </div>
                        <div className="sm:w-2/3">
                            <p className="font-semibold">편입, 전과, 복학생의 적응조력 프로젝트 또래상담</p>
                            <ul className="list-disc list-inside text-gray-700 text-sm">
                                <li>주 1회마다 2명의 상담/멘토링 활동 수행</li>
                                <li>앙성교육 프로그램 및 주 1회 정기적 슈퍼비전 이수</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="sm:w-1/3 text-gray-600 text-sm">
                            2024.10.01 ~ 2024.10.28 <br />
                            DATA·AI 분석 경진대회
                        </div>
                        <div className="sm:w-2/3">
                            <p className="font-semibold">2024 한국과학기술정보연구원(KISTI)<br/>DATA·AI 분석 경진대회 참여</p>
                            <ul className="list-disc list-inside text-gray-700 text-sm">
                                <li>김(Seaweed) 이미지 이물질 검출 및 품질 분류 AI 모델 개발</li>
                                <li>YOLOv8, Cascade RCNN with Swin Transformer 사용</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="sm:w-1/3 text-gray-600 text-sm">
                            2024.11.06 ~ 2024.11.07 <br />
                            사이버보안 콘퍼런스
                        </div>
                        <div className="sm:w-2/3">
                            <p className="font-semibold">2024 부산 사이버보안 콘퍼런스</p>
                            <ul className="list-disc list-inside text-gray-700 text-sm">
                                <li>사이버보안 강의 수료</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ⬆︎ NEW */}
            </div>
        </SectionFadeIn>
    );
}
