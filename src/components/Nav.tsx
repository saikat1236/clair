import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 text-white pointer-events-none">
    <div className="pointer-events-auto">
      <Link to="/" className="font-bold text-[22px] tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2">
        {/* <img src="https://framerusercontent.com/images/nl2zWHDkDWaUKSAqJrHKBGA3Oc.svg" alt="Clair Logo" className="w-[83px] h-[26px]" /> */}
        
        <span className="text-3xl">Neuérde</span>
      </Link>
    </div>
    
    <div className="hidden md:flex items-center gap-8 text-[16px] font-medium bg-[rgba(255,255,255,0.03)] border border-white/10 px-8 py-3 rounded-full backdrop-blur-md pointer-events-auto">
      <Link to="/about" className="hover:text-[var(--color-clair-mint)] transition-colors">About</Link>
      <Link to="/works" className="hover:text-[var(--color-clair-mint)] transition-colors">Works</Link>
      <Link to="/contact" className="hover:text-[var(--color-clair-mint)] transition-colors">Contact</Link>
    </div>

    <div className="pointer-events-auto">
      <Link to="/contact" className="bg-[var(--color-clair-mint)] text-[var(--color-clair-dark)] px-[24px] py-[14px] rounded-full font-semibold text-[16px] hover:scale-105 transition-transform duration-300 inline-block">
        Start Your Project
      </Link>
    </div>
  </nav>
);

export default Nav;
