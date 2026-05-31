import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "CSRD Explained for Startups & SMEs (Without the Jargon)",
    date: "December 27, 2025",
    comments: "No Comments",
    excerpt: "The Corporate Sustainability Reporting Directive (CSRD) officially came into force in 2025 — and many SMEs still don't know what it means for them....",
    category: "ESG",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "ESG Consulting in 2025: Why Sustainability Is Now a Business Imperative",
    date: "December 27, 2025",
    comments: "No Comments",
    excerpt: "Building The New Earth: Why Visibility Is The Next Frontier Of Sustainability A new earth doesn't begin when the world changes – it begins...",
    category: "ESG",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Visibility is the next frontier of sustainability.",
    date: "December 19, 2025",
    comments: "No Comments",
    excerpt: "Building The New Earth: Why Visibility Is The Next Frontier Of Sustainability A new earth doesn't begin when the world changes – it begins...",
    category: "Sustainable",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
  }
];

const categories = ["All Post", "ESG", "Re-Cycle", "Sustainable"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Post");

  const filteredPosts = activeCategory === "All Post" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="bg-[var(--color-neuerde-dark)] min-h-screen text-white">
      {/* Header Section */}
      <section className="pt-64 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-[160px] font-semibold tracking-tighter leading-[0.8] mb-8 md:mb-12">
              Our Blog<span className="text-[var(--color-neuerde-mint)]">.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#AEB0B6] max-w-2xl font-medium leading-relaxed">
              Insights, trends, and strategies at the intersection of design, sustainability, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 mb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-4 items-center border-b border-white/10 pb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-[16px] font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)]"
                    : "bg-white/5 text-[#AEB0B6] hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative bg-[rgba(255,255,255,0.05)] border border-white/5">
                  <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-500 z-10"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[var(--color-neuerde-dark)]/80 backdrop-blur-md text-[var(--color-neuerde-mint)] text-[12px] font-bold px-3 py-1 rounded-full border border-[var(--color-neuerde-mint)]/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[#AEB0B6] text-[14px] font-medium mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span>{post.comments}</span>
                  </div>
                  
                  <h3 className="text-[24px] font-semibold leading-tight mb-4 group-hover:text-[var(--color-neuerde-mint)] transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#AEB0B6] text-[16px] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-[var(--color-neuerde-mint)] font-semibold mt-auto group/btn">
                    Read More
                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;

