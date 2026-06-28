import { motion } from 'framer-motion';

const Features = () => {
  const avatars = [
    'https://framerusercontent.com/images/nYcj04ualCtRoNjNtYpgouehGg.png',
    'https://framerusercontent.com/images/zrj0Q82duwHMFQAdS26iyp6mGs.png',
    'https://framerusercontent.com/images/IXdPhhGZM9j65YBrWhOVY2NaYs.png',
    'https://framerusercontent.com/images/UJqoEynjW7YGRyNCYd68CrLWz4.png',
    'https://framerusercontent.com/images/b8i4dHLAI5We20Fku6eS7Too.png',
    'https://framerusercontent.com/images/ypqRBwN7boiS7P7VQLahlmlyUlo.png',
    'https://framerusercontent.com/images/BJu8bfV7QaumQo8crosh5Z9wnQ.png',
    'https://framerusercontent.com/images/nYcj04ualCtRoNjNtYpgouehGg.png',
  ];

  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-40 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-full mb-10 backdrop-blur-md"
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[var(--color-neuerde-mint)]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
             <span className="text-[12px] font-medium uppercase tracking-[0.15em] ml-0.5 opacity-80">Why Neuérde</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[80px] font-semibold mb-8 tracking-tight leading-[1] max-w-4xl"
          >
            The Digital Partner <span className="text-neuerde-gradient">Sustainable Businesses</span> Have Been Looking For.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#AEB0B6] text-[18px] md:text-[22px] max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We combine deep digital expertise with a genuine understanding of the sustainable business world — so you never have to explain why your mission matters.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Always Here for You */}
          <div className="md:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 rounded-[40px] p-6 md:p-12 flex flex-col overflow-hidden group relative min-h-[500px] md:min-h-[760px] shadow-2xl h-full"
            >
              <div className="relative z-20 hidden md:block">
                <h3 className="text-[28px] font-semibold mb-6 tracking-tight">We Speak Your Language</h3>
                <p className="text-[#94969D] text-[18px] leading-relaxed font-medium max-w-[280px]">
                  We understand B Corp, ESG, lifecycle assessments, and conscious consumer behaviour. You won't spend half the project briefing us on your world — we already live in it.
                </p>
              </div>
              
              <div className="relative mt-auto h-[300px] md:h-[400px] -mb-16 -mx-14 z-10 pointer-events-none">
                <img 
                  src="https://framerusercontent.com/images/vYTeT3fHsbxl2BImlESbfO53g.png?scale-down-to=1024" 
                  alt="" 
                  className="absolute left-[-1%] bottom-0 w-[70%] h-auto object-contain z-0 opacity-30 transform translate-y-12 group-hover:translate-y-4 transition-transform duration-1000 ease-out" 
                />
                <img 
                  src="https://framerusercontent.com/images/Hmdg9vW2iU7jc0lXcIzvXCJvU.png?scale-down-to=1024" 
                  alt="" 
                  className="absolute right-[-1%] bottom-0 w-[75%] h-auto object-contain z-10 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-1000 ease-out" 
                  style={{ filter: 'drop-shadow(0 30px 100px rgba(0,0,0,1))' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Column 2: Stacked Middle Cards */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Card 2: Your Expert Partners */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 rounded-[40px] p-12 flex flex-col overflow-hidden group shadow-2xl min-h-[364px] flex-1"
            >
              <div>
                <h3 className="text-[28px] font-semibold mb-6 tracking-tight">Specialists, Not Generalists</h3>
                <p className="text-[#94969D] text-[18px] leading-relaxed font-medium">
                  We've chosen to focus on sustainable businesses because we believe purpose-driven companies deserve digital partners who truly understand their market, their audience, and their growth challenges.
                </p>
              </div>
              
              <div className="flex -space-x-4 items-center mt-auto pb-4 overflow-visible">
                {avatars.map((src, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -12, zIndex: 100, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-full border-4 border-[#0A0A0C] overflow-hidden relative cursor-pointer shadow-xl bg-[#131315]"
                    style={{ zIndex: 10 + i }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Endless Creative Potential */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 rounded-[40px] p-12 flex flex-col justify-between overflow-hidden group shadow-2xl min-h-[364px] flex-1"
            >
              <div>
                <h3 className="text-[28px] font-semibold mb-6 tracking-tight">Results You Can Measure</h3>
                <p className="text-[#94969D] text-[18px] leading-relaxed font-medium mb-10">
                  Every campaign, every website, every piece of content is tied to measurable outcomes — traffic, leads, conversions, and revenue. Impact without attribution is just activity.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 items-center select-none mt-auto">
                {['Traffic', 'Leads', 'Conversions', 'Revenue'].map((t) => (
                  <span key={t} className="text-[17px] font-medium text-white/30 tracking-tight transition-colors hover:text-[var(--color-neuerde-mint)] cursor-default">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 3: Seamless & Stress-Free */}
          <div className="md:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 rounded-[40px] overflow-hidden flex flex-col group min-h-[500px] md:min-h-[760px] shadow-2xl h-full"
            >
              <div className="p-3 pt-3">
                <div className="bg-[#070708] rounded-[28px] overflow-hidden border border-white/5 aspect-[1.1] relative shadow-inner">
                  <img 
                    src="assets/seam.jpeg" 
                    alt="Dashboard UI" 
                    className="w-full h-full object-cover transform translate-y-6 group-hover:scale-[1.12] group-hover:translate-y-2 transition-transform duration-1000 ease-out" 
                  />
                </div>
              </div>
              
              <div className="p-12 mt-auto">
                <h3 className="text-[28px] font-semibold mb-6 tracking-tight">A Seamless Partnership</h3>
                <p className="text-[#94969D] text-[18px] leading-relaxed font-medium">
                  From strategy to execution, we work as an extension of your team — transparent, responsive, and committed to your long-term growth, not just the next deliverable.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
