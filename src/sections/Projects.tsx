// src/sections/Projects.tsx
import React from 'react';
import ProjectCard, { type ProjectItem } from '../components/ProjectCard';

const Projects: React.FC = () => {
    const projects: ProjectItem[] = [
        {
            id: 1,
            title: 'Practicante Full Stack Developer',
            description:
                'Proyecto web full stack con Node.js, Express, Vue.js, PostgreSQL, MySQL y metodología Scrum.',
                img: '',
            technologies: ['Node.js', 'Express', 'Vue.js', 'PostgreSQL', 'MySQL', 'Scrum'],
            link: '',
        },
    ];

    return (
        <section id="Proyectos">
            <div className="min-h-screen flex flex-col justify-center px-6 pl-20 md:pl-32 py-20 ">
                <div className="max-w-5xl w-full mx-auto">


                    {/* ── Proyectos ── */}

                    <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-wide">
                        Proyectos
                    </h2>

                    <div className="ml-4 md:ml-6">
                        <div className="border-l border-slate-600">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>

                        <div className="relative h-16 rounded-bl-2xl border-l border-b border-slate-600">
                            <span className="absolute right-0 bottom-0 translate-y-1/2 whitespace-nowrap rounded-full border border-sky-400/60 bg-[#0f172a] px-4 sm:px-8 py-2 text-sm sm:text-base font-medium text-sky-400">
                                Mi camino continúa
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
