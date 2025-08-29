import projeto2Gif from '../../assets/gifs/clinic.gif';
import projeto1Gif from '../../assets/gifs/erros.gif';
import projeto4Gif from '../../assets/gifs/games3.avif';
import projeto3Gif from '../../assets/gifs/garantia.jpg';
import projeto6Gif from '../../assets/gifs/kafka.png';
import projeto5Gif from '../../assets/gifs/pedido.jpg';
import './Projects.css';

const projects = [
  {
    title: 'Separation Errors',
    description: 'O projeto consiste em controlar os erros na separação dos produtos na logística, com a finalidade de gerenciar a movimentação dos itens na logística.',
    gif: projeto1Gif,
    link: 'https://github.com/josimarrenepont/separation-errors',
  },
  {
    title: 'Physiotherapy Clinic',
    description: 'O plano foi elaborado visando registrar clientes e seus dependentes em uma clínica de fisioterapia, bem como gerenciar o controle interno dos pacientes da clinica.',
    gif: projeto2Gif,
    link: 'https://github.com/josimarrenepont/physiotherapy-s-clinic',
  },
  {
    title: 'Guarantee',
    description: 'Projeto voltado ao gerenciamento de garantias e cadastro de produtos com problemas técnicos, permitindo o acompanhamento de status e registro de falhas.',
    gif: projeto3Gif,
    link: 'https://github.com/josimarrenepont/guarantee',
  },
  {
    title: 'Game Collection',
    description: 'Projeto ilustrar uma coleção de jogos, destacando suas pontuações e principais características, como gênero, ano de lançamento, plataformas disponíveis e descrições.',
    gif: projeto4Gif,
    link: 'https://github.com/josimarrenepont/dslist-backend',
  },
  {
    title: 'Gerenciamento de Pedidos',
    description: 'Este projeto é um sistema completo para gerenciar pedidos, controlar estoque e visualizar relatórios de vendas.',
    gif: projeto5Gif,
    link: 'https://github.com/josimarrenepont/workshop-springboot3-jpa',
  },
  {
    title: 'Microsserviços com Saga',
    description: 'Este projeto é uma implementação de um sistema de processamento de pedidos utilizando uma arquitetura de microsserviços, padrão de design Saga de Orquestração.',
    gif: projeto6Gif,
    link: 'https://github.com/josimarrenepont/microservices-saga-orchestrator',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
     <div className="section-title">
        <h2>Projetos</h2>
      </div>
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
