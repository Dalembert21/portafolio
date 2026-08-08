import React, { useState } from "react";
import "./Contact.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegEnvelope, FaCopy, FaCheckCircle } from "react-icons/fa";

export default function Contact({ lang }) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const displayToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

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
                  displayToast(lang === "en" ? "Email copied to clipboard!" : "¡Correo copiado al portapapeles!");
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
                    displayToast(lang === "en" ? "Email copied to clipboard!" : "¡Correo copiado al portapapeles!");
                  } else {
                    throw new Error("Fallback copy failed");
                  }
                }
              } catch (err) {
                console.error("Error copying text: ", err);
                displayToast(lang === "en" ? "Could not copy automatically. Email: " + email : "Error al copiar. Correo: " + email);
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

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="copy-toast"
          >
            <FaCheckCircle style={{ color: "var(--accent)" }} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}