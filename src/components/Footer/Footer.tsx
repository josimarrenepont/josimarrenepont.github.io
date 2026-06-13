import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Josimar Renepont. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;