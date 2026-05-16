import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden font-sans">
      
      <Navigation />
      {/* Dynamic Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full pointer-events-none filter blur-[100px] z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.5 }}
      />

      {/* Background Grid & Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content Area */}
      <main id="main-scroll-container" className="flex-1 h-screen overflow-y-auto scroll-smooth relative md:pl-64 pb-20 md:pb-0 z-10">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
