import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const text = {
    en: {
      hi: "👋 Hi, I'm",
      name: "Dalembert Bravo",
      role: "Full-Stack Developer",
      desc: "Building efficient and elegant solutions using modern web technologies."
    },
    es: {
      hi: "👋 ¡Hola, soy",
      name: "Dalembert Bravo",
      role: "Desarrollador Full-Stack",
      desc: "Construyendo soluciones eficientes y elegantes con tecnologías modernas."
    }
  };

  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {text[lang].hi} <span className="accent">{text[lang].name}</span>
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {text[lang].role}
      </motion.h3>
      <p>{text[lang].desc}</p>
    </section>
  );
}
