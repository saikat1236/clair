
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Footer from '../../components/Footer';

const faqs = [
    { q: "What's the difference between brand strategy and brand identity?", a: "Brand strategy is the thinking — positioning, audience, messaging, differentiation. Brand identity is the expression — logo, colours, typography, visual language. We do both, and we always start with strategy. Identity built without strategy is decoration." },
    { q: "How do you ensure our brand doesn't look like every other sustainable business?", a: "We start by auditing your competitive landscape — what every competitor in your category looks and sounds like. Differentiation is designed in from the start, not applied as an afterthought." },
    { q: "Can you rebrand an existing business without losing brand equity?", a: "Yes. A rebrand doesn't mean starting from zero. We identify what has genuine recognition and equity in your current brand and carry it forward — evolving rather than erasing." },
    { q: "How long does a brand project take?", a: "A full brand strategy and identity project typically runs 8 to 14 weeks. Campaign work can be scoped and delivered in shorter windows depending on the brief." },
    { q: "Do you help with brand rollout and implementation?", a: "Yes. Brand guidelines, asset creation, and rollout support are all part of our scope. A brand that lives only in a PDF hasn't been implemented — we make sure it goes live properly." }
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

const BrandMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop"
            alt="Brand Marketing for Sustainable Businesses — Neuérde" 
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
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">BRAND MARKETING</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl mx-auto">A Brand That's Impossible to Mistake and Hard to Forget.</h1>
          <p className="mt-8 text-lg md:text-xl text-[#AEB0B6] max-w-3xl mx-auto font-medium leading-relaxed">
            From visual identity to messaging architecture — we build sustainable brands that are immediately distinctive, deeply credible, and built to last longer than a campaign.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">WHY IT MATTERS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">In a Crowded Sustainability Market, Distinction Is Survival.</p>
        <div className="text-[#AEB0B6] space-y-4 text-lg">
          <p>The sustainable business market is growing — which means it's getting harder to stand out. When every brand in your category uses the same green palette, the same impact language, and the same 'we care about the planet' positioning, the brands with the sharpest identity and the most credible narrative win.</p>
          <p>We build brand identities and marketing strategies for sustainable businesses that go beyond aesthetics — grounded in your genuine credentials, positioned for your specific audience, and designed to compound in recognition and trust over time.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">OUR APPROACH</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-12">Strategy and Craft, Working Together.</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Brand Strategy & Positioning</h3>
                <p className="text-[#AEB0B6]">We define your positioning, your audience, your competitive differentiation, and your core narrative — the strategic foundation every other brand decision is built on.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Visual Identity</h3>
                <p className="text-[#AEB0B6]">Logo, colour system, typography, and visual language — designed to communicate who you are before a word is read. Distinctive, purposeful, and built for both digital and print environments.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Messaging Architecture</h3>
                <p className="text-[#AEB0B6]">Your brand voice, your value proposition, your key messages, and your proof points — structured so every piece of communication, from a social post to an investor deck, sounds unmistakably like you.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Brand Marketing Campaigns</h3>
                <p className="text-[#AEB0B6]">Campaign strategy and creative execution that puts your brand in front of the right audience — building recognition, trust, and long-term preference rather than just short-term clicks.</p>
            </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">BUILT FOR</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Built for Brands at a Critical Inflection Point.</p>
        <p className="text-[#AEB0B6] text-lg mb-8">Sustainable startups defining their identity for the first time, established eco-conscious businesses that have outgrown their original brand, and ESG-focused organizations that need their brand to reflect the credibility they've earned:</p>
        <ul className="list-disc list-inside text-[#AEB0B6] space-y-2 text-lg">
            <li>Founders launching a sustainable product or service into a competitive market</li>
            <li>Businesses whose visual identity no longer reflects where they are today</li>
            <li>Companies whose messaging undersells their actual impact credentials</li>
            <li>Organizations preparing for investment, partnership, or international expansion</li>
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">COMMON QUESTIONS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Brand Marketing — Frequently Asked Questions</p>
        <div>
          {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">Start With a Free Digital Growth Audit.</h2>
        <p className="text-[#AEB0B6] max-w-2xl mx-auto mb-12">We'll assess your current brand positioning, identify where your identity and messaging are leaving opportunity on the table, and show you what a sharper brand strategy could unlock for your business.</p>
        <Link to="/contact" className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-4 px-8 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
          Book Your Free Audit →
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default BrandMarketing;
