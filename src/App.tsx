import './App.css';
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

// Função para alternar entre o modo claro e o modo noturno
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function App() {
  return (
    <>
     <button onClick={toggleDarkMode} className="mode-toggle">
        <i className="fa fa-moon-o" aria-hidden="true"></i> {/* Ícone de lua */}
      </button>
      <Header />
      <main>
        <About />
      </main>   
      
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;