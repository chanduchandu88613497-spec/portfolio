import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "AI Image Captioning System",
      description: "A machine learning application that generates contextual captions for user-uploaded images using advanced neural networks and NLP techniques.",
      tech: ["React", "Python", "Flask", "Deep Learning"],
      github: "https://github.com/chanduchandu88613497-spec",
      demo: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Smart Attendance System",
      description: "An automated attendance tracking system leveraging facial recognition to streamline classroom or workplace roll calls with high accuracy.",
      tech: ["Python", "OpenCV", "Machine Learning", "SQLite"],
      github: "https://github.com/chanduchandu88613497-spec",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ML Prediction App",
      description: "A web-based interface for various machine learning prediction models, allowing users to input data and receive instant analytical forecasts.",
      tech: ["JavaScript", "React", "Python", "Scikit-Learn"],
      github: "https://github.com/chanduchandu88613497-spec",
      demo: "#",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Premium Portfolio",
      description: "A highly modern, futuristic animated personal portfolio website built with React, Tailwind CSS, and Framer Motion to showcase skills and projects.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/chanduchandu88613497-spec",
      demo: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 inline-block relative">
          Featured <span className="neon-text">Projects</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col"
          >
            {/* Image Placeholder with Gradient & Hover Effect */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <h3 className="text-2xl font-bold text-white/80 z-10 tracking-wider mix-blend-overlay">{project.title.substring(0, 2)}</h3>
              
              {/* Overlay Links on Hover */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm bg-black/30">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium text-cyan-300 bg-cyan-900/30 px-2.5 py-1 rounded-full border border-cyan-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
