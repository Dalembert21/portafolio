import React, { useState } from "react";
import "./Tools.css";

export default function Tools({ lang }) {
  const tools = [
    {
      name: "Git & GitHub",
      info: {
        es: "Controlddd de versiones y colaboración en proyectos.",
        en: "Version control and project collaboration."
      }
    },
    {
      name: "React",
      info: {
        es: "Biblioteca para crear interfaces modernas.",
        en: "Library for building modern UIs."
      }
    },
    {
      name: "PHP & MySQL",
      info: {
        es: "Desarrollo backend y gestión de bases de datos.",
        en: "Backend development and database management."
      }
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="tools">
      <h2>{lang === "es" ? "Herramientas" : "Tools"}</h2>
      {tools.map((tool, i) => (
        <div
          key={i}
          className={`tool ${open === i ? "open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <h3>{tool.name}</h3>
          {open === i && <p>{tool.info[lang]}</p>}
        </div>
      ))}
    </section>
  );
}
