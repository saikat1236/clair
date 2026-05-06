import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 min-h-screen flex flex-col bg-[var(--color-clair-dark)] text-white relative z-10">
      <div className="flex-1 max-w-7xl mx-auto w-full px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-[58px] md:text-[80px] font-semibold tracking-[-0.04em] mb-8 leading-[1]">Shaping the future of New Earth</h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] text-[#E4E5E7] leading-relaxed space-y-6"
          >
            <p>
              We are a purpose-driven <span className="font-bold text-white">sustainable marketing agency</span> committed to creating a better, more responsible world through conscious branding and ethical growth. We believe that businesses have the power to shape the future of a New Earth—one where profit, people, and the planet grow together.
            </p>
            <p>
              By blending <span className="font-bold text-white">creativity, strategy, and sustainability</span>, we help brands communicate their true impact with honesty and clarity. Our work focuses on building long-term value, fostering trust, and inspiring positive change, ensuring that every campaign contributes to a greener, more mindful future for generations to come.
            </p>
          </motion.div>
        </motion.div>

        <Stats />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 py-24 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[32px] md:text-[40px] font-medium mb-6 leading-tight">Elevating Brands with Clair’s Creative Expertise</h2>
            <p className="text-[18px] text-[#E4E5E7] leading-relaxed">
              At Clair, we craft digital experiences that inspire, engage, and drive success. With a passion for design and innovation, we transform ideas into impactful solutions that help brands grow and stand out in the digital landscape.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-[24px] font-medium mb-4">Our Philosophy</h2>
              <p className="text-[18px] text-[#E4E5E7] leading-relaxed">
                Design should be simple, purposeful, and human-centered. Every pixel, every interaction—crafted with intent to deliver clarity and impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-[24px] font-medium mb-4">Why Choose Clair</h2>
              <p className="text-[18px] text-[#E4E5E7] leading-relaxed">
                We’re not just a design agency, we’re your creative growth partner. With a collaborative mindset and a sharp eye for detail, we bring your ideas to life with clarity and precision.
              </p>
            </motion.div>
          </div>
        </div>

        <FAQ />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default About;
