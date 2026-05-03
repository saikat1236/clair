import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const projects = [
  { id: 'nova-technologies-web-development', title: 'Nova Technologies Web Development', tags: ['Web Development', 'Visuals'], img: 'https://framerusercontent.com/images/eanrefUQRjJOGvG9rqaM6Drbo4.png?width=1600&height=2400' },
  { id: 'skybox-entertainment-redesign', title: 'SkyBox Entertainment Redesign', tags: ['Redesign', 'Web Design'], img: 'https://framerusercontent.com/images/I4ZACCCvPsB5E21Gqukxf3Fero.png?width=2400&height=2400' },
  { id: 'bluewave-studios-web-development', title: 'BlueWave Studios Web Development', tags: ['Web Development', 'Branding'], img: 'https://framerusercontent.com/images/WUM7m0CWh8OIbwVSHQHOQKDlMQ0.png?width=2400&height=1346' },
  { id: 'hightech-innovations-web-design', title: 'HighTech Innovations Web Design', tags: ['Web Design', 'Creative Direction'], img: 'https://framerusercontent.com/images/NV6QbP3oUFxQUAj0mrypAcUz9s.png?width=2400&height=1668' },
];

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-40 min-h-screen flex flex-col bg-[var(--color-clair-dark)] text-white">
      <div className="flex-1 max-w-7xl mx-auto w-full px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-[58px] md:text-[80px] font-semibold tracking-[-0.04em] mb-8 leading-[1]">Our Works</h1>
          <p className="text-[18px] text-[#E4E5E7] leading-relaxed">Explore our work and see how we turn ideas into impactful designs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-32">
          {projects.map((p, i) => (
            <Link to={`/works/${p.id}`} key={p.id} className={`group block ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative shadow-sm bg-[rgba(255,255,255,0.05)] border border-white/5">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="flex gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-[12px] font-medium px-3 py-1.5 border border-white/20 rounded-full text-[#E4E5E7]">{t}</span>
                  ))}
                </div>
                <h3 className="text-[24px] font-medium group-hover:text-[var(--color-clair-mint)] transition-colors">{p.title}</h3>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Works;
