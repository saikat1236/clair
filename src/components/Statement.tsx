import { motion } from 'framer-motion';
import { useRef } from 'react';

const slideshowImages = [
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg',
  'https://framerusercontent.com/images/EVQIKBGUWs742tunlhesEdf97E.jpg',
  'https://framerusercontent.com/images/dRIV80CQSNOlbCC3occkaLgdXoo.jpg',
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg',
  'https://framerusercontent.com/images/EVQIKBGUWs742tunlhesEdf97E.jpg',
  'https://framerusercontent.com/images/dRIV80CQSNOlbCC3occkaLgdXoo.jpg',
  'https://framerusercontent.com/images/p2APj4NLz2Qb7fEBqRZIewc.jpg',
];

const Statement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-10 py-32 bg-[var(--color-neuerde-light)] text-[var(--color-neuerde-dark)] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[32px] md:text-[51px] font-medium leading-[1.2] max-w-4xl mx-auto text-[var(--color-neuerde-dark)]/80 tracking-tight"
        >
At Neuérde, every pixel counts.
We transform bold ideas into captivating digital experiences that drive real growth. Let’s create magic together.
        </motion.h2>
      </div>

      {/* Smooth Continuous Slideshow */}
      <div className="relative w-full h-[500px] md:h-[600px] select-none overflow-hidden flex items-center bg-green-950">
        <motion.div 
          className="flex gap-8 items-center min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 40, 
            ease: "linear" 
          }}
        >
          {[...slideshowImages, ...slideshowImages].map((src, i) => {
            // Cycle through different rounding styles to match screenshot

            return (
              <div
                key={i}
                className={`flex-shrink-0 w-[320px] md:w-[420px] h-[380px] md:h-[520px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative border rounded-4xl border-white/5`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Logo Ticker */}
      <div className="mt-32">
        <p className="text-[14px] font-semibold text-[var(--color-neuerde-dark)]/50 text-center mb-12 uppercase tracking-[0.1em]">
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
                <div className="flex items-center gap-2">
                  <img src="https://framerusercontent.com/images/jy4FqEH0NZ1aMbQNoVX1GHxTVyw.svg" className="h-8" alt="Google Partner" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://framerusercontent.com/images/vqGGtVxiCOJlK8fZAIvSamA8XQ.svg" className="h-8" alt="Shopify Partner" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://framerusercontent.com/images/y7dgj31XHJDlobvHrMyBI2NX9I.svg" className="h-8" alt="Google Analytics" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://framerusercontent.com/images/W6uqzhvVsVaObzjGwcRCKJ3pFo.svg" className="h-8" alt="Bing Ads" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://framerusercontent.com/images/1BpIu2vJ0fLL8WXB10RXBS1w.svg" className="h-8" alt="Meta Business Partner" />
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://framerusercontent.com/images/RkLpZCNECqsXN2HWhtlL9esC9A.svg" className="h-8" alt="Google Partner" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
