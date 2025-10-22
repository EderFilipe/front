type ProjectCardProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
};

function ProjectCard({ projectName, tags, slug, image }: ProjectCardProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden max-w-xs bg-zinc-900">
      <img src={image} alt="" className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-zinc-100 text-xl font-bold">{projectName}</h2>
        <div className="flex flex-wrap mt-2 gap-0.5">
          {tags}
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-700 text-zinc-100 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={`/${slug}`} className="bg-lime-400 text-zinc-950 mt-4 px-4 py-2 rounded-md w-full block text-center">
          Ver mais detalhes
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
