import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact({ lang }) {
  return (
    <section id="contact" className="contact-section">
      <motion.h2 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
        {lang === "en" ? "Contact Me" : "Contáctame"}
      </motion.h2>
      <p>
        {lang === "en"
         ? "Do you have a project or inquiry? Write me at:" 
          : "¿Tienes un proyecto o consulta? Escríbeme a:"}
      </p>
      <a href="mailto:dalembertbravo2@gmail.com" className="contact-btn">
        dalembertbravo2@gmail.com
      </a>
    </section>
  );
}