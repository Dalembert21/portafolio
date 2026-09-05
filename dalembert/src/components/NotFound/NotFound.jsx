import React from 'react';
import './NotFound.css';
import { motion } from 'framer-motion';

export default function NotFound({ lang }) {
  const text = {
    en: {
      title: "403 - Access Denied",
      desc: "You don't have access to this area or the page you are looking for doesn't exist.",
      btn: "Return to Home"
    },
    es: {
      title: "403 - Acceso Denegado",
      desc: "No tienes acceso a esta área o la página que buscas no existe.",
      btn: "Volver al Inicio"
    }
  };

  return (
    <section className="not-found-section">
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="not-found-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="accent-icon">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h1 className="accent">{text[lang].title}</h1>
        <p>{text[lang].desc}</p>
        <a href="/" className="btn btn-primary not-found-btn">
          {text[lang].btn}
        </a>
      </motion.div>
    </section>
  );
}
