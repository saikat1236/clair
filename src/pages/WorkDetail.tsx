import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import LatestWorks from '../components/LatestWorks';

const projects = {
  'nova-technologies': { 
    title: 'Nova Technologies Web Development', 
    desc: 'Nova Technologies develops enterprise-level software with a focus on improving business efficiency through automation.',
    tags: ['Web Development', 'Visuals'], 
    img: 'https://framerusercontent.com/images/5W5C4NMk1gCDKaBZNAHXweAyqY.png',
    client: 'Nova Technologies',
    duration: '2 months',
    date: 'May 16, 2025',
    overview: 'We built a scalable website for Nova Technologies that included integrations for customer management and reporting. The site resulted in higher customer retention due to its ease of use and functionality.',
    problem: 'Nova Technologies needed a robust web platform that could handle both their growing business needs and a large number of clients while offering a seamless user experience.',
    solution: 'We developed a scalable, secure website with integrated CRM and analytics tools. The design focused on intuitive navigation, allowing clients to access essential features easily, and we optimized the back end for smooth performance.'
  },
  'skybox-entertainment': { 
    title: 'SkyBox Entertainment Redesign', 
    desc: 'SkyBox Entertainment is a premier media company that creates and distributes engaging content across multiple platforms.',
    tags: ['Redesign', 'Web Design'], 
    img: 'https://framerusercontent.com/images/3ZPbrhnBuoSZNmrLj4AjTSg7yo.png',
    client: 'SkyBox Ent.',
    duration: '3 months',
    date: 'June 10, 2025',
    overview: 'We completely redesigned their web presence to reflect their modern brand identity.',
    problem: 'Their old website was outdated and did not perform well on mobile devices.',
    solution: 'A fresh, responsive design with smooth animations and better content discovery.'
  },
  'bluewave-studios': { 
    title: 'BlueWave Studios Web Development', 
    desc: 'BlueWave Studios specializes in high-end video production and visual effects.',
    tags: ['Web Development', 'Branding'], 
    img: 'https://framerusercontent.com/images/dqUpheX2glYL2GSJbFzSkqvQv78.png',
    client: 'BlueWave Studios',
    duration: '1.5 months',
    date: 'August 22, 2025',
    overview: 'Developed a portfolio site to showcase their stunning video work.',
    problem: 'Videos were loading slowly and the site lacked a cohesive brand aesthetic.',
    solution: 'Implemented lazy loading, customized video players, and a dark mode aesthetic.'
  },
  'hightech-innovations': { 
    title: 'HighTech Innovations Web Design', 
    desc: 'HighTech Innovations is a leading hardware manufacturer pushing the boundaries of consumer electronics.',
    tags: ['Web Design', 'Creative Direction'], 
    img: 'https://framerusercontent.com/images/o8fqj1cMiTj1RQnxrh4pwR1zPJU.png',
    client: 'HighTech Innovations',
    duration: '4 months',
    date: 'October 05, 2025',
    overview: 'Created an immersive product showcase experience.',
    problem: 'Complex hardware specs were difficult to understand for everyday consumers.',
    solution: 'Utilized 3D scroll animations to explain features interactively.'
  },
};

const WorkDetail = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-white bg-[var(--color-clair-dark)]">Project not found</div>;

  return (
    <main className="pt-40 min-h-screen flex flex-col bg-[var(--color-clair-dark)] text-white">
      <div className="flex-1 max-w-7xl mx-auto w-full px-6">
        <Link to="/#work" className="inline-flex items-center gap-2 text-[14px] font-medium text-white/50 hover:text-white mb-12 transition-colors">
          &larr; Back to Works
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex gap-3 mb-6">
            {project.tags.map(t => (
              <span key={t} className="text-[12px] font-medium px-4 py-1.5 bg-[rgba(0,244,201,0.15)] text-[var(--color-clair-mint)] border border-white/5 rounded-full">{t}</span>
            ))}
          </div>
          <h1 className="text-[42px] md:text-[80px] font-semibold tracking-tight mb-8 max-w-4xl leading-[1]">{project.title}</h1>
          <p className="text-[18px] text-[#E4E5E7] max-w-2xl leading-relaxed font-medium">{project.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-square sm:aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#131315] border border-white/5 p-1.5 backdrop-blur-[2.5px]"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-[6px]" />
            </motion.div>
          </div>
          <div className="md:col-span-1 flex flex-col justify-end space-y-8">
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/40 mb-2">Client</h3>
              <p className="text-[18px] font-medium">{project.client}</p>
            </div>
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/40 mb-2">Duration</h3>
              <p className="text-[18px] font-medium">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/40 mb-2">Date</h3>
              <p className="text-[18px] font-medium">{project.date}</p>
            </div>
            <a href="https://framer.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[var(--color-clair-mint)] text-[var(--color-clair-dark)] px-6 py-4 rounded-full font-semibold hover:scale-105 transition-transform w-full mt-4 text-[16px] duration-300">
              Visit website &nearr;
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 max-w-6xl mx-auto">
          <div className="md:col-span-1 relative">
            <div className="sticky top-40 h-fit">
              <h2 className="text-[32px] font-semibold tracking-tight">Project Overview</h2>
            </div>
          </div>
          <div className="md:col-span-2 space-y-16">
            <div>
              <p className="text-[18px] text-[#E4E5E7] leading-relaxed font-medium">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="text-[24px] font-semibold mb-6 tracking-tight">Problem</h2>
              <p className="text-[18px] text-[#E4E5E7] leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>
            <div>
              <h2 className="text-[24px] font-semibold mb-6 tracking-tight">Solution</h2>
              <p className="text-[18px] text-[#E4E5E7] leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
        
        <LatestWorks />
        <FAQ />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
};

export default WorkDetail;
