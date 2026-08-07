import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";
import harryPixel from "../../assets/harry_pixel.png";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [harryDirection, setHarryDirection] = useState(1);
  const [harrySrc, setHarrySrc] = useState(harryPixel);
  const prevX = useRef(0);

  useEffect(() => {
    // Eliminar el fondo negro de la imagen generada usando Canvas
    const img = new Image();
    img.src = harryPixel;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        // Si el píxel es oscuro (fondo negro o casi negro)
        if (data[i] < 35 && data[i+1] < 35 && data[i+2] < 35) {
          data[i+3] = 0; // Hacerlo transparente
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setHarrySrc(canvas.toDataURL());
    };
  }, []);

  useEffect(() => {
    let scrollTimeout;

    const updateMousePosition = (e) => {
      if (e.clientX > prevX.current) {
        setHarryDirection(1); // Moviéndose a la derecha
      } else if (e.clientX < prevX.current) {
        setHarryDirection(-1); // Moviéndose a la izquierda
      }
      prevX.current = e.clientX;

      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('flip-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("scroll", handleScroll, true); // true for capturing inner scrolls
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll, true);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(scrollTimeout);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className={`snitch-cursor ${isScrolling ? "scrolling" : ""}`}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: 1,
          rotate: isScrolling ? 25 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15, 
          mass: 0.2 
        }}
        style={{
          width: 25,
          height: 25
        }}
      >
        <div className="snitch-body">
          <div className="wing left-wing"></div>
          <div className="wing right-wing"></div>
        </div>
      </motion.div>

      {/* Harry Chasing the Snitch */}
      <motion.div
        className="harry-chaser-container"
        animate={{
          x: mousePosition.x - 40, // Offset so he's slightly behind/center
          y: mousePosition.y - 80  // Offset so he is positioned correctly relative to cursor
        }}
        transition={{ 
          type: "spring", 
          stiffness: 10, // Very low stiffness = slow
          damping: 8,   // Low damping = loose
          mass: 3       // High mass = slow start and stop
        }}
      >
        <div style={{ transform: `scaleX(${harryDirection})`, transformOrigin: "center" }}>
          <img 
            src={harrySrc} 
            alt="Harry Chaser" 
            className="harry-chaser" 
          />
        </div>
      </motion.div>
    </>
  );
}
