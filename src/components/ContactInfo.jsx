import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        {/* Header - Switches between gray-800 and white */}
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Get in Touch
        </h2>

        {/* Description - Switches between gray-600 and gray-400 */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-md">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Feel free to reach out!
        </p>

        <div className="space-y-8">
          {/* Email Block */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-cyan-400/40 shadow-md dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Mail className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
              <p className="text-gray-800 dark:text-white font-semibold">
                shahulibrahim005@gmail.com
              </p>
            </div>
          </div>

          {/* Location Block */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-cyan-400/40 shadow-md dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <MapPin className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
              <p className="text-gray-800 dark:text-white font-semibold">
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Phone Block */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-cyan-400/40 shadow-md dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Phone className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Phone</p>
              <p className="text-gray-800 dark:text-white font-semibold">
                +91 91508 22772
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}