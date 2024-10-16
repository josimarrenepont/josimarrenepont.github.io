import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'; // Importando HashRouter
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Usando HashRouter para funcionar corretamente no GitHub Pages */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
