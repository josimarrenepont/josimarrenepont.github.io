import minhaFoto from '../../assets/images/Josimar.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Olá, eu sou o</div>
          <h1>Josimar Renepont</h1>
          <h2><span>Desenvolvedor Back-End</span></h2>
          <div className="hero-code">
            {`// Especializado em Java, Spring Boot e microsserviços`}
          </div>
          <p>Criando soluções robustas, escaláveis e com foco em performance.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Entrar em contato
              <span className="arrow">→</span>
            </a>
            <a href="#projects" className="btn-secondary">
              Ver projetos
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={minhaFoto} alt="Josimar Renepont" />
          <div className="hero-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;