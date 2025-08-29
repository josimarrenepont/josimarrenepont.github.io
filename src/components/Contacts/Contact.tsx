import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <p>Você pode entrar em contato comigo pelo e-mail: <a href="mailto:jnrenepont@hotmail.com">jnrenepont@hotmail.com</a></p>
      <p>Ou me siga nas redes sociais:</p>
      <ul className="contact-links">
        <li><a href="https://www.linkedin.com/in/josimar-renepont/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/josimarrenepont" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        {/* Adicione mais links de contato conforme necessário */}
      </ul>
    </section>
  );
};

export default Contact;