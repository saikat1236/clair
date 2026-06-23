
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Footer from '../../components/Footer';

const faqs = [
    { q: "What makes ESG content different from standard content marketing?", a: "ESG content requires a precise balance between accessibility and accuracy. Claims must be verifiable, language must be precise, and the content must serve audiences ranging from conscious consumers to institutional investors — often within the same piece. Standard content approaches don't account for this." },
    { q: "How do you ensure our content doesn't come across as green washing?", a: "Every claim we make in your content is grounded in your verified credentials. We never exaggerate, generalize, or use language that implies more than what your certifications and data support. If something can't be substantiated, we don't say it." },
    { q: "How long before content starts ranking on Google?", a: "SEO content typically begins showing meaningful movement between 3 and 6 months. The compounding nature of content means results accelerate over time — the content we produce in month one is still generating traffic in month twelve." },
    { q: "Do you produce content in-house or use freelancers?", a: "All content is produced in-house by our team. We don't outsource writing to generalist freelancers who aren't familiar with ESG frameworks, certification language, or the sustainable business landscape." },
    { q: "Can you work with our existing content and improve it?", a: "Yes. A content audit is part of our Digital Growth Audit — we identify what's working, what's underperforming, and what needs to be rebuilt before we produce a single new piece." }
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

const EsgContentStrategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
            alt="ESG Content Strategy for sustainable businesses — Neuérde" 
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
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">ESG CONTENT STRATEGY</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl mx-auto">Your ESG Story Is Complex. We Make It Impossible to <span className="text-neuerde-gradient">Misunderstand.</span></h1>
          <p className="mt-8 text-lg md:text-xl text-[#AEB0B6] max-w-3xl mx-auto font-medium leading-relaxed">
            We turn complex sustainability credentials into clear, compelling content that builds topical authority, earns audience trust, and keeps working long after publication.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">WHY IT MATTERS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Most ESG Content Either Oversimplifies or Overwhelms.</p>
        <div className="text-[#AEB0B6] space-y-4 text-lg">
          <p>Sustainable businesses face a content challenge no generalist agency is equipped to solve. Too simple, and your credentials look like green washing. Too dense, and your audience disengages before they understand what makes you credible.</p>
          <p>We sit in the space between — translating lifecycle assessments, certification frameworks, Scope 3 emissions data, and impact reports into content that educates without patronizing, builds trust without overselling, and ranks without keyword stuffing.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">OUR DELIVERABLES</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-12">Content That Builds Authority Over Time.</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">ESG Content Strategy</h3>
                <p className="text-[#AEB0B6]">A full content architecture built around your sustainability credentials, your audience's awareness level, and the search terms they use at every stage of the buyer journey.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Impact Storytelling</h3>
                <p className="text-[#AEB0B6]">We translate your verified impact data — carbon reductions, supply chain transparency, certification milestones — into narratives that resonate with conscious consumers and institutional audiences alike.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">SEO Content Production</h3>
                <p className="text-[#AEB0B6]">Pillar pages, cluster content, thought leadership, and long-form guides — all written to rank for the sustainability-specific search terms your ideal clients are already using.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">ESG Copywriting</h3>
                <p className="text-[#AEB0B6]">Website copy, landing pages, email sequences, and campaign messaging — written to communicate your sustainability credentials accurately, compellingly, and without green washing risk.</p>
            </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">BUILT FOR</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">This Service Is Built for Brands With Something Real to Say.</p>
        <p className="text-[#AEB0B6] text-lg mb-8">Sustainable businesses, B Corp certified companies, ESG-focused organizations, and impact-driven founders who need content that:</p>
        <ul className="list-disc list-inside text-[#AEB0B6] space-y-2 text-lg">
            <li>Accurately represents their credentials without overstating them</li>
            <li>Builds topical authority in their sustainability niche</li>
            <li>Reaches conscious consumers at the right moment in their decision journey</li>
            <li>Compounds in value over time rather than expiring after a campaign</li>
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">COMMON QUESTIONS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">ESG Content Strategy — Frequently Asked Questions</p>
        <div>
          {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>
      
      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">Start With a Free Digital Growth Audit.</h2>
        <p className="text-[#AEB0B6] max-w-2xl mx-auto mb-12">We'll assess your current content, identify the gaps, and show you exactly where the ESG content opportunities are for your business. Free, with no obligation.</p>
        <Link to="/contact" className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-4 px-8 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
          Book Your Free Audit →
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default EsgContentStrategy;
