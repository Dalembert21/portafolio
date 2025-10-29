import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects({ lang }) {
  const projects = [
    {
      title: "Vehicle Rental System",
      tools: ["React", "PHP", "MySQL"],
      desc: {
        en: "Web platform for managing vehicle rentals with role-based access.",
        es: "Plataforma web para gestión de alquiler de vehículos con roles."
      },
    },
    {
      title: "E-Commerce Supermarket",
      tools: ["Firebase", "Android", "Java"],
      desc: {
        en: "Mobile app for shopping and order tracking in real-time.",
        es: "App móvil para compras y seguimiento de pedidos en tiempo real."
      },
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>{lang === "en" ? "Projects" : "Proyectos"}</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div key={i} className="project-card" whileHover={{ scale: 1.03 }}>
            <h3>{p.title}</h3>
            <p>{p.desc[lang]}</p>
            <span className="tools">🔧 {p.tools.join(", ")}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
