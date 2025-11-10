// FooterSimple.jsx
import React from "react";

//nonbre de la clase 
export default function FooterSimple({ lang }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-simple">
      <div className="footer-simple-content">
        <p>&copy; {currentYear} Dalembert Bravo</p>
        <div className="footer-links">
          <a href="mailto:dalembertbravo2@gmail.com">Email</a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-message">
          {lang === "en" 
            ? "Built with React & passion" 
            : "Hecho con React y pasión"}
        </p>
      </div>
    </footer>
  );
}