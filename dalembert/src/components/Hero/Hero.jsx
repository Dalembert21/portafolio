import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
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
        <a 
          href="/Dalembert_Bravo.pdf" 
          download 
          className="btn btn-primary"
        >
           {text[lang].downloadCV}
        </a>
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