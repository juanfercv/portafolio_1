import React from 'react';
const ProjectsCard: React.FC = () => {
    const projects = [
        {
            id: 1,
            role: 'Practicante Full Stack Developer',
            company: 'LINKEARNET S.A, Yavirac',
            period: 'Enero 2024 - Enero 2026',
            hours: '1,440 horas acumuladas · 8-9 meses de prácticas preprofesionales',
            description:
                'Proyecto web full stack con Node.js, Express, Vue.js, PostgreSQL, MySQL y metodología Scrum.',
        },
    ];
    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto min-h-screen flex flex-col justify-center px-6 pl-20 md:pl-32 py-20">
                <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-slate-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{project.role}</h3>
                            <p className="text-blue-400 mb-2">{project.company}</p>
                            <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                            <p className="text-gray-300 mb-4">{project.hours}</p>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsCard;