import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { 
    q: 'Why does Neuérde specialise in sustainable businesses?', 
    a: "We chose this niche deliberately. Sustainable businesses face a unique digital challenge — their value proposition is more complex, their audience is more discerning, and the cost of getting the messaging wrong is higher. Generic agencies apply generic solutions. We've built our entire approach around the specific growth challenges of eco-conscious brands, purpose-driven companies, and ESG-focused organisations. It's not just what we do — it's what we're good at." 
  },
  { 
    q: 'Will better digital marketing actually lead to more sales for my business?', 
    a: "We don't guarantee sales — no honest agency does. What we guarantee is measurable performance improvement. Our strategies are built around translating your credentials into clear, compelling digital experiences that increase consumer confidence and purchase intent. We test, measure, and optimise until the numbers move — and we show you exactly what's working and why." 
  },
  { 
    q: 'What is the Digital Growth Audit and what does it include?', 
    a: 'The Digital Growth Audit is our starting point for every new client. We conduct a thorough review of your current digital presence/ Social media channel— SEO performance, website conversion, content gaps, competitor positioning, and audience behavior. The output is a written, actionable plan detailing exactly what needs to change and in what order to accelerate your digital growth.' 
  },
  { 
    q: 'Are you a full-service digital agency?', 
    a: "Yes — we handle everything from brand strategy and web development to SEO, content marketing, social media, and performance advertising. The difference is that our entire approach is calibrated for the businesses we serve — so every service we deliver is informed by a deep understanding of your target market and conscious audience that helps you achieve your mission. " 
  },
  { 
    q: 'What does your pricing look like?', 
    a: "We start with a free Digital Growth Audit — a thorough review of your current digital presence, social media channels, existing content, SEO performance, and competitor positioning. From there, every engagement is fully customisable. We don't believe in one-size-fits-all packages. Based on what the audit uncovers, we build a tailored scope around your actual." 
  },
  { 
    q: 'Can I commission the audit without a full retainer?', 
    a: 'Yes. The Digital Growth Audit is complimentary for all new clients. The deliverable is a focused assessment highlighting your key content gaps, underperforming areas, and priority opportunities across your digital presence — presented as a clear, actionable overview rather than a full execution plan. The decision to proceed beyond the audit rests entirely with you.' 
  },
  { 
    q: 'How does Neuérde\'s pricing compare to a standard agency?', 
    a: "Our rates reflect specialisation and depth. A generalist agency will charge less upfront — but you\'ll spend significant time and budget educating them on your world, correcting generic approaches, and recovering from messaging that misses your audience. We come ready. Our clients consistently find the investment aligned with better targeting, higher conversion, and stronger brand trust." 
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="faq">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        
        {/* Left: Heading */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[80px] font-semibold tracking-[-0.04em] leading-[1]"
          >
            Everything You Need to Know About Working With <span className='text-neuerde-gradient'>Neuérde</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#AEB0B6] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-[340px]"
          >
            From our process to our pricing — here are the answers our clients ask most.
          </motion.p>
        </div>

        {/* Right: Accordion */}
        <div className="md:col-span-8 flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-white/10 group"
            >
              <button 
                className="w-full py-8 text-left flex justify-between items-center transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-[18px] md:text-[22px] tracking-tight group-hover:text-[var(--color-neuerde-mint)] transition-colors">{faq.q}</span>
                <span className={`text-[24px] md:text-[32px] font-light text-[#AEB0B6] transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pb-10 text-[#94969D] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-2xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
