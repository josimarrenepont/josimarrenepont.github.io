import React from 'react';
import clinic from '../assets/clinic.gif';
import errosGif from '../assets/erros.gif';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Separation Errors',
      description: 'Back-end: Java | Spring Boot | Front-end: React | TypeScript | Vite | PostgreSQL.<br />' +
                   'Projeto para controlar erros na separação de produtos na logística.',
      image: errosGif,
      link: 'https://github.com/josimarrenepont/separation-errors',
    },

    {
      title: 'Physiotherapy Clinic',
      description: 'Back-end: Java | Spring Boot | Front-end: React | TypeScript | Vite | PostgreSQL | Docker.<br />' +
                   'O plano foi elaborado visando registrar clientes e seus dependentes em uma clínica de fisioterapia, bem como gerenciar o controle interno dos pacientes.',
      image: clinic,
      link: 'https://github.com/josimarrenepont/physiotherapy-s-clinic',
    },

  ];

  return (
    <section id="projects" className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
