import dockerIcon from '../../assets/docker.svg';
import githubIcon from '../../assets/github.svg';
import javaIcon from '../../assets/java.svg';
import kotlinIcon from '../../assets/kotlin.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import postgreSQLIcon from '../../assets/postgreesql.svg';
import springIcon from '../../assets/spring.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>Josimar Renepont</h1>
          <p>Back-End Developer</p>
        </div>
        <div className="tag-icons">
          <img src={javaIcon} alt="Java" className="tag-icon" />
          <img src={kotlinIcon} alt="Kotlin" className="tag-icon" />
          <img src={springIcon} alt="Spring" className="tag-icon" />
          <img src={postgreSQLIcon} alt="PostgreSQL" className="tag-icon" />
          <img src={dockerIcon} alt="Docker" className="tag-icon" />
        </div>
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="icons">
          <a href="https://github.com/josimarrenepont">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/josimar-renepont/">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
