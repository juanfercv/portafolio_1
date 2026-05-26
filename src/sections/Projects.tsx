import React from 'react';
import ProjectsCard from '../components/ProjectCard';

const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="min-h-screen flex flex-col justify-center px-6 pl-20 md:pl-32 py-20 ">
        <ProjectsCard />
        </section>
    );
}

export default Projects;