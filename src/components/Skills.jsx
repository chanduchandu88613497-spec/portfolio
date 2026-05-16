import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Design",
      color: "from-cyan-500 to-blue-500",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "Languages & Backend",
      color: "from-purple-500 to-pink-500",
      skills: ["C Programming", "C++", "Java", "Python", "Node.js"]
    },
    {
      title: "Tools & Others",
      color: "from-green-500 to-emerald-500",
      skills: ["Git", "GitHub", "REST APIs", "Vite"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 inline-block relative">
          Technical <span className="neon-text">Skills</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
          >
            {/* Glowing top border effect */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
            
            <h3 className="text-xl font-bold text-gray-200 mb-6 mt-2">{category.title}</h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
