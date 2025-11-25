import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/EderFIlipe.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("sobre");
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add(
            "bg-zinc-900",
            "py-4",
            "bg-opacity-80"
          );
          headerRef.current.classList.remove("py-8", "bg-opacity-50");
        } else {
          headerRef.current.classList.remove(
            "bg-zinc-900",
            "py-4",
            "bg-opacity-80"
          );
          headerRef.current.classList.add("py-8", "bg-opacity-50");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-dark-600 h-screen w-full" id="projetos">
      <header
        ref={headerRef}
        className="fixed w-full flex justify-between items-center p-8
        transition-all duration-700 ease-in-out bg-opacity-50"
      >
        <p className="text-green-500 font-bold text-lg">@EderFilipe</p>
        <nav className="flex gap-2 text-white">
          <a
            href="#sobre"
            className={`${activeLink === "sobre" && "text-green-500"}`}
            onClick={() => setActiveLink("sobre")}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className={`${activeLink === "projetos" && "text-green-500"}`}
            onClick={() => setActiveLink("projetos")}
          >
            Projetos
          </a>
        </nav>
      </header>
      <div className="h-full flex items-center justify-between px-8 gap-4 max-w-screen-xl mx-auto p-8">
        <div className="text-white">
          <h1 className="text-6xl font-bold">Eder Filipe</h1>
          <p className="text-2xl text-green-500">Desenvolvedor Front-End</p>

          <div className="flex gap-4 mt-8 text-zinc-400">
            <a href="https://www.linkedin.com/in/eder-filipe-nascimento-ara%C3%BAjo" className="flex items-center gap-2">
              <FaLinkedin size={24} />
              LinkedIn
            </a>

            <a href="https://github.com/EderFilipe" className="flex items-center gap-2">
              <FaGithub size={24} />
              GitHub
            </a>
          </div>
        </div>
        <div>
          <img src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
