import { motion } from 'framer-motion';
import { useRef } from 'react';
const slideshowImages = [
  '/assets/neuerde5.jpeg',
  '/assets/neuerde2.png',
  '/assets/neuerde3.png',
  '/assets/neuerde4.png',
  '/assets/neuerde5.jpeg',
  '/assets/neuerde2.png',
  '/assets/neuerde3.png',
  '/assets/neuerde4.png',
];
const slideshowImages2 = [
  // '/assets/neuerde5.jpeg',
  '/assets/neuerde6.jpeg',
  '/assets/neuerde7.jpeg',
  '/assets/neuerde8.jpeg',
  '/assets/neuerde9.jpeg',
  '/assets/neuerde10.jpeg',
  '/assets/neuerde11.jpeg',
];

const Statement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative z-10 py-24 bg-[var(--color-neuerde-light)] text-[var(--color-neuerde-dark)] overflow-hidden" ref={containerRef}>
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
      <div className="relative w-full select-none overflow-hidden flex items-center bg-[var(--color-neuerde-dark)] py-12">
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
                className={`flex-shrink-0 w-[85vw] md:w-[40vw] aspect-video overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative rounded-2xl border border-white/5`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Logo Ticker */}
      <div className="mt-24">
        {/* <p className="text-[14px] font-semibold text-[var(--color-neuerde-dark)]/50 text-center mb-12 uppercase tracking-[0.1em]">
          Trusted by 100+ businesses across the world
        </p> */}
        
        <div className="relative w-full flex overflow-hidden">
          <motion.div 
            className="flex gap-10 items-center min-w-max whitespace-nowrap opacity-100"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* Logos - Using neuerde png images */}
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex gap-10 items-center">
                {slideshowImages2.map((src, imgIdx) => (
                  <img key={imgIdx} src={src} className="h-40 w-auto object-contain" alt={`logo ${imgIdx + 1}`} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
