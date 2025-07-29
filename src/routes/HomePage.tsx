import ProjectCard from "../components/ProjectCard";
import Intro from "../components/Intro.tsx";

export default function HomePage() {
    const projects = [
        {
            thumbnail: "https://via.placeholder.com/150",
            title: "시각장애인을 위한 YOLOv5 기반 제품 인식 서비스\n",
            description: "부경대학교 캡스톤디자인 대상최우수상우수상 ㅇㅇ",
            link: "/projects/capstone",
        },
        {
            thumbnail: "https://via.placeholder.com/150",
            title: "편의점 상품 검색/리뷰 서비스 Peek&Pick",
            description: "신세계아이앤씨 K-디지털트레이닝 8차수 프로젝트 2025/05/25 ~ 2025/07/11",
            link: "/projects/peeknpick",
        },
        {
            thumbnail: "https://via.placeholder.com/150",
            title: '게임 "크레이지아케이드" 유저 정보 검색 사이트 크아인포',
            description: "넥슨 오픈API를 활용한 유저 정보 검색 및 공지사항/이벤트 정리한 웹사이트",
            link: "/projects/cainfo",
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
