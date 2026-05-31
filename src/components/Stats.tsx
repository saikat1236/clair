import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { val: '31+', label: 'Websites Delivered', desc: 'Seamless, smooth, powerful digital experiences built intentionally.' },
    { val: '200 K+', label: 'Users Engaged', desc: 'Designs that inspire meaningful, lasting, and memorable connections.' },
    { val: '98%', label: 'Client Retention', desc: 'Long-term creative partnerships built on trust and collaboration.' },
    { val: '500 K+', label: 'Conversions Generated', desc: 'Bold, innovative designs that engage and consistently drive results.' },
  ];

  return (
    <section className="py-32 px-6 bg-[var(--color-neuerde-dark)] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Divider with Dots */}
        <div className="relative flex items-center mb-24">
          <div className="flex-1 h-[1px] bg-white/10 rounded-full"></div>
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-1.5 bg-[var(--color-neuerde-dark)] px-4">
             <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
             <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
             <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
          </div>
        </div>

        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[58px] font-semibold mb-6 tracking-tight"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#AEB0B6] text-[18px] md:text-[20px] font-medium"
          >
            Proven Results, Meaningful Growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-[58px] font-semibold mb-4 tracking-tighter leading-none">{s.val}</div>
              <div className="text-[18px] font-semibold mb-4 tracking-tight">{s.label}</div>
              <p className="text-[#94969D] text-[16px] leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
