import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const slideshowImages = [
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg',
  'https://framerusercontent.com/images/EVQIKBGUWs742tunlhesEdf97E.jpg',
  'https://framerusercontent.com/images/dRIV80CQSNOlbCC3occkaLgdXoo.jpg',
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg',
  'https://framerusercontent.com/images/EVQIKBGUWs742tunlhesEdf97E.jpg',
];

const Statement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        // Seamless loop: if we go beyond the second set, jump back to middle set
        if (next >= slideshowImages.length * 2) return slideshowImages.length;
        return next;
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev + 1) % (slideshowImages.length * 3));
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prev) => (prev - 1 + slideshowImages.length * 3) % (slideshowImages.length * 3));
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Calculate x position: (width + gap) * index, adjusted to center the active one
  // Item width is 450px (md), gap is 48px (12 * 4). Center offset is roughly half screen.
  const itemWidth = 450;
  const gap = 48;
  const offsetX = -(activeIndex * (itemWidth + gap)) + (typeof window !== 'undefined' ? window.innerWidth / 2 - itemWidth / 2 : 0);

  return (
    <section className="relative z-10 py-32 bg-[var(--color-clair-light)] text-[var(--color-clair-dark)] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[32px] md:text-[51px] font-medium leading-[1.2] max-w-4xl mx-auto text-[var(--color-clair-dark)]/80 tracking-tight"
        >
          At Clair°, every pixel counts. We turn ideas into digital experiences that captivate and drive growth. Dive in, let's create magic together.
        </motion.h2>
      </div>

      {/* Slideshow Wrap */}
      <div className="relative w-full h-[600px] perspective-[2000px] select-none overflow-hidden flex items-center">
        
        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[var(--color-clair-dark)] pointer-events-auto hover:bg-[var(--color-clair-mint)] hover:text-white hover:scale-110 transition-all shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[var(--color-clair-dark)] pointer-events-auto hover:bg-[var(--color-clair-mint)] hover:text-white hover:scale-110 transition-all shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <motion.div 
          animate={{ x: offsetX }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-12 items-center h-full transform-style-3d cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...slideshowImages, ...slideshowImages, ...slideshowImages].map((src, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={i}
                animate={{ 
                  scale: isActive ? 1 : 0.7, 
                  rotateY: isActive ? 0 : (i < activeIndex ? 25 : -25), 
                  opacity: isActive ? 1 : 0.4 
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-shrink-0 w-[300px] md:w-[450px] h-[400px] md:h-[550px] rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative border border-white/10"
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Logo Ticker */}
      <div className="mt-32">
        <p className="text-[14px] font-semibold text-[var(--color-clair-dark)]/50 text-center mb-12 uppercase tracking-[0.1em]">
          Trusted by 100+ businesses across the world
        </p>
        
        <div className="relative w-full flex overflow-hidden">
          <motion.div 
            className="flex gap-20 items-center min-w-max whitespace-nowrap opacity-40 grayscale"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* Logos - Using Placeholder SVGs for branding as per original */}
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex gap-20 items-center">
                <img src="https://framerusercontent.com/images/jy4FqEH0NZ1aMbQNoVX1GHxTVyw.svg" className="h-6" alt="Logo" />
                <img src="https://framerusercontent.com/images/vqGGtVxiCOJlK8fZAIvSamA8XQ.svg" className="h-6" alt="Logo" />
                <img src="https://framerusercontent.com/images/y7dgj31XHJDlobvHrMyBI2NX9I.svg" className="h-6" alt="Logo" />
                <img src="https://framerusercontent.com/images/W6uqzhvVsVaObzjGwcRCKJ3pFo.svg" className="h-6" alt="Logo" />
                <img src="https://framerusercontent.com/images/1BpIu2vJ0fLL8WXB10RXBS1w.svg" className="h-6" alt="Logo" />
                <img src="https://framerusercontent.com/images/RkLpZCNECqsXN2HWhtlL9esC9A.svg" className="h-6" alt="Logo" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
