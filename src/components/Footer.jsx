import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer
      className="
      mt-24 py-12 transition-colors duration-500 text-center
      bg-gradient-to-b 
      from-gray-200 to-gray-300
      dark:from-[#0f172a] dark:to-black
      "
    >
      {/* Social Icons Row */}
      <div className="flex justify-center gap-6 mb-8">

        {/* GitHub */}
        <a
          href="https://github.com/Shahulibrahim"
          target="_blank"
          rel="noopener noreferrer"
          className="
          w-12 h-12 flex items-center justify-center
          rounded-xl
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          border border-gray-300 dark:border-white/10
          hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
          transition duration-300"
        >
          <Github className="text-gray-800 dark:text-white" size={20} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/shahul-hameed-ibrahim"
          target="_blank"
          rel="noopener noreferrer"
          className="
          w-12 h-12 flex items-center justify-center
          rounded-xl
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          border border-gray-300 dark:border-white/10
          hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
          transition duration-300"
        >
          <Linkedin className="text-gray-800 dark:text-white" size={20} />
        </a>

        {/* LeetCode (Custom SVG) */}
        <a
          href="https://leetcode.com/u/shahul_ibrahim"
          target="_blank"
          rel="noopener noreferrer"
          className="
          w-12 h-12 flex items-center justify-center
          rounded-xl
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          border border-gray-300 dark:border-white/10
          hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
          transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="currentColor"
            className="w-5 h-5 text-gray-800 dark:text-white"
          >
            <path d="M25 2L10 17l4 4L25 10l11 11 4-4L25 2zM8 25h34v6H8z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:shahulibrahim005@gmail.com"
          className="
          w-12 h-12 flex items-center justify-center
          rounded-xl
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          border border-gray-300 dark:border-white/10
          hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]
          transition duration-300"
        >
          <Mail className="text-gray-800 dark:text-white" size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-800 dark:text-white text-sm">
        © 2026 Shahul. Built with{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
          React
        </span>
      </p>
    </footer>
  );
}

export default Footer;