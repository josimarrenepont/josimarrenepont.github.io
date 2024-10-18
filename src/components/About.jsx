import React from 'react';
import profilePic from '../assets/Josimar.jpg';

const About = () => {
  return (
    <section id="about" className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Sobre Mim</h2>
      <div className="flex flex-col md:flex-row items-center justify-start md:space-x-8">
      <img
          src={profilePic}
          alt="Josimar Renepont"
          className="profile-pic w-32 h-32 rounded-full border-4 border-gray-40 shadow-lg"
      />

        <p className="text-lg text-gray-700 max-w-md text-left md:mt-0 mt-4">
          Sou desenvolvedor de software especializado em back-end com Java e Spring Boot. 
          Tenho uma paixão por aprender novas tecnologias e resolver problemas complexos com código limpo e eficiente.
        </p>
      </div>
    </section>
  );
};

export default About;