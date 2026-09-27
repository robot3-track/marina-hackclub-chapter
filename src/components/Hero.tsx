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
    <section className="relative overflow-hidden py-12 sm:py-20 md:py-24 bg-[#17171d] text-white">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[480px] bg-cover bg-bottom opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 sm:space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[1.02] text-white">
                Where <span className="text-[#3b82f6]">Marina</span> <span className="text-[#f1c40f]">Vikings</span>{' '}
                <span className="text-[#ec3750]">
                  make cool stuff.
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/85 font-normal leading-relaxed max-w-2xl">
              Hack Club Marina is a student-led nonprofit organization operating under the 501(c)(3) fiscal sponsorship of Hack Club Bank (The Hack Foundation, EIN: 81-2908499). We build software & hardware projects, claim <strong className="text-[#f1c40f] underline decoration-[#f1c40f]/60 underline-offset-4 font-bold">free software & hardware grants</strong> (APIs, hosting, microcontrollers & kits), compete in hackathons, and connect Marina High School Hack Clubbers—100% free with zero dues and tax-deductible community support.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => setActiveTab('signup')}
                className="w-full sm:w-auto px-7 py-4 rounded-md font-black text-base sm:text-lg bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              >
                <span>Join Chapter & Sign Up</span>
              </button>

              <button
                onClick={() => setActiveTab('hackathons')}
                className="w-full sm:w-auto px-6 py-4 rounded-md font-bold text-sm sm:text-base bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer text-center justify-center flex items-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              >
                Hackathons & Devpost
              </button>

              <button
                onClick={() => setActiveTab('constitution')}
                className="w-full sm:w-auto px-6 py-4 rounded-md font-bold text-sm sm:text-base bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer text-center justify-center flex items-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              >
                Chapter Constitution
              </button>
            </div>

            {/* Unboxed, well-spaced Chapter Group Chat section */}
            <div className="pt-6 sm:pt-8 space-y-4 border-t border-[#252429]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#ec3750] inline-block rounded-xs"></span>
                <span className="text-base sm:text-lg font-black uppercase tracking-wider text-[#ec3750]">
                  Get Added to Chapter Group Chat (Fall 26-27')
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <div className="flex-1 p-4 rounded-md bg-[#1e1e24] border border-[#2d2d38] flex items-center justify-between gap-3">
                  <div className="truncate">
                    <span className="text-xs text-[#ff8c37] uppercase font-bold block">Text Group Chat</span>
                    <span className="text-base sm:text-lg font-bold text-white font-mono">657-505-8696</span>
                  </div>
                  <button
                    onClick={() => copyText('657-505-8696', 'phone')}
                    className="px-4 py-2 rounded-md bg-[#252429] hover:bg-[#32303c] text-xs sm:text-sm font-bold text-white transition-colors flex-shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
                    aria-label="Copy group chat phone number"
                  >
                    {copiedPhone ? <span className="text-[#33d6a6] font-extrabold">Copied</span> : 'Copy'}
                  </button>
                </div>

                <div className="flex-1 p-4 rounded-md bg-[#1e1e24] border border-[#2d2d38] flex items-center justify-between gap-3">
                  <div className="truncate">
                    <span className="text-xs text-[#338eda] uppercase font-bold block">Email President Yohan</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono truncate block">yychang100@student.hbuhsd.edu</span>
                  </div>
                  <button
                    onClick={() => copyText('yychang100@student.hbuhsd.edu', 'email')}
                    className="px-4 py-2 rounded-md bg-[#252429] hover:bg-[#32303c] text-xs sm:text-sm font-bold text-white transition-colors flex-shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden"
                    aria-label="Copy president email address"
                  >
                    {copiedEmail ? <span className="text-[#33d6a6] font-extrabold">Copied</span> : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-white/80 pt-2">
                <div>
                  <span className="text-[#33d6a6] font-bold">Meetings:</span>{' '}
                  <span className="text-white font-normal">Lunch & After School</span>
                </div>
                <div>
                  <span className="text-[#ff8c37] font-bold">Location:</span>{' '}
                  <span className="text-white font-normal">Room 252 and Lunch on Mondays unless revised (Marina HS)</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative space-y-5 sm:space-y-6">
              <div className="p-6 sm:p-7 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-5 shadow-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/marina-hs-logo.jpg"
                      alt="Marina High School Vikings Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-contain shadow-md bg-[#131317]"
                    />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white">
                        Hack Club Marina
                      </h2>
                      <p className="text-xs sm:text-sm text-white font-semibold">
                        Marina High School Chapter · 501(c)(3) Non-Profit
                      </p>
                    </div>
                  </div>

                  <img
                    src="https://assets.hackclub.com/banners/2026.svg"
                    alt="Hack Club 2026"
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>

                <div className="p-4 sm:p-5 rounded-md bg-[#17171d] border border-[#2d2d38] text-white space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm uppercase tracking-widest font-black text-[#f1c40f] flex items-center gap-1.5">
                      <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank" className="h-4 object-contain" />
                      501(c)(3) Fiscal Sponsorship
                    </span>
                    <img
                      src="https://assets.hackclub.com/flag-orpheus-top.svg"
                      alt="Hack Club Flag"
                      className="h-5 object-contain"
                    />
                  </div>
                  <p className="text-sm font-bold text-white leading-snug">
                    Fiscally sponsored under Hack Club Bank (The Hack Foundation, EIN: 81-2908499). Contributions & grants are tax-deductible.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3.5 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#33d6a6] block text-base sm:text-lg">$0 Dues</span>
                    <span className="text-xs text-white font-bold">100% Free</span>
                  </div>
                  <div className="p-3.5 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#338eda] block text-base sm:text-lg">Rm 252</span>
                    <span className="text-xs text-white font-bold">Mondays Lunch</span>
                  </div>
                  <div className="p-3.5 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#ff8c37] block text-base sm:text-lg">Hardware</span>
                    <span className="text-xs text-white font-bold">Free Grants</span>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-14 border-t border-[#252429]"
        >
          <div className="p-6 sm:p-7 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3.5 hover:border-[#ec3750]/50 transition-all">
            <div className="h-10 flex items-center">
              <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank Logo" className="h-7 object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">501(c)(3) Fiscal Sponsorship</h3>
            <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
              Hack Club Marina is a registered student-led nonprofit initiative under Hack Club Bank (The Hack Foundation, 501(c)(3) public charity, EIN 81-2908499). All community sponsorships, donations, and grants are tax-deductible.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3.5 hover:border-[#338eda]/50 transition-all">
            <div className="h-10 flex items-center">
              <img src="/devpost.svg" alt="Devpost Logo" className="h-9 w-9 object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">Devpost Submissions</h3>
            <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
              Build software & hardware projects in teams and submit them to Devpost hackathons to compete for awards and build real coding portfolios.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3.5 hover:border-[#33d6a6]/50 transition-all">
            <div className="h-10 flex items-center">
              <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-9 object-contain" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">Community & Hardware</h3>
            <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
              Meet during lunch and after school in Room 252 and Lunch on Mondays unless revised. Free snacks, microcontrollers, breadboards, and open hardware kits.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
