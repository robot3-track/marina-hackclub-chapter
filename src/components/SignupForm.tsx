import React, { useState } from 'react';
import { motion } from 'motion/react';

export const SignupForm: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
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
    <section className="relative overflow-hidden py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[420px] bg-cover bg-bottom opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
            Get Connected & Join Chapter
          </h2>

          <p className="text-xs sm:text-base text-[#8492a6] leading-relaxed">
            To get added to the official chapter group chat, receive meeting announcements, claim <strong className="text-white">free software & hardware grants</strong>, and get <strong className="text-[#f1c40f]">free sticker drops upon signup</strong>, contact chapter leadership directly via text or email.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-4 sm:p-6 rounded-xl bg-[#1e1e24] border border-[#f1c40f]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg"
        >
          <div className="flex items-center gap-3">
            <img src="/2026.svg" alt="Hack Club 2026" className="h-8 object-contain" />
            <div>
              <span className="text-xs font-black text-[#f1c40f] uppercase tracking-wider block">Member Perks & Grants</span>
              <p className="text-xs text-white font-bold">
                Free Stickers for all members + Free Grants for both Software (Domains, APIs, Hosting) & Hardware (Raspberry Pi, Microcontrollers, Kits)
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 rounded-md bg-[#f1c40f] text-[#17171d] font-black text-xs whitespace-nowrap shadow-md">
            100% Free • $0 Dues
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-xl bg-[#1e1e24] border border-[#2d2d38] space-y-5 sm:space-y-6 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="/icon-square.svg" alt="Hack Club Icon Square" className="w-8 h-8 rounded-md object-contain" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#ec3750] uppercase tracking-wider block">
                  Text Group Chat SMS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-mono">
                  657-505-8696
                </h3>
                <p className="text-xs text-[#8492a6] mt-2 leading-relaxed">
                  Text this number with your name and grade to get added directly to the official Hack Club Marina chapter group chat.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#2d2d38]">
              <div className="flex flex-col xs:flex-row gap-2">
                <a
                  href="sms:6575058696"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#ec3750] hover:bg-[#d62b42] text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Send Text SMS</span>
                </a>

                <button
                  onClick={() => copyToClipboard('657-505-8696', 'phone')}
                  className="px-4 py-3 rounded-lg bg-[#252429] hover:bg-[#32303c] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  <span>{copiedPhone ? <span className="text-[#33d6a6] font-extrabold">Copied</span> : 'Copy'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="p-5 sm:p-8 rounded-xl bg-[#1e1e24] border border-[#2d2d38] space-y-5 sm:space-y-6 flex flex-col justify-between hover:border-[#338eda]/50 transition-all shadow-xl"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="h-10 flex items-center">
                <img src="/hcb-light.png" alt="Hack Club Flag Left" className="h-8 object-contain" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#338eda] uppercase tracking-wider block">
                  Email Club President
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1 font-mono break-all">
                  yychang100@student.hbuhsd.edu
                </h3>
                <p className="text-xs text-[#8492a6] mt-2 leading-relaxed">
                  Email Club President Yohan Chang for official chapter inquiries, workshop proposals, or ASB administration details.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#2d2d38]">
              <div className="flex flex-col xs:flex-row gap-2">
                <a
                  href="mailto:yychang100@student.hbuhsd.edu"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#338eda] hover:bg-[#2b7bbd] text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Send Email</span>
                </a>

                <button
                  onClick={() => copyToClipboard('yychang100@student.hbuhsd.edu', 'email')}
                  className="px-4 py-3 rounded-lg bg-[#252429] hover:bg-[#32303c] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  <span>{copiedEmail ? <span className="text-[#33d6a6] font-extrabold">Copied</span> : 'Copy'}</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-5 sm:p-8 rounded-xl bg-[#1e1e24] border border-[#2d2d38] space-y-4 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-white">
              Chapter Meeting Info & Dues
            </h3>
            <div className="flex items-center gap-2">
              <img src="/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-6 object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-[#8492a6]">
            <div className="p-3.5 sm:p-4 rounded-lg bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm">Meeting Schedule</span>
              <p>Lunch & After School Sessions</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-lg bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm">Location</span>
              <p>Room 252 and Lunch on Mondays unless revised (Marina HS)</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-lg bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm">Membership Fee</span>
              <p className="text-[#33d6a6] font-extrabold">$0 Dues (100% Free)</p>
            </div>
          </div>
        </motion.div>

        <div className="p-4 rounded-lg bg-[#1e1e24] border border-[#2d2d38] text-center text-xs text-[#8492a6]">
          Member directory is kept private. Text <strong className="text-white font-mono">657-505-8696</strong> to join the private chapter group chat.
        </div>

      </div>
    </section>
  );
};
