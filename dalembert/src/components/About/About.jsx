import React, { useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import daImage from "../../assets/da.jpg";

export default function About({ lang }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const content = {
 en: {
  description:
    "Full-Stack Software Developer specialized in designing and building scalable applications using clean architectures and patterns such as DDD (Domain-Driven Design) and CQRS. Experienced in implementing event-driven systems with Apache Kafka, optimizing backend business logic, and developing efficient frontend interfaces. Focused on structure, code maintainability, and technical performance.",
  age: "24 years",
  location: "Ecuador",
  education: "Software Engineering",
},

es: {
  description:
    "Desarrollador de software Full-Stack especializado en el diseño y construcción de aplicaciones escalables mediante el uso de arquitecturas limpias y patrones como DDD (Domain-Driven Design) y CQRS. Experiencia en la implementación de sistemas basados en eventos con Apache Kafka, optimización de lógica de negocio en el backend y desarrollo de interfaces eficientes en el frontend. Enfoque centrado en la estructura, la mantenibilidad del código y el rendimiento técnico.",
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
