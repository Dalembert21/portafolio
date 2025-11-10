import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

// Importa las imágenes
import utadriveImage from "../../assets/utaDrive.png";
import lionproduccionesImage from "../../assets/lionProducciones.png";
import busappImage from "../../assets/chasQuiBus.png";
import birthdayImage from "../../assets/cumple3.png";

export default function Projects({ lang }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "UTA-Drive - Vehicle Rental",
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
      github: "https://github.com/Dalembert21/utaDrive"
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
      github: "https://github.com/Dalembert21/lionProducciones"
    },
    {
      id: 3,
      title: "BusTicket App",
      tools: ["React Native", "Expo", "Supabase", "PostgreSQL", "OCR Technology"],
      frontTools: ["React Native", "Expo", "Supabase"],
      desc: {
        en: "Mobile application for bus ticket purchasing with OCR data filling, user registration, seat selection and payment methods.",
        es: "Aplicación móvil para compra de boletos de bus con llenado de datos OCR, registro de usuarios, selección de asientos y métodos de pago."
      },
      image: busappImage,
      link: "#", 
      features: {
        en: ["OCR data scanning", "User registration", "Seat selection", "Payment integration", "Ticket management"],
        es: ["Escaneo OCR de datos", "Registro de usuarios", "Selección de asientos", "Integración de pagos", "Gestión de tickets"]
      },
      github: "https://github.com/Dalembert21/chasquiBus-app" 
    },
    {
      id: 4,
      title: "Birthday Memories",
      tools: ["HTML", "CSS", "JavaScript", "Responsive Design", "Audio API"],
      frontTools: ["HTML", "CSS", "JS", "Responsive"],
      desc: {
        en: "Interactive birthday memory page with photo gallery, music player and memory storage functionality.",
        es: "Página interactiva de cumpleaños con galería de fotos, reproductor de música y funcionalidad para guardar recuerdos."
      },
      image: birthdayImage,
      link: "https://felizcumplecami.netlify.app/", 
      features: {
        en: ["Photo gallery", "Music player", "Memory storage", "Responsive design", "Interactive UI"],
        es: ["Galería de fotos", "Reproductor de música", "Almacenamiento de recuerdos", "Diseño responsive", "UI interactiva"]
      },
      github: "https://github.com/Dalembert21/felizCumplea-os" 
    }
  ];

  const handleFlip = (projectId, e) => {
    if (e) {
      e.stopPropagation();
    }
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  const handleCardClick = (projectId) => {
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
                  
                  <div className="front-tools">
                    <h4>{lang === "en" ? "Technologies" : "Tecnologías"}</h4>
                    <div className="front-tools-tags">
                      {project.frontTools.map((tool, index) => (
                        <span key={index} className="front-tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    {project.link !== "#" ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🌐 {lang === "en" ? "Live Demo" : "Ver Demo"}
                      </a>
                    ) : (
                      <button 
                        className="project-btn-primary"
                        style={{opacity: 0.6, cursor: "not-allowed"}}
                        disabled
                      >
                        📱 {lang === "en" ? "Mobile App" : "App Móvil"}
                      </button>
                    )}
                    
                    {/* NUEVO: Botón de GitHub */}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn-github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    
                    <button 
                      className="project-btn-flip"
                      onClick={(e) => handleFlip(project.id, e)}
                    >
                      🔄 {lang === "en" ? "Details" : "Detalles"}
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
                    {project.link !== "#" ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🌐 {lang === "en" ? "Live Demo" : "Ver Demo"}
                      </a>
                    ) : (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        📱 {lang === "en" ? "View Code" : "Ver Código"}
                      </a>
                    )}
                    
                    {/* Botón de GitHub en la parte trasera también */}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn-github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
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