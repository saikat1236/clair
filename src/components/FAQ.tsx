import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { 
    q: 'Why does Neuerde only work with eco-friendly and sustainable businesses?', 
    a: 'Our mission is to accelerate the shift to a sustainable economy. We believe the biggest barrier for conscious consumers is clarity and trust. By focusing on verifiable eco-friendly brands, we align our skills with our values, ensuring our execution always promotes a positive impact.' 
  },
  { 
    q: 'How can you guarantee that showcasing my eco-benefits will lead to immediate sales?', 
    a: "We don't guarantee sales, but we guarantee performance improvements. Our strategies are rooted in Impact-to-Conversion Testing. We prove that by simplifying your complex claims (e.g., carbon footprint reduction) into easily digestible narratives, consumer confidence and purchase intent increase dramatically." 
  },
  { 
    q: 'What is the "Sustainable Value Audit" you mention?', 
    a: 'It is the foundational first step. We conduct a thorough review, including a SWOT Analysis, to understand your unique environmental strengths and communication challenges. The result is a written, actionable plan detailing the exact content and campaigns needed to make your audience instantly buy based on your integrity.' 
  },
  { 
    q: 'Are you a full-service marketing agency?', 
    a: 'We are a specialized full-service agency. We handle everything from strategy and web development to performance marketing and SMM, but our entire focus is on leveraging sustainability as the core engine for digital growth and profitability.' 
  },
  { 
    q: 'What is your typical pricing structure?', 
    a: 'Our projects are Primarily structured as 1) Fixed-Fee Strategy & Audit (due to the intensive research required); followed by 2) Retainer-Based Execution & Testing. This ensures transparency and a predictable cost for the initial blueprint.' 
  },
  { 
    q: 'Do you offer services a la carte (e.g., just the SWOT analysis)?', 
    a: 'Yes, the Sustainable Value Audit (including the SWOT and Written Plan of Action) can be a standalone engagement. However, the highest ROI is achieved when we execute the plan we develop, as we specialize in the unique communication needs of eco-friendly brands.' 
  },
  { 
    q: 'How does your pricing compare to a standard agency?', 
    a: 'Our rates reflect our specialization and deep expertise in translating complex environmental data into high-converting digital assets. We aim for long-term partnership, viewing our services as an investment in sustainable growth that pays for itself by dramatically increasing your average customer value (ACV) and brand trust.' 
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-48 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="faq">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        
        {/* Left: Heading */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[80px] font-semibold tracking-[-0.04em] leading-[1]"
          >
            FAQ
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#AEB0B6] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-[340px]"
          >
            Got questions? We’ve got answers. Here’s everything you need to know about our services, process, and pricing.
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
