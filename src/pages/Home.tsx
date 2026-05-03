import Hero from '../components/Hero';
import Statement from '../components/Statement';
import Works from '../components/Works';
import Approach from '../components/Approach';
import Features from '../components/Features';
// import Stats from '../components/Stats';
import Expertise from '../components/Expertise';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Statement />
      <Works />
      <Approach />
      <Features />
      {/* <Stats /> */}
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
