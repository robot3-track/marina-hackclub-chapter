import React, { useState } from 'react';
import { motion } from 'motion/react';
import Icon from '@hackclub/icons';

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
    <section className="relative overflow-hidden py-10 sm:py-16 md:py-20 bg-[#17171d] text-white">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[480px] bg-cover bg-bottom opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div className="space-y-3">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.96] text-white">
                Where <span className="text-[#3b82f6]">Marina</span> <span className="text-[#f1c40f]">Vikings</span>{' '}
                <span className="text-[#ec3750]">
                  make cool stuff.
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white/85 font-normal leading-relaxed max-w-2xl">
              Hack Club Marina is Marina High School’s official student-led engineering & coding chapter, operating under 501(c)(3) fiscal sponsorship via Hack Club Bank (The Hack Foundation, EIN: 81-2908499). We build projects, claim free hardware & software grants, compete in hackathons, and hang out—100% free with zero dues.
            </p>

            {/* Action buttons with prominent Donation link */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setActiveTab('signup')}
                className="px-6 py-3.5 rounded-md font-black text-sm sm:text-base bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              >
                <span>Join Chapter</span>
              </button>

              <a
                href="https://hcb.hackclub.com/donations/start/hackclub-marina-chapter"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-md font-bold text-sm sm:text-base bg-[#f1c40f]/20 hover:bg-[#f1c40f]/30 text-[#f1c40f] border border-[#f1c40f]/50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden"
              >
                <Icon glyph="purse" size={18} />
                <span>Donate via HCB</span>
              </a>

              <button
                onClick={() => setActiveTab('hackathons')}
                className="px-5 py-3.5 rounded-md font-bold text-sm sm:text-base bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer text-center justify-center flex items-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              >
                Hackathons & Devpost
              </button>

              <button
                onClick={() => setActiveTab('constitution')}
                className="px-5 py-3.5 rounded-md font-bold text-sm sm:text-base bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer text-center justify-center flex items-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
              >
                Constitution
              </button>
            </div>

            {/* Unboxed, well-spaced Chapter Group Chat section */}
            <div className="pt-6 space-y-4 border-t border-[#252429]">
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

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-white/80 pt-1">
                <div>
                  <span className="text-[#33d6a6] font-bold">Meetings:</span>{' '}
                  <span className="text-white font-normal">Lunch & After School</span>
                </div>
                <div>
                  <span className="text-[#ff8c37] font-bold">Location:</span>{' '}
                  <span className="text-white font-normal">Room 252 (Mondays Lunch unless revised)</span>
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
            <div className="relative space-y-5">
              <div className="p-6 sm:p-7 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-5 shadow-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/marina-hs-logo.jpg"
                      alt="Marina High School Vikings Logo"
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-contain shadow-md bg-[#131317]"
                    />
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">
                        Hack Club Marina
                      </h2>
                      <p className="text-xs text-white/80 font-medium">
                        Marina High School Chapter
                      </p>
                    </div>
                  </div>

                  <img
                    src="https://assets.hackclub.com/banners/2026.svg"
                    alt="Hack Club 2026"
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>

                <div className="p-4 rounded-md bg-[#17171d] border border-[#2d2d38] text-white space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-black text-[#f1c40f] flex items-center gap-1.5">
                      <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank" className="h-4 object-contain" />
                      501(c)(3) Fiscal Sponsorship
                    </span>
                    <img
                      src="https://assets.hackclub.com/flag-orpheus-top.svg"
                      alt="Hack Club Flag"
                      className="h-5 object-contain"
                    />
                  </div>
                  <p className="text-xs text-white/85 font-normal leading-relaxed">
                    Under Hack Club Bank (The Hack Foundation, EIN: 81-2908499). Contributions are tax-deductible.
                  </p>
                  <a
                    href="https://hcb.hackclub.com/donations/start/hackclub-marina-chapter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-md text-xs font-bold bg-[#f1c40f] hover:bg-[#d4ac0d] text-[#121217] flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Icon glyph="purse" size={14} />
                    <span>Donate to Chapter via HCB</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#33d6a6] block text-base sm:text-lg">$0 Dues</span>
                    <span className="text-[11px] text-white/80 font-medium">100% Free</span>
                  </div>
                  <div className="p-3 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#338eda] block text-base sm:text-lg">Rm 252</span>
                    <span className="text-[11px] text-white/80 font-medium">Mondays Lunch</span>
                  </div>
                  <div className="p-3 rounded-md bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#ff8c37] block text-base sm:text-lg">Grants</span>
                    <span className="text-[11px] text-white/80 font-medium">Hardware Kits</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 streamlined, non-repetitive feature columns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 sm:pt-10 border-t border-[#252429]"
        >
          <div className="p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3.5 hover:border-[#f1c40f]/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-9 flex items-center">
                <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank Logo" className="h-6 object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">501(c)(3) Fiscal Sponsorship</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Backed by Hack Club Bank (The Hack Foundation, EIN: 81-2908499). All community sponsorships, donations, and grants are tax-deductible.
              </p>
            </div>
            <a
              href="https://hcb.hackclub.com/donations/start/hackclub-marina-chapter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#f1c40f] hover:underline pt-3 border-t border-[#2d2d38]"
            >
              <span>Donate Online via HCB</span>
              <Icon glyph="forward" size={14} />
            </a>
          </div>

          <div className="p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3.5 hover:border-[#338eda]/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-9 flex items-center">
                <img src="/devpost.svg" alt="Devpost Logo" className="h-8 w-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">NASA Space Apps & Hackathons</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Build software apps, satellites, and hardware prototypes in teams for Devpost and NASA hackathons to win awards and build portfolios.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('hackathons')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#338eda] hover:underline pt-3 border-t border-[#2d2d38] text-left cursor-pointer"
            >
              <span>View Hackathons</span>
              <Icon glyph="forward" size={14} />
            </button>
          </div>

          <div className="p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-3.5 hover:border-[#33d6a6]/50 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-9 flex items-center">
                <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-8 object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Free Hardware & Grants</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Receive free microcontrollers, breadboards, API credits, free domain names, and swag drops with 100% free chapter access.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('signup')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#33d6a6] hover:underline pt-3 border-t border-[#2d2d38] text-left cursor-pointer"
            >
              <span>Sign Up for Free</span>
              <Icon glyph="forward" size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
