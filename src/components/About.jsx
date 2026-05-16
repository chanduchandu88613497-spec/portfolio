import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { id: 1, icon: <Code2 size={24} className="text-cyan-400" />, value: "10+", label: "Projects Completed" },
    { id: 2, icon: <BrainCircuit size={24} className="text-purple-400" />, value: "5+", label: "Technologies Learned" },
    { id: 3, icon: <Award size={24} className="text-blue-400" />, value: "3+", label: "Certifications" }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 inline-block relative">
          About <span className="neon-text">Me</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 glass-card p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-[50px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
          <h3 className="text-2xl font-bold mb-4 text-gray-200">Passionate Problem Solver</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            I am a dedicated Computer Science student with a profound interest in Artificial Intelligence, Machine Learning, and web technologies. My journey in tech is driven by an insatiable curiosity to understand how intelligent systems can solve complex real-world problems.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My career goal is to become a versatile Software Engineer who bridges the gap between sophisticated ML models and intuitive user interfaces. I thrive in environments that challenge me to learn, adapt, and innovate.
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`glass-card p-6 rounded-2xl border border-gray-800 hover:border-${stat.icon.props.className.split('-')[1]}-500/50 transition-colors flex flex-col items-center justify-center text-center`}
            >
              <div className="p-3 bg-gray-800/50 rounded-full mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
