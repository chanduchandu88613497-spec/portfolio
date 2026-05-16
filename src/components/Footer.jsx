import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full py-8 mt-20 border-t border-white/10 bg-black/50 backdrop-blur-md">
      {/* Animated Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Chandu</span>. All rights reserved.
        </p>
        
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
