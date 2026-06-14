import { motion } from 'framer-motion';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';

const Approach = () => {
  const steps = [
    { 
      num: '01', 
      title: 'Connect & Understand', 
      desc: "We begin by getting under the skin of your business — your goals, your audience, your competitors, and the gaps your current digital presence isn't filling.", 
      img: step1
    },  
    { 
      num: '02', 
      title: 'Strategy & Positioning', 
      desc: 'We build a bespoke digital strategy tailored to your market — channel mix, content architecture, and a clear roadmap from where you are to where you want to be.', 
      img: step2
    },
    { 
      num: '03', 
      title: 'Execution & Delivery', 
      desc: 'Our team activates across every agreed channel with precision — on time, on brief, and with full transparency at every stage.', 
      img: step3
    },
    { 
      num: '04', 
      title: 'Growth & Optimisation', 
      desc: 'We measure everything, learn fast, and continuously optimise — so your results compound over time rather than plateau.', 
      img: step4
    },
  ];

  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="our-approach">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Row */}
        <div className="flex justify-between items-center mb-32">
          <div className="flex items-center gap-3">
             <div className="grid grid-cols-2 gap-1 w-5 h-5">
                <div className="w-2.5 h-2.5 bg-[var(--color-neuerde-mint)] rounded-full opacity-40"></div>
                <div className="w-2.5 h-2.5 bg-[var(--color-neuerde-mint)] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[var(--color-neuerde-mint)] rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-[var(--color-neuerde-mint)] rounded-full opacity-40"></div>
             </div>
             <span className="text-[14px] font-medium text-white/60 uppercase tracking-widest ml-1">How We Work</span>
          </div>
           <h2 className="text-[20px] font-medium text-white/60 tracking-tight">We Research, We Strategise, We Drive Results.</h2>
        </div>

        {/* Horizontal Row with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          
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
                        className={`w-2 h-2 rounded-full ${dot <= i + 1 ? 'bg-[var(--color-neuerde-mint)]' : 'bg-white/10'}`}
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

        <div className="mt-24 md:mt-32 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[14px] font-medium text-[var(--color-neuerde-mint)] uppercase tracking-widest">Why Sustainable Businesses Choose Us</span>
          </div>
          <h3 className="text-[30px] md:text-[48px] font-semibold tracking-[-0.04em] leading-[1.05] mb-8 max-w-4xl">
            We Don't Just Run Campaigns. We Understand Your World.
          </h3>
          <p className="text-[#AEB0B6] text-[18px] md:text-[20px] leading-relaxed font-medium max-w-4xl mb-10">
            Sustainable businesses face challenges most agencies haven't encountered — complex value propositions, discerning audiences, greenwashing risk, and the pressure to prove impact alongside profit. We've built our practice around exactly these challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[20px] font-semibold mb-3">We Speak the Language</h4>
              <p className="text-[#94969D] leading-relaxed">B Corp. ESG. Scope 3. Lifecycle assessments. Conscious consumer behaviour. You won't spend the first three meetings bringing us up to speed — we arrive ready to work.</p>
            </div>
            <div>
              <h4 className="text-[20px] font-semibold mb-3">We Protect Your Integrity</h4>
              <p className="text-[#94969D] leading-relaxed">Every campaign we run for a sustainable business is built to communicate impact honestly. We never overstate, greenwash, or simplify your credentials into slogans. Your audience is too smart for that — and so are we.</p>
            </div>
            <div>
              <h4 className="text-[20px] font-semibold mb-3">We Measure What Matters</h4>
              <p className="text-[#94969D] leading-relaxed">Growth metrics. Audience trust signals. Content authority. ESG narrative reach. We build attribution frameworks that connect your digital activity to the outcomes your business actually cares about.</p>
            </div>
          </div>
          <a href="#contact" className="inline-flex mt-10 text-[16px] font-semibold text-[var(--color-neuerde-mint)] hover:opacity-80 transition-opacity">
            Learn How We Work With Sustainable Businesses →
          </a>
        </div>

export default Approach;
