// src/pages/HomePage.tsx
import ProjectCard from "../components/ProjectCard";
import IntroAbout from "../components/IntroAbout";
import IntroEducation from "../components/IntroEducation";
import IntroSkills from "../components/IntroSkills";
import IntroContact from "../components/IntroContact";
import OtherActivity from "../components/OtherActivity";

export default function HomePage() {
    const projects = [
        {
            thumbnail: `${import.meta.env.BASE_URL}images/capstone.png`,
            title: "시각장애인을 위한 YOLOv5 기반 제품 인식 서비스",
            tags: ["DeepLearning", "ObjectDetection", "Python", "Java"],
            description: "부경대학교 전자공학과 캡스톤디자인 프로젝트",
            expandedContent: (
                <div>
                    <p>📅 <b>기간</b> : 2023.09 ~ 2024.06</p><br/>
                    <p>👤 <b>인원</b> : 3인</p><br/>
                    <p>🙋‍♂️ <b>담당 업무</b> : 모델 학습, 데이터셋 수집, APK 개발, 발표 후 Q&amp;A</p><br/>
                    <p>⚙️️ <b>기술 스택</b> : Java(APK 개발), Python(모델 학습)</p><br/>
                    <p>🏆<b>AWARD</b></p>
                    <ul className="list-disc list-inside ml-4">
                        <li>🥇 2024년도 1학기 LINC 3.0 캡스톤디자인 단과대학 경진대회 <b>대상</b> (2024.07.02)</li>
                        <li>🥈 2024학년도 정보융합대학 융합캡스톤디자인 경진대회 <b>최우수상</b> (2024.12.30)</li>
                        <li>🥉 2024년 전자공학전공 캡스톤디자인 경진대회 <b>우수상</b> (2024.07.04)</li>
                        <li>📜 제9회 대한임베디드공학회 ICT 대학생 논문경진대회 참여 (2024.07.01)</li>
                    </ul>
                    <br/>
                    <img
                        src={`${import.meta.env.BASE_URL}images/비전스낵화면.png`}
                        alt="VisionSnack"
                        className="mt-2 rounded-lg border-2 border-black"
                    />
                    <br/>
                    <div className="mt-3">
                        🔗 <a href="https://github.com/limdhun/VisionSnack" target="_blank" className="text-blue-600 underline">Github</a>
                    </div>
                    <div className="mt-3">
                        🔗 <a href="https://www.youtube.com/shorts/7jk78GHIPYE" target="_blank" className="text-blue-600 underline">시연 영상</a>
                    </div>
                    <div className="mt-3">
                        🔗 <a href={`${import.meta.env.BASE_URL}docs/시각장애인을 위한 YOLOv5 기반 제품 인식 시스템.pdf`} target="_blank" className="text-blue-600 underline">논문</a>
                    </div>
                    <br/><br/>
                    <p>🗒️<b>회고</b></p>
                    전공 지식을 활용할 만한 주제를 정하다, 연구실에서 짧게 배운 Image Classification 기술이 떠올라 시작한 프로젝트입니다. Python 기초 문법 정도만 알고 있는 상태에서 무작정 시작했고, 프로젝트 막바지에 APK 구현을 위해 Java를 처음으로 접하게 되었습니다.
                    <br/><br/>
                    화면 안에 여러 물체가 존재하는 상황을 고려하여, Image Classification이 아닌, <b>ObjectDetection</b>기술이 더 적합할것이라 판단하여 프로젝트 중기에 구현 모델을 변경했습니다.
                    <br/><br/>
                    과자 포장지 이미지가 있는 AI-Hub의 공공 데이터셋은 실제 스마트폰 카메라로 촬영한 것이 아닌, 제조/유통 과정에서 촬영한 형태의 이미지가 제공되므로, 해당 데이터셋을 사용하여 학습한 모델은 낮은 성능을 보였습니다.
                    <br/>
                    따라서, Roboflow 플랫폼을 사용하여 데이터 수집 및 전처리를 진행하였고, 부족한 데이터셋은 근처 편의점에 있는 과자를 직접 촬영하여 바운딩 박스를 지정하는 식으로 구축했습니다.
                    <br/><br/>
                    단순히 객체가 인식되는 장면만 보여주기 식으로 구현하는 것을 목표하지 않고, 사용자 UX를 신경썼던 부분이 대회 심사위원 분들께 좋은 점수를 받았던 것 같습니다. TTS 속도가 너무 빠르거나 느리진 않은지, 직접 눈을 감고 테스트했을 때 불편한 점은 없었는지 등에 대해 고민했습니다.
                    <br/><br/>
                    가장 좋은 평가를 받았던 부분은, <b>사용 대상자가 시각장애인인 것을 고려하여 촬영 버튼을 제거한 부분이었습니다.</b> 단순히 상품 명을 듣고싶다면 화면을 한 번만 탭, 알러지 정보까지 듣고싶다면 두 번 탭하도록 구현했다는 점에서 높은 점수를 받았습니다.
                    <br/><br/><br/><br/>
                    해당 프로젝트 진행 및 수상을 통해 프로그래밍에 대한 관심이 생겼고, 제가 본격적으로 개발자가 되기로 마음먹은 계기가 되었습니다😉
                    <br/><br/>
                </div>
            ),
        },
        {
            thumbnail: `${import.meta.env.BASE_URL}images/peeknpick.png`,
            title: "바코드 기반 상품 정보 및 리뷰 확인 서비스 Peek&Pick",
            tags: ["React", "Spring Boot", "PostgreSQL", "ElasticSearch"],
            description: "신세계아이앤씨 K-Digital Training 8차수 프로젝트",
            expandedContent: (
                <div>
                    <p>📅 <b>기간</b> : 2025/05/25 ~ 2025/07/11</p><br/>
                    <p>👤 <b>인원</b> : 5인</p><br/>
                    <p>🙋‍♂️ <b>담당 업무</b> : 편의점 상품 DB 크롤링, 공지사항 및 상품 검색/랭킹 페이지 구현, 최종 발표</p><br/>
                    <p>⚙️️ <b>주요 기술 스택</b> : TypeScript, React, Java, Spring, PostgreSQL, ElasticSearch, AWS</p><br/>
                    <img src={`${import.meta.env.BASE_URL}images/기술스택.png`} alt="technology stack" className="mt-2 rounded-lg" />
                    <img src={`${import.meta.env.BASE_URL}images/상품검색.png`} alt="search" className="mt-2 rounded-lg" />
                    <img src={`${import.meta.env.BASE_URL}images/상품랭킹.png`} alt="ranking" className="mt-2 rounded-lg" />
                    <img src={`${import.meta.env.BASE_URL}images/상품상세.png`} alt="detail" className="mt-2 rounded-lg" />
                    <br/>
                    <div className="mt-3">
                        🔗 <a href="https://github.com/Peek-Pick/peek-pick-frontend" target="_blank" className="text-blue-600 underline">Github - FrontEnd</a>
                    </div>
                    <div className="mt-3">
                        🔗 <a href="https://github.com/Peek-Pick/peek-pick-backend" target="_blank" className="text-blue-600 underline">Github - BackEnd</a>
                    </div>
                    <div className="mt-3">
                        🔗 <a href="https://www.youtube.com/watch?v=jMc5VIBdmTU" target="_blank" className="text-blue-600 underline">관리자 화면 시연 영상</a>
                    </div>
                    <div className="mt-3">
                        🔗 <a href="https://www.youtube.com/watch?v=p_8_L8ORM1Y" target="_blank" className="text-blue-600 underline">사용자 화면 시연 영상</a>
                    </div>
                    <br/><br/>
                    <p>🗒️<b>회고</b></p>
                    4개월간 프로그래밍 교육을 진행한 후 5인 조를 만들어 시작한 프로젝트입니다. 사용자 페르소나를 <b>외국인으로 설정하여</b>, 상품 검색 및 정보 제공 기능이 다국어로 지원할 수 있도록 구현했습니다.
                    <br/><br/>
                    상품 DB 구축은 CU 홈페이지에 존재하는 상품 정보 페이지를 <b>크롤링하여</b> 상품명, 상세 정보, 카테고리, 이미지를 저장했습니다. 또한, 이미지 파일 이름이 바코드 번호인 것을 이용하여 이미지 링크와 바코드 번호를 추출할 수 있었습니다.
                    <br/><br/>
                    영양 성분과 알러지 정보는 공공데이터포털에서 제공하는 <b>"HACCP 제품이미지 및 포장지표기정보"</b> OpenAPI를 통해 얻을 수 있었습니다.
                    <br/><br/>
                    CU 크롤링 데이터와 OpenAPI 데이터를 비교하여, 같은 바코드 번호를 가진 상품이 존재한다면 CU 크롤링 데이터 테이블에 영양 성분 및 알러지 정보 컬럼을 추가하여 OpenAPI에서 얻은 정보를 삽입하도록 했습니다.
                    <br/><br/>
                    이후 OpenAI 및 DeepL API를 사용하여 한국어로 구축한 상품 데이터를 다른 나라의 언어로 변환하여 <b>언어별 상품 정보 테이블</b>을 구축했습니다. 상품명 및 상세 정보는 고유명사 번역 문제로 인해, 신뢰도가 높은 ChatGPT(OpenAI API)를 사용하였고, 알러지 정보/영양 성분 등 단순 단어 나열 데이터는 DeepL API를 사용하여 번역함으로써 OpenAI 크레딧을 절약할 수 있었습니다.
                    <br/><br/>
                    <b>ElasticSearch</b>를 도입하여 검색 페이지를 구현했으나, 상품 수가 9,707개로 적은 편이라 속도 면에서 큰 개선은 없었습니다. 그러나, <b>edge_ngram</b> 분석기를 적용한 후 가중치를 수정하며 테스트함으로써 검색 정확도를 늘릴 수 있었습니다.
                    <br/><br/>
                    개발 중 발생했던 트러블 슈팅 중 하나는, ElasticSearch Bean 생성 실패 오류였습니다. <b>Spring 환경 변수 세팅 이전에</b> ElasticsearchAutoConfiguration이 실행되면서, Bean 생성에 필요한 환경변수가 로딩되지 않은 상태에서 Bean 생성을 시도하여 오류가 발생하는 문제가 있었습니다. 이를 해결하기 위해, <b>spring.factories</b> 파일에 환경변수 세팅을 하는 .java파일을 먼저 실행하도록 세팅하여 서버 실행 초기에 환경변수 세팅을 완료할 수 있었습니다.
                    <br/><br/>
                    <br/><br/>
                    단순 개발에서 그치는 것이 아니라, 화면 설계서, 요구사항 정의서, API 명세서, 메뉴트리 등 실제 기업에서 사용하는 설계 기법들을 체험할 수 있었습니다. 또한, 조원들과 함께 <b>Git을 사용한 형상관리</b>를 경험할 수 있었던 귀중한 시간이었습니다.
                </div>
            ),
        },
    ];

    return (
        // 레이아웃(SidebarLayout)에서 좌측 바 폭만큼 margin-left가 이미 들어가 있으므로,
        // 여기선 가로 폭을 제한하지 않고 가용 폭을 100% 사용.
        <div className="w-full">
            <main className="space-y-6">
                <section id="about" className="scroll-mt-24">
                    <IntroAbout />
                </section>

                <section id="education" className="scroll-mt-24">
                    <IntroEducation />
                </section>

                <section id="skills" className="scroll-mt-24">
                    <IntroSkills />
                </section>

                <section id="contact" className="scroll-mt-24">
                    <IntroContact />
                </section>


                <section id="projects" className="scroll-mt-24">
                    <div className="bg-white rounded-xl shadow p-6 w-full max-w-screen-lg mx-auto my-6 text-black">
                        <h2 className="font-inter text-2xl font-bold mb-4 text-black flex items-center gap-2">
                            <img
                                src={`${import.meta.env.BASE_URL}icons/projects.png`}
                                alt="projects"
                                className="w-5 h-5"
                            />
                            Projects
                        </h2>

                        <div className="space-y-6">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </section>


                <section id="other-activity" className="scroll-mt-24">
                    <OtherActivity />
                </section>
            </main>
        </div>
    );
}
