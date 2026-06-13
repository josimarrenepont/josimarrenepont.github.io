import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>Sobre mim</h2>
          <p>
            Desenvolvedor Back-End especializado em criar sistemas robustos, escaláveis 
            e com foco em performance. Tenho sólida experiência em projetos corporativos, 
            utilizando tecnologias modernas como Java, Spring Boot, microsserviços e APIs RESTful.
          </p>
          <p>
            Sou apaixonado por arquitetura de software, otimização de processos e por evoluir 
            continuamente a eficiência e a confiabilidade das aplicações. Busco sempre entregar 
            soluções que atendam às necessidades do negócio com qualidade e boas práticas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;