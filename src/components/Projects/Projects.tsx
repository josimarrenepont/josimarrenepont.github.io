import projeto2Gif from '../../assets/gifs/clinic.gif';
import projeto1Gif from '../../assets/gifs/erros.gif';
import projeto3Gif from '../../assets/gifs/garantia.jpg';
import './Projects.css';

const projects = [
  {
    title: 'Separation Errors',
    description: 'O projeto consiste em controlar os erros na separação dos produtos na logística, com a finalidade de gerenciar a movimentação dos itens na logística.',
    gif: projeto1Gif, // Usar a variável importada
    link: 'https://github.com/josimarrenepont/separation-errors',
  },
  {
    title: 'Physiotherapy Clinic',
    description: 'O plano foi elaborado visando registrar clientes e seus dependentes em uma clínica de fisioterapia, bem como gerenciar o controle interno dos pacientes da clinica.',
    gif: projeto2Gif, // Usar a variável importada
    link: 'https://github.com/josimarrenepont/physiotherapy-s-clinic',
  },
  {
    title: 'Guarantee',
    description: 'Projeto voltado ao gerenciamento de garantias e cadastro de produtos com problemas técnicos, permitindo o acompanhamento de status e registro de falhas.',
    gif: projeto3Gif,
    link: 'https://github.com/josimarrenepont/guarantee',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <p>
          <br />
      </p>
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-item">
            <h3>{project.title}</h3> {/* Título do projeto antes do GIF */}
            <img src={project.gif} alt={project.title} />
            <p className="project-description">{project.description}</p> {/* Adiciona a descrição */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
