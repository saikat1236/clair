import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-50 text-white pointer-events-none">
      <div className="pointer-events-auto">
        <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
          <img src={logo} alt="Neuérde Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover" />
          <span className="font-bold text-[22px] tracking-tight text-neuerde-gradient hidden sm:inline">Neuérde</span>
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-[16px] font-medium bg-[rgba(255,255,255,0.03)] border border-white/10 px-8 py-3 rounded-full backdrop-blur-md pointer-events-auto">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-[var(--color-neuerde-mint)] transition-colors">{link.label}</Link>
        ))}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto">
        <Link to="https://calendly.com/contact-neuerde/sustainable-brand-growth-consultation" className="hidden sm:inline-block bg-neuerde-gradient text-black px-[20px] md:px-[24px] py-[10px] md:py-[14px] rounded-full font-semibold text-[14px] md:text-[16px] hover:scale-105 transition-transform duration-300">
          Start Your Project
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/10"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[var(--color-neuerde-dark)] border border-white/10 rounded-3xl p-8 flex flex-col gap-6 md:hidden pointer-events-auto shadow-2xl z-40 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold hover:text-[var(--color-neuerde-mint)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="https://calendly.com/contact-neuerde/sustainable-brand-growth-consultation"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-neuerde-gradient text-black text-center py-4 rounded-2xl font-bold text-lg"
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
