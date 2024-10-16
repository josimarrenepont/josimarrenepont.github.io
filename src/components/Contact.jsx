import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Contato</h2>
      <div className="text-center">
        <p className="text-lg mb-4">Entre em contato pelo LinkedIn ou GitHub.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/josimar-renepont/"
            className="hover:underline"
            style={{ color: 'white' }} // Forçando a cor para branca
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span style={{ color: 'white' }}> | </span> {/* Forçando o separador para branco */}
          <a
            href="https://github.com/josimarrenepont"
            className="hover:underline"
            style={{ color: 'white' }} // Forçando a cor para branca
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
