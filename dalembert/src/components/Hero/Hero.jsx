import React, { useState } from "react";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ lang }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const text = {
    en: {
      hi: " Hi, I'm",
      name: "Dalembert Bravo",
      role: "Full-Stack Developer",
      desc: "Engineering robust digital solutions that bridge complex backend systems with intuitive frontend experiences.",
      downloadCV: "Download CV",
      viewGithub: "View GitHub"
    },
    es: {
      hi: " Hola, soy",
      name: "Dalembert Bravo",
      role: "Desarrollador Full-Stack & Programador de Software",
      desc: "Ingeniando soluciones digitales robustas que conectan sistemas backend complejos con experiencias frontend intuitivas.",
      downloadCV: "Descargar CV",
      viewGithub: "Ver GitHub"
    }
  };

  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {text[lang].hi} <span className="accent">{text[lang].name}</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {text[lang].role}
      </motion.h2>
      <p>{text[lang].desc}</p>
      
      {/* Botones de acción */}
      <motion.div 
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div 
          className="cv-dropdown-container"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            className="btn btn-primary cv-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
             {text[lang].downloadCV}
             <svg className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="6 9 12 15 18 9"></polyline>
             </svg>
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                className="cv-dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href="/Dalembert_Bravo_EN.pdf" 
                  download 
                  className="cv-dropdown-item"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  🇬🇧 English Version
                </a>
                <a 
                  href="/Dalembert_Bravo.pdf" 
                  download 
                  className="cv-dropdown-item"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  🇪🇸 Versión en Español
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a 
          href="https://github.com/Dalembert21" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
        >
           {text[lang].viewGithub}
        </a>
      </motion.div>
    </section>
  );
}