import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Team from '../components/Team';

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
            A digital agency built for the businesses building a better economy.
          </p>
        </motion.div>
      </section>
      {/* Vision & Mission Section */}


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
            <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight"><span className="text-neuerde-gradient">Neuérde</span> — Our Story</h2>
            <div className="space-y-6 text-[#AEB0B6] text-lg font-medium leading-relaxed">
              <p>
                Neuérde is a digital agency built for one purpose — helping sustainable businesses grow with the same caliber of strategy, design, and execution that any ambitious brand deserves.
              </p>
              <p>
                We made a deliberate choice early on. While most agencies chase every industry, we chose to go deep into one — the businesses building products and services that genuinely make the world better. Environmentally-focused startups. ESG-driven companies. Founders who are building something real, not just something marketable.
              </p>
              <p>
                That choice shapes everything we do. We understand the language, the audience, and the unique challenges of this space — so our clients spend less time briefing us and more time growing.
              </p>
              <p>
                We work with brands that have something true to say. Our job is making sure the world hears it.
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
              alt="Neuérde team — digital agency for sustainable businesses" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>



      {/* Founder's Desk Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-40">
        <div className="text-center mb-24">
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">FOUNDER'S DESK</span>
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter"><span className="text-neuerde-gradient">Sustainability</span> Is the Next Economy</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-[#AEB0B6] text-lg leading-relaxed"
          >
            <p>
              The world has reached a tipping point. As we move through 2026, <Link to="/blog" className="text-[var(--color-neuerde-mint)] hover:underline">sustainability is no longer a corporate add-on</Link> or a voluntary line item — it's becoming the foundation of how the modern marketplace operates.
            </p>
            <p>
              For digital agencies, this shifts the brief entirely. Brands with genuine sustainability credentials need to communicate complex value — supply chains, certifications, impact data — in ways that build trust rather than skepticism. That's a different skill set to standard brand marketing, and it's the one we've built our practice around.
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
                alt="Rachana Singh, Founder of Neuérde" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Rachana Singh</h3>
            <p className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-xs">FOUNDER, NEUÉRDE</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-[#AEB0B6] text-lg leading-relaxed"
          >
            <p>
              We don't just run campaigns for our clients — we help them build visibility for things that matter. A brilliant sustainable product with no visibility has zero impact. Our job is to close that gap.
            </p>
            <p>
              We bring sharp strategy and genuine craft to brands that have something real to say — and we make sure the right people hear it, see it, and trust it.
            </p>
          </motion.div>
        </div>
      </section>

      <Team />

      {/* How We Work Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 md:py-40 border-t border-white/10">
        <h2 className="text-4xl md:text-8xl font-semibold tracking-tighter text-center mb-20 md:mb-32">How We Work ?</h2>
        
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


