import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  // 1. Default state set to true for Dark Mode
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // 2. Apply classes based on the default state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="
      min-h-screen flex flex-col transition-colors duration-500
      /* Global Background logic */
      bg-[radial-gradient(circle_at_top,_#f1f5f9,_#e2e8f0)]
      dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
    ">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;