import { motion } from 'framer-motion';

const TeamMember = ({ name, role, desc, img, delay }: { name: string, role: string, desc: string, img: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-[rgba(255,255,255,0.03)] border border-white/5 rounded-[32px] p-8 md:p-10 flex flex-col gap-8 group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
  >
    <div className="w-full aspect-square rounded-[20px] overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-[#AEB0B6] text-[15px] leading-relaxed font-medium">{desc}</p>
      <div>
        <div className="text-[18px] font-bold tracking-tight">{name}</div>
        <div className="text-[14px] text-[var(--color-neuerde-mint)] font-semibold uppercase tracking-wider mt-1">{role}</div>
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  const members = [
    {
      name: "Ava Reynolds",
      role: "Creative Director",
      desc: "Ava leads Neuérde's creative vision with 10+ years in UX/UI and branding — bringing clarity, purpose, and craft to every sustainable business she works with.",
      img: "https://framerusercontent.com/images/nYcj04ualCtRoNjNtYpgouehGg.png"
    },
    {
      name: "Sophia Bennett",
      role: "Lead UX Strategist",
      desc: "Sophia combines research, design, and behavioural psychology to build digital experiences that feel effortless — and convert. Her work sits at the intersection of empathy and precision.",
      img: "https://framerusercontent.com/images/zrj0Q82duwHMFQAdS26iyp6mGs.png"
    },
    {
      name: "Daniel Carter",
      role: "Head of Development",
      desc: "Daniel builds high-performance digital solutions, ensuring seamless, scalable, and future-ready experiences.",
      img: "https://framerusercontent.com/images/IXdPhhGZM9j65YBrWhOVY2NaYs.png"
    }
  ];

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
                    [Additional team members — headshots, names, roles, and one-line bios to be supplied by agency before launch.]
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {members.map((m, i) => (
            <TeamMember key={i} {...m} delay={i * 0.1} />
          ))}
        </div>



      </div>
    </section>
  );
};

export default Team;
