import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div
      className="
      min-h-screen pt-28 pb-12 px-6 md:px-16 transition-colors duration-500
      
      /* Light Mode Background */
      bg-[radial-gradient(circle_at_top,_#f1f5f9,_#e2e8f0)]
      
      /* Dark Mode Background */
      dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Info Component */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <ContactInfo />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
          flex-1 w-full p-8 md:p-10 rounded-2xl transition-colors duration-500
          
          /* Glass Container Styles */
          bg-white/70 dark:bg-white/5
          backdrop-blur-lg
          border border-gray-200 dark:border-white/10
          shadow-xl dark:shadow-2xl
          "
        >
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-gray-800 dark:text-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-gray-800 dark:text-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="How can I help you?"
                className="w-full p-3 rounded-lg bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-gray-800 dark:text-white transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white dark:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}