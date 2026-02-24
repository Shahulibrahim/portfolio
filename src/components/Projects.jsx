import { Github, Code2, Database, MessageSquare, Cpu } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React, Tailwind CSS, and modern UI design principles for a responsive and interactive experience.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      tech: ["React", "Tailwind", "Vite"],
      code: "https://github.com/Shahulibrahim/portfolio",
    },
    {
      title: "Smart Helmet Detection",
      desc: "Real-time Computer Vision system using YOLOv8 to detect helmet compliance. Trained on custom Roboflow datasets with GPU acceleration to enhance road safety monitoring.",
      image: "/certificates/helmet.png", 
      tech: ["Python", "OpenCV", "YOLOv8"],
      code: "https://github.com/Shahulibrahim/Smart_Helmet_Detection",
    },
    {
      title: "Attendance Automation System",
      desc: "Excel VBA tool that automates attendance tracking and sends real-time WhatsApp alerts to parents, reducing manual error and teacher workload.",
      image: "/certificates/attendance.png", 
      tech: ["Excel", "VBA", "WhatsApp API"],
      code: "https://github.com/Shahulibrahim/attendance-automation-excel",
    },
  ];

  return (
    <div className="
      min-h-screen pt-28 px-8 transition-colors duration-500
      bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]
      dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
    ">
      
      <h1 className="text-4xl font-bold text-center mb-14 transition-colors duration-500
        text-gray-800 dark:text-white">
        Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group relative rounded-2xl overflow-hidden transition-all duration-500
              bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg
              dark:bg-white/5 dark:border-white/10
              hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
              hover:-translate-y-2
            "
          >
            {/* Image Section */}
            <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image'; }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold transition-colors duration-500
                text-gray-800 dark:text-white group-hover:text-blue-500">
                {project.title}
              </h3>

              <p className="text-sm line-clamp-4 leading-relaxed transition-colors duration-500
                text-gray-600 dark:text-gray-400">
                {project.desc}
              </p>

              {/* Tech Icons/Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider px-3 py-1 rounded-md border 
                      border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10"
                  >
                    {tech === "Python" && <Cpu size={12} />}
                    {tech === "Excel" && <Database size={12} />}
                    {tech === "WhatsApp API" && <MessageSquare size={12} />}
                    {tech === "VBA" && <Code2 size={12} />}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-300
                    border border-blue-500 text-blue-600 dark:text-white
                    hover:bg-blue-500 hover:text-white
                    shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                  "
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;