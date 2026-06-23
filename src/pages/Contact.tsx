import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 min-h-screen flex flex-col bg-[var(--color-neuerde-dark)] text-white">
      <div className="flex-1 max-w-7xl mx-auto w-full px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-[58px] md:text-[80px] font-semibold tracking-tight mb-8 leading-[1]">Let's build something <span className="text-neuerde-gradient">together</span>!</h1>
          <p className="text-[18px] text-[#E4E5E7] leading-relaxed">Reach out and let's get started on your next project.</p>
        </motion.div>
        
        <FAQ />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Contact;
