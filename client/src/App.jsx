import "./App.css";

import React, { useContext, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme; // add "light" or "dark" to body
  }, [theme]);

  return (
    <>
      <div>
       
        <Navbar />
      </div>
      <div>
        <section id="home" className="homeSection">
          <Home />
        </section>

        <section id="about" className="aboutSection">
          <About />
        </section>

        <section id="projects" className="projectsSection">
          <Projects />
        </section>

        <section id="contact" className="contactSection">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
