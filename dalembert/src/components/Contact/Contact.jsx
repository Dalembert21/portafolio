import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaRegEnvelope, FaCopy } from "react-icons/fa";

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
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="mailto:dalembertbravo2@gmail.com" className="pulse-btn">
            <FaRegEnvelope className="pulse-icon" />
            {lang === "en" ? "Say Hello" : "Di Hola"}
          </a>
          <button 
            onClick={async () => {
              const email = "dalembertbravo2@gmail.com";
              try {
                if (navigator.clipboard && window.isSecureContext) {
                  await navigator.clipboard.writeText(email);
                  alert(lang === "en" ? "Email copied to clipboard!" : "¡Correo copiado al portapapeles!");
                } else {
                  // Fallback para navegadores antiguos o entornos sin HTTPS
                  const textArea = document.createElement("textarea");
                  textArea.value = email;
                  // Hacerlo invisible
                  textArea.style.position = "absolute";
                  textArea.style.left = "-999999px";
                  document.body.appendChild(textArea);
                  textArea.focus();
                  textArea.select();
                  
                  const successful = document.execCommand('copy');
                  document.body.removeChild(textArea);
                  
                  if (successful) {
                    alert(lang === "en" ? "Email copied to clipboard!" : "¡Correo copiado al portapapeles!");
                  } else {
                    throw new Error("Fallback copy failed");
                  }
                }
              } catch (err) {
                console.error("Error copying text: ", err);
                alert(lang === "en" ? "Could not copy email automatically. Here it is: " + email : "No se pudo copiar automáticamente. Este es el correo: " + email);
              }
            }} 
            className="pulse-btn"
            style={{ cursor: 'pointer' }}
          >
            <FaCopy className="pulse-icon" />
            {lang === "en" ? "Copy Email" : "Copiar Correo"}
          </button>
        </div>
      </motion.div>
      
      {/* Decorative floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
    </section>
  );
}