import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const slideshowImages = [
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg',
  'https://framerusercontent.com/images/EVQIKBGUWs742tunlhesEdf97E.jpg',
  'https://framerusercontent.com/images/dRIV80CQSNOlbCC3occkaLgdXoo.jpg',
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg', // Repeat for loop
  'https://framerusercontent.com/images/EVQIKBGUWs742tunlhesEdf97E.jpg',
];

const Statement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

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
      <div className="relative w-full h-[510px] perspective-[1200px] select-none">
        <motion.div 
          style={{ x }}
          className="flex gap-4 items-center h-full px-[5%] transform-style-3d"
        >
          {slideshowImages.map((src, i) => {
            // Basic approximation of the 3D slider effect
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0.45, scale: 0.7, rotateY: -13 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 0.8 }}
                className="flex-shrink-0 w-[80vw] md:w-[430px] h-full rounded-[12px] overflow-hidden shadow-2xl relative"
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
