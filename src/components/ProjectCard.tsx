import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

type ProjectCardProps = {
    thumbnail: string;
    title: string;
    description: string;
    link: string;
};

export default function ProjectCard({
                                        thumbnail,
                                        title,
                                        description,
                                        link,
                                    }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            onClick={() => navigate(link)}
            className={`cursor-pointer transition-all duration-700 ease-out transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } bg-white rounded-xl shadow-md p-4 flex gap-4 items-center hover:shadow-lg`}
        >
            <img
                src={thumbnail}
                alt={title}
                className="w-24 h-24 object-cover rounded-lg"
            />
            <div>
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}
