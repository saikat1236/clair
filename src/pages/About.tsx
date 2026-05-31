import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const howWeWork = [
    { letter: 'N', title: 'New Discovery Call', desc: 'Unearthing Your Unique Story' },
    { letter: 'E', title: 'Efficient Free Audit', desc: 'Evaluating Impact & Opportunity' },
    { letter: 'U', title: 'User-Centric Approach', desc: 'Understanding the Conscious Consumer' },
    { letter: 'E', title: 'Emphasize to Scale', desc: 'Expanding Your Positive Footprint' },
    { letter: 'R', title: 'Rationalize to Implement', desc: 'Gearing Up For Action' },
    { letter: 'D', title: 'Delivering on Time', desc: 'Consistent Execution & Reporting' },
    { letter: 'E', title: 'Effective Proposal', desc: 'Designing the Sustainable Strategy' },
  ];

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/ysyogWDfsxbU0BnMOcWAkReXFLw.png?width=2160&height=1371" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-neuerde-dark)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-[72px] sm:text-[100px] md:text-[240px] font-semibold text-white leading-[0.8] tracking-tighter">
            About<span className="text-[var(--color-neuerde-mint)]">.</span>
          </h1>
          <p className="mt-8 md:mt-12 text-lg md:text-2xl text-[#AEB0B6] max-w-2xl mx-auto font-medium leading-relaxed">
            Building a world where sustainability and digital innovation drive the next generation of growth.
          </p>
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">WHAT WE DO</span>
            <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">Neuérde — Brand Story</h2>
            <div className="space-y-6 text-[#AEB0B6] text-lg font-medium leading-relaxed">
              <p>
                A <span className="text-white font-bold">digital partner</span> for environmentally-focused startups and small businesses — helping them scale the right way, grow meaningful impact, and build a world where doing good and doing well reinforce each other.
              </p>
              <p>
                <span className="text-white font-bold">Neuérde</span> does not work with brands that claim sustainability for appearances. It partners with founders who genuinely want to make a difference.
              </p>
              <p>
                Neuérde represents a <span className="italic text-white">new earth</span>—a belief that a better future is built by people who choose to build with transparency and purpose.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-[40px] overflow-hidden group flex items-center justify-center text-center p-12"
        >
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            alt="Vision Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-neuerde-dark)]" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-6xl md:text-7xl font-semibold mb-6">Vision</h3>
            <p className="text-xl md:text-2xl text-[#E4E5E7] leading-relaxed font-medium">
              We have a vision to be the leading global digital force, empowering sustainable brands to drive the world towards a sustainable and regenerative New Earth, referred to as (Neuérde), fueled by digital innovation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-[40px] overflow-hidden group flex items-center justify-center text-center p-12"
        >
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
            alt="Mission Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-neuerde-dark)]" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-6xl md:text-7xl font-semibold mb-6">Mission</h3>
            <p className="text-xl md:text-2xl text-[#E4E5E7] leading-relaxed font-medium">
              To empower and amplify sustainable products and services worldwide, using impactful digital marketing to build a planet-first economy and inspire global consumer change.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Founder's Desk Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-40">
        <div className="text-center mb-24">
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">FOUNDER'S DESK</span>
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter">Sustainability is the Next Economy</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-[#AEB0B6] text-lg leading-relaxed"
          >
            <p>
              The world has reached a tipping point. As we move through 2026, it is clear that sustainability is no longer a corporate "add-on" or a voluntary line item. It is the very foundation of the modern marketplace.
            </p>
            <p>
              We are currently witnessing a <span className="text-white font-bold">Digital Renaissance</span> — an era where technology is shifting from being a source of depletion to becoming the ultimate palette for global regeneration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-full aspect-[4/5] rounded-[32px] overflow-hidden mb-8 border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                alt="Rachana Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-3xl font-semibold mb-2">Rachana Singh</h4>
            <p className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-xs">Founder, Neuerde</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-[#AEB0B6] text-lg leading-relaxed"
          >
            <p>
              At Neuerde, we don't just "market" brands; we amplify movements. We believe that <span className="text-white font-bold">visibility is the next frontier of sustainability</span>. If a breakthrough innovation isn't seen, understood, or trusted, its impact is zero.
            </p>
            <p>
              By integrating AI-driven insights with human-centric design, we help you turn mandatory disclosures into a competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-40 border-t border-white/10">
        <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-center mb-20 md:mb-32">How We Work ?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {howWeWork.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group h-full"
            >
              <span className="text-[var(--color-neuerde-mint)] text-6xl md:text-7xl font-bold mb-6 group-hover:scale-110 transition-transform inline-block">
                {step.letter}
              </span>
              <h4 className="text-lg font-bold mb-2 leading-tight">{step.title}</h4>
              <p className="text-xs text-[#AEB0B6] font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;


