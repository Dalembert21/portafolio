import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills({ lang }) {
  const [active, setActive] = useState(null);

  const tools = [
    { name: "HTML", desc: { en: "Markup language for structuring web pages.", es: "Lenguaje de marcado para estructurar páginas web." }, icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", desc: { en: "Stylesheet language for designing web pages.", es: "Lenguaje de hojas de estilo para diseñar páginas web." }, icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", desc: { en: "Programming language for web interactivity.", es: "Lenguaje de programación para interactividad web." }, icon: "https://skillicons.dev/icons?i=js" },
    { name: "React", desc: { en: "Frontend library for building interfaces.", es: "Librería frontend para construir interfaces." }, icon: "https://skillicons.dev/icons?i=react" },
    { name: "Angular", desc: { en: "Framework for building dynamic web apps.", es: "Framework para construir aplicaciones web dinámicas." }, icon: "https://skillicons.dev/icons?i=angular" },
    { name: "Figma", desc: { en: "Design tool for UI/UX prototyping.", es: "Herramienta de diseño para prototipado UI/UX." }, icon: "https://skillicons.dev/icons?i=figma" },
    { name: "PHP", desc: { en: "Backend language for web apps.", es: "Lenguaje backend para aplicaciones web." }, icon: "https://skillicons.dev/icons?i=php" },
    { name: "NestJS", desc: { en: "Backend framework for Node.js apps.", es: "Framework backend para aplicaciones Node.js." }, icon: "https://skillicons.dev/icons?i=nestjs" },
    { name: "NodeJS", desc: { en: "JavaScript runtime for backend.", es: "Entorno de ejecución JavaScript para backend." }, icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Firebase", desc: { en: "Realtime database & authentication platform.", es: "Plataforma de base de datos en tiempo real y autenticación." }, icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "MySQL", desc: { en: "Relational database system.", es: "Sistema de base de datos relacional." }, icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "PostgreSQL", desc: { en: "Advanced relational database.", es: "Base de datos relacional avanzada." }, icon: "https://skillicons.dev/icons?i=postgresql" },
    { name: "Java", desc: { en: "General-purpose programming language.", es: "Lenguaje de programación de propósito general." }, icon: "https://skillicons.dev/icons?i=java" },
    { name: "TypeScript", desc: { en: "JavaScript with types.", es: "JavaScript con tipos." }, icon: "https://skillicons.dev/icons?i=typescript" },
    { name: "Git", desc: { en: "Version control system.", es: "Sistema de control de versiones." }, icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", desc: { en: "Code hosting and collaboration.", es: "Alojamiento de código y colaboración." }, icon: "https://skillicons.dev/icons?i=github" },
  ];

  const handleCardClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {lang === "en" ? "Skills & Tools" : "Habilidades y Herramientas"}
      </motion.h2>
      <div className="skills-grid">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            className={`skill-card ${active === i ? 'active' : ''}`}
            onClick={() => handleCardClick(i)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <img 
              src={tool.icon} 
              alt={tool.name} 
              className="tool-icon"
            />
            <h3>{tool.name}</h3>
            <p>{tool.desc[lang]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}