
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Footer from '../../components/Footer';

const faqs = [
    { q: "Which social media platforms do you manage?", a: "We manage LinkedIn, Instagram, Facebook, and X (Twitter) — and recommend the right combination based on where your specific audience actually spends time. We don't spread your budget thin across every platform if it isn't justified." },
    { q: "How many posts per week are included?", a: "Post frequency is determined by your strategy, not by a fixed package number. We agree a cadence that makes sense for your audience and your content capacity — quality always takes priority over volume." },
    { q: "Do you create the visual assets as well as the copy?", a: "We handle creative direction and copy for every post. For original photography or video production, we work with your existing assets or coordinate with trusted creative partners." },
    { q: "How do you handle negative comments or a brand crisis on social?", a: "We have a defined response framework for sensitive or negative engagement. For anything that escalates to a brand crisis, we work directly with your team to agree messaging before responding publicly." },
    { q: "Can we see and approve content before it goes live?", a: "Yes. Every piece of content goes through a client approval stage before publishing. You remain in full control of what goes out under your brand name." }
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

const SocialMediaManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      <section className="bg-[var(--color-neuerde-dark)] pt-64 pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
            alt="Social Media Management for sustainable businesses — Neuérde" 
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
          <span className="text-[var(--color-neuerde-mint)] font-bold uppercase tracking-widest text-sm mb-6 block">SOCIAL MEDIA MANAGEMENT</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight max-w-4xl mx-auto">A Social Presence Your Audience Actually Trusts.</h1>
          <p className="mt-8 text-lg md:text-xl text-[#AEB0B6] max-w-3xl mx-auto font-medium leading-relaxed">
            We manage your social channels with the consistency and depth your audience deserves — building a community that understands your mission, trusts your brand, and advocates on your behalf.
          </p>
        </motion.div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">WHY IT MATTERS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Sustainable Businesses Deserve Better Than Generic Social Content.</p>
        <div className="text-[#AEB0B6] space-y-4 text-lg">
          <p>The sustainable business audience is among the most informed and discerning on social media. They fact-check claims. They recognize green washing instantly. They disengage from content that feels automated, shallow, or inconsistent with a brand's stated values.</p>
          <p>Managing social media for a sustainable business requires a team that understands your world — your certifications, your supply chain, your impact metrics — and can communicate them in ways that feel human, credible, and worth following.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">OUR APPROACH</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-12">Strategy, Content, and Community — Managed Daily.</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Social Media Strategy</h3>
                <p className="text-[#AEB0B6]">Channel selection, content pillars, posting cadence, and audience growth strategy — built specifically around your sustainable business and the communities you want to reach.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Content Creation</h3>
                <p className="text-[#AEB0B6]">Copy, creative direction, and asset coordination for every post — consistent with your brand voice and grounded in your actual sustainability credentials, not aspirational language.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Community Management</h3>
                <p className="text-[#AEB0B6]">Daily monitoring, audience engagement, and comment management — building genuine relationships with your followers rather than broadcasting into a void.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Performance Reporting</h3>
                <p className="text-[#AEB0B6]">Monthly reporting on reach, engagement, follower growth, and content performance — with clear recommendations for what to do differently next month.</p>
            </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">BUILT FOR</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Built for Brands That Take Their Community Seriously.</p>
        <p className="text-[#AEB0B6] text-lg mb-8">Sustainable businesses, eco-conscious founders, and ESG-focused organizations who need social media management that:</p>
        <ul className="list-disc list-inside text-[#AEB0B6] space-y-2 text-lg">
            <li>Reflects their values accurately and consistently</li>
            <li>Builds a community of genuinely engaged, aligned followers</li>
            <li>Doesn't risk Green washing accusations through careless copywriting</li>
            <li>Frees up internal time without sacrificing quality or authenticity</li>
        </ul>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-4">COMMON QUESTIONS</h2>
        <p className="text-2xl text-[var(--color-neuerde-mint)] mb-8">Social Media Management — Frequently Asked Questions</p>
        <div>
          {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-8">Start With a Free Digital Growth Audit.</h2>
        <p className="text-[#AEB0B6] max-w-2xl mx-auto mb-12">We'll review your current social media presence, identify where your content is falling short, and show you exactly what a stronger social strategy would look like for your business.</p>
        <Link to="/contact" className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] py-4 px-8 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block">
          Book Your Free Audit →
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default SocialMediaManagement;
