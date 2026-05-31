import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  { id: 'skybox-entertainment-redesign', title: 'SkyBox Entertainment Redesign', tags: ['Redesign', 'Web Design'], img: 'https://framerusercontent.com/images/I4ZACCCvPsB5E21Gqukxf3Fero.png?width=2400&height=2400' },
  { id: 'bluewave-studios-web-development', title: 'BlueWave Studios Web Development', tags: ['Web Development', 'Branding'], img: 'https://framerusercontent.com/images/WUM7m0CWh8OIbwVSHQHOQKDlMQ0.png?width=2400&height=1346' },
];

const LatestWorks = () => {
  return (
    <section className="py-24 bg-[var(--color-neuerde-dark)] text-white">
      <h2 className="text-[40px] font-medium mb-12">Latest Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <Link to={`/works/${p.id}`} key={p.id} className="group block">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden relative shadow-sm bg-[rgba(255,255,255,0.05)] border border-white/5">
                <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-500 z-10"></div>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="text-[12px] font-medium px-3 py-1.5 border border-white/20 rounded-full text-[#E4E5E7]">{t}</span>
                ))}
              </div>
              <h3 className="text-[24px] font-medium group-hover:text-[var(--color-neuerde-mint)] transition-colors">{p.title}</h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestWorks;
