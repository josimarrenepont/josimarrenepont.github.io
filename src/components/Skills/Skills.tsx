import './Skills.css';

// Importando os ícones (mesmos do seu Header)
import awsIcon from '../../assets/awsIcon.svg';
import CiCdIcon from '../../assets/ci-cd.svg';
import dockerIcon from '../../assets/docker.svg';
import fastapiIcon from '../../assets/fastapi.svg';
import githubIcon from '../../assets/github.svg';
import javaIcon from '../../assets/java.svg';
import junitIcon1 from '../../assets/JunitIcon.svg';
import junitIcon from '../../assets/JunitIcon1.svg';
import kafkaIcon from '../../assets/kafka.svg';
import kotlinIcon from '../../assets/kotlin.svg';
import kubernetesIcon from '../../assets/kubernetes.svg';
import Microservices1Icon from '../../assets/Microservices1.svg';
import mongoDbIcon from '../../assets/mongodb.svg';
import mySqlIcon from '../../assets/mysql.svg';
import postgreSQLIcon from '../../assets/postgresql.svg';
import pythonIcon from '../../assets/python.svg';
import springIcon from '../../assets/spring.svg';



const skills = [
  { name: 'Java', icon: javaIcon },
  { name: 'Spring Boot', icon: springIcon },
  { name: 'Kotlin', icon: kotlinIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'PostgreSQL', icon: postgreSQLIcon },
  { name: 'MySQL', icon: mySqlIcon },
  { name: 'MongoDB', icon: mongoDbIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Kubernetes', icon: kubernetesIcon },
  { name: 'Kafka', icon: kafkaIcon },
  { name: 'REST API', icon: fastapiIcon },
  { name: 'Microservices', icon: Microservices1Icon },
  { name: 'Git', icon: githubIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'CI/CD', icon: CiCdIcon },
  { name: 'JUnit', icon: junitIcon},
  { name: 'Mockito', icon: junitIcon1 }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              {skill.icon && (
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="skill-icon" 
                />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;