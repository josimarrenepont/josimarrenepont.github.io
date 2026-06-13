import projeto7Gif from '../../assets/gifs/api_pgt.jpg';
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
    description: 'Controle de erros na separação de produtos na logística.',
    image: projeto1Gif,
    link: 'https://github.com/josimarrenepont/separation-errors',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Microservices with Kafka',
    description: 'Sistema com arquitetura de microsserviços e padrão Saga.',
    image: projeto6Gif,
    link: 'https://github.com/josimarrenepont/microservices-saga-orchestrator',
    tags: ['Java', 'Kafka', 'Docker'],
  },
  {
    title: 'Payment Service API',
    description: 'API de pagamento integrada ao Mercado Pago.',
    image: projeto7Gif,
    link: 'https://github.com/josimarrenepont/payment_mercadopago',
    tags: ['Java', 'Spring Boot', 'Mercado Pago'],
  },
  {
    title: 'Physiotherapy Clinic',
    description: 'Registro de clientes e dependentes em clínica de fisioterapia.',
    image: projeto2Gif,
    link: 'https://github.com/josimarrenepont/physiotherapy-s-clinic',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Guarantee',
    description: 'Gerenciamento de garantias e cadastro de produtos com problemas técnicos.',
    image: projeto3Gif,
    link: 'https://github.com/josimarrenepont/guarantee',
    tags: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'Game Collection',
    description: 'Coleção de jogos com pontuações, gênero, ano e plataformas.',
    image: projeto4Gif,
    link: 'https://github.com/josimarrenepont/dslist-backend',
    tags: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Order Management',
    description: 'Sistema para gerenciar pedidos, controlar estoque e relatórios.',
    image: projeto5Gif,
    link: 'https://github.com/josimarrenepont/workshop-springboot3-jpa',
    tags: ['Java', 'Spring Boot', 'JPA'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Ver Projeto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;