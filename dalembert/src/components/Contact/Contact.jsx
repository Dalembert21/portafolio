import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaRegEnvelope } from "react-icons/fa";

export default function Contact({ lang }) {
  return (
    <section id="contact" className="contact-section pulse-theme">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="pulse-title">
          {lang === "en" ? "Let's work together!" : "¡Trabajemos juntos!"}
        </h2>
        
        <p className="pulse-subtitle">
          {lang === "en"
            ? "I'm always open to discussing product design work or partnership opportunities." 
            : "Siempre estoy abierto a discutir proyectos o nuevas oportunidades de colaboración."}
        </p>
        
        <a href="mailto:dalembertbravo2@gmail.com" className="pulse-btn">
          <FaRegEnvelope className="pulse-icon" />
          {lang === "en" ? "Say Hello" : "Di Hola"}
        </a>
      </motion.div>
      
      {/* Decorative floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
    </section>
  );
}