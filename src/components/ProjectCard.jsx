import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex bg-white p-4 rounded shadow-lg w-full">
      {/* Imagem / GIF do projeto */}
      <div className="w-2/3 p-4 flex justify-center">
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '60%', height: '400px' }}
        />
      </div>
    
      {/* Descrição do projeto com dangerouslySetInnerHTML */}
      <div className="w-1/3 p-4 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        <a href={project.link} className="hover:underline" style={{ color: 'white' }}>
          Código Fonte
          <p>
            <br />
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;