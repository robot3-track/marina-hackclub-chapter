import React from 'react';
import { Trophy, Globe, Code2, Users2, Sparkles, Rocket, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface HackathonsSectionProps {
  setActiveTab: (tab: string) => void;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            What We Do at <span className="text-[#ec3750]">Hack Club Marina</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#8492a6] leading-relaxed">
            We build cool software & hardware projects together, claim <strong className="text-white">free software & hardware grants</strong> (hosting, APIs, microcontrollers & kits), participate in Hack Club & Devpost hackathons, get <strong className="text-[#f1c40f]">free stickers</strong>, and hang out at Marina High School.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Pillar 1: Hack Club Hackathons */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ec3750]/20 flex items-center justify-center text-[#ec3750]">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec3750]"></span>
                  <span>Travel stipends & micro-grants from HQ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec3750]"></span>
                  <span>Free microcontrollers, PCBs & electronic kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec3750]"></span>
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
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Pillar 2: Devpost Hackathons */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#338eda]/50 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#338eda]/20 flex items-center justify-center text-[#338eda]">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#338eda]"></span>
                  <span>Team project sprints for all skill levels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#338eda]"></span>
                  <span>Publish code on GitHub & project pages on Devpost</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#338eda]"></span>
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
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Pillar 3: Community Purpose */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 sm:space-y-5 flex flex-col justify-between hover:border-[#33d6a6]/50 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#33d6a6]/20 flex items-center justify-center text-[#33d6a6]">
                <Users2 className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33d6a6]"></span>
                  <span>0 Membership Dues — 100% Free for all students</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33d6a6]"></span>
                  <span>Lunch & After-School sessions in Advisor's room</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33d6a6]"></span>
                  <span>Free snacks, sticker drops, and mentorship</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveTab('signup')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33d6a6] hover:text-white transition-colors pt-4 border-t border-[#2d2d38] cursor-pointer"
            >
              <span>Join Chapter Group Chat</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Feature Highlight Banner */}
        <div className="p-5 sm:p-10 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#ff8c37]">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Chapter Charter • Marina High School</span>
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
            className="w-full sm:w-auto justify-center px-6 py-3 rounded-full font-extrabold text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <Rocket className="w-4 h-4" />
            <span>Join Hack Club Marina</span>
          </button>
        </div>

      </div>
    </section>
  );
};
