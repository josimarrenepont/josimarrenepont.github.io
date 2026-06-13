import minhaFoto from '../../assets/images/Josimar.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Olá, eu sou o</h1>
          <h2>
            Josimar Renepont
            <span>Desenvolvedor Back-End</span>
          </h2>
          <p>
            Especializado em Java, Spring Boot e microsserviços. Criando soluções 
            robustas, escaláveis e com foco em performance.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Entrar em contato
            </a>
            <a href="#projects" className="btn-secondary">
              Ver projetos
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={minhaFoto} alt="Josimar Renepont" />
        </div>
      </div>
    </section>
  );
};

export default Hero;