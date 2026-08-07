import React, { useState, useEffect } from "react";
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
import tailIcon from "../../assets/tail.svg";
import materialIcon from "../../assets/material.svg";
import kotlinIcon from "../../assets/kotlin.svg";
import netIcon from "../../assets/net.svg";
import kafkaIcon from "../../assets/kafka.svg";
import sqliteIcon from "../../assets/sqlite.svg";
import supabaseIcon from "../../assets/supabase.svg";
import jenkinsIcon from "../../assets/jenkins.svg";
import junitIcon from "../../assets/junit.svg";
import playwriteIcon from "../../assets/playwrite.svg";
import swaggerIcon from "../../assets/swagger.svg";
import burpIcon from "../../assets/burp.svg";
import owasIcon from "../../assets/ow.png";
import actionsIcon from "../../assets/actions.svg";
import gitLabIcon from "../../assets/gitLab.svg";

export default function Technologies({ lang }) {
  const [active, setActive] = useState(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.tech-card')) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🎨 FRONTEND (FRAMEWORKS/LIBRERÍAS)
  const frontendTools = [
    { name: "React", desc: { en: "Frontend library for building interfaces.", es: "Librería frontend para construir interfaces." }, icon: reactIcon },
    { name: "Angular", desc: { en: "Framework for building dynamic web apps.", es: "Framework para construir aplicaciones web dinámicas." }, icon: angularIcon },
  ];

  // 🗣️ LENGUAJES
  const languageTools = [
    { name: "TypeScript", desc: { en: "JavaScript with static type definitions.", es: "JavaScript con tipado estático." }, icon: typescriptIcon },
    { name: "JavaScript", desc: { en: "Programming language for web interactivity.", es: "Lenguaje de programación para interactividad web." }, icon: jsIcon },
    { name: "PHP", desc: { en: "Backend language for web applications.", es: "Lenguaje backend para aplicaciones web." }, icon: phpIcon },
    { name: "Java", desc: { en: "General-purpose programming language.", es: "Lenguaje de programación de propósito general." }, icon: javaIcon },
  ];

  // 💅 ESTILOS
  const styleTools = [
    { name: "Tailwind CSS", desc: { en: "Utility-first CSS framework.", es: "Framework CSS basado en utilidades." }, icon: tailIcon },
    { name: "CSS3", desc: { en: "Stylesheet language for designing web pages.", es: "Lenguaje de hojas de estilo para diseñar páginas web." }, icon: cssIcon },
    { name: "Material UI", desc: { en: "React UI components library.", es: "Librería de componentes UI para React." }, icon: materialIcon },
  ];

  // 📱 DESARROLLO MÓVIL
  const mobileTools = [
    { name: "React Native", desc: { en: "Framework for building native mobile apps.", es: "Framework para construir aplicaciones móviles nativas." }, icon: reactNativeIcon },
    { name: "Ionic", desc: { en: "Cross-platform mobile app development.", es: "Desarrollo de aplicaciones móviles multiplataforma." }, icon: ionicIcon },
    { name: "Kotlin", desc: { en: "Modern programming language for Android.", es: "Lenguaje de programación moderno para Android." }, icon: kotlinIcon },
    { name: "Java", desc: { en: "General-purpose programming language for Android.", es: "Lenguaje de programación para Android." }, icon: javaIcon },
  ];

  // ⚙️ BACKEND
  const backendTools = [
    { name: ".NET 10 (C#)", desc: { en: "Cross-platform framework by Microsoft.", es: "Framework multiplataforma de Microsoft." }, icon: netIcon },
    { name: "NestJS", desc: { en: "Backend framework for Node.js applications.", es: "Framework backend para Node.js." }, icon: nestjsIcon },
    { name: "PHP", desc: { en: "Backend language for web applications.", es: "Lenguaje backend para aplicaciones web." }, icon: phpIcon },
  ];

  // 🗃️ PERSISTENCIA DE DATOS
  const databaseTools = [
    { name: "PostgreSQL", desc: { en: "Advanced open-source relational database.", es: "Base de datos relacional avanzada de código abierto." }, icon: postgresqlIcon },
    { name: "MySQL", desc: { en: "Relational database management system.", es: "Sistema de gestión de bases de datos relacionales." }, icon: mysqlIcon },
    { name: "SQLite", desc: { en: "C-language library that implements a SQL database engine.", es: "Motor de base de datos SQL." }, icon: sqliteIcon },
    { name: "Oracle Database", desc: { en: "Enterprise relational database system.", es: "Sistema de base de datos relacional empresarial." }, icon: oracleIcon },
    { name: "Firebase", desc: { en: "Platform with authentication and real-time database.", es: "Plataforma con autenticación y base de datos." }, icon: firebaseIcon },
    { name: "Supabase", desc: { en: "Open source Firebase alternative.", es: "Alternativa open source a Firebase." }, icon: supabaseIcon },
  ];

  // 🛠️ HERRAMIENTAS
  const toolsList = [
    { name: "Git", desc: { en: "Distributed version control system.", es: "Sistema de control de versiones distribuido." }, icon: gitIcon },
    { name: "GitHub", desc: { en: "Platform for code hosting and collaboration.", es: "Plataforma para alojamiento de código." }, icon: githubIcon },
    { name: "Docker", desc: { en: "Platform for containerizing applications.", es: "Plataforma para containerización de aplicaciones." }, icon: dockerIcon },
  ];

  // 🚀 CI/CD
  const ciCdTools = [
    { name: "Jenkins", desc: { en: "Automation server for CI/CD.", es: "Servidor de automatización para CI/CD." }, icon: jenkinsIcon },
    { name: "GitHub Actions", desc: { en: "CI/CD platform for GitHub.", es: "Plataforma CI/CD para GitHub." }, icon: actionsIcon },
    { name: "GitLab CI", desc: { en: "CI/CD platform for GitLab.", es: "Plataforma CI/CD para GitLab." }, icon: gitLabIcon },
  ];

  // 🧪 PRUEBAS Y CALIDAD
  const testingTools = [
    { name: "JUnit", desc: { en: "Unit testing framework for Java.", es: "Framework de pruebas unitarias para Java." }, icon: junitIcon },
    { name: "Jasmine", desc: { en: "Unit testing framework for JavaScript/Angular.", es: "Pruebas unitarias para JavaScript/Angular." }, icon: jasmineIcon },
    { name: "Playwright", desc: { en: "End-to-end testing for web apps.", es: "Pruebas E2E para aplicaciones web." }, icon: playwriteIcon },
    { name: "Selenium", desc: { en: "Web application testing automation framework.", es: "Automatización de pruebas web." }, icon: seleniumIcon },
    { name: "Postman", desc: { en: "API development and testing platform.", es: "Testing de APIs." }, icon: postmanIcon },
    { name: "Swagger", desc: { en: "API documentation tool.", es: "Herramienta de documentación de APIs." }, icon: swaggerIcon },
    { name: "Apache JMeter", desc: { en: "Performance and load testing.", es: "Pruebas de rendimiento y carga." }, icon: jmeterIcon },
    { name: "Burp Suite", desc: { en: "Web vulnerability scanner.", es: "Escáner de vulnerabilidades web." }, icon: burpIcon },
    { name: "OWASP ZAP", desc: { en: "Open-source web app scanner.", es: "Escáner de aplicaciones web de código abierto." }, icon: owasIcon },
  ];

  // 🎨 DISEÑO UI/UX Y PROTOTIPADO
  const designTools = [
    { name: "Figma", desc: { en: "Collaborative design tool for UI/UX prototyping.", es: "Herramienta colaborativa para prototipado UI/UX." }, icon: figmaIcon },
    { name: "Adobe XD", desc: { en: "Design and prototyping tool for user experiences.", es: "Herramienta de diseño para experiencias de usuario." }, icon: xdIcon },
    { name: "Penpot", desc: { en: "Open-source design and prototyping platform.", es: "Plataforma de diseño open-source." }, icon: penpotIcon },
  ];

  // 🌐 IDIOMAS
  const languagesList = [
    { name: "Español", desc: { en: "Native speaker.", es: "Hablante nativo." }, icon: "" },
    { name: "Inglés", desc: { en: "B1 intermediate level.", es: "Nivel intermedio B1." }, icon: "" },
  ];

  const categories = [
    { id: 'frontend', tools: frontendTools, labelEn: "Frontend", labelEs: "Frontend" },
    { id: 'languages_web', tools: languageTools, labelEn: "Languages", labelEs: "Lenguajes" },
    { id: 'styles', tools: styleTools, labelEn: "Styles", labelEs: "Estilos" },
    { id: 'mobile', tools: mobileTools, labelEn: "Mobile", labelEs: "Desarrollo Móvil" },
    { id: 'backend', tools: backendTools, labelEn: "Backend", labelEs: "Backend" },
    { id: 'database', tools: databaseTools, labelEn: "Databases", labelEs: "Persistencia" },
    { id: 'tools', tools: toolsList, labelEn: "Tools", labelEs: "Herramientas" },
    { id: 'cicd', tools: ciCdTools, labelEn: "CI/CD", labelEs: "CI/CD" },
    { id: 'testing', tools: testingTools, labelEn: "Testing", labelEs: "Pruebas y Calidad" },
    { id: 'design', tools: designTools, labelEn: "Design UI/UX", labelEs: "Diseño UI/UX" },
  ];

  const getToolsForCategory = (categoryId) => {
    return categories.find(c => c.id === categoryId)?.tools || [];
  };

  const getGlobalIndex = (category, index) => {
    let offset = 0;
    for (const cat of categories) {
      if (cat.id === category) break;
      offset += cat.tools.length;
    }
    return offset + index;
  };

  const handleCardClick = (index, category) => {
    const globalIndex = getGlobalIndex(category, index);
    setActive(active === globalIndex ? null : globalIndex);
  };

  const renderTools = (tools, category) => {
    return tools.map((tool, i) => {
      const showFallback = !tool.icon;

      return (
        <motion.div
          key={i}
          className={`tech-card ${active === getGlobalIndex(category, i) ? 'active' : ''}`}
          onClick={() => handleCardClick(i, category)}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          {showFallback ? (
            <div className="tool-fallback" style={{ display: 'block', fontSize: '24px', fontWeight: 'bold', color: '#ff6b6b' }}>
              {tool.name.split(' ').map(word => word.charAt(0)).slice(0, 2).join('')}
            </div>
          ) : (
            <>
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="tool-icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'block';
                  }
                }}
              />
              <div className="tool-fallback" style={{ display: 'none', fontSize: '24px', fontWeight: 'bold', color: '#ff6b6b' }}>
                {tool.name.split(' ').map(word => word.charAt(0)).slice(0, 2).join('')}
              </div>
            </>
          )}
          <h3>{tool.name}</h3>
        </motion.div>
      );
    });
  };

  return (
    <section id="technologies" className="technologies-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {lang === "en" ? "Technical Skills" : "Habilidades Técnicas"}
      </motion.h2>

      {/* Categorías */}
      <div className="technologies-categories" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {categories.map(cat => (
          <button 
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {lang === "en" ? cat.labelEn : cat.labelEs}
          </button>
        ))}
      </div>

      <div className="technologies-grid">
        {renderTools(getToolsForCategory(activeCategory), activeCategory)}
      </div>
    </section>
  );
}