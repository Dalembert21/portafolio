import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Technologies.css";

// Importar todos los iconos desde src/assets/
import htmlIcon from "../../assets/html.svg";
import reactNativeIcon from "../../assets/react-native.svg";
import seleniumIcon from "../../assets/selenium.svg";
import cssIcon from "../../assets/css.svg";
import jsIcon from "../../assets/javascript.svg";
import reactIcon from "../../assets/react.svg";
import angularIcon from "../../assets/angular.svg";
import typescriptIcon from "../../assets/typescript.svg";
import ionicIcon from "../../assets/ionic.svg";
import phpIcon from "../../assets/php.svg";
import nestjsIcon from "../../assets/nestjs.svg";
import nodejsIcon from "../../assets/nodejs.svg";
import javaIcon from "../../assets/java.svg";
import firebaseIcon from "../../assets/firebase.svg";
import mysqlIcon from "../../assets/mysql.svg";
import postgresqlIcon from "../../assets/postgresql.svg";
import oracleIcon from "../../assets/oracle.svg";
import sqlServerIcon from "../../assets/server.svg";
import figmaIcon from "../../assets/figma.svg";
import penpotIcon from "../../assets/penpot.svg";
import xdIcon from "../../assets/adobe-xd.svg";
import gitIcon from "../../assets/git.svg";
import githubIcon from "../../assets/github.svg";
import dockerIcon from "../../assets/docker.svg";
import vscodeIcon from "../../assets/vscode.svg";
import androidStudioIcon from "../../assets/android-studio.svg";
import postmanIcon from "../../assets/postman.svg";



import jasmineIcon from "../../assets/Jasmine.svg";
import jmeterIcon from "../../assets/jmeter.svg";

export default function Technologies({ lang }) {
  const [active, setActive] = useState(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

// 🎨 FRONTEND
const frontendTools = [
  { name: "HTML", desc: { en: "Markup language for structuring web pages.", es: "Lenguaje de marcado para estructurar páginas web." }, icon: htmlIcon },
  { name: "CSS", desc: { en: "Stylesheet language for designing web pages.", es: "Lenguaje de hojas de estilo para diseñar páginas web." }, icon: cssIcon },
  { name: "JavaScript", desc: { en: "Programming language for web interactivity.", es: "Lenguaje de programación para interactividad web." }, icon: jsIcon },
  { name: "React", desc: { en: "Frontend library for building interfaces.", es: "Librería frontend para construir interfaces." }, icon: reactIcon },
  { name: "React Native", desc: { en: "Framework for building native mobile apps.", es: "Framework para construir aplicaciones móviles nativas." }, icon: reactNativeIcon },
  { name: "Angular", desc: { en: "Framework for building dynamic web apps.", es: "Framework para construir aplicaciones web dinámicas." }, icon: angularIcon },
  { name: "Ionic", desc: { en: "Cross-platform mobile app development.", es: "Desarrollo de aplicaciones móviles multiplataforma." }, icon: ionicIcon },
];

  // ⚙️ BACKEND
  const backendTools = [
    { name: "PHP", desc: { en: "Backend language for web applications.", es: "Lenguaje backend para aplicaciones web." }, icon: phpIcon },
    { name: "NestJS", desc: { en: "Backend framework for Node.js applications.", es: "Framework backend para aplicaciones Node.js." }, icon: nestjsIcon },
    { name: "NodeJS", desc: { en: "JavaScript runtime for backend development.", es: "Entorno de ejecución JavaScript para backend." }, icon: nodejsIcon },
    { name: "Java", desc: { en: "General-purpose programming language.", es: "Lenguaje de programación de propósito general." }, icon: javaIcon },
  ];

  // 🗃️ BASES DE DATOS
  const databaseTools = [
    { name: "Firebase", desc: { en: "Platform with authentication and real-time database.", es: "Plataforma con autenticación y base de datos en tiempo real." }, icon: firebaseIcon },
    { name: "MySQL", desc: { en: "Relational database management system.", es: "Sistema de gestión de bases de datos relacionales." }, icon: mysqlIcon },
    { name: "PostgreSQL", desc: { en: "Advanced open-source relational database.", es: "Base de datos relacional avanzada de código abierto." }, icon: postgresqlIcon },
    { name: "Oracle", desc: { en: "Enterprise relational database system.", es: "Sistema de base de datos relacional empresarial." }, icon: oracleIcon },
    { name: "SQL Server", desc: { en: "Microsoft relational database management system.", es: "Sistema de gestión de bases de datos relacionales de Microsoft." }, icon: sqlServerIcon },
  ];

  // 🎨 DISEÑO
  const designTools = [
    { 
      name: "Figma", 
      desc: { en: "Collaborative design tool for UI/UX prototyping.", es: "Herramienta de diseño colaborativo para prototipado UI/UX." }, 
      icon: figmaIcon
    },
    { 
      name: "Penpot", 
      desc: { en: "Open-source design and prototyping platform.", es: "Plataforma de diseño y prototipado de código abierto." }, 
      icon: penpotIcon
    },
    { 
      name: "Adobe XD", 
      desc: { en: "Design and prototyping tool for user experiences.", es: "Herramienta de diseño y prototipado para experiencias de usuario." }, 
      icon: xdIcon
    },
  ];

  // 🧪 TESTING Y CALIDAD
  const testingTools = [
 
    { 
      name: "Jasmine", 
      desc: { en: "Unit testing framework for JavaScript and Angular applications.", es: "Framework de pruebas unitarias para aplicaciones JavaScript y Angular." }, 
      icon: jasmineIcon
    },
    { 
      name: "JMeter", 
      desc: { en: "Performance and load testing for web applications.", es: "Pruebas de rendimiento y carga para aplicaciones web." }, 
      icon: jmeterIcon
    },
      { 
    name: "Selenium", 
    desc: { en: "Web application testing automation framework.", es: "Framework de automatización de pruebas para aplicaciones web." }, 
    icon: seleniumIcon
  },
  ];

// 🛠️ HERRAMIENTAS Y COLABORACIÓN
const devopsTools = [
  { name: "Git", desc: { en: "Distributed version control system.", es: "Sistema de control de versiones distribuido." }, icon: gitIcon },
  { name: "GitHub", desc: { en: "Platform for code hosting and collaboration.", es: "Plataforma para alojamiento de código y colaboración." }, icon: githubIcon },
  { name: "Docker", desc: { en: "Platform for containerizing applications.", es: "Plataforma para containerización de aplicaciones." }, icon: dockerIcon },
  { name: "VS Code", desc: { en: "Code editor with extensive extensions.", es: "Editor de código con extensiones extensas." }, icon: vscodeIcon }, // ← Agregar esta línea
  { name: "Android Studio", desc: { en: "IDE for Android development.", es: "IDE para desarrollo Android." }, icon: androidStudioIcon },
  { name: "Postman", desc: { en: "API development and testing platform.", es: "Plataforma para desarrollo y testing de APIs." }, icon: postmanIcon },
];

  // 🧠 LENGUAJES
  const languagesTools = [
    { name: "Java", desc: { en: "General-purpose programming language.", es: "Lenguaje de programación de propósito general." }, icon: javaIcon },
    { name: "TypeScript", desc: { en: "JavaScript with static type definitions.", es: "JavaScript con definiciones de tipo estático." }, icon: typescriptIcon },
    { name: "PHP", desc: { en: "Server-side scripting language.", es: "Lenguaje de scripting del lado del servidor." }, icon: phpIcon },
    { name: "JavaScript", desc: { en: "High-level programming language.", es: "Lenguaje de programación de alto nivel." }, icon: jsIcon },
  ];

  const handleCardClick = (index, category) => {
    const categoryIndexMap = {
      'frontend': 0,
      'backend': frontendTools.length,
      'database': frontendTools.length + backendTools.length,
      'design': frontendTools.length + backendTools.length + databaseTools.length,
      'testing': frontendTools.length + backendTools.length + databaseTools.length + designTools.length,
      'devops': frontendTools.length + backendTools.length + databaseTools.length + designTools.length + testingTools.length,
      'languages': frontendTools.length + backendTools.length + databaseTools.length + designTools.length + testingTools.length + devopsTools.length
    };
    
    const globalIndex = categoryIndexMap[category] + index;
    setActive(active === globalIndex ? null : globalIndex);
  };

  const getGlobalIndex = (category, index) => {
    const categoryIndexMap = {
      'frontend': 0,
      'backend': frontendTools.length,
      'database': frontendTools.length + backendTools.length,
      'design': frontendTools.length + backendTools.length + databaseTools.length,
      'testing': frontendTools.length + backendTools.length + databaseTools.length + designTools.length,
      'devops': frontendTools.length + backendTools.length + databaseTools.length + designTools.length + testingTools.length,
      'languages': frontendTools.length + backendTools.length + databaseTools.length + designTools.length + testingTools.length + devopsTools.length
    };
    
    return categoryIndexMap[category] + index;
  };

  // Función para renderizar herramientas por categoría
  const renderTools = (tools, category) => {
    return tools.map((tool, i) => (
      <motion.div
        key={i}
        className={`tech-card ${active === getGlobalIndex(category, i) ? 'active' : ''}`}
        onClick={() => handleCardClick(i, category)}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
      >
        <img 
          src={tool.icon} 
          alt={tool.name} 
          className="tool-icon"
          onError={(e) => {
            console.error(`Error loading icon for ${tool.name}:`, e);
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="tool-fallback" style={{display: 'none'}}>
          {tool.name.split(' ').map(word => word.charAt(0)).join('')}
        </div>
        <h3>{tool.name}</h3>
        <p>{tool.desc[lang]}</p>
      </motion.div>
    ));
  };

  return (
    <section id="technologies" className="technologies-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {lang === "en" ? "Technologies" : "Tecnologías"}
      </motion.h2>

      {/* Categorías */}
      <div className="technologies-categories">
        <button 
          className={`category-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveCategory('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`category-btn ${activeCategory === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveCategory('backend')}
        >
          Backend
        </button>
        <button 
          className={`category-btn ${activeCategory === 'database' ? 'active' : ''}`}
          onClick={() => setActiveCategory('database')}
        >
          {lang === "en" ? "Databases" : "Bases de Datos"}
        </button>
        <button 
          className={`category-btn ${activeCategory === 'design' ? 'active' : ''}`}
          onClick={() => setActiveCategory('design')}
        >
          {lang === "en" ? "Design" : "Diseño"}
        </button>
        {/* NUEVA CATEGORÍA TESTING */}
        <button 
          className={`category-btn ${activeCategory === 'testing' ? 'active' : ''}`}
          onClick={() => setActiveCategory('testing')}
        >
          {lang === "en" ? "Testing" : "Testing"}
        </button>
        <button 
          className={`category-btn ${activeCategory === 'languages' ? 'active' : ''}`}
          onClick={() => setActiveCategory('languages')}
        >
          {lang === "en" ? "Languages" : "Lenguajes"}
        </button>
        <button 
          className={`category-btn ${activeCategory === 'devops' ? 'active' : ''}`}
          onClick={() => setActiveCategory('devops')}
        >
          DevOps & Tools
        </button>
      </div>

      {/* Frontend Tools */}
      {activeCategory === 'frontend' && (
        <div className="technologies-grid">
          {renderTools(frontendTools, 'frontend')}
        </div>
      )}

      {/* Backend Tools */}
      {activeCategory === 'backend' && (
        <div className="technologies-grid">
          {renderTools(backendTools, 'backend')}
        </div>
      )}

      {/* Database Tools (con Firebase ahora aquí) */}
      {activeCategory === 'database' && (
        <div className="technologies-grid">
          {renderTools(databaseTools, 'database')}
        </div>
      )}

      {/* Design Tools */}
      {activeCategory === 'design' && (
        <div className="technologies-grid">
          {renderTools(designTools, 'design')}
        </div>
      )}

      {/* NUEVA SECCIÓN: Testing Tools */}
      {activeCategory === 'testing' && (
        <div className="technologies-grid">
          {renderTools(testingTools, 'testing')}
        </div>
      )}

      {/* Languages */}
      {activeCategory === 'languages' && (
        <div className="technologies-grid">
          {renderTools(languagesTools, 'languages')}
        </div>
      )}

      {/* DevOps Tools */}
      {activeCategory === 'devops' && (
        <div className="technologies-grid">
          {renderTools(devopsTools, 'devops')}
        </div>
      )}
    </section>
  );
}