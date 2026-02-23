function Skills() {
  const skills = [
    { name: "Java", percent: 90 },
    { name: "Python", percent: 85 },
    { name: "React", percent: 75 },
    { name: "SQL", percent: 83 },
    { name: "Spring Boot", percent: 70 },
    { name: "Swift", percent: 70 },
  ];

  return (
    <div
      className="
      min-h-screen pt-28 px-8 transition-colors duration-500
      
      /* Light Mode Background */
      bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]
      
      /* Dark Mode Background */
      dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
      "
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-14
        text-gray-800 dark:text-white transition-colors duration-500">
        Core Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            relative p-6 rounded-2xl transition duration-500
            
            /* Light Mode Card */
            bg-white/70 backdrop-blur-lg
            border border-gray-200
            shadow-lg
            
            /* Dark Mode Card */
            dark:bg-white/5
            dark:border-white/10
            
            hover:border-blue-500
            hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
            "
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-6">
              
              {/* Glowing Icon */}
              <div
                className="
                w-10 h-10 rounded-full flex items-center justify-center
                bg-blue-500/20
                shadow-[0_0_15px_rgba(59,130,246,0.7)]
                "
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>

              {/* Skill Name */}
              <h2 className="text-lg font-bold 
                text-gray-800 dark:text-white">
                {skill.name}
              </h2>
            </div>

            {/* Proficiency */}
            <div className="flex justify-between text-sm mb-2 
              text-gray-600 dark:text-gray-400">
              <span>Proficiency</span>
              <span>{skill.percent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="
                h-2 rounded-full
                bg-gradient-to-r from-blue-500 to-purple-600
                transition-all duration-700
                "
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;