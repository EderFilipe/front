import ProjectCard from "./ProjectCard";
import project1 from "../../../assets/aamdias_movie_streaming_platform_react_john_travolta_web_develo_c9ada2f7-8e03-4a17-8611-6041939fc03a 1.png";

function ProjectList() {
  return (
    <section className="bg-dark-600" id="projetos">
      <div className="max-w-screen-xl mx-auto p-8 text-dark-900">
        <h1 className="text-center text-2xl mb-4 font-bold text-white">Projetos</h1>
        <div
          className="grid p-8 gap-4 grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,334px)]"
        >
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={["JavaScript", "Tailwind", "React"]}
            image={project1}
            slug=""
          />
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={["JavaScript", "Tailwind", "React"]}
            image={project1}
            slug=""
          />
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={["JavaScript", "Tailwind", "React"]}
            image={project1}
            slug=""
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
