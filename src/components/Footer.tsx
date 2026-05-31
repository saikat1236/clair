import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="bg-[var(--color-neuerde-dark)] text-white px-6 pt-48 pb-12 border-t border-white/10 relative z-10">
    <div className="max-w-[1200px] mx-auto flex flex-col gap-32">
      
      {/* Top Row: Giant Logo and Link Groups */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
        
        {/* Left: Giant Logo */}
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Neuérde Logo" className="w-20 h-20 md:w-32 md:h-32 rounded-3xl object-cover" />
            <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter leading-[0.8] text-neuerde-gradient">Neuérde</h1>
          </div>

          <div className="flex flex-col gap-8 max-w-sm">
            <h3 className="text-[20px] font-semibold tracking-tight">Stay Connected</h3>
            <p className="text-[#AEB0B6] text-[16px] leading-relaxed font-medium">
              Get the latest design trends, expert insights, and creative strategies delivered to your inbox. Subscribe now and never miss an update!
            </p>
            <div className="flex gap-2 relative group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-full px-8 py-5 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-neuerde-mint/30 transition-all duration-300"
              />
              <button className="bg-neuerde-gradient text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shrink-0 shadow-lg shadow-fuchsia-500/20">
                <ArrowRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Link Columns */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-12 lg:pt-12 w-full lg:w-auto">
          <div className="flex flex-col gap-5 text-[18px] font-medium">
            <Link to="/about" className="text-[#AEB0B6] hover:text-white transition-colors">About</Link>
            <Link to="/works" className="text-[#AEB0B6] hover:text-white transition-colors">Works</Link>
            <Link to="/blog" className="text-[#AEB0B6] hover:text-white transition-colors">Blog</Link>
            <Link to="/contact" className="text-[#AEB0B6] hover:text-white transition-colors">Contact</Link>
            <Link to="/legal/privacy" className="text-[#AEB0B6] hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms" className="text-[#AEB0B6] hover:text-white transition-colors">Term of Service</Link>
            <Link to="/404" className="text-[#AEB0B6] hover:text-white transition-colors">404</Link>
          </div>
          <div className="flex flex-col gap-5 text-[18px] font-medium">
            <a href="https://x.com/" target="_blank" rel="noreferrer" className="text-[#AEB0B6] hover:text-white transition-colors flex items-center justify-between group">
              Twitter <ArrowRight size={16} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity rotate-[-45deg]" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-[#AEB0B6] hover:text-white transition-colors flex items-center justify-between group">
              LinkedIn <ArrowRight size={16} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity rotate-[-45deg]" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-[#AEB0B6] hover:text-white transition-colors flex items-center justify-between group">
              Instagram <ArrowRight size={16} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity rotate-[-45deg]" />
            </a>
            <a href="https://behance.net/" target="_blank" rel="noreferrer" className="text-[#AEB0B6] hover:text-white transition-colors flex items-center justify-between group">
              Behance <ArrowRight size={16} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity rotate-[-45deg]" />
            </a>
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer" className="text-[#AEB0B6] hover:text-white transition-colors flex items-center justify-between group">
              Dribbble <ArrowRight size={16} className="text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity rotate-[-45deg]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Contact Info */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-t border-white/10 pt-16">
        <div className="flex flex-col gap-2 text-[14px] font-medium text-white/40">
           <p>© {new Date().getFullYear()} Saikat. All rights reserved.</p>
           <p>Designed by Saikat Biswas, Built with React</p>
        </div>

        <div className="flex flex-col items-end gap-2 text-right">
           <span className="text-[14px] font-bold uppercase tracking-widest text-white/40 mb-2">Let's Connect</span>
           <a href="tel:(510) 895-6500" className="text-[10px] md:text-[15px] font-semibold tracking-tight hover:text-[var(--color-neuerde-mint)] transition-colors opacity-90">(91) 7085959167</a>
           {/* <a href="mailto:hello@neuerde.com" className="text-[40px] md:text-[80px] font-bold tracking-tighter leading-none hover:text-[var(--color-neuerde-mint)] transition-colors mt-4">hello@neuerde.com</a> */}
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
