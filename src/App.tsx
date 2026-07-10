import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import WorkDetail from './pages/WorkDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import WebDevelopment from './pages/services/WebDevelopment';
import EsgContentStrategy from './pages/services/EsgContentStrategy';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import SeoForSustainableBrands from './pages/services/SeoForSustainableBrands';
import PerformanceMarketing from './pages/services/PerformanceMarketing';
import BrandMarketing from './pages/services/BrandMarketing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-neuerde-dark)] text-white font-sans selection:bg-[var(--color-neuerde-mint)] selection:text-[var(--color-neuerde-dark)]">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/esg-content-strategy" element={<EsgContentStrategy />} />
          <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/services/seo-for-sustainable-brands" element={<SeoForSustainableBrands />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/brand-marketing" element={<BrandMarketing />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
