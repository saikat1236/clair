import { motion } from 'framer-motion';

const Approach = () => {
  const steps = [
    { 
      num: '01', 
      title: 'Strategy & Planning', 
      desc: 'We understand your vision, then research and plan the project structure.', 
      img: 'https://framerusercontent.com/images/1jbCM87UVieS7gftxctHtx8k.png'
    },
    { 
      num: '02', 
      title: 'Design & Prototyping', 
      desc: 'Our creative team transforms insights into engaging designs and prototypes.', 
      img: 'https://framerusercontent.com/images/1OR7QrERS5zQzjNcA8v9g98Vae0.png'
    },
    { 
      num: '03', 
      title: 'Implementation & Delivery', 
      desc: 'We execute with precision, ensuring a seamless launch and measurable results.', 
      img: 'https://framerusercontent.com/images/cEdBalzsa8LrbdSOxHocTeRJOrw.png'
    },
  ];

  return (
    <section className="py-48 px-6 bg-[var(--color-clair-dark)] text-white relative z-10" id="our-approach">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Row */}
        <div className="flex justify-between items-center mb-32">
          <div className="flex items-center gap-3">
             <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <div className="w-2.5 h-2.5 bg-[var(--color-clair-mint)] rounded-full opacity-40"></div>
                <div className="w-2.5 h-2.5 bg-[var(--color-clair-mint)] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[var(--color-clair-mint)] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[var(--color-clair-mint)] rounded-full opacity-40"></div>
             </div>
             <span className="text-[14px] font-medium text-white/60 uppercase tracking-widest ml-1">Our Approach</span>
          </div>
          <h2 className="text-[20px] font-medium text-white/60 tracking-tight">3-Step Process</h2>
        </div>

        {/* Horizontal Row with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {steps.map((s, i) => (
            <motion.div 
              key={s.num}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              className="flex flex-col group"
            >
              {/* Image Container with "Fan" effect */}
              <div className="relative mb-16 flex justify-center">
                {/* Back layers (Framer effect) */}
                <div className="absolute inset-0 bg-[#070708] rounded-[24px] rotate-[-6deg] translate-y-4 opacity-40 scale-[0.95] z-0"></div>
                <div className="absolute inset-0 bg-[#070708] rounded-[24px] rotate-[6deg] translate-y-4 opacity-40 scale-[0.95] z-0"></div>
                
                {/* Main Card */}
                <div className="relative z-10 bg-[#070708] rounded-[24px] overflow-hidden border border-white/5 p-2 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <div className="aspect-[340/320] rounded-[16px] overflow-hidden relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[20px] font-bold tracking-tighter opacity-80">{s.num}</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((dot) => (
                      <div 
                        key={dot} 
                        className={`w-2 h-2 rounded-full ${dot <= i + 1 ? 'bg-[var(--color-clair-mint)]' : 'bg-white/10'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <h3 className="text-[22px] font-semibold mb-3 tracking-tight leading-tight">{s.title}</h3>
                <p className="text-[#94969D] leading-relaxed text-[15px] font-medium max-w-[320px]">{s.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Approach;
