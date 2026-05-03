import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'How does the process work?', a: 'We follow a structured process to ensure clarity and efficiency. From strategy and design to development and launch, every step is carefully planned to meet your goals.' },
  { q: 'How long does a project take?', a: 'Timelines vary based on the project’s complexity. A standard website takes 4–6 weeks, while more advanced projects may take longer. We provide clear timelines upfront.' },
  { q: 'Can I request custom features?', a: 'Absolutely! Whether it’s a unique design, custom functionality, or integrations, we tailor our solutions to fit your specific needs.' },
  { q: 'Do you offer ongoing support?', a: 'Yes! We provide maintenance, updates, and support to ensure your digital platform stays optimized and secure.' },
  { q: 'How does pricing work?', a: 'Our pricing is transparent and based on the scope of work. We offer fixed plans as well as custom solutions to match your budget and requirements.' },
  { q: 'How do I get started?', a: 'Simply reach out to us! We’ll discuss your needs, outline a plan, and get started on building your digital success.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-48 px-6 bg-[var(--color-clair-dark)] text-white relative z-10" id="faq">
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
                <span className="font-medium text-[18px] md:text-[22px] tracking-tight group-hover:text-[var(--color-clair-mint)] transition-colors">{faq.q}</span>
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
