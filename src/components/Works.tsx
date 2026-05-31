import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { id: 'nova-technologies', title: 'Nova Technologies Web Development', tags: ['Web Development', 'Visuals'], img: 'https://framerusercontent.com/images/5W5C4NMk1gCDKaBZNAHXweAyqY.png' },
  { id: 'skybox-entertainment', title: 'SkyBox Entertainment Redesign', tags: ['Redesign', 'Web Design'], img: 'https://framerusercontent.com/images/3ZPbrhnBuoSZNmrLj4AjTSg7yo.png' },
  { id: 'bluewave-studios', title: 'BlueWave Studios Web Development', tags: ['Web Development', 'Branding'], img: 'https://framerusercontent.com/images/dqUpheX2glYL2GSJbFzSkqvQv78.png' },
  { id: 'hightech-innovations', title: 'HighTech Innovations Web Design', tags: ['Web Design', 'Creative Direction'], img: 'https://framerusercontent.com/images/o8fqj1cMiTj1RQnxrh4pwR1zPJU.png' },
];

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 fill-[var(--color-neuerde-mint)]">
    <path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"></path>
  </svg>
);

const Works = () => {
  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="work">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 px-6 py-2.5 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-full mb-16 backdrop-blur-[11px]"
        >
          <BriefcaseIcon />
          <span className="text-[14px] font-medium tracking-tight opacity-90 uppercase tracking-widest">Works</span>
        </motion.div>

        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] md:text-[64px] font-semibold mb-8 tracking-[-0.04em] leading-[1.1]"
          >
            Innovative Solutions Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#AEB0B6] text-[20px] max-w-2xl mx-auto font-medium"
          >
            Explore our work and see how we turn ideas into impactful designs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full">
          {projects.map((p, i) => (
            <Link to={`/works/${p.id}`} key={p.id} className="group block">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
              >
                <div className="bg-[#131315] aspect-[1.41] rounded-[12px] mb-8 overflow-hidden relative shadow-2xl border border-white/5 backdrop-blur-[2.5px] p-2">
                  <div className="w-full h-full rounded-[8px] overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-700 ease-out z-10"></div>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="flex gap-3 mb-4">
                        {p.tags.map(t => (
                          <span key={t} className="text-[12px] font-semibold px-4 py-2 bg-[rgba(0,244,201,0.15)] text-[var(--color-neuerde-mint)] border border-white/10 rounded-full tracking-tight backdrop-blur-md">{t}</span>
                        ))}
                      </div>
                      <h3 className="text-[26px] font-semibold text-white tracking-tight leading-tight">{p.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
