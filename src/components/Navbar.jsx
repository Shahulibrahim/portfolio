import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full z-50 transition-colors duration-500 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        <h1 className="text-xl font-bold text-blue-600 dark:text-cyan-400">
          Shahul Hameed Ibrahim
        </h1>

        <div className="flex items-center gap-8 text-gray-800 dark:text-white font-medium">
           <Link to="/" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Home</Link>
           <Link to="/about" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">About</Link>
           <Link to="/skills" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Skills</Link>
           <Link to="/projects" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Projects</Link>
           <Link to="/certifications" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Certifications</Link>
           <Link to="/contact" className="hover:text-blue-500 dark:hover:text-cyan-400 transition">Contact</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-white/10 text-lg transition-all hover:scale-110"
          >
            {/* If dark mode is active, show Sun (to switch to light); else show Moon */}
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;