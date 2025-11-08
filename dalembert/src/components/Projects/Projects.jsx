import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

// Importa las imágenes
import utadriveImage from "../../assets/utaDrive.png";
import lionproduccionesImage from "../../assets/lionProducciones.png";

export default function Projects({ lang }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "UtaDrive - Vehicle Rental",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      frontTools: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      desc: {
        en: "Complete vehicle rental platform with user registration, login system and reservation management.",
        es: "Plataforma completa de alquiler de vehículos con registro de usuarios, sistema de login y gestión de reservas."
      },
      image: utadriveImage,
      link: "https://utadrive.free.nf/",
      features: {
        en: ["User registration", "Login system", "Vehicle catalog", "Online reservations", "Admin panel"],
        es: ["Registro de usuarios", "Sistema de login", "Catálogo de vehículos", "Reservas online", "Panel administrativo"]
      },
      github: "#"
    },
    {
      id: 2,
      title: "Lion Producciones",
      tools: ["React", "CSS3", "Responsive Design"],
      frontTools: ["React", "CSS3", "Responsive"],
      desc: {
        en: "Photography and video production company portfolio showcasing their work and services.",
        es: "Portafolio de empresa de fotografía y producción de video mostrando sus trabajos y servicios."
      },
      image: lionproduccionesImage,
      link: "https://lion-producciones.vercel.app/",
      features: {
        en: ["Portfolio gallery", "Services display", "Contact information", "Responsive design", "Modern UI"],
        es: ["Galería de portafolio", "Exhibición de servicios", "Información de contacto", "Diseño responsive", "UI moderna"]
      },
      github: "#"
    }
  ];

  const handleFlip = (projectId, e) => {
    // Previene que el click en los botones active ambos eventos
    if (e) {
      e.stopPropagation();
    }
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  const handleCardClick = (projectId) => {
    // Solo voltea si no es un click en un botón
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {lang === "en" ? "Featured Projects" : "Proyectos Destacados"}
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleCardClick(project.id)}
          >
            <div className={`project-card-inner ${flippedCard === project.id ? 'flipped' : ''}`}>
              
              {/* FRENTE de la tarjeta */}
              <div className="project-card-front">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.desc[lang]}
                  </p>
                  
                  {/* NUEVO: Herramientas en el frente */}
                  <div className="front-tools">
                    <h4>{lang === "en" ? "Technologies" : "Tecnologías"}</h4>
                    <div className="front-tools-tags">
                      {project.frontTools.map((tool, index) => (
                        <span key={index} className="front-tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 {lang === "en" ? "Live Demo" : "Ver Demo"}
                    </a>
                    <button 
                      className="project-btn-flip"
                      onClick={(e) => handleFlip(project.id, e)}
                    >
                      🔄 {lang === "en" ? "Show Details" : "Ver Detalles"}
                    </button>
                  </div>
                </div>
              </div>

              {/* REVERSO de la tarjeta */}
              <div className="project-card-back">
                <div className="back-content">
                  <h3>{project.title}</h3>
                  <p className="back-description">{project.desc[lang]}</p>
                  
                  <div className="features-section">
                    <h4>{lang === "en" ? "Main Features" : "Características Principales"}</h4>
                    <ul className="features-list">
                      {project.features[lang].map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tools-section">
                    <h4>{lang === "en" ? "Technologies Used" : "Tecnologías Utilizadas"}</h4>
                    <div className="tools-tags">
                      {project.tools.map((tool, index) => (
                        <span key={index} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 {lang === "en" ? "Live Demo" : "Ver Demo"}
                    </a>
                    <button 
                      className="project-btn-flip back-flip-btn"
                      onClick={(e) => handleFlip(project.id, e)}
                    >
                      ↩️ {lang === "en" ? "Back to Front" : "Volver al Frente"}
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}