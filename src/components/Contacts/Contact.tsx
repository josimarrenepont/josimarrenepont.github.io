import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contato</h2>
        <div className="contact-container">
          <a href="mailto:jnrenepont@hotmail.com" className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <h3>E-mail</h3>
              <p>jnrenepont@hotmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/josimar-renepont/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>/josimar-renepont</p>
            </div>
          </a>
          <a href="https://github.com/josimarrenepont" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <img src={githubIcon} alt="GitHub" />
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>/josimarrenepont</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;