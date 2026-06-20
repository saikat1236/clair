
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Footer from '../../components/Footer';

const faqs = [
  { q: "How long does a web development project typically take?", a: "Most projects run between 6 and 12 weeks from brief to launch, depending on complexity and the number of pages. We agree the timeline upfront — no surprises." },
  { q: "Do you build on specific platforms or CMS?", a: "We recommend the platform that fits your specific needs — whether that's Word Press, Webflow, Shopify, or a custom build. We don't push a preferred stack for our convenience." },
  { q: "Will my website be optimised for search engines?", a: "Yes. Every site we build includes on-page SEO as standard — semantic HTML structure, optimized page titles and meta descriptions, Core Web Vitals compliance, and clean URL architecture." },
  { q: "Can you redesign an existing website rather than build from scratch?", a: "Absolutely. Many of our clients come to us with an existing site that isn't performing. We audit what's working, identify what isn't, and rebuild accordingly — retaining what has equity and fixing what doesn't." },
  { q: "What happens after the website launches?", a: "We offer ongoing support and retainer arrangements for clients who want continuous optimization, updates, and performance monitoring post-launch." }
];

const FaqItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <h3 className="text-xl font-medium">{q}</h3>
        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '16px' : '0px' }}
        className="overflow-hidden"
      >
        <p className="text-[#AEB0B6]">{a}</p>
      </motion.div>
    </div>
  );
};

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744095-291d1f69428d?q=80&w=2070&auto=format&fit=crop" 
            alt="Web development for sustainable businesses — Neuérde" 
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
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">WEB DEVELOPMENT</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl mx-auto">Websites That Work as Hard as Your Business Does.</h1>
          <p className="mt-8 text-lg md:text-xl text-[#AEB0B6] max-w-3xl mx-auto font-medium leading-relaxed">
            We design and build websites for sustainable businesses that need more than a digital brochure — fast, precise, conversion-focused, and built to grow with you.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">WHAT WE DELIVER</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Every Element Engineered With Purpose.</p>
        <div className="text-[#AEB0B6] space-y-4 text-lg">
          <p>A website is your highest-performing salesperson — available 24 hours a day, speaking to every potential client simultaneously. We build websites that make your value immediately clear, guide users toward the right action, and reflect the credibility your sustainable business has earned.</p>
          <p>We don't use templates. Every site we build is designed from the ground up around your specific audience, your specific goals, and the specific story only your business can tell.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">OUR APPROACH</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-12">Design, Development, and Performance — All Under One Roof.</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">UI/UX Design</h3>
                <p className="text-[#AEB0B6]">Every interface decision is made with your user in mind. We map the entire user journey before a single pixel is placed — ensuring the experience feels effortless and the path to conversion is always clear.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Web Design for Sustainable Brands</h3>
                <p className="text-[#AEB0B6]">Your visual identity, your sustainability credentials, and your brand voice — translated into a digital experience that communicates who you are before the visitor reads a single word.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Performance Engineering</h3>
                <p className="text-[#AEB0B6]">Speed, accessibility, and Core Web Vitals aren't afterthoughts — they're built in from day one. A slow website loses visitors before they arrive. We build fast.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Conversion Optimization</h3>
                <p className="text-[#AEB0B6]">Beautiful design without conversion is decoration. Every layout decision is made with one question in mind: does this move the visitor closer to taking action?</p>
            </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">BUILT FOR</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Is This the Right Service for Your Business?</p>
        <p className="text-[#AEB0B6] text-lg mb-8">This service is built for sustainable businesses, eco-conscious startups, and ESG-focused companies that need a website which:</p>
        <ul className="list-disc list-inside text-[#AEB0B6] space-y-2 text-lg">
          <li>Communicates complex value simply and credibly</li>
          <li>Converts informed, discerning audiences</li>
          <li>Performs technically without compromise</li>
          <li>Reflects a brand worth trusting</li>
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">COMMON QUESTIONS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Web Development — Frequently Asked Questions</p>
        <div>
          {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">Start With a Free Digital Growth Audit.</h2>
        <p className="text-[#AEB0B6] max-w-2xl mx-auto mb-12">Before we scope a single page, we review your current digital presence and tell you exactly what your website needs to achieve. No cost, no commitment — just clarity.</p>
        <Link to="/contact" className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-4 px-8 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
          Book Your Free Audit →
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default WebDevelopment;
