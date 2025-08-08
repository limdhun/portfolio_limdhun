import SectionFadeIn from "./SectionFadeIn";

export default function IntroContact() {
  return (
    <SectionFadeIn>
      <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto my-6 text-black">
        <h2 className="font-inter text-2xl font-bold mb-4 flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}icons/contact.png`} alt="contact" className="w-5 h-5" />
            Contact
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}icons/email.png`} alt="email" className="w-5 h-5" />
            <span>lmdnhn00@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}icons/github.png`} alt="github" className="w-5 h-5" />
            <a
              href="https://github.com/limdhun"
              className="text-blue-600 underline"
              target="_blank"
            >
              github.com/limdhun
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}icons/velog.jpg`} alt="velog" className="w-5 h-5 rounded-full" />
            <a
              href="https://velog.io/@limdhun"
              className="text-blue-600 underline"
              target="_blank"
            >
              velog.io/@limdhun
            </a>
          </li>
        </ul>
      </div>
    </SectionFadeIn>
  );
}
