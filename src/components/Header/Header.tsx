import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <span className="logo-bracket">{"<"}</span>
          Josimar Renepont
          <span className="logo-bracket">{"/> "}</span>
        </a>
        <div className="header-right">
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <div className="social-links">
            <a href="https://github.com/josimarrenepont" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/josimar-renepont/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;