import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Complements.css";

export default function Complements({ lang }) {
  const [active, setActive] = useState(null);
  const complementsSectionRef = useRef(null);

  const softSkills = [
    { 
      name: lang === "en" ? "Teamwork" : "Trabajo en equipo", 
      desc: { 
        en: "Collaborating effectively in team environments, sharing knowledge and supporting colleagues to achieve common goals.", 
        es: "Colaboración efectiva en entornos de equipo, compartiendo conocimiento y apoyando a colegas para alcanzar objetivos comunes." 
      } 
    },
    { 
      name: lang === "en" ? "Adaptability" : "Adaptabilidad", 
      desc: { 
        en: "Quickly adapting to new technologies, methodologies and work environments. Flexible approach to changing requirements.", 
        es: "Adaptación rápida a nuevas tecnologías, metodologías y entornos laborales. Enfoque flexible ante requisitos cambiantes." 
      } 
    },
    { 
      name: lang === "en" ? "Problem Solving" : "Resolución de problemas", 
      desc: { 
        en: "Analytical thinking and creative solutions. Breaking down complex problems and implementing effective solutions.", 
        es: "Pensamiento analítico y soluciones creativas. Descomposición de problemas complejos e implementación de soluciones efectivas." 
      } 
    },
    { 
      name: lang === "en" ? "Communication" : "Comunicación", 
      desc: { 
        en: "Clear and effective communication with teams, stakeholders and clients. Active listening and clear expression of ideas.", 
        es: "Comunicación clara y efectiva con equipos, stakeholders y clientes. Escucha activa y expresión clara de ideas." 
      } 
    },
    { 
      name: lang === "en" ? "Creativity" : "Creatividad", 
      desc: { 
        en: "Innovative approach to development challenges. Designing unique solutions and thinking outside conventional patterns.", 
        es: "Enfoque innovador para desafíos de desarrollo. Diseño de soluciones únicas y pensamiento beyond patrones convencionales." 
      } 
    },
    { 
      name: lang === "en" ? "Time Management" : "Gestión del tiempo", 
      desc: { 
        en: "Efficient organization of tasks and priorities. Meeting deadlines while maintaining quality standards.", 
        es: "Organización eficiente de tareas y prioridades. Cumplimiento de plazos manteniendo estándares de calidad." 
      } 
    }
  ];

  // Cerrar tarjeta activa al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (complementsSectionRef.current && 
          !complementsSectionRef.current.contains(event.target) &&
          active !== null) {
        setActive(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);

  const handleCardClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section id="complements" className="complements-section" ref={complementsSectionRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {lang === "en" ? "Soft Skills" : "Habilidades Blandas"}
      </motion.h2>

      <p className="complements-description">
        {lang === "en" 
          ? "Personal attributes that enable effective interaction and performance in professional environments"
          : "Atributos personales que permiten una interacción y desempeño efectivos en entornos profesionales"
        }
      </p>

      <div className="complements-grid">
        {softSkills.map((skill, i) => {
          const isActive = active === i;
          
          return (
            <motion.div
              key={i}
              className={`complement-card ${isActive ? 'active' : ''}`}
              onClick={() => handleCardClick(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="complement-icon">💡</div>
              <h3>{skill.name}</h3>
              <p>{skill.desc[lang]}</p>
              <div className="complement-hint">
                {lang === "en" ? "Click for details" : "Clic para detalles"}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}