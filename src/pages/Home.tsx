import Hero from '../components/Hero';
import Works from '../components/Works';
import Approach from '../components/Approach';
import Features from '../components/Features';
import Expertise from '../components/Expertise';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Statement from '../components/Statement';

const Home = () => {
  return (
    <main>
      <Hero />
      <Statement />
      <Works />
      <Approach />
      <Features />
      <Expertise />
      <Team />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
