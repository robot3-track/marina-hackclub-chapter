import React, { useState } from 'react';
import { Phone, Mail, Clock, Copy, Check, MessageSquare, ShieldCheck } from 'lucide-react';

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
    <section className="py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
            Get Connected & Join Chapter
          </h2>

          <p className="text-xs sm:text-base text-[#8492a6] leading-relaxed">
            To get added to the official chapter group chat, receive meeting announcements, claim <strong className="text-white">free software & hardware grants</strong>, and get <strong className="text-[#f1c40f]">free stickers upon signup</strong>, contact chapter leadership directly via text or email.
          </p>
        </div>

        {/* Member Perks Highlight Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#1e1e24] border border-[#f1c40f]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎁</span>
            <div>
              <span className="text-xs font-black text-[#f1c40f] uppercase tracking-wider block">Member Perks & Grants</span>
              <p className="text-xs text-white font-bold">
                Free Stickers for all members + Free Grants for both Software (Domains, APIs, Hosting) & Hardware (Raspberry Pi, Microcontrollers, Kits)
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#f1c40f] text-[#17171d] font-black text-xs whitespace-nowrap shadow-md">
            100% Free • $0 Dues
          </span>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* SMS Contact Card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-5 sm:space-y-6 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ec3750]/20 flex items-center justify-center text-[#ec3750]">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  className="flex-1 px-4 py-3 rounded-full bg-[#ec3750] hover:bg-[#d62b42] text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Text SMS</span>
                </a>

                <button
                  onClick={() => copyToClipboard('657-505-8696', 'phone')}
                  className="px-4 py-3 rounded-full bg-[#252429] hover:bg-[#32303c] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#33d6a6]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Email Contact Card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-5 sm:space-y-6 flex flex-col justify-between hover:border-[#338eda]/50 transition-all">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#338eda]/20 flex items-center justify-center text-[#338eda]">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#338eda] uppercase tracking-wider block">
                  Email Club President
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white mt-1 font-mono break-all">
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
                  className="flex-1 px-4 py-3 rounded-full bg-[#338eda] hover:bg-[#2b7bbd] text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={() => copyToClipboard('yychang100@student.hbuhsd.edu', 'email')}
                  className="px-4 py-3 rounded-full bg-[#252429] hover:bg-[#32303c] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#33d6a6]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Meeting Times Banner */}
        <div className="p-5 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-4">
          <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#ff8c37]" />
            <span>Chapter Meeting Info & Dues</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-[#8492a6]">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm">Meeting Schedule</span>
              <p>Lunch & After School Sessions</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm">Location</span>
              <p>Designated Advisor's Classroom (Marina HS)</p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm">Membership Fee</span>
              <p className="text-[#33d6a6] font-extrabold">$0 Dues (100% Free)</p>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="p-4 rounded-xl bg-[#1e1e24] border border-[#2d2d38] flex items-center justify-center gap-2 text-xs text-[#8492a6]">
          <ShieldCheck className="w-4 h-4 text-[#33d6a6]" />
          <span>Member directory is kept private. Text 657-505-8696 to join the private chapter group chat.</span>
        </div>

      </div>
    </section>
  );
};
