import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const timeline = [
    {
      year: "Present",
      title: "Computer Science & Engineering",
      description: "PES College of Engineering. Currently in progress with a CGPA of 8.94. Developing core computing principles, algorithms, and full stack applications.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      year: "Previous",
      title: "Pre-University Education",
      description: "Vivekananda PU College, Bannur. Completed with a percentage of 90.16%. Built a strong foundation in science and mathematics.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      year: "2023 - Present",
      title: "Web Development Journey",
      description: "Mastered frontend and backend technologies including React, Node.js, and databases to build scalable full-stack applications.",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      year: "Continuous",
      title: "Hackathons & Certifications",
      description: "Actively participating in coding competitions, hackathons, and earning professional certifications to stay ahead in the tech curve.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 inline-block relative">
          My <span className="neon-text">Journey</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
        </h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2"></div>

        {timeline.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`relative flex items-center justify-between md:justify-normal mb-8 group ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Timeline Dot */}
            <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${item.gradient} transform -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-150 transition-transform z-10`}></div>
            
            <div className="w-full md:w-5/12 pl-12 md:pl-0">
              <div className={`glass-card p-6 rounded-2xl hover:border-gray-600 transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-gray-300 mb-3">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
