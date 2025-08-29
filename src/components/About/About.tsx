import minhaFoto from '../../assets/images/Josimar.jpg';
import './About.css';


const About = () => {
  
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>Sobre Mim</h2>
        <img src={minhaFoto} alt="Minha Foto" className="about-photo" />
        <p>
          Sou desenvolvedor Back-End especializado em Java e Spring Boot, com experiência em projetos de integração e desenvolvimento de sistemas corporativos. Foco em criar soluções robustas e escaláveis que atendem às necessidades dos clientes, otimizando processos e aumentando a eficiência. Minhas habilidades incluem bancos de dados relacionais como PostgreSQL e a implementação de APIs RESTful. Estou sempre em busca de novas tecnologias e desafios que me permitam crescer e contribuir para o sucesso das equipes.
        </p>
      </div>
    </section>
  );
};

export default About;