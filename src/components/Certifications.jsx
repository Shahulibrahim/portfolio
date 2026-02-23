function Certification() {
  const certificates = [
    {
      title: "Hackerrank",
      description: "Problem Solving & Programming Certification\nValidated coding proficiency.",
      image: "/certificates/hackerrank.png",
    },
    {
      title: "NPTEL",
      description: "Technical Coursework Certification\nRecognized by IIT platform.",
      image: "/certificates/nptel.png",
    },
    {
      title: "Automation",
      description: "Automation Testing Certification\nHands-on testing expertise.",
      image: "/certificates/automation.png",
    },
    {
      title: "Oracle",
      description: "Oracle Certified Foundations Associate",
      image: "/certificates/oracle.png",
    },
    {
      title: "Spring Board",
      description: "Professional Development Certification\nIndustry-ready training.",
      image: "/certificates/springboard.png",
    },
    {
      title: "Adobe",
      description: "Adobe Creative Certification\nDesign & digital tools mastery.",
      image: "/certificates/adobe.png",
    },
  ];

  return (
    <div
      className="
      min-h-screen pt-28 px-8 transition-colors duration-500
      
      /* Light Mode Background */
      bg-[radial-gradient(circle_at_top,_#f1f5f9,_#e2e8f0)]
      
      /* Dark Mode Background */
      dark:bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]
      "
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-14
        text-gray-800 dark:text-white">
        Certifications
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="
            rounded-2xl overflow-hidden transition duration-500
            
            /* Glass Container */
            bg-white/70 dark:bg-white/5
            backdrop-blur-lg
            
            border border-gray-200 dark:border-white/10
            
            hover:border-blue-500
            hover:shadow-[0_0_20px_rgba(0,150,255,0.5)]
            "
          >
            {/* Image Section */}
            <div
              className="
              h-48 flex items-center justify-center p-6
              bg-white/60 dark:bg-black/40
              "
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="
                max-h-full object-contain
                drop-shadow-[0_0_10px_rgba(0,150,255,0.3)]
                "
              />
            </div>

            {/* Footer Section */}
            <div className="bg-blue-900 dark:bg-blue-800 p-6">
              <h2 className="text-white font-bold text-lg mb-2">
                {cert.title}
              </h2>
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;