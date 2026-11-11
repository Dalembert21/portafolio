import React, { useEffect, useState } from "react";
import { loadHarrySprite } from "../../utils/harrySprite";
import "./Loader.css";

const LOADER_DURATION_MS = 1400;
const FADE_OUT_MS = 350;

export default function Loader({ lang, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [harrySrc, setHarrySrc] = useState(null);

  useEffect(() => {
    let isMounted = true;
    loadHarrySprite().then(({ src }) => {
      if (isMounted) setHarrySrc(src);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let rafId;
    let fadeTimeout;
    const startTime = performance.now();

    const animateProgress = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / LOADER_DURATION_MS, 1);
      // Smooth ease-in-out curve
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(eased * 100);

      if (t < 1) {
        rafId = requestAnimationFrame(animateProgress);
      } else {
        setIsFadingOut(true);
        fadeTimeout = setTimeout(() => {
          onComplete();
        }, FADE_OUT_MS);
      }
    };

    rafId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fadeTimeout);
    };
  }, [onComplete]);

  // Keep Snitch slightly ahead of Harry across the track
  const harryLeftPct = 4 + (progress / 100) * 70;
  const snitchLeftPct = 20 + (progress / 100) * 72;

  return (
    <div
      className={`harry-loader-overlay ${isFadingOut ? "fade-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={lang === "es" ? "Cargando portafolio" : "Loading portfolio"}
    >
      <div className="harry-loader-content">
        <div className="harry-loader-stage">
          {harrySrc && (
            <div
              className="loader-harry-wrapper"
              style={{ left: `${harryLeftPct}%` }}
            >
              <img
                src={harrySrc}
                alt="Harry Potter"
                className="loader-harry-img"
              />
            </div>
          )}

          <div
            className="loader-snitch-wrapper"
            style={{ left: `${snitchLeftPct}%` }}
          >
            <div className="snitch-body">
              <div className="wing left-wing"></div>
              <div className="wing right-wing"></div>
            </div>
          </div>
        </div>

        <div className="harry-loader-track">
          <div
            className="harry-loader-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="harry-loader-text">
          {lang === "es" ? "Cargando..." : "Loading..."}{" "}
          <span>{Math.round(progress)}%</span>
        </p>
      </div>
    </div>
  );
}

