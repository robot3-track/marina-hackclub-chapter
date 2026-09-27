import React, { useState } from 'react';
import { motion } from 'motion/react';
import Icon from '@hackclub/icons';

const GOOGLE_FORM_URL = 'https://forms.gle/oPvfMFuVs8yu46267';
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe32tFv1nQh8pA1n-z6M5Qk7U4L_0p_4G9M3h2J-1K/viewform?embedded=true';

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
    <section id="join-section" className="relative overflow-hidden py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[480px] bg-cover bg-bottom opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
            Join Hack Club Marina
          </h2>

          <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Fill out the official membership form below. Chapter registration is 100% free with $0 dues. You will be added to the group chat, receive meeting reminders, and claim free hardware grants!
          </p>
        </motion.div>

        <div className="w-full space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <span className="text-white font-bold">
              Sign-up Form:
            </span>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#ec3750] transition-colors font-bold underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
            >
              <span>Open form in new tab ({GOOGLE_FORM_URL})</span>
              <Icon glyph="external" size={16} className="text-[#ec3750]" />
            </a>
          </div>

          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="Hack Club Marina Member Registration Form"
            className="w-full min-h-[750px] sm:min-h-[850px] border-0 rounded-md bg-[#1e1e24]"
          >
            Loading form...
          </iframe>

          <div className="text-center text-xs sm:text-sm text-white/80">
            Direct form link:{' '}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#338eda] hover:text-[#5bc0de] underline font-mono ml-1 focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden font-bold"
            >
              {GOOGLE_FORM_URL}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4">
          <div className="p-5 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all">
            <div className="space-y-3">
              <div className="h-8 flex items-center">
                <img src="https://assets.hackclub.com/icon-square.svg" alt="Hack Club Icon" className="w-7 h-7 rounded-md object-contain" />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-bold text-[#ec3750] uppercase tracking-wider block">
                  Text Group Chat SMS
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white mt-1 font-mono">
                  657-505-8696
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed font-normal">
                  Text this number with your name and grade to get added directly to the official Hack Club Marina chapter group chat.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#2d2d38]">
              <div className="flex flex-col xs:flex-row gap-2">
                <a
                  href="sms:6575058696"
                  className="flex-1 px-4 py-2.5 rounded-md bg-[#ec3750] hover:bg-[#d62b42] text-white font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                >
                  <Icon glyph="send" size={16} />
                  <span>Send Text SMS</span>
                </a>

                <button
                  onClick={() => copyToClipboard('657-505-8696', 'phone')}
                  className="px-4 py-2.5 rounded-md bg-[#252429] hover:bg-[#32303c] text-white font-bold text-sm flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
                  title="Copy Phone Number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Icon glyph="checkmark" size={16} className="text-[#33d6a6]" />
                      <span className="text-[#33d6a6] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Icon glyph="copy" size={16} className="text-white" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 flex flex-col justify-between hover:border-[#338eda]/50 transition-all">
            <div className="space-y-3">
              <div className="h-8 flex items-center">
                <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank Logo" className="h-5 object-contain" />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-bold text-[#338eda] uppercase tracking-wider block">
                  Email Club President
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-1 font-mono break-all">
                  yychang100@student.hbuhsd.edu
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed font-normal">
                  Email Club President Yohan Chang for official chapter inquiries, workshop proposals, or ASB administration details.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#2d2d38]">
              <div className="flex flex-col xs:flex-row gap-2">
                <a
                  href="mailto:yychang100@student.hbuhsd.edu"
                  className="flex-1 px-4 py-2.5 rounded-md bg-[#338eda] hover:bg-[#2b7bbd] text-white font-black text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
                >
                  <Icon glyph="email" size={16} />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={() => copyToClipboard('yychang100@student.hbuhsd.edu', 'email')}
                  className="px-4 py-2.5 rounded-md bg-[#252429] hover:bg-[#32303c] text-white font-bold text-sm flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden"
                  title="Copy Email Address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Icon glyph="checkmark" size={16} className="text-[#33d6a6]" />
                      <span className="text-[#33d6a6] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Icon glyph="copy" size={16} className="text-white" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Icon glyph="event-code" size={18} className="text-[#ec3750]" />
              <span>Chapter Meeting Schedule & Details</span>
            </h3>
            <div className="flex items-center gap-2">
              <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-5 object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-white font-normal">
            <div className="p-3.5 rounded-md bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-xs sm:text-sm flex items-center gap-1.5">
                <Icon glyph="event-code" size={16} className="text-[#33d6a6]" />
                <span>Meeting Schedule</span>
              </span>
              <p className="text-white/80">Lunch & After School Sessions</p>
            </div>

            <div className="p-3.5 rounded-md bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-xs sm:text-sm flex items-center gap-1.5">
                <Icon glyph="map-pin" size={16} className="text-[#ff8c37]" />
                <span>Location</span>
              </span>
              <p className="text-white/80">Room 252 and Lunch on Mondays unless revised (Marina HS)</p>
            </div>

            <div className="p-3.5 rounded-md bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-xs sm:text-sm flex items-center gap-1.5">
                <Icon glyph="badge-check" size={16} className="text-[#338eda]" />
                <span>Membership Fee</span>
              </span>
              <p className="text-[#33d6a6] font-extrabold">$0 Dues (100% Free)</p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-md bg-[#1e1e24] border border-[#2d2d38] text-center text-xs text-white/80 leading-relaxed">
          Hack Club Marina is a 501(c)(3) fiscally sponsored nonprofit organization under Hack Club Bank (The Hack Foundation, EIN: 81-2908499). Member registration is 100% free with $0 dues. Member directory is kept private. Submissions go directly to chapter leadership.
        </div>
      </div>
    </section>
  );
};
