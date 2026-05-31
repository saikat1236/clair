import { motion } from 'framer-motion';

const Expertise = () => {
  const services = [
    {
      num: '01',
      title: 'Website Development',
      desc: 'We build custom websites that clearly showcase your sustainable value through transparent tools and intuitive user journeys and long-term value instantly clear to users.',
      tags: ['Web', 'Design', 'UI/UX'],
      img: 'https://framerusercontent.com/images/NV6QbP3oUFxQUAj0mrypAcUz9s.png'
    },
    {
      num: '02',
      title: 'Content Marketing',
      desc: 'We create clear, compelling content that simplifies sustainability, helping audiences understand your impact and choose what\'s best for them and the planet.',
      tags: ['Content', 'Strategy', 'Copywriting'],
      img: 'https://framerusercontent.com/images/I4ZACCCvPsB5E21Gqukxf3Fero.png'
    },
    {
      num: '03',
      title: 'Social Media Management',
      desc: 'We manage your social channels daily, build trust, and grow a loyal community—turning complex sustainability into clear, engaging content your audience believes.',
      tags: ['Social', 'Community', 'Growth'],
      img: 'https://framerusercontent.com/images/eanrefUQRjJOGvG9rqaM6Drbo4.png'
    },
    {
      num: '04',
      title: 'Search Engine Optimization',
      desc: 'We optimize your digital presence with high-intent sustainability keywords, helping conscious consumers find and trust your brand—driving high-quality organic growth.',
      tags: ['SEO', 'Growth', 'Keywords'],
      img: 'https://framerusercontent.com/images/eanrefUQRjJOGvG9rqaM6Drbo4.png'
    },

    {
      num: '05',
      title: 'Performance Marketing',
      desc: 'We deliver ethical digital ads with measurable ROI, targeting sustainability-minded consumers while respecting your mission and without wasting your budget.',
      tags: ['Ads', 'ROI', 'Performance'],
      img: 'https://framerusercontent.com/images/WUM7m0CWh8OIbwVSHQHOQKDlMQ0.png'
    },


  ];

  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="expertise">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-40 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-full mb-10 backdrop-blur-md"
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[var(--color-neuerde-mint)]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
             <span className="text-[12px] font-medium uppercase tracking-[0.15em] ml-0.5 opacity-80">Services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[52px] md:text-[88px] font-semibold mb-8 tracking-[-0.05em] leading-[1] max-w-5xl"
          >
            Our Digital Marketing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#AEB0B6] text-[18px] md:text-[22px] max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Discover how our expertise turns concepts into high-impact digital experiences.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-40">
          {services.map((s) => (
            <motion.div 
              key={s.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group"
            >
              <div className="md:col-span-1">
                <span className="text-[20px] font-bold tracking-tighter opacity-40">{s.num}</span>
              </div>
              
              <div className="md:col-span-6 flex flex-col gap-8">
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-semibold mb-6 tracking-tight group-hover:text-[var(--color-neuerde-mint)] transition-colors">{s.title}</h3>
                  <p className="text-[#94969D] text-[18px] leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-[14px] font-medium text-white/40 tracking-tight">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-[24px] overflow-hidden border border-white/5 bg-[#0A0A0C] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={s.img} 
                    alt={s.title} 
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
