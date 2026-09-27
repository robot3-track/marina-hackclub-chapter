import React from 'react';
import { motion } from 'motion/react';
import { CarouselTicker } from './CarouselTicker';

interface HackathonsSectionProps {
  setActiveTab: (tab: string) => void;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div 
        className="absolute inset-x-0 top-0 h-96 sm:h-[480px] bg-cover bg-top opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <img src="https://assets.hackclub.com/flag-standalone.svg" alt="Hack Club Flag" className="h-10 sm:h-12 object-contain" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            What We Do at <span className="text-[#ec3750]">Hack Club Marina</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#8492a6] leading-relaxed">
            We build cool software & hardware projects together, claim <strong className="text-white">free software & hardware grants</strong> (hosting, APIs, microcontrollers & kits), participate in Hack Club & Devpost hackathons—<strong className="text-[#338eda]">starting first with the NASA Space Apps Challenge on November 14–15th</strong>—get <strong className="text-[#f1c40f]">free sticker drops</strong>, and hang out at Marina High School.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-md bg-[#0f172a] border border-[#1d4ed8]/50 p-6 sm:p-8 md:p-10 shadow-xl space-y-6"
        >
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#253248]">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <img
                src="/nasa-logo.svg"
                alt="NASA Meatball Insignia"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="h-6 w-[1px] bg-[#324565] hidden sm:block" />
              <img
                src="/space-apps-logo.png"
                alt="NASA Space Apps Challenge Logo"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>

            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#60a5fa]">
                First Event · November 14–15th
              </span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] block">
                  Chapter Kickoff Hackathon
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  NASA Space Apps Challenge
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                Hack Club Marina is kicking off our competition calendar with the official <strong className="text-white">NASA International Space Apps Challenge</strong> on <strong className="text-[#38bdf8]">November 14–15th</strong>! Marina High School students will collaborate in teams to solve real-world challenges on Earth and in space using NASA’s open-source satellite data, space exploration missions, and developer APIs.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#94a3b8] pt-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8] mt-1.5 inline-block flex-shrink-0" />
                  <span><strong className="text-white">Date:</strong> November 14–15th</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8] mt-1.5 inline-block flex-shrink-0" />
                  <span><strong className="text-white">Format:</strong> Official 48-Hour Global Hackathon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8] mt-1.5 inline-block flex-shrink-0" />
                  <span><strong className="text-white">Real NASA Data:</strong> Earth observation & Mars/Artemis APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8] mt-1.5 inline-block flex-shrink-0" />
                  <span><strong className="text-white">All Levels:</strong> Coders, designers, scientists & beginners</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-6 rounded-md bg-[#0f172a] border border-[#1e293b] space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8] block">
                  Marina High School Squad
                </span>
                <p className="text-xs text-[#cbd5e1]">
                  Want to be on the Marina High School roster for the November 14–15th NASA hackathon? Join our official team roster directly on Space Apps!
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href="https://www.spaceappschallenge.org/2026/find-a-team/hackclub-marina-high-school-chapter-team-1/?tab=details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-md font-black text-xs sm:text-sm bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                >
                  <span>Join Marina Space Apps Team</span>
                  <span className="font-mono group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <div className="flex items-center justify-center gap-2 pt-1 text-xs">
                  <a
                    href="https://www.spaceappschallenge.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#60a5fa] hover:text-white transition-colors font-bold inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:outline-hidden"
                  >
                    <span>Space Apps Challenge Overview</span>
                    <span className="font-mono text-xs">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all shadow-lg"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Flag Orpheus" className="h-8 object-contain" />
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
                  <span className="w-1.5 h-1.5 rounded-none bg-[#ec3750] inline-block flex-shrink-0"></span>
                  <span>Travel stipends & micro-grants from HQ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#ec3750] inline-block flex-shrink-0"></span>
                  <span>Free microcontrollers, PCBs & electronic kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#ec3750] inline-block flex-shrink-0"></span>
                  <span>Connect with 25,000+ teen Hack Clubbers globally</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#f1c40f] inline-block flex-shrink-0"></span>
                  <span>Free sticker drops (Rule: "Hack Club" must appear on all designs)</span>
                </li>
              </ul>
            </div>

            <a
              href="https://hackclub.com/hackathons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ec3750] hover:text-white transition-colors pt-4 border-t border-[#2d2d38] focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
            >
              <span>Explore Hack Club Events</span>
              <span className="font-mono text-sm">→</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#338eda]/50 transition-all shadow-lg"
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
                We team up to build software apps, games, hardware hacks, and web services, submitting our chapter projects to Devpost high school competitions to win prizes and build real portfolios.
              </p>

              <ul className="space-y-2 text-xs text-[#a0aec0]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#338eda] inline-block flex-shrink-0"></span>
                  <span>Team project sprints for all skill levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#338eda] inline-block flex-shrink-0"></span>
                  <span>Publish code on GitHub & project pages on Devpost</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#338eda] inline-block flex-shrink-0"></span>
                  <span>Win cash prizes, tech swag, and internships</span>
                </li>
              </ul>
            </div>

            <a
              href="https://devpost.com/hackathons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#338eda] hover:text-white transition-colors pt-4 border-t border-[#2d2d38] focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden"
            >
              <span>Browse Devpost Hackathons</span>
              <span className="font-mono text-sm">→</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#33d6a6]/50 transition-all shadow-lg"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="https://assets.hackclub.com/icon-rounded.svg" alt="Hack Club Rounded Icon" className="h-8 w-8 object-contain" />
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
                  <span className="w-1.5 h-1.5 rounded-none bg-[#33d6a6] inline-block flex-shrink-0"></span>
                  <span>0 Membership Dues — 100% Free for all students</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#33d6a6] inline-block flex-shrink-0"></span>
                  <span>Lunch & After-School sessions in Room 252 and Lunch on Mondays unless revised</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#33d6a6] inline-block flex-shrink-0"></span>
                  <span>Free snacks, sticker drops, and mentorship</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('signup')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33d6a6] hover:text-white transition-colors pt-4 border-t border-[#2d2d38] cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-[#33d6a6] focus-visible:outline-hidden"
            >
              <span>Join Chapter Group Chat</span>
              <span className="font-mono text-sm">→</span>
            </button>
          </motion.div>
        </div>

        <CarouselTicker />

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-5 sm:p-8 rounded-md bg-[#1e1e24] border border-[#2d2d38] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank" className="h-4 object-contain" />
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
            className="w-full sm:w-auto justify-center px-6 py-3 rounded-md font-extrabold text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
          >
            <span>Join Hack Club Marina</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
