import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Technologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Complements from "./components/Complements/Complements";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("en");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  const isHome = currentPath === '/' || currentPath === '/index.html';

  return (
    <div>
      {isLoading ? (
        <Loader lang={lang} onComplete={handleLoaderComplete} />
      ) : (
        <CustomCursor />
      )}
      <Header 
        toggleTheme={() => setDarkMode(!darkMode)} 
        toggleLang={() => setLang(lang === "en" ? "es" : "en")}
        lang={lang}
        darkMode={darkMode}
      />
      <main>
        {isHome ? (
          <>
            <Hero lang={lang} />
            <Skills lang={lang} />
            <Projects lang={lang} />
            <About lang={lang} />
            <Complements lang={lang} />
            <Contact lang={lang} />
          </>
        ) : (
          <NotFound lang={lang} />
        )}
      </main>
    </div>
  );
}

export default App;