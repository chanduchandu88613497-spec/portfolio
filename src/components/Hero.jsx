import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderOpen } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 pt-20 pb-12">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-center lg:text-left z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          Welcome to my portfolio
        </motion.div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="neon-text">Chandu</span>
        </h1>
        
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-300 mb-6">
          Aspiring Software Engineer & <br className="hidden lg:block"/> AI Enthusiast
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
          I am a 3rd Year Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, and building scalable Full Stack Web Applications. Let's build the future together.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all"
          >
            <FolderOpen size={20} />
            View Projects
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="/resume.png"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-white font-semibold hover:border-cyan-500/50 transition-all"
          >
            <Download size={20} />
            Resume
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1, rotate: 5, color: "#06b6d4" }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/chanduchandu88613497-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:border-cyan-500/50 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={24} />
          </motion.a>
        </div>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center relative z-10"
      >
        <div className="relative w-72 h-72 lg:w-96 lg:h-96 group perspective">
          {/* Glowing Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-[spin_10s_linear_infinite] group-hover:border-cyan-400 transition-colors duration-500"></div>
          <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-[spin_15s_linear_infinite_reverse] group-hover:border-purple-400 transition-colors duration-500"></div>
          <div className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Image Container */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-800 bg-gray-900 shadow-[0_0_30px_rgba(6,182,212,0.3)] relative z-10 flex items-center justify-center"
          >
            <img 
              src="/profile.jpg" 
              alt="Chandu Profile" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
