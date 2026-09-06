import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, Code, Cpu, Trophy, Check } from 'lucide-react';

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
    <section className="relative overflow-hidden py-12 md:py-20 bg-[#17171d] text-white">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Direct Contact */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#252429] border border-[#ec3750]/40 text-xs font-bold text-[#ec3750] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f1c40f]" />
              <span>Official Chapter • Hack Club HQ & Marina High School</span>
            </div>

            {/* Hack Club Signature Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
              Where Marina Vikings{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec3750] via-[#ff8c37] to-[#f1c40f]">
                make cool stuff.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#a0aec0] font-normal leading-relaxed max-w-2xl">
              Hack Club Marina is a student-led coding and maker community. We build software & hardware projects, claim <strong className="text-white">free software & hardware grants</strong> (APIs, hosting, microcontrollers & kits), compete in hackathons, and give <strong className="text-[#f1c40f]">free stickers to all members who sign up!</strong>
            </p>

            {/* Quick Contact & Join Banner */}
            <div className="p-6 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#ec3750]">
                  Get Added to Chapter Group Chat (Fall 26-27')
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#f1c40f]/20 text-[#f1c40f] text-[11px] font-extrabold flex items-center gap-1">
                  🎁 FREE STICKERS ON SIGNUP
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Phone Contact */}
                <div className="flex-1 p-3 rounded-xl bg-[#17171d] border border-[#2d2d38] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Phone className="w-4 h-4 text-[#ec3750] flex-shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] text-[#8492a6] uppercase font-bold block">Text Group Chat</span>
                      <span className="text-sm font-bold text-white font-mono">657-505-8696</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText('657-505-8696', 'phone')}
                    className="px-2.5 py-1 rounded-md bg-[#252429] hover:bg-[#32303c] text-xs font-bold text-[#8492a6] hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#33d6a6]" /> : 'Copy'}
                  </button>
                </div>

                {/* Email Contact */}
                <div className="flex-1 p-3 rounded-xl bg-[#17171d] border border-[#2d2d38] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#338eda] flex-shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] text-[#8492a6] uppercase font-bold block">Email President Yohan</span>
                      <span className="text-xs font-bold text-white font-mono truncate block">yychang100@student.hbuhsd.edu</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText('yychang100@student.hbuhsd.edu', 'email')}
                    className="px-2.5 py-1 rounded-md bg-[#252429] hover:bg-[#32303c] text-xs font-bold text-[#8492a6] hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#33d6a6]" /> : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#8492a6] pt-2 border-t border-[#2d2d38]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#33d6a6]" />
                  <span>Meetings: Lunch & After School</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ff8c37]" />
                  <span>Advisor's Room (Marina HS)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveTab('hackathons')}
                className="px-6 py-3 rounded-full font-black text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
              >
                <span>Hackathons & Devpost</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('constitution')}
                className="px-6 py-3 rounded-full font-bold text-sm bg-[#252429] hover:bg-[#32303c] text-white border border-[#3c4858] transition-colors cursor-pointer"
              >
                Chapter Constitution
              </button>
            </div>

          </div>

          {/* Right Column: Hack Club Brand Assets & Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Card Stack with Real SVGs & Hack Club Assets */}
            <div className="relative space-y-6">
              
              {/* Primary Card: Hack Club Marina Badge */}
              <div className="p-6 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-6 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-all">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="/icon-square.svg"
                      alt="Hack Club Icon"
                      className="w-12 h-12 rounded-xl object-contain shadow-md"
                    />
                    <div>
                      <h2 className="text-xl font-black text-white">
                        Hack Club Marina
                      </h2>
                      <p className="text-xs text-[#8492a6]">
                        Marina High School Chapter
                      </p>
                    </div>
                  </div>

                  <img
                    src="/2026.svg"
                    alt="Hack Club 2026 Banner"
                    className="h-8 object-contain"
                  />
                </div>

                {/* Hack Club Bank / HCB Card Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#ec3750] to-[#a633d6] text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold opacity-90">
                      Supported by Hack Club HQ
                    </span>
                    <img
                      src="/hcb-light.png"
                      alt="Hack Club Bank"
                      className="h-5 object-contain"
                    />
                  </div>
                  <p className="text-sm font-black">
                    Software & Hardware Grants, Free Sticker Drops & HQ Budget
                  </p>
                </div>

                {/* Real SVG Banner Display */}
                <div className="p-4 rounded-xl bg-[#17171d] border border-[#2d2d38] flex items-center justify-center">
                  <img
                    src="/flag-standalone.svg"
                    alt="Hack Club Standalone Banner"
                    className="h-16 object-contain"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#33d6a6] block text-sm">$0</span>
                    <span className="text-[10px] text-[#8492a6]">Dues</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#ec3750] block text-sm">100%</span>
                    <span className="text-[10px] text-[#8492a6]">Student-Led</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#17171d] border border-[#2d2d38]">
                    <span className="font-extrabold text-[#ff8c37] block text-sm">Free Hardware</span>
                    <span className="text-[10px] text-[#8492a6]">Grants</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#252429]">
          <div className="p-6 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#ec3750]/20 flex items-center justify-center text-[#ec3750]">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Hack Club Hackathons</h3>
            <p className="text-xs text-[#8492a6] leading-relaxed">
              Participate in international Hack Club hackathons, claim micro-grants for hardware, and swap stickers with teen hackers around the world.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#338eda]/20 flex items-center justify-center text-[#338eda]">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Devpost Submissions</h3>
            <p className="text-xs text-[#8492a6] leading-relaxed">
              Build software & hardware projects in teams and submit them to Devpost hackathons to compete for awards and build real coding portfolios.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#33d6a6]/20 flex items-center justify-center text-[#33d6a6]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-white">Community & Hardware</h3>
            <p className="text-xs text-[#8492a6] leading-relaxed">
              Meet during lunch and after school in the advisor's classroom. Free snacks, microcontrollers, breadboards, and open hardware kits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
