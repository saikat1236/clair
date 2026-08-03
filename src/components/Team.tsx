import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamMember = ({ name, role, desc, img, delay }: { name: string, role: string, desc: string, img: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-[rgba(255,255,255,0.03)] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col gap-8 group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
  >
    <div className="w-full aspect-square rounded-full overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-[#AEB0B6] text-[15px] leading-relaxed font-medium min-h-[66px] line-clamp-3">{desc}</p>
      <div>
        <div className="text-[18px] font-bold tracking-tight">{name}</div>
        <div className="text-[14px] text-[var(--color-neuerde-mint)] font-semibold uppercase tracking-wider mt-1">{role}</div>
      </div>
    </div>
  </motion.div>
);

const Team = ({ limit, showSeeMore }: { limit?: number, showSeeMore?: boolean }) => {
  const allMembers = [


    {
      name: "Vikram Patel",
      role: "Head of Development",
      desc: "Vikram builds high-performance digital solutions, ensuring seamless, scalable, and future-ready experiences that meet the highest technical standards for modern brands.",
      img: "/assets/team/team2.jpeg"
    },
        {
      name: "Priya Nair",
      role: "Creative Director",
      desc: "Priya leads Neuérde's creative vision with 10+ years in UX/UI and branding — bringing clarity, purpose, and craft to every sustainable business she works with.",
      img: "/assets/team/team1.jpeg"
    },
    {
      name: "Arjun Singh",
      role: "Digital Strategist",
      desc: "Arjun specializes in data-driven strategies that help sustainable brands scale their impact through precision marketing and comprehensive growth analysis in the green economy.",
      img: "/assets/team/team4.jpeg"
    },
    
    {
      name: "Debashish Banerjee",
      role: "Senior Developer",
      desc: "Debashish focuses on clean code and performance optimization, ensuring every project is as efficient as it is beautiful and technically robust for long-term scalability.",
      img: "/assets/team/team5.jpeg"
    },
        {
      name: "Kavya Iyer",
      role: "Lead UX Strategist",
      desc: "Kavya combines research, design, and behavioural psychology to build digital experiences that feel effortless, human-centric, and highly effective for conscious consumers.",
      img: "/assets/team/team3.jpeg"
    },
    {
      name: "Aditya Deshmukh",
      role: "Content Lead",
      desc: "Aditya crafts compelling narratives that connect brands with their audience through authentic storytelling and high-impact content strategies across all digital platforms.",
      img: "/assets/team/team6.jpeg"
    }
  ];

  const members = limit ? allMembers.slice(0, limit) : allMembers;

  return (
    <section className="py-12 px-6 bg-[var(--color-neuerde-dark)] text-white relative z-10" id="team">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-20 md:mb-32 items-end">
          <div className="md:col-span-6 flex flex-col gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[42px] md:text-[80px] font-semibold mb-2 tracking-[-0.04em] leading-[1]"
            >
                Meet the <span className="text-neuerde-gradient">Neuérdian</span>’s.
            </motion.h2>
            <p className="text-[#AEB0B6] text-[18px] md:text-[22px] leading-relaxed font-medium">
                A team of strategists, designers, and developers who chose to specialise in sustainable businesses — because we believe the most important brands in the world deserve the best digital work.
            </p>
          </div>
          
          <div className="md:col-span-6 md:pb-4 flex md:justify-end">
             <div className="flex flex-col gap-6 md:items-end text-left md:text-right">
                <p className="text-[16px] text-[#AEB0B6] font-medium max-w-sm">
                    Our team brings together decades of experience in building digital products that matter.
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {members.map((m, i) => (
            <TeamMember key={i} {...m} delay={i * 0.1} />
          ))}
        </div>

        {showSeeMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link 
              to="/about" 
              className="bg-[var(--color-neuerde-mint)] text-[var(--color-neuerde-dark)] px-12 py-5 rounded-full font-bold text-[18px] hover:bg-white transition-all duration-300 shadow-lg"
            >
              See Full Team
            </Link>
          </motion.div>
        )}



      </div>
    </section>
  );
};

export default Team;
