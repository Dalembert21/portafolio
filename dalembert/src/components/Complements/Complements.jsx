import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCubes, FaUsers, FaCogs, FaRocket, FaCheckDouble, FaLaptopCode } from "react-icons/fa";
import "./Complements.css";

export default function Complements({ lang }) {
  const [active, setActive] = useState(null);
  const complementsSectionRef = useRef(null);

  const coreCompetencies = [
    { 
      name: lang === "en" ? "Architecture & Scalability" : "Arquitectura y Escalabilidad", 
      desc: { 
        en: "Designing systems with clean architectures, applying patterns like DDD and CQRS for long-term maintainability.", 
        es: "Diseño de sistemas con arquitecturas limpias, aplicando patrones como DDD y CQRS para asegurar mantenibilidad a largo plazo." 
      },
      icon: <FaCubes />
    },
    { 
      name: lang === "en" ? "Complex Problem Solving" : "Resolución de Problemas Complejos", 
      desc: { 
        en: "Analytical ability to build complex business logic, from ERP/accounting systems to OCR and biometric validations.", 
        es: "Capacidad analítica para construir lógica de negocio compleja, desde sistemas ERP contables hasta validaciones biométricas y OCR." 
      },
      icon: <FaCogs />
    },
    { 
      name: lang === "en" ? "Agile Collaboration" : "Colaboración Ágil", 
      desc: { 
        en: "Experience working in multidisciplinary teams under Scrum/Kanban methodologies, ensuring effective code reviews.", 
        es: "Experiencia en equipos multidisciplinarios bajo metodologías Scrum/Kanban, asegurando revisiones de código efectivas." 
      },
      icon: <FaUsers />
    },
    { 
      name: lang === "en" ? "Ownership & Delivery" : "Responsabilidad y Entrega", 
      desc: { 
        en: "Full responsibility for the development lifecycle, from system design to production deployment and CI/CD pipelines.", 
        es: "Responsabilidad total del ciclo de desarrollo, desde el diseño del sistema hasta el despliegue en producción y pipelines CI/CD." 
      },
      icon: <FaCheckDouble />
    },
    { 
      name: lang === "en" ? "Technical Communication" : "Comunicación Técnica", 
      desc: { 
        en: "Translating complex business requirements (like electronic billing) into solid, well-documented technical solutions.", 
        es: "Traducción de requerimientos de negocio complejos (como facturación electrónica) en soluciones técnicas sólidas y bien documentadas." 
      },
      icon: <FaLaptopCode />
    },
    { 
      name: lang === "en" ? "Continuous Learning" : "Aprendizaje Continuo", 
      desc: { 
        en: "Fast adoption of new technologies across the stack, from frontend frameworks to robust backend ecosystems like .NET.", 
        es: "Rápida adopción de nuevas tecnologías en el stack, desde frameworks frontend hasta ecosistemas backend robustos como .NET 10 y NestJS." 
      },
      icon: <FaRocket />
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
        {lang === "en" ? "Core Competencies" : "Competencias Clave"}
      </motion.h2>

      <p className="complements-description">
        {lang === "en" 
          ? "Professional attributes and methodologies that drive my software development process"
          : "Atributos profesionales y metodologías que impulsan mi proceso de desarrollo de software"
        }
      </p>

      <div className="complements-grid">
        {coreCompetencies.map((skill, i) => {
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
              <div className="complement-icon">{skill.icon}</div>
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