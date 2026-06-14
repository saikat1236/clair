import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="sticky h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-neuerde-dark)] text-white z-0">
      <div className="absolute inset-0 z-0">
         <img 
           src="https://framerusercontent.com/images/ysyogWDfsxbU0BnMOcWAkReXFLw.png?width=2160&height=1371" 
           alt="Digital agency for sustainable businesses — Neuérde" 
           className="w-full h-full object-cover opacity-60"
         />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full z-10 px-6 pb-16 pt-30 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-[var(--color-neuerde-mint)]">
            DIGITAL AGENCY FOR SUSTAINABLE BUSINESSES  ·  ESG  ·  IMPACT MARKETING
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[42px] md:text-[70px] lg:text-[90px] font-semibold tracking-[-0.04em] leading-[1] mb-12 max-w-5xl"
        >
          Where Scientific Rigor Meets <span className="text-neuerde-gradient">Digital Dominance.</span>
        </motion.h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] md:text-[22px] text-[#E4E5E7] max-w-2xl leading-relaxed font-medium"
          >
            Neuérde is a digital agency specialising in growing sustainable businesses, eco-conscious brands, and purpose-driven companies. We bring brand marketing, SEO, web development, content strategy, and performance advertising — built around the unique challenges of the sustainable business world.
          </motion.p>
        </div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6 items-center"
        >
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/40">
            Trusted by 100+ Businesses Across the World  ·  B Corp Partners  ·  1% for the Planet
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
