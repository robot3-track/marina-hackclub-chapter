import React, { useState } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyText = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section className="relative overflow-hidden py-8 sm:py-16 md:py-20 bg-[#17171d] text-white">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[480px] bg-cover bg-bottom opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
                Where <span className="text-[#3b82f6]">Marina</span> <span className="text-[#f1c40f]">Vikings</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec3750] via-[#ff8c37] to-[#f1c40f]">
                  make cool stuff.
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-lg lg:text-xl text-[#a0aec0] font-normal leading-relaxed max-w-2xl">
              Hack Club Marina is a student-led coding and maker community. We build software & hardware projects, claim <strong className="text-white">free software & hardware grants</strong> (APIs, hosting, microcontrollers & kits), compete in hackathons, and connect Marina High School hackers!
            </p>

            <div className="p-4 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#ec3750]">
                  Get Added to Chapter Group Chat (Fall 26-27')
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 p-3 rounded-md bg-[#17171d] border border-[#2d2d38] flex items-center justify-between gap-2">
                  <div className="truncate">
                    <span className="text-[10px] text-[#8492a6] uppercase font-bold block">Text Group Chat</span>
                    <span className="text-sm font-bold text-white font-mono">657-505-8696</span>
                  </div>
                  <button
                    onClick={() => copyText('657-505-8696', 'phone')}
                    className="px-3 py-1.5 rounded-md bg-[#252429] hover:bg-[#32303c] text-xs font-bold text-[#8492a6] hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  >
                    {copiedPhone ? <span className="text-[#33d6a6] font-extrabold">Copied</span> : 'Copy'}
                  </button>
                </div>

                <div className="flex-1 p-3 rounded-md bg-[#17171d] border border-[#2d2d38] flex items-center justify-between gap-2">
                  <div className="truncate">
                    <span className="text-[10px] text-[#8492a6] uppercase font-bold block">Email President Yohan</span>
                    <span className="text-xs font-bold text-white font-mono truncate block">yychang100@student.hbuhsd.edu</span>
                  </div>
                  <button
                    onClick={() => copyText('yychang100@student.hbuhsd.edu', 'email')}
                    className="px-3 py-1.5 rounded-md bg-[#252429] hover:bg-[#32303c] text-xs font-bold text-[#8492a6] hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <span className="text-[#33d6a6] font-extrabold">Copied</span> : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8492a6] pt-3 border-t border-[#2d2d38]">
                <div>
                  <span className="text-[#33d6a6] font-bold">Meetings:</span> Lunch & After School
                </div>
                <div>
                  <span className="text-[#ff8c37] font-bold">Location:</span> Room 252 and Lunch on Mondays unless revised (Marina HS)
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  setActiveTab('signup');
                  const el = document.getElementById('join-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-md font-black text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>Join Chapter & Sign Up</span>
              </button>

              <button
                onClick={() => setActiveTab('hackathons')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-md font-bold text-sm bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer text-center justify-center flex items-center"
              >
                Hackathons & Devpost
              </button>

              <button
                onClick={() => setActiveTab('constitution')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-md font-bold text-sm bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer text-center justify-center flex items-center"
              >
                Chapter Constitution
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-5 shadow-xl transform lg:rotate-1 hover:rotate-0 transition-all">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="/marina-hs-logo.jpg"
                      alt="Marina High School Vikings Logo"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-contain shadow-md bg-[#131317]"
                    />
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-white">
                        Hack Club Marina
                      </h2>
                      <p className="text-[11px] sm:text-xs text-[#8492a6]">
                        Marina High School Chapter
                      </p>
                    </div>
                  </div>

                  <img
                    src="/2026.svg"
                    alt="Hack Club 2026"
                    className="h-7 sm:h-8 object-contain"
                  />
                </div>

                <div className="p-3.5 sm:p-4 rounded-md bg-[#17171d] border border-[#2d2d38] text-white space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold text-[#8492a6]">
                      Supported by Hack Club HQ
                    </span>
                    <img
                      src="/flag-orpheus-top.svg"
                      alt="Hack Club Flag"
                      className="h-4 sm:h-5 object-contain"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    Software & Hardware Grants, Free Sticker Drops & HQ Budget
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#33d6a6] block text-xs sm:text-sm">$0 Dues</span>
                    <span className="text-[9px] sm:text-[10px] text-[#8492a6]">100% Free</span>
                  </div>
                  <div className="p-2.5 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#338eda] block text-xs sm:text-sm">Rm 252</span>
                    <span className="text-[9px] sm:text-[10px] text-[#8492a6]">Mondays Lunch</span>
                  </div>
                  <div className="p-2.5 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#ff8c37] block text-xs sm:text-sm">Free Hardware</span>
                    <span className="text-[9px] sm:text-[10px] text-[#8492a6]">Grants</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-[#252429]"
        >
          <div className="p-5 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3 hover:border-[#ec3750]/50 transition-all">
            <div className="h-10 flex items-center">
              <img src="/hcb-light.png" alt="Marina Viking Logo" className="h-8 object-contain" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">Hack Club Hackathons</h3>
            <p className="text-xs text-[#8492a6] leading-relaxed">
              Participate in international Hack Club hackathons, claim micro-grants for hardware, and swap stickers with teen hackers around the world.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3 hover:border-[#338eda]/50 transition-all">
            <div className="h-10 flex items-center">
              <img src="/devpost.svg" alt="Devpost Logo" className="h-8 w-8 object-contain" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">Devpost Submissions</h3>
            <p className="text-xs text-[#8492a6] leading-relaxed">
              Build software & hardware projects in teams and submit them to Devpost hackathons to compete for awards and build real coding portfolios.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3 hover:border-[#33d6a6]/50 transition-all">
            <div className="h-10 flex items-center">
              <img src="/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-8 object-contain" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">Community & Hardware</h3>
            <p className="text-xs text-[#8492a6] leading-relaxed">
              Meet during lunch and after school in Room 252 and Lunch on Mondays unless revised. Free snacks, microcontrollers, breadboards, and open hardware kits.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
