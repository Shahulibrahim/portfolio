import { FaDownload } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6
                 transition-colors duration-500
                 bg-[radial-gradient(circle_at_top,_#f1f5f9,_#e2e8f0)]
                 dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]"
    >
      <p className="mb-4 text-lg text-gray-600 dark:text-cyan-400 font-medium">
        Welcome to my Portfolio
      </p>

      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-cyan-400 drop-shadow-sm">
          Shahul Hameed Ibrahim
        </span>
      </h1>

      <h2 className="text-xl mb-3 text-gray-700 dark:text-gray-300">
        Full Stack Developer | Java & Spring Boot
      </h2>

      <p className="max-w-xl mb-8 text-gray-600 dark:text-gray-400">
        Building scalable web applications and efficient database driven systems.
      </p>

      <div className="flex gap-6">
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl
                     dark:bg-cyan-500 dark:text-black font-bold shadow-lg hover:scale-105 transition"
        >
          <FaDownload /> Download Resume
        </a>

        <a
          href="#projects"
          className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl
                     dark:border-cyan-400 dark:text-cyan-400 font-bold hover:bg-blue-50 dark:hover:bg-cyan-400/10 transition"
        >
          <FiCode /> View Projects
        </a>
      </div>
    </section>
  );
}

export default Home;