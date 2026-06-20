
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const services = [
  { 
    id: 'web-development', 
    title: 'Web Development', 
    tags: ['Websites', 'Performance'], 
    img: 'https://images.unsplash.com/photo-1542744095-291d1f69428d?q=80&w=2070&auto=format&fit=crop',
    description: 'Websites that work as hard as your business does.'
  },
  { 
    id: 'esg-content-strategy', 
    title: 'ESG Content Strategy', 
    tags: ['Content', 'SEO'], 
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
    description: 'Your ESG story is complex. We make it impossible to misunderstand.'
  },
  { 
    id: 'social-media-management', 
    title: 'Social Media Management', 
    tags: ['Social', 'Community'], 
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
    description: 'A social presence your audience actually trusts.'
  },
  { 
    id: 'seo-for-sustainable-brands', 
    title: 'SEO for Sustainable Brands', 
    tags: ['SEO', 'GEO'], 
    img: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
    description: 'Own the search terms your ideal clients are already using.'
  },
  { 
    id: 'performance-marketing', 
    title: 'Performance Marketing', 
    tags: ['Ads', 'ROI'], 
    img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    description: 'Every rupee accountable. Every campaign purposeful.'
  },
  { 
    id: 'brand-marketing', 
    title: 'Brand Marketing', 
    tags: ['Branding', 'Strategy'], 
    img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop',
    description: "A brand that's impossible to mistake and hard to forget."
  },
];

const Services = () => {
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
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-[58px] md:text-[80px] font-semibold tracking-[-0.04em] mb-8 leading-[1]">Our Services</h1>
          <p className="text-[18px] text-[#E4E5E7] leading-relaxed">Explore the services we offer to help sustainable businesses grow and make a lasting impact.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((s, i) => (
            <Link to={`/services/${s.id}`} key={s.id} className="group block">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative shadow-sm bg-[rgba(255,255,255,0.05)] border border-white/5">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="flex gap-2 mb-4">
                  {s.tags.map(t => (
                    <span key={t} className="text-[12px] font-medium px-3 py-1.5 border border-white/20 rounded-full text-[#E4E5E7]">{t}</span>
                  ))}
                </div>
                <h3 className="text-[24px] font-medium group-hover:text-[var(--color-neuerde-mint)] transition-colors">{s.title}</h3>
                <p className="text-[#AEB0B6] mt-2">{s.description}</p>
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

export default Services;
