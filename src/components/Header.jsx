import React from 'react';
import dockerIcon from '../assets/docker.png';
import javaIcon from '../assets/java.png';
import postgresqlIcon from '../assets/postgresql.png';
import springIcon from '../assets/spring.png';
;

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Josimar Renepont</h1>
        <h1 className="text-3xl text-white">Back-end Developer</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="text-white hover:underline">Projetos</a></li>
            <li><a href="#about" className="text-white hover:underline">Sobre</a></li>
            <li><a href="#contact" className="text-white hover:underline">Contato</a></li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <img src={javaIcon} alt="Java" className="icon" />
          <img src={springIcon} alt="Spring" className="icon" />
          <img src={postgresqlIcon} alt="PostgreSQL" className="icon" />
          <img src={dockerIcon} alt="Docker" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
