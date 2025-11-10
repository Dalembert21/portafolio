import React, { useState } from "react";
import "./Header.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.jpg"; 

export default function Header({ toggleTheme, toggleLang, lang, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = {
    en: ["about", "technologies", "complements", "projects", "contact"], 
    es: ["about", "technologies", "complements", "projects", "contact"] 
  };

  const sectionNames = {
    en: ["About", "Technologies", "Soft Skills", "Projects", "Contact"], 
    es: ["Sobre mí", "Tecnologías", "Habilidades Blandas", "Proyectos", "Contacto"] 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
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
          onClick={scrollToTop}
        />
      </div>

      {/* Botón hamburguesa para móviles */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={isMenuOpen ? 'active' : ''}>
        <ul className="nav-links">
          {sections[lang].map((item, i) => (
            <li key={i}>
              <a 
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {sectionNames[lang][i]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="icons">
        <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={toggleLang} className="lang-btn" aria-label="Toggle language">
          {lang.toUpperCase()}
        </button>
      </div>
    </motion.header>
  );
}