
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Footer from '../../components/Footer';

const faqs = [
    { q: "How is SEO for sustainable brands different from standard SEO?", a: "The keyword landscape is different, the audience is more discerning, and the content requirements are more precise. Sustainable business audience fact-check claims and disengage from content that feels generic. SEO for this niche requires specialist knowledge of the search terms, the audience behavior, and the credibility signals that convert." },
    { q: "How long does SEO take to show results?", a: "Meaningful organic growth typically appears between 3 and 6 months, with compounding results over 12 months. SEO is a long-term investment — the visibility you build in month three is still generating traffic in year two." },
    { q: "What is GEO and why does it matter for my business?", a: "GEO — Generative Engine Optimization — is the practice of structuring your web content so AI search tools like ChatGPT, Perplexity, and Google SGE surface your business in their answers. As more of your audience turns to AI for recommendations, GEO is becoming as important as traditional SEO. We build it in from the start." },
    { q: "Do you handle local SEO as well as national or global?", a: "Yes. Depending on your target market, we can optimize for local search visibility, national rankings, or international reach — sometimes all three simultaneously, with different keyword strategies for each." },
    { q: "How do you measure and report SEO performance?", a: "Monthly reporting covering keyword rankings, organic traffic, click-through rates, and conversion data — tied directly to business outcomes, not just vanity metrics." }
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

const SeoForSustainableBrands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop"
            alt="SEO for Sustainable Brands — Neuérde" 
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
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">SEO FOR SUSTAINABLE BRANDS</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl mx-auto">Own the Search Terms Your Ideal Clients Are Already Using.</h1>
          <p className="mt-8 text-lg md:text-xl text-[#AEB0B6] max-w-3xl mx-auto font-medium leading-relaxed">
            We help sustainable businesses build organic visibility that compounds over time — ranking for the exact terms conscious consumers and ESG-focused buyers search when they're ready to act.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">WHY IT MATTERS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Your Sustainable Business Is Invisible to the People Looking for You.</p>
        <div className="text-[#AEB0B6] space-y-4 text-lg">
          <p>Most sustainable businesses are losing organic search traffic to generalist competitors who rank for the same terms with none of the credentials. The conscious consumer searching 'sustainable [product category]' or 'ethical [service type]' is actively looking for what you offer — and finding someone else.</p>
          <p>SEO for sustainable brands isn't just about ranking — it's about owning the specific corner of search where your verified credentials become a competitive advantage rather than a communication challenge.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">OUR APPROACH</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-12">Technical Precision. Strategic Content. Measurable Results.</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Technical SEO Audit</h3>
                <p className="text-[#AEB0B6]">We begin with a full technical audit — crawl errors, page speed, Core Web Vitals, indexation issues, schema markup gaps, and site architecture. We fix the foundation before building on it.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Keyword Architecture for Sustainable Businesses</h3>
                <p className="text-[#AEB0B6]">We build a three-tier keyword map — primary terms your ideal clients search, secondary terms that support topical authority, and long-tail terms that capture high-intent, purchase-ready traffic.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">On-Page Optimization</h3>
                <p className="text-[#AEB0B6]">Title tags, Meta descriptions, H1/H2/H3 structure, internal linking, and content optimization — every page on your site mapped to a specific keyword and intent.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">GEO — Generative Engine Optimization</h3>
                <p className="text-[#AEB0B6]">Beyond Google — we structure your content so AI engines like ChatGPT, Perplexity, and Google SGE surface your business when users ask for recommendations in your category. This is where most competitors aren't yet investing.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg col-span-2">
                <h3 className="font-bold text-xl mb-2">Link Building & Authority</h3>
                <p className="text-[#AEB0B6]">Ethical, relevant link acquisition that builds your domain authority over time — no shortcuts, no link farms, no strategies that risk a Google penalty.</p>
            </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">BUILT FOR</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Built for Sustainable Businesses Ready to Be Found.</p>
        <p className="text-[#AEB0B6] text-lg mb-8">Eco-conscious brands, B Corp certified companies, cleantech startups, and ESG-focused organizations that need SEO which:</p>
        <ul className="list-disc list-inside text-[#AEB0B6] space-y-2 text-lg">
            <li>Targets the specific terms their conscious consumer audience uses</li>
            <li>Builds organic visibility that doesn't disappear when ad spend stops</li>
            <li>Communicates sustainability credentials accurately in search snippets</li>
            <li>Compounds in value month over month</li>
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">COMMON QUESTIONS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">SEO for Sustainable Brands — Frequently Asked Questions</p>
        <div>
          {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">Start With a Free Digital Growth Audit.</h2>
        <p className="text-[#AEB0B6] max-w-2xl mx-auto mb-12">We'll audit your current SEO performance, identify the keyword gaps your sustainable business is losing traffic to, and show you exactly where the organic growth opportunities are.</p>
        <Link to="/contact" className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-4 px-8 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
          Book Your Free Audit →
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default SeoForSustainableBrands;
