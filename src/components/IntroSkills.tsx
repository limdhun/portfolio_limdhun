import SectionFadeIn from "./SectionFadeIn";

export default function IntroSkills() {
    return (
        <SectionFadeIn>
            <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto my-6 text-black space-y-6">
                <h2 className="font-inter text-2xl font-bold flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}icons/skills.png`} alt="skills" className="w-5 h-5" />
                    <span>Skills</span>
                </h2>

                {/* Language */}
                <section>
                    <h3 className="text-xl font-semibold mb-2">Language</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Java</li>
                        <li>JavaScript / TypeScript</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>MATLAB</li>
                    </ul>
                </section>

                <hr className="border-t border-gray-300 my-4" />

                {/* Backend */}
                <section>
                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Spring Framework / Spring Boot</li>
                        <li>MySQL / MariaDB / PostgreSQL</li>
                        <li>AWS (EC2, S3 등 기본 활용)</li>
                    </ul>
                </section>

                <hr className="border-t border-gray-300 my-4" />

                {/* Frontend */}
                <section>
                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>HTML5, TailwindCSS</li>
                        <li>React, Next.js(+Vercel)</li>
                    </ul>
                </section>

                <hr className="border-t border-gray-300 my-4" />

                {/* Tools */}
                <section>
                    <h3 className="text-xl font-semibold mb-2">Tools</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>GitHub, Notion, Figma</li>
                        <li>IntelliJ (Ultimate) / WebStorm, VSCode</li>
                        <li>Eclipse, Spring Tool Suite</li>
                        <li>Postman, Talend API Tester</li>
                    </ul>
                </section>
            </div>
        </SectionFadeIn>
    );
}
