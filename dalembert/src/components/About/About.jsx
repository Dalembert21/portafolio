import React, { useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import daImage from "../../assets/da.jpg";

export default function About({ lang }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const content = {
    en: {
      description:
        "Full Stack Software Engineer with experience in designing and developing high-performance web and mobile applications. Experience in complex systems such as ERPs, electronic billing platforms, and integrating technologies like OCR and biometric validation. My core stack includes .NET 10, NestJS, and the React ecosystem, applying clean architectures, microservices, DDD, and CQRS to deliver scalable and maintainable solutions.",
      age: "24 years",
      location: "Ecuador",
      education: "Software Engineering",
    },

    es: {
      description:
        "Ingeniero de Software Full Stack con experiencia en el diseño y desarrollo de aplicaciones web y móviles de alto rendimiento. Experiencia en sistemas complejos como ERPs, plataformas de facturación electrónica e integraciones de OCR y validación biométrica. Trabajo principalmente con .NET 10, NestJS y el ecosistema de React, aplicando arquitecturas limpias, microservicios, DDD y CQRS para crear soluciones escalables y mantenibles.",
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
                    <span className="icon"><FaBirthdayCake /></span>
                    <span>{content[lang].age}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon"><FaMapMarkerAlt /></span>
                    <span>{content[lang].location}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon"><FaGraduationCap /></span>
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
