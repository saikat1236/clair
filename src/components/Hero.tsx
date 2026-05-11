import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="sticky h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-clair-dark)] text-white z-0">
      <div className="absolute inset-0 z-0">
         <img 
           src="https://framerusercontent.com/images/ysyogWDfsxbU0BnMOcWAkReXFLw.png?width=2160&height=1371" 
           alt="" 
           className="w-full h-full object-cover opacity-60"
         />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full z-10 px-6 pb-16 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[42px] pt-32 md:pt-40 md:text-[70px] lg:text-[90px] font-semibold tracking-[-0.04em] leading-[1] mb-8 max-w-5xl"
        >
          Let's Craft Your Sustainable Brand Together!
        </motion.h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-[#E4E5E7] max-w-lg leading-relaxed font-medium"
          >
Today, growth alone isn’t enough — responsible growth is what matters.
We are a sustainable digital marketing agency crafting impactful, ethical strategies that help eco-conscious brands scale smarter while putting the planet first.
          </motion.p>
          
          <div className="flex flex-col gap-4 text-[18px] md:text-[20px] text-[#E4E5E7] font-medium items-end">
            {['Emotion-Driven UX/UI', 'Interactive & Engaging Websites', 'Vibrant Visual Identity & Branding', 'Creative Ongoing Support'].map((item, index) => (
              <motion.p 
                key={item} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
