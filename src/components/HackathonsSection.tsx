import React from 'react';
import { motion } from 'motion/react';
import { CarouselTicker } from './CarouselTicker';

interface HackathonsSectionProps {
  setActiveTab: (tab: string) => void;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      {/* Black & Red Hack Club Hardware Sprue Partial Background */}
      <div 
        className="absolute inset-x-0 top-0 h-96 sm:h-[480px] bg-cover bg-top opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      {/* Radial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <img src="/flag-standalone.svg" alt="Hack Club Flag" className="h-10 sm:h-12 object-contain" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            What We Do at <span className="text-[#ec3750]">Hack Club Marina</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#8492a6] leading-relaxed">
            We build cool software & hardware projects together, claim <strong className="text-white">free software & hardware grants</strong> (hosting, APIs, microcontrollers & kits), participate in Hack Club & Devpost hackathons, get <strong className="text-[#f1c40f]">free sticker drops</strong>, and hang out at Marina High School.
          </p>
        </motion.div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Pillar 1: Hack Club Hackathons */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="/flag-orpheus-top.svg" alt="Hack Club Flag Orpheus" className="h-8 object-contain" />
              </div>

              <span className="text-xs font-bold text-[#ec3750] uppercase tracking-wider block">
                01. Hack Club Hackathons
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Global & Regional Hackathons
              </h3>

              <p className="text-xs sm:text-sm text-[#8492a6] leading-relaxed">
                As an official chapter supported by Hack Club HQ, Marina HS students get access to global Hack Club hackathons, micro-grants for hardware, free domain names, and sticker swaps.
              </p>

              <ul className="space-y-2 text-xs text-[#a0aec0]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ec3750] inline-block flex-shrink-0"></span>
                  <span>Travel stipends & micro-grants from HQ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ec3750] inline-block flex-shrink-0"></span>
                  <span>Free microcontrollers, PCBs & electronic kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ec3750] inline-block flex-shrink-0"></span>
                  <span>Connect with 25,000+ teen hackers globally</span>
                </li>
              </ul>
            </div>

            <a
              href="https://hackclub.com/hackathons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ec3750] hover:text-white transition-colors pt-4 border-t border-[#2d2d38]"
            >
              <span>Explore Hack Club Events</span>
              <span className="font-mono text-sm">→</span>
            </a>
          </motion.div>

          {/* Pillar 2: Devpost Hackathons */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#338eda]/50 transition-all shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="/devpost.svg" alt="Devpost Logo" className="h-8 w-8 object-contain" />
              </div>

              <span className="text-xs font-bold text-[#338eda] uppercase tracking-wider block">
                02. Devpost Competitions
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Submit & Win on Devpost
              </h3>

              <p className="text-xs sm:text-sm text-[#8492a6] leading-relaxed">
                We team up to build software apps, games, AI tools, and web services, submitting our chapter projects to Devpost high school competitions to win prizes and build real portfolios.
              </p>

              <ul className="space-y-2 text-xs text-[#a0aec0]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#338eda] inline-block flex-shrink-0"></span>
                  <span>Team project sprints for all skill levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#338eda] inline-block flex-shrink-0"></span>
                  <span>Publish code on GitHub & project pages on Devpost</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#338eda] inline-block flex-shrink-0"></span>
                  <span>Win cash prizes, tech swag, and internships</span>
                </li>
              </ul>
            </div>

            <a
              href="https://devpost.com/hackathons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#338eda] hover:text-white transition-colors pt-4 border-t border-[#2d2d38]"
            >
              <span>Browse Devpost Hackathons</span>
              <span className="font-mono text-sm">→</span>
            </a>
          </motion.div>

          {/* Pillar 3: Community Purpose */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#33d6a6]/50 transition-all shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="/icon-rounded.svg" alt="Hack Club Rounded Icon" className="h-8 w-8 object-contain" />
              </div>

              <span className="text-xs font-bold text-[#33d6a6] uppercase tracking-wider block">
                03. Inclusive Community
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Marina High School Culture
              </h3>

              <p className="text-xs sm:text-sm text-[#8492a6] leading-relaxed">
                No prior coding experience needed. Whether you want to write your first line of Python, build a robot, or just hang out with friends during lunch, Hack Club Marina is your space.
              </p>

              <ul className="space-y-2 text-xs text-[#a0aec0]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#33d6a6] inline-block flex-shrink-0"></span>
                  <span>0 Membership Dues — 100% Free for all students</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#33d6a6] inline-block flex-shrink-0"></span>
                  <span>Lunch & After-School sessions in Advisor's room</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#33d6a6] inline-block flex-shrink-0"></span>
                  <span>Free snacks, sticker drops, and mentorship</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('signup')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33d6a6] hover:text-white transition-colors pt-4 border-t border-[#2d2d38] cursor-pointer text-left"
            >
              <span>Join Chapter Group Chat</span>
              <span className="font-mono text-sm">→</span>
            </button>
          </motion.div>

        </div>

        {/* Continuous Auto-Scrolling Infinite Carousel Component */}
        <CarouselTicker />

        {/* Feature Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-5 sm:p-10 rounded-xl bg-[#1e1e24] border border-[#2d2d38] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="/hcb-light.png" alt="Hack Club Bank" className="h-4 object-contain" />
              <span className="text-xs font-bold text-[#ff8c37]">Official Chapter Charter • Marina High School</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to build cool stuff with us?
            </h3>
            <p className="text-xs sm:text-sm text-[#8492a6] max-w-xl">
              Text <strong className="text-white">657-505-8696</strong> or email <strong className="text-white">yychang100@student.hbuhsd.edu</strong> to join the Hack Club Marina group chat!
            </p>
          </div>

          <button
            onClick={() => setActiveTab('signup')}
            className="w-full sm:w-auto justify-center px-6 py-3 rounded-lg font-extrabold text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-lg"
          >
            <span>Join Hack Club Marina</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
