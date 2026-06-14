import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white relative overflow-hidden z-10" id="contact">
      {/* Background Image Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://framerusercontent.com/images/ysyogWDfsxbU0BnMOcWAkReXFLw.png?width=2160&height=1371" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110 grayscale" 
          alt="" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-neuerde-dark)] via-transparent to-[var(--color-neuerde-dark)] opacity-80"></div>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 relative z-10">
        
        {/* Left: Text */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[52px] md:text-[88px] font-semibold mb-8 tracking-[-0.05em] leading-[1]"
          >
            Tell Us What You're Building.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#AEB0B6] text-[18px] md:text-[22px] leading-relaxed font-medium max-w-md"
          >
            Whether it's a brand refresh, a new website, an SEO overhaul, or a full digital strategy — we'd love to hear about it. We'll come back to you within one business day.
          </motion.p>
        </div>

        {/* Right: Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-[rgba(255,255,255,0.03)] border border-white/5 rounded-[40px] p-5 md:p-8 backdrop-blur-xl shadow-2xl"
        >
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold uppercase tracking-widest text-[#AEB0B6]">Name</label>
              <input 
                type="text" 
                placeholder="Your Name *" 
                className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-[12px] px-3 py-3 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-neuerde-mint)]/30 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold uppercase tracking-widest text-[#AEB0B6]">Your Business</label>
              <input 
                type="text" 
                placeholder="Your Business *" 
                className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-[12px] px-3 py-3 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-neuerde-mint)]/30 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold uppercase tracking-widest text-[#AEB0B6]">Email Address</label>
              <input 
                type="email" 
                placeholder="Email Address *" 
                className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-[12px] px-3 py-3 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-neuerde-mint)]/30 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold uppercase tracking-widest text-[#AEB0B6]">Phone</label>
              <input 
                type="tel" 
                placeholder="Phone (optional)" 
                className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-[12px] px-3 py-3 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-neuerde-mint)]/30 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold uppercase tracking-widest text-[#AEB0B6]">Tell us about your project</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project *" 
                className="bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-[12px] px-3 py-3 text-[16px] text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-neuerde-mint)]/30 transition-all resize-none"
              ></textarea>
            </div>
            <button className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-3 rounded-full font-bold text-[18px] hover:scale-[1.02] transition-transform shadow-lg shadow-[var(--color-neuerde-mint)]/10">
              Send Your Message →
            </button>
            <p className="text-[13px] text-[#AEB0B6] leading-relaxed pt-2">
              No hard sell. No generic proposals. Just a straightforward conversation about your business and whether we're the right fit.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;
