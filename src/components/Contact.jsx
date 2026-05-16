import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 inline-block relative">
          Get In <span className="neon-text">Touch</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's connect!</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="mailto:chanduchandu88613497@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
              <div className="p-3 glass-card rounded-full group-hover:border-cyan-500/50">
                <Mail size={20} />
              </div>
              <span>chanduchandu88613497@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 text-gray-300 transition-colors group">
              <div className="p-3 glass-card rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span>8861349727</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 transition-colors group">
              <div className="p-3 glass-card rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span>Bannur town, Karnataka</span>
            </div>
            <a href="https://github.com/chanduchandu88613497-spec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
              <div className="p-3 glass-card rounded-full group-hover:border-cyan-500/50">
                <GithubIcon size={20} />
              </div>
              <span>GitHub Profile</span>
            </a>
            <a href="https://www.linkedin.com/in/chandu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
              <div className="p-3 glass-card rounded-full group-hover:border-cyan-500/50">
                <LinkedinIcon size={20} />
              </div>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 glass-card p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 filter blur-3xl rounded-full pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <div className="relative group">
              <input type="text" required id="name" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all peer" placeholder=" " />
              <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0f0f0f] px-2 peer-focus:px-2 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Name</label>
            </div>
            
            <div className="relative group">
              <input type="email" required id="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all peer" placeholder=" " />
              <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0f0f0f] px-2 peer-focus:px-2 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Email</label>
            </div>

            <div className="relative group">
              <textarea required id="message" rows="4" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all peer resize-none" placeholder=" "></textarea>
              <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#0f0f0f] px-2 peer-focus:px-2 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Message</label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-white transition-all ${isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'}`}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
