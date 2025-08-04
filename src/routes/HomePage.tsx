import ProjectCard from "../components/ProjectCard";
import Intro from "../components/Intro.tsx";

export default function HomePage() {
    const projects = [
        {
            thumbnail: "/images/capstone.png",
            title: "시각장애인을 위한 YOLOv5 기반 제품 인식 서비스",
            tags: ["DeepLearning", "ObjectDetection", "Python", "Java"],
            description: "부경대학교 전자공학과 캡스톤디자인 프로젝트",
            expandedContent: (
                <div>
                    <p>📅 <b>기간</b> : 2023.09 ~ 2024.06</p><br/>
                    <p>👤 <b>인원</b> : 3인</p><br/>
                    <p>🙋‍♂️ <b>담당 업무</b> : 모델 학습, 데이터셋 수집, APK 개발</p><br/>
                    <p>⚙️️ <b>기술 스택</b> : Java(APK 개발), Python(모델 학습)</p><br/>
                    <p>🏆<b>AWARD</b></p>
                    <ul className="list-disc list-inside ml-4">
                        <li>🥇 2024년도 1학기 LINC 3.0 캡스톤디자인 단과대학 경진대회 <b>대상</b> (2024.07.02)</li>
                        <li>🥈 2024학년도 정보융합대학 융합캡스톤디자인 경진대회 <b>최우수상</b> (2024.12.30)</li>
                        <li>🥉 2024년 전자공학전공 캡스톤디자인 경진대회 <b>우수상</b> (2024.07.04)</li>
                        <li>📜 제9회 대한임베디드공학회 ICT 대학생 논문경진대회 참여 (2024.07.01)</li>
                    </ul>
                    <br/>
                    <img src="/images/비전스낵화면.png"
                         alt="VisionSnack"
                         className="mt-2 rounded-lg border-2 border-black"/>


                    <br/>
                    <div className="mt-3">
                        🔗 <a href="https://github.com/limdhun/ObjectDetection_Before" target="_blank" className="text-blue-600 underline">Github</a>
                    </div>

                    <div className="mt-3">
                        🔗 <a href="https://www.youtube.com/shorts/7jk78GHIPYE" target="_blank" className="text-blue-600 underline">시연 영상</a>
                    </div>

                    <div className="mt-3">
                        🔗 <a href="/docs/시각장애인을 위한 YOLOv5 기반 제품 인식 시스템.pdf" target="_blank" className="text-blue-600 underline">논문</a>
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
                    단순히 객체가 인식되는 장면만 보여주기 식으로 구현하는 것을 목표하지 않고, 사용자 UX를 신경썼던 부분이 대회 심사위원 분들께 좋은 점수를 받았던 것 같습니다.  TTS 속도가 너무 빠르거나 느리진 않은지, 직접 눈을 감고 테스트했을 때 불편한 점은 없었는지 등에 대해 고민했습니다.
                    <br/><br/>
                    가장 좋은 평가를 받았던 부분은, <b>사용 대상자가 시각장애인인 것을 고려하여 촬영 버튼을 제거한 부분이었습니다.</b> 단순히 상품 명을 듣고싶다면 화면을 한 번만 탭, 알러지 정보까지 듣고싶다면 두 번 탭하도록 구현했다는 점에서 높은 점수를 받았습니다.
                    <br/><br/><br/><br/>
                    해당 프로젝트 진행 및 수상을 통해 프로그래밍에 대한 관심이 생겼고, 제가 본격적으로 개발자가 되기로 마음먹은 계기가 되었습니다😉
                    <br/><br/>

                </div>
            ),
        },
        {
            thumbnail: "/images/peeknpick.png",
            title: "바코드 기반 상품 정보 및 리뷰 확인 서비스 Peek&Pick",
            tags: ["React", "Spring Boot", "PostgreSQL", "ElasticSearch"],
            description: "신세계아이앤씨 K-Digital Training 8차수 프로젝트",
            expandedContent: (


        <div>
            <p>📅 <b>기간</b> : 2025/05/25 ~ 2025/07/11</p><br/>
            <p>👤 <b>인원</b> : 5인</p><br/>
            <p>🙋‍♂️ <b>담당 업무</b> : 편의점 상품 DB 크롤링, 공지사항 및 상품 검색/랭킹 페이지 구현, 최종 발표</p><br/>
            <p>⚙️️ <b>주요 기술 스택</b> : TypeScript, React, Java, Spring, PostgreSQL, ElasticSearch, AWS</p><br/>
            <img src="/images/기술스택.png" alt="기술스택" className="mt-2 rounded-lg"/>

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
            K-DT
            <br/><br/>
            짱짱

        </div>


            ),
        },
        {
            thumbnail: "/images/크아.jpg",
            title: '게임 "크레이지아케이드" 유저 정보 검색 사이트 크아인포',
            tags: ["React", "OpenAPI"],
            description: "넥슨 오픈API를 활용하여 게임 유저 정보와 공지사항을 조회할 수 있는 웹사이트...",
            expandedContent: (
                <div>
                    <p>º 넥슨 오픈API 활용</p>
                    <p>º 주요 기능:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>게임 유저 전적 및 프로필 조회</li>
                        <li>이벤트 및 공지사항 실시간 크롤링</li>
                        <li>반응형 UI 기반 간편 검색</li>
                    </ul>
                    <p className="mt-2">🔗 <a href="https://cra-info.example.com" target="_blank" className="text-blue-600 underline">프로젝트 페이지</a></p>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-8 space-y-6">
            <h1 className="text-3xl font-bold text-center mb-10">📁 Portfolio Projects</h1>
            <Intro />
            <div className="space-y-6 max-w-3xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
