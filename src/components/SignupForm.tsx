import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Copy, Check, Send, Mail, Calendar, MapPin, ShieldCheck } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/oPvfMFuVs8yu46267';
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScDKst2PXllgia2Hc_0D5w8dyvKeY2_j1uNSfymlDpWqrMIsA/viewform?embedded=true';

export const SignupForm: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="join-section" className="relative overflow-hidden py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[420px] bg-cover bg-bottom opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Join Hack Club Marina
          </h2>

          <p className="text-xs sm:text-base text-[#8492a6] leading-relaxed max-w-2xl mx-auto">
            Fill out the official membership form below to sign up for the chapter. You will be added to the chapter group chat, receive workshop announcements, claim free software & hardware grants, and get free stickers upon signup.
          </p>
        </motion.div>

        {/* Simple Embed with Attached Link (No box around embed) */}
        <div className="w-full space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <span className="text-[#8492a6]">
              Sign-up Form:
            </span>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#ec3750] transition-colors font-bold underline underline-offset-4"
            >
              <span>Open form in new tab ({GOOGLE_FORM_URL})</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#ec3750]" />
            </a>
          </div>

          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="Hack Club Marina Member Registration Form"
            className="w-full min-h-[750px] sm:min-h-[850px] border-0"
          >
            Loading form...
          </iframe>

          <div className="text-center text-xs text-[#8492a6]">
            Direct form link:{' '}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ec3750] underline font-mono ml-1"
            >
              {GOOGLE_FORM_URL}
            </a>
          </div>
        </div>

        {/* Alternative Direct Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-4">
          
          <div className="p-5 sm:p-6 rounded-lg bg-[#1e1e24] border border-[#2d2d38] space-y-4 flex flex-col justify-between hover:border-[#ec3750]/50 transition-all">
            <div className="space-y-3">
              <div className="h-8 flex items-center">
                <img src="/icon-square.svg" alt="Hack Club Icon" className="w-7 h-7 rounded-md object-contain" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#ec3750] uppercase tracking-wider block">
                  Text Group Chat SMS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1 font-mono">
                  657-505-8696
                </h3>
                <p className="text-xs text-[#8492a6] mt-2 leading-relaxed">
                  Text this number with your name and grade to get added directly to the official Hack Club Marina chapter group chat.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#2d2d38]">
              <div className="flex flex-col xs:flex-row gap-2">
                <a
                  href="sms:6575058696"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#ec3750] hover:bg-[#d62b42] text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Text SMS</span>
                </a>

                <button
                  onClick={() => copyToClipboard('657-505-8696', 'phone')}
                  className="px-4 py-2.5 rounded-lg bg-[#252429] hover:bg-[#32303c] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#33d6a6]" />
                      <span className="text-[#33d6a6] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8492a6]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-lg bg-[#1e1e24] border border-[#2d2d38] space-y-4 flex flex-col justify-between hover:border-[#338eda]/50 transition-all">
            <div className="space-y-3">
              <div className="h-8 flex items-center">
                <img src="/hcb-light.png" alt="Hack Club Flag Left" className="h-6 object-contain" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#338eda] uppercase tracking-wider block">
                  Email Club President
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-1 font-mono break-all">
                  yychang100@student.hbuhsd.edu
                </h3>
                <p className="text-xs text-[#8492a6] mt-2 leading-relaxed">
                  Email Club President Yohan Chang for official chapter inquiries, workshop proposals, or ASB administration details.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#2d2d38]">
              <div className="flex flex-col xs:flex-row gap-2">
                <a
                  href="mailto:yychang100@student.hbuhsd.edu"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#338eda] hover:bg-[#2b7bbd] text-white font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={() => copyToClipboard('yychang100@student.hbuhsd.edu', 'email')}
                  className="px-4 py-2.5 rounded-lg bg-[#252429] hover:bg-[#32303c] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#3c4858] transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#33d6a6]" />
                      <span className="text-[#33d6a6] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8492a6]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Meeting Details */}
        <div className="p-5 sm:p-6 rounded-lg bg-[#1e1e24] border border-[#2d2d38] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#ec3750]" />
              <span>Chapter Meeting Schedule & Details</span>
            </h3>
            <div className="flex items-center gap-2">
              <img src="/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-5 object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-[#8492a6]">
            <div className="p-3.5 rounded-lg bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#33d6a6]" />
                <span>Meeting Schedule</span>
              </span>
              <p>Lunch & After School Sessions</p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff8c37]" />
                <span>Location</span>
              </span>
              <p>Room 252 and Lunch on Mondays unless revised (Marina HS)</p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#17171d] border border-[#2d2d38] space-y-1">
              <span className="font-extrabold text-white block text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#338eda]" />
                <span>Membership Fee</span>
              </span>
              <p className="text-[#33d6a6] font-extrabold">$0 Dues (100% Free)</p>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#1e1e24] border border-[#2d2d38] text-center text-xs text-[#8492a6]">
          Member directory is kept private. Submissions go directly to chapter leadership. Text <strong className="text-white font-mono">657-505-8696</strong> if you have any questions.
        </div>

      </div>
    </section>
  );
};
