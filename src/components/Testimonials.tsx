import { motion } from 'framer-motion';
import { Smile, ArrowRight } from 'lucide-react';

const TestimonialCard = ({ title, text, author, role, img, delay }: { title: string, text: string, author: string, role: string, img: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col gap-6"
  >
    <div className="flex flex-col gap-4">
      <h4 className="text-[20px] font-semibold tracking-tight">{title}</h4>
      <p className="text-[#AEB0B6] text-[16px] leading-relaxed font-medium">
        {text}
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-[rgba(255,255,255,0.05)] border border-white/10">
        <img src={img} alt={author} className="w-full h-full object-cover" />
      </div>
      <div>
        <div className="text-[16px] font-semibold tracking-tight">{author}</div>
        <div className="text-[14px] text-[#AEB0B6] font-medium">{role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const column1 = [
    {
      title: "Top-Notch Experience!",
      text: "Neuérde transformed our vision into a seamless digital experience. The attention to detail was unmatched!",
      author: "Alex Thompson",
      role: "CEO at BrightTech",
      img: "https://framerusercontent.com/images/nE9hvfI6RbJX4wVWWxrpY52szA.png?width=100&height=100"
    },
    {
      title: "Beyond Expectations",
      text: "Their UX/UI expertise transformed our digital presence, making navigation seamless and user-friendly while significantly increasing our conversions and engagement.",
      author: "Maya Patel",
      role: "Founder of Nova Apparel",
      img: "https://framerusercontent.com/images/v3qbiziOhVf2XLpp9ftJAnUy0.png?width=100&height=100"
    }
  ];

  const column2 = [
    {
      title: "Absolutely Thrilled!",
      text: "Working with Neuérde was effortless. They delivered beyond expectations, on time, and with excellence.",
      author: "Jordan Lee",
      role: "Creative Director at PixelEdge",
      img: "https://framerusercontent.com/images/Sb9j37cB4xzAXkPZOnYLQtM2xk.png?width=101&height=101"
    },
    {
      title: "Exceeded Limits!",
      text: "From branding to development, everything was top-notch. A truly talented and dedicated team!",
      author: "Elena Roberts",
      role: "Marketing Lead, SkyNeat Solutions",
      img: "https://framerusercontent.com/images/QqqAe2LfNzsMiMnh2Gt9HPBvqOo.png?width=100&height=100"
    }
  ];

  return (
    <section className="py-48 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="testimonials">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-full mb-10 backdrop-blur-md"
          >
             <Smile size={14} className="text-[var(--color-neuerde-mint)]" />
             <span className="text-[12px] font-medium uppercase tracking-[0.15em] ml-0.5 opacity-80">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[44px] md:text-[64px] font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#AEB0B6] text-[18px] md:text-[20px] max-w-2xl mx-auto font-medium"
          >
            Real results—see how Neuérde fuels growth with design, development, and strategy.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Column: Success Stories & Rating */}
          <div className="md:col-span-4 flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[24px] font-semibold tracking-tight">Success Stories</h3>
              <p className="text-[#AEB0B6] text-[16px] leading-relaxed font-medium">
                Transforming brands with strategy, design, and cutting-edge technology. See how we’ve helped businesses thrive.
              </p>
            </motion.div>

            <div className="flex gap-1.5">
               <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
               <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
               <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[24px] font-semibold tracking-tight">4.9/5 Rating</h3>
              <p className="text-[#AEB0B6] text-[16px] leading-relaxed font-medium">
                Consistently rated 4.9 by our clients for excellence in creativity, execution, and support.
              </p>
            </motion.div>

            <div className="flex gap-1.5">
               <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
               <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
               <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-10"
            >
              <p className="text-[16px] font-semibold leading-relaxed tracking-tight">
                Your feedback matters! Share your experience with Neuérde and help us grow.
              </p>
              <button className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] px-8 py-4 rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 w-fit">
                Leave a Review <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-4 flex flex-col gap-24">
            {column1.map((card, i) => (
              <TestimonialCard key={i} {...card} delay={i * 0.2} />
            ))}
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 flex flex-col gap-24">
            {column2.map((card, i) => (
              <TestimonialCard key={i} {...card} delay={i * 0.2 + 0.1} />
            ))}
          </div>

        </div>

        {/* Bottom Dots */}
        <div className="mt-32 flex justify-center gap-1.5">
           <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
           <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
           <div className="w-2 h-2 rounded-full bg-[var(--color-neuerde-mint)]"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
