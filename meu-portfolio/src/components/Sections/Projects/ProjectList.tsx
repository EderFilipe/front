import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../../../services/api";

type ProjectList = {
  metadata: {
    descricao_do_projeto: string;
    imagem_do_projeto: {
      url: string;
    };
    tags: string;
  };
  slug: string;
  title: string;
};

function ProjectList() {
  const [projects, setProjects] = useState<ProjectList[]>([]);
  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <section className="bg-dark-600" id="projetos">
      <div className="max-w-screen-xl mx-auto p-8 text-dark-900">
        <h1 className="text-center text-2xl mb-4 font-bold text-white">
          Projetos
        </h1>
        <div className="grid p-8 gap-4 grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,292px)]"
        >
          {projects?.map((project) => (
            <ProjectCard
              key={project.slug}
              projectName={project.title}
              tags={project.metadata.tags.split(",").map((tag) => tag.trim())}
              image={project.metadata.imagem_do_projeto.url}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
