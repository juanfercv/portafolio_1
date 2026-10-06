import React from 'react';
import { FaCode } from 'react-icons/fa';
import ProjectCard, { type ProjectItem } from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Proyecto Full Stack Developer',
      description:
        'Proyecto web full stack con Node.js, Express, Vue.js, PostgreSQL, MySQL y metodología Scrum.',
      img: '',
      technologies: ['Node.js', 'Express', 'Vue.js', 'PostgreSQL', 'MySQL', 'Scrum'],
      link: 'https://github.com/juanfercv/portafolio_1.git',
    },
  ];

  return (
    <section id="proyectos">
      <div className="flex flex-col px-6 py-16 pl-20 md:py-20 md:pl-32">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-12 flex items-center gap-4 text-4xl font-light tracking-wide text-white md:text-5xl">
            <FaCode aria-hidden="true" className="shrink-0 text-4xl md:text-5xl" />
            Proyectos
          </h2>

          <div className="space-y-12 md:space-y-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
