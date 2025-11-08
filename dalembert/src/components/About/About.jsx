import React, { useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import daImage from "../../assets/da.jpg";

export default function About({ lang }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const content = {
    en: {
      description:
        "Passionate Full-Stack Software Developer focused on building efficient and visually appealing digital products. I enjoy working with technologies like React, NestJS, and PHP, combining logic, design, and performance to create exceptional user experiences. Always seeking new challenges that allow me to grow and learn more.",
      age: "24 years",
      location: "Ecuador",
      education: "Software Engineering",
    },
    es: {
      description:
        "Apasionado desarrollador de software Full-Stack, enfocado en construir productos digitales eficientes y atractivos. Disfruto trabajar con tecnologías como React, NestJS, PHP, combinando lógica, diseño y rendimiento para crear experiencias de usuario excepcionales. Siempre en busca de nuevos desafíos que me permitan crecer y aprender más.",
      age: "24 años",
      location: "Ecuador",
      education: "Ingeniería de Software",
    },
  };

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {lang === "en" ? "About Me" : "Sobre mí"}
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className={`flip-card ${isFlipped ? "flipped" : ""}`}
            onClick={handleImageClick}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={daImage}
                  alt={lang === "en" ? "Dalembert Bravo" : "Dalembert Bravo"}
                  className="about-image"
                />
                <div className="click-hint">
                  <span>{lang === "en" ? "Click me!" : "¡Haz clic!"}</span>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="personal-info">
                  <h3>Dalembert Bravo</h3>
                  <div className="info-item">
                    <span className="icon">🎂</span>
                    <span>{content[lang].age}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon">📍</span>
                    <span>{content[lang].location}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon">🎓</span>
                    <span>{content[lang].education}</span>
                  </div>
                </div>
                <div className="click-hint">
                  <span>
                     {lang === "en" ? "Click to return" : "Clic para volver"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>{content[lang].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
