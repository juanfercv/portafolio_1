import React from 'react';

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  img: string;
  technologies: string[];
  link: string;
};

type ProjectCardProps = {
  project: ProjectItem;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="grid grid-cols-1 items-center gap-7 md:grid-cols-[1.15fr_1fr] md:gap-10">
    <div className="aspect-[1.85/1] overflow-hidden rounded-2xl border-[5px] border-sky-400 bg-[#d9d9d9] shadow-[0_0_0_1px_rgba(56,189,248,0.12)]">
      {project.img ? (
        <img
          src={project.img}
          alt={`Vista previa de ${project.title}`}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`Imagen de ${project.title} próximamente`}
          className="h-full w-full bg-[#d9d9d9]"
        />
      )}
    </div>

    <div className="min-w-0">
      <h3 className="mb-5 text-2xl font-normal leading-tight text-sky-400 md:text-3xl">
        {project.title}
      </h3>
      <p className="mb-6 text-base leading-relaxed text-blue-200 md:text-xl">
        {project.description}
      </p>

      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Tecnologías">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-sky-400/50 bg-slate-800/70 px-3 py-1 text-sm text-slate-200"
          >
            {technology}
          </li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-sky-400 px-5 py-2 text-sm font-medium text-sky-300 transition-colors hover:bg-sky-400 hover:text-slate-950"
        >
          Ver proyecto
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;
