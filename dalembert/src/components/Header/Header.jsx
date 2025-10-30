import React from "react";
import "./Header.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.jpg"; 

export default function Header({ toggleTheme, toggleLang, lang, darkMode }) {
  const sections = {
    en: ["About", "Technologies", "Complements", "Projects", "Contact"], 
    es: ["About", "Technologies", "Complements", "Projects", "Contact"] 
  };

  const sectionNames = {
    en: ["About", "Technologies", "Soft Skills", "Projects", "Contact"], 
    es: ["Sobre mí", "Tecnologías", "Habilidades Blandas", "Proyectos", "Contacto"] 
  };
  
  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="header-container"
    >
      <div className="logo-container">
        <motion.img
          src={logoImg}
          alt="Logo"
          className="logo-img"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
        />
      </div>

      <nav>
        <ul className="nav-links">
          {sections[lang].map((item, i) => (
            <li key={i}>
              <a href={`#${item.toLowerCase()}`}>
                {sectionNames[lang][i]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="icons">
        <button onClick={toggleTheme} className="icon-btn">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={toggleLang} className="lang-btn">
          {lang.toUpperCase()}
        </button>
      </div>
    </motion.header>
  );
}