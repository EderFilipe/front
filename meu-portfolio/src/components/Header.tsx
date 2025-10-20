import { useEffect, useRef, useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("sobre");
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if(headerRef.current) {
        if(window.scrollY > 0) {
          headerRef.current.classList.add("bg-zinc-900", "py-4", "bg-opacity-80");
          headerRef.current.classList.remove("py-8", "bg-opacity-50");
        } else {
          headerRef.current.classList.remove("bg-zinc-900", "py-4", "bg-opacity-80");
          headerRef.current.classList.add("py-8", "bg-opacity-50");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-zinc-800 h-screen w-full">
      <header
        ref={headerRef}
        className="fixed w-full flex justify-between items-center p-8
        transition-all duration-700 ease-in-out bg-opacity-50"
      >
        <p className="text-lime-400 font-bold text-lg">@EderFilipe</p>
        <nav className="flex gap-2 text-white">
          <a
            href="#sobre"
            className={`${activeLink === "sobre" && "text-lime-400"}`}
            onClick={() => setActiveLink("sobre")}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className={`${activeLink === "projetos" && "text-lime-400"}`}
            onClick={() => setActiveLink("projetos")}
          >
            Projetos
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
