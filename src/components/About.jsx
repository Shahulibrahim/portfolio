import React from 'react';
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen flex flex-col md:flex-row items-center justify-center
        px-10 py-20 transition-colors duration-500
        /* Theme matched to your Skills.js reference */
        bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]
        dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
      "
    >
      {/* Left Side: Profile Card */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <div className="
          w-72 h-96 flex items-center justify-center rounded-2xl border transition-all duration-500
          /* Light Mode Glassmorphism */
          bg-white/70 backdrop-blur-lg border-gray-200 shadow-lg
          /* Dark Mode Glassmorphism */
          dark:bg-white/5 dark:border-white/10
          /* Hover Glow */
          hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
        ">
          {/* Centered Circular Photo */}
          <div className="relative group">
            {/* Subtle Gradient Ring behind the photo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            
            <img
              src="/certificates/Shahul_Blazer-photoaidcom-cropped.jpeg" 
              alt="Revanth Profile"
              className="
                relative w-52 h-52 object-cover rounded-full 
                border-4 border-white dark:border-gray-800 
                shadow-2xl transition-transform duration-500 
                group-hover:scale-105
              "
            />
          </div>
        </div>
      </motion.div>

      {/* Right Side: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 space-y-6 max-w-xl"
      >
        <h2 className="text-4xl font-bold transition-colors duration-500
          text-blue-600 dark:text-cyan-400">
          About Me
        </h2>
        
        <p className="leading-relaxed transition-colors duration-500
          text-gray-800 dark:text-gray-300">
          I am a Full Stack Developer and Computer Science Engineering student 
          with a passion for building complete, scalable web ecosystems. 
          I specialize in bridging the gap between dynamic user interfaces and complex 
          server-side logic.
        </p>

        <p className="leading-relaxed transition-colors duration-500
          text-gray-800 dark:text-gray-300">
          My technical toolkit is anchored in React for the frontend, while I leverage both 
          Java (Spring Boot) and Python for backend architecture. I focus on delivering 
          high-performance, secure, and maintainable software solutions.
        </p>

        {/* Feature Tags */}
        <div className="pt-4 flex flex-wrap gap-4">
          <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-sm font-semibold">
            Full Stack Development
          </div>
          <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold">
            AI Automation
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;