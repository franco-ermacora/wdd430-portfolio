interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-6 border border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
      </div>
      <div>
        <p className="text-sm text-slate-500 mb-3">
          <strong className="text-slate-700 font-semibold">Technologies:</strong> {technologies.join(', ')}
        </p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline"
          >
            View Project &rarr;
          </a>
        )}
      </div>
    </article>
  );
}