
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Footer from '../../components/Footer';

const faqs = [
    { q: "What ad platforms do you manage?", a: "Google Search, Google Display, Meta (Facebook and Instagram), and LinkedIn. We recommend the right combination based on your audience, your goals, and your budget — not every platform suits every business." },
    { q: "What is the minimum budget required to run effective campaigns?", a: "This depends on your market, your goals, and your chosen platforms. We discuss budget realistically during the audit stage — we won't recommend a channel if the budget isn't sufficient to make it work properly." },
    { q: "How do you ensure our ads don't come across as Green Washing?", a: "Every claim in our ad creative is tied to a verifiable credential. We review all copy against your certifications, impact data, and brand guidelines before anything goes live. Accuracy is non-negotiable." },
    { q: "How quickly can we expect to see results from paid campaigns?", a: "Paid campaigns can generate results within days of launch. However, the first 4–6 weeks are typically a learning and optimization phase — we test, measure, and refine before scaling spend." },
    { q: "How do you report on campaign performance?", a: "Weekly performance snapshots and monthly in-depth reports — covering impressions, clicks, conversions, cost per acquisition, and return on ad spend. Every number is contextualized, not just listed." }
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

const PerformanceMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
            alt="Performance Marketing for Sustainable Businesses — Neuérde" 
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
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">PERFORMANCE MARKETING</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl mx-auto">Every Rupee Accountable. Every Campaign Purposeful.</h1>
          <p className="mt-8 text-lg md:text-xl text-[#AEB0B6] max-w-3xl mx-auto font-medium leading-relaxed">
            Targeted, measurable, and built around your actual goals — we run advertising campaigns that reach sustainability-minded audiences at the right moment, without wasting budget or compromising your values.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">WHY IT MATTERS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Most Ad Agencies Optimise for Clicks. We Optimise for Outcomes.</p>
        <div className="text-[#AEB0B6] space-y-4 text-lg">
          <p>Performance marketing for sustainable businesses requires a different approach to targeting, creative, and measurement. Your audience is selective. They respond to specificity, authenticity, and verified claims — not broad strokes and lifestyle imagery.</p>
          <p>We build advertising campaigns grounded in your real credentials, targeted at audiences who are actively searching for what you offer, and measured against outcomes that actually matter to your business — leads, revenue, and customer acquisition cost.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">OUR APPROACH</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-12">Campaigns Built on Strategy, Not Guesswork.</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Paid Search — Google Ads</h3>
                <p className="text-[#AEB0B6]">We target the high-intent sustainability search terms your ideal clients use when they're ready to buy — capturing demand that already exists rather than trying to create it.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Paid Social — LinkedIn & Meta</h3>
                <p className="text-[#AEB0B6]">Precision targeting for sustainable business audiences — by industry, role, interest, and behavior. LinkedIn for B2B and ESG decision-makers. Meta for conscious consumer brands.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Creative Strategy & Ad Copy</h3>
                <p className="text-[#AEB0B6]">Every ad we write is grounded in your verified sustainability credentials. We never overstate, never green wash, and never run creative that creates a credibility gap between your ad and your brand.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Attribution & Reporting</h3>
                <p className="text-[#AEB0B6]">Full-funnel attribution connecting ad spend to pipeline and revenue — so you always know which campaigns are working, which aren't, and exactly what your return on investment is.</p>
            </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">BUILT FOR</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Built for Businesses That Need Results, Not Just Reach.</p>
        <p className="text-[#AEB0B6] text-lg mb-8">Sustainable product brands, ESG-focused service providers, Cleantech companies, and Impact-driven organizations that need performance marketing which:</p>
        <ul className="list-disc list-inside text-[#AEB0B6] space-y-2 text-lg">
            <li>Reaches audiences already aligned with their values</li>
            <li>Communicates credentials accurately without green washing risk</li>
            <li>Delivers measurable ROI at every stage of the funnel</li>
            <li>Scales efficiently without wasting budget on misaligned audiences</li>
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">COMMON QUESTIONS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Performance Marketing — Frequently Asked Questions</p>
        <div>
          {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">Start With a Free Digital Growth Audit.</h2>
        <p className="text-[#AEB0B6] max-w-2xl mx-auto mb-12">We'll review your current paid media performance, identify where budget is being lost, and show you exactly what a more targeted advertising strategy would deliver for your business.</p>
        <Link to="/contact" className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-4 px-8 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
          Book Your Free Audit →
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default PerformanceMarketing;
