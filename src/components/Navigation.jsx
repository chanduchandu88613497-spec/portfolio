import React, { useState, useEffect } from 'react';
import { Home, User, Code2, FolderOpen, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={24} /> },
    { id: 'about', label: 'About', icon: <User size={24} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={24} /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen size={24} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={24} /> },
  ];

  useEffect(() => {
    // Note: IntersectionObserver should be set up in App.jsx or individually, 
    // but for simplicity we'll just handle clicks here for now, 
    // or rely on a global scroll listener on the main scrollable area.
    const scrollContainer = document.getElementById('main-scroll-container');
    
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = scrollContainer.scrollTop + 200; // offset

      sections.forEach(section => {
        if (!section) return;
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const scrollContainer = document.getElementById('main-scroll-container');
    const section = document.getElementById(id);
    if (scrollContainer && section) {
      scrollContainer.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col fixed top-0 left-0 w-64 h-full bg-black/40 backdrop-blur-xl border-r border-white/10 z-50 py-10 px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-wide">Chandu</h2>
          <p className="text-cyan-400 text-sm">Software Engineer</p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 w-full text-left ${
                  isActive 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-gray-500'}>{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]"
                  />
                )}
              </button>
            );
          })}
        </div>
        
        <div className="mt-auto pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Chandu</p>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50 flex justify-around items-center px-2 pb-safe">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${
                isActive ? 'text-cyan-400 -translate-y-2' : 'text-gray-500'
              }`}
            >
              <div className={`p-2 rounded-full ${isActive ? 'bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="mobileActiveIndicator"
                  className="absolute bottom-1 w-1 h-1 rounded-full bg-cyan-400"
                />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Navigation;
