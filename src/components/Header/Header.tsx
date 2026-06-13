import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <span className="logo-bracket">{'<'}</span>
          Josimar Renepont
          <span className="logo-bracket">{'/>'}</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;