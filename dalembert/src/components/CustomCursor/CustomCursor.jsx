import React, { useEffect, useState, useRef } from "react";
import "./CustomCursor.css";
import { loadHarrySprite } from "../../utils/harrySprite";

const SNITCH_SIZE = 25;
const HARRY_HEIGHT = 92;
const VIEWPORT_PADDING = 12;
const HARRY_MAX_SPEED = 260; // px/s capped so speed is consistent across any screen size & Hz
const HARRY_STOP_DISTANCE = 46;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [harryDirection, setHarryDirection] = useState(1);
  const [harryData, setHarryData] = useState(null);

  const snitchRef = useRef(null);
  const harryRef = useRef(null);

  const isVisibleRef = useRef(false);
  const hasInitializedRef = useRef(false);
  const harryDirRef = useRef(1);
  const harryDimsRef = useRef({ width: 55, height: HARRY_HEIGHT });

  const targetPosRef = useRef({ x: 0, y: 0 });
  const snitchPosRef = useRef({ x: 0, y: 0 });
  const harryPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let isCancelled = false;
    loadHarrySprite().then(({ src, ratio }) => {
      if (isCancelled) return;
      const renderedWidth = Math.round(HARRY_HEIGHT * ratio);
      harryDimsRef.current = { width: renderedWidth, height: HARRY_HEIGHT };
      setHarryData({
        src,
        width: renderedWidth,
        height: HARRY_HEIGHT,
      });
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");
    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    let scrollTimeout;
    let rafId;
    let lastTime = performance.now();

    const getClampedHarryBounds = () => {
      const { width: harryW, height: harryH } = harryDimsRef.current;
      const vw = document.documentElement.clientWidth || window.innerWidth;
      const vh = document.documentElement.clientHeight || window.innerHeight;
      return {
        minX: VIEWPORT_PADDING,
        maxX: Math.max(VIEWPORT_PADDING, vw - harryW - VIEWPORT_PADDING),
        minY: VIEWPORT_PADDING,
        maxY: Math.max(VIEWPORT_PADDING, vh - harryH - VIEWPORT_PADDING),
        harryW,
        harryH,
        vw,
        vh,
      };
    };

    const updateMousePosition = (e) => {
      if (e.pointerType === "touch") return;

      targetPosRef.current = { x: e.clientX, y: e.clientY };

      if (!hasInitializedRef.current) {
        hasInitializedRef.current = true;
        const bounds = getClampedHarryBounds();
        const snitchX = clamp(e.clientX - SNITCH_SIZE / 2, 0, Math.max(0, bounds.vw - SNITCH_SIZE));
        const snitchY = clamp(e.clientY - SNITCH_SIZE / 2, 0, Math.max(0, bounds.vh - SNITCH_SIZE));
        snitchPosRef.current = { x: snitchX, y: snitchY };

        harryPosRef.current = {
          x: clamp(e.clientX - bounds.harryW - 24, bounds.minX, bounds.maxX),
          y: clamp(e.clientY - bounds.harryH / 2, bounds.minY, bounds.maxY),
        };
      }

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      hasInitializedRef.current = false;
      setIsVisible(false);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (isVisibleRef.current) {
        const bounds = getClampedHarryBounds();

        // Snitch sigue el puntero con respuesta rápida y suave, sin salir de la pantalla
        const snitchTargetX = clamp(
          targetPosRef.current.x - SNITCH_SIZE / 2,
          0,
          Math.max(0, bounds.vw - SNITCH_SIZE)
        );
        const snitchTargetY = clamp(
          targetPosRef.current.y - SNITCH_SIZE / 2,
          0,
          Math.max(0, bounds.vh - SNITCH_SIZE)
        );
        const snitchAlpha = 1 - Math.exp(-28 * dt);
        snitchPosRef.current.x += (snitchTargetX - snitchPosRef.current.x) * snitchAlpha;
        snitchPosRef.current.y += (snitchTargetY - snitchPosRef.current.y) * snitchAlpha;

        if (snitchRef.current) {
          snitchRef.current.style.transform = `translate3d(${snitchPosRef.current.x}px, ${snitchPosRef.current.y}px, 0)`;
        }

        // Harry persigue la Snitch a velocidad máxima constante (independiente de tamaño de pantalla o Hz)
        const harryCenterX = harryPosRef.current.x + bounds.harryW / 2;
        const harryCenterY = harryPosRef.current.y + bounds.harryH / 2;
        const snitchCenterX = snitchPosRef.current.x + SNITCH_SIZE / 2;
        const snitchCenterY = snitchPosRef.current.y + SNITCH_SIZE / 2;

        const dx = snitchCenterX - harryCenterX;
        const dy = snitchCenterY - harryCenterY;
        const dist = Math.hypot(dx, dy);

        if (dist > HARRY_STOP_DISTANCE) {
          const remaining = dist - HARRY_STOP_DISTANCE;
          const speed = Math.min(HARRY_MAX_SPEED, remaining * 3.0);
          const step = Math.min(remaining, speed * dt);

          harryPosRef.current.x += (dx / dist) * step;
          harryPosRef.current.y += (dy / dist) * step;

          if (Math.abs(dx) > 6) {
            const nextDir = dx > 0 ? 1 : -1;
            if (nextDir !== harryDirRef.current) {
              harryDirRef.current = nextDir;
              setHarryDirection(nextDir);
            }
          }
        }

        // Mantener a Harry siempre dentro de los límites visibles de la pantalla
        harryPosRef.current.x = clamp(harryPosRef.current.x, bounds.minX, bounds.maxX);
        harryPosRef.current.y = clamp(harryPosRef.current.y, bounds.minY, bounds.maxY);

        if (harryRef.current) {
          harryRef.current.style.transform = `translate3d(${harryPosRef.current.x}px, ${harryPosRef.current.y}px, 0)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", updateMousePosition, { passive: true });
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("blur", handleMouseLeave);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", updateMousePosition);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("blur", handleMouseLeave);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(scrollTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={snitchRef}
        className={`snitch-cursor ${isScrolling ? "scrolling" : ""}`}
        style={{
          transform: `translate3d(${snitchPosRef.current.x}px, ${snitchPosRef.current.y}px, 0)`,
        }}
      >
        <div className="snitch-body">
          <div className="wing left-wing"></div>
          <div className="wing right-wing"></div>
        </div>
      </div>

      {harryData && (
        <div
          ref={harryRef}
          className="harry-chaser-container"
          style={{
            width: harryData.width,
            height: harryData.height,
            transform: `translate3d(${harryPosRef.current.x}px, ${harryPosRef.current.y}px, 0)`,
          }}
        >
          <div style={{ transform: `scaleX(${harryDirection})`, transformOrigin: "center" }}>
            <img
              src={harryData.src}
              alt="Harry Chaser"
              className="harry-chaser"
            />
          </div>
        </div>
      )}
    </>
  );
}
