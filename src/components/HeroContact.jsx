import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

function HeroContact() {
  return (
    <div
      className="
      min-h-screen pt-24 px-6 md:px-16
      transition-colors duration-500
      
      bg-[radial-gradient(circle_at_top,_#f1f5f9,_#e2e8f0)]
      dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
      "
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Vertical Contact Icons */}
          <div className="absolute -left-16 top-10 hidden md:flex flex-col gap-6">
            {[Mail, Phone, MapPin].map((Icon, index) => (
              <div
                key={index}
                className="
                w-12 h-12 flex items-center justify-center
                rounded-xl
                bg-white/70 dark:bg-white/5
                backdrop-blur-lg
                border border-gray-300 dark:border-white/10
                hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
                transition"
              >
                <Icon className="text-cyan-400" size={20} />
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            Hi, I'm{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
              Revanth
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer & Full Stack Developer
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mb-10">
            <button
              className="
              px-6 py-3 rounded-xl font-semibold
              bg-cyan-500 text-white
              hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
              transition"
            >
              Hire Me
            </button>

            <button
              className="
              px-6 py-3 rounded-xl font-semibold
              border border-cyan-400 text-cyan-400
              hover:bg-cyan-400 hover:text-black
              hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
              transition"
            >
              View Projects
            </button>
          </div>

          {/* Quote */}
          <div
            className="
            p-6 rounded-xl
            bg-white/70 dark:bg-white/5
            backdrop-blur-lg
            border border-gray-300 dark:border-white/10"
          >
            <p className="italic text-gray-700 dark:text-gray-300">
              "Crafting scalable, modern applications with clean design and
              powerful backend architecture."
            </p>
            <div className="mt-4 h-[1px] bg-gray-300 dark:bg-white/10"></div>
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
          p-10 rounded-2xl
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          border border-gray-300 dark:border-white/10
          "
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Get In Touch
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="
              w-full p-3 rounded-lg
              bg-gray-100 dark:bg-black/40
              border border-gray-300 dark:border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
              outline-none text-gray-800 dark:text-white"
            />

            <input
              type="email"
              placeholder="Email"
              className="
              w-full p-3 rounded-lg
              bg-gray-100 dark:bg-black/40
              border border-gray-300 dark:border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
              outline-none text-gray-800 dark:text-white"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="
              w-full p-3 rounded-lg
              bg-gray-100 dark:bg-black/40
              border border-gray-300 dark:border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
              outline-none text-gray-800 dark:text-white"
            ></textarea>

            <button
              className="
              w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2
              bg-gradient-to-r from-cyan-400 to-white
              text-black
              hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
              transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroContact;