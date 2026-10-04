import React from 'react';
import Icon from '@hackclub/icons';

interface FooterProps {
  setActiveTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#121217] text-white border-t border-[#252429] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#252429]">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://ibb.co/B95dCtC"
                alt="Hack Club Marina Logo"
                className="w-10 h-10 rounded-md object-contain"
              />
              <div>
                <span className="font-black text-xl text-white tracking-tight">HACK CLUB <span className="text-[#ec3750]">MARINA</span></span>
                <p className="text-xs text-white/80 font-normal">Marina High School Chapter</p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm font-normal">
              Official student chapter of Hack Club at Marina High School. Hack Club Marina is a recognized student-led nonprofit organization operating under the 501(c)(3) fiscal sponsorship of Hack Club Bank (The Hack Foundation, EIN: 81-2908499). All donations, sponsorships, and grants are tax-deductible to the full extent of the law.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href="https://www.instagram.com/hackclub.marina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#252429] hover:bg-[#2d2b33] border border-[#323138] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 group focus-visible:ring-2 focus-visible:ring-[#E4405F] focus-visible:outline-hidden"
              >
                <Icon glyph="instagram" size={16} className="text-[#E4405F] group-hover:scale-110 transition-transform" />
                <span>Follow @hackclub.marina</span>
              </a>

              <a
                href="https://bank.hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#252429] hover:bg-[#2d2b33] border border-[#323138] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-105 group focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden"
              >
                <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank" className="h-3.5 object-contain" />
                <span>Hack Club Bank</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#ff8c37]">
              Chapter Direct Contacts
            </p>
            <ul className="space-y-2 text-sm text-white">
              <li className="flex items-center gap-2">
                <Icon glyph="instagram" size={16} className="text-[#E4405F] shrink-0" />
                <span className="text-white font-bold">Instagram:</span>
                <a href="https://www.instagram.com/hackclub.marina" target="_blank" rel="noopener noreferrer" className="text-[#ff8c37] hover:underline transition-colors font-mono font-bold">@hackclub.marina</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon glyph="message-simple" size={16} className="text-[#33d6a6] shrink-0" />
                <span className="text-white font-bold">Text GC:</span>
                <a href="sms:6575058696" className="text-[#33d6a6] hover:underline transition-colors font-mono font-bold">657-505-8696</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon glyph="email" size={16} className="text-[#338eda] shrink-0" />
                <span className="text-white font-bold">Email:</span>
                <a href="mailto:yychang100@student.hbuhsd.edu" className="text-[#338eda] hover:underline transition-colors font-mono font-bold">yychang100@student.hbuhsd.edu</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon glyph="docs" size={16} className="text-[#ec3750] shrink-0" />
                <span className="text-white font-bold">Sign Up Form:</span>
                <a href="https://forms.gle/oPvfMFuVs8yu46267" target="_blank" rel="noopener noreferrer" className="text-[#ec3750] hover:underline transition-colors font-mono font-bold">forms.gle/oPvfMFuVs8yu46267</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon glyph="pin" size={16} className="text-[#f1c40f] shrink-0" />
                <span><strong className="text-white font-bold">Meetings:</strong> Room 252 and Lunch on Mondays unless revised</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#ec3750]">
              Nonprofit & Hack Club HQ
            </p>
            <ul className="space-y-2 text-sm font-medium text-white">
              <li>
                <a href="https://hcb.hackclub.com/donations/start/hackclub-marina-chapter" target="_blank" rel="noopener noreferrer" className="text-[#f1c40f] hover:underline font-bold transition-colors flex items-center gap-1.5">
                  <Icon glyph="purse" size={16} className="text-[#f1c40f]" />
                  <span>Donate to Hack Club Marina</span>
                  <Icon glyph="forward" size={14} className="text-[#f1c40f]" />
                </a>
              </li>
              <li>
                <a href="https://bank.hackclub.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#338eda] transition-colors flex items-center gap-1.5">
                  <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank" className="h-4 object-contain inline-block" />
                  <span>Hack Club Bank (Fiscal Sponsor)</span>
                  <Icon glyph="forward" size={14} className="text-[#338eda]" />
                </a>
              </li>
              <li>
                <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ec3750] transition-colors flex items-center gap-1.5">
                  <span>Hack Club Main HQ</span>
                  <Icon glyph="forward" size={14} className="text-[#ec3750]" />
                </a>
              </li>
              <li>
                <a href="https://hackclub.com/brand" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ec3750] transition-colors flex items-center gap-1.5">
                  <span>Hack Club Brand Assets</span>
                  <Icon glyph="forward" size={14} className="text-[#ec3750]" />
                </a>
              </li>
              <li>
                <a href="https://scrapbook.hackclub.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ec3750] transition-colors flex items-center gap-1.5">
                  <span>Hack Club Scrapbook</span>
                  <Icon glyph="forward" size={14} className="text-[#ec3750]" />
                </a>
              </li>
              <li>
                <a href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#338eda] transition-colors flex items-center gap-1.5">
                  <img src="/devpost.svg" alt="Devpost Logo" className="w-4 h-4 object-contain inline-block" />
                  <span>Devpost Hackathons</span>
                  <Icon glyph="forward" size={14} className="text-[#338eda]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white gap-3">
          <p>© {new Date().getFullYear()} Hack Club Marina · 501(c)(3) Nonprofit Fiscal Sponsorship under Hack Club Bank (The Hack Foundation, EIN: 81-2908499).</p>
          <div className="flex items-center gap-3">
            <span>Tax-Deductible Community Grants</span>
            {setActiveTab && (
              <>
                <span>•</span>
                <button
                  onClick={() => setActiveTab('devportal')}
                  className="text-[#f1c40f] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-bold focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden"
                >
                  <Icon glyph="private" size={14} className="text-[#f1c40f]" />
                  <span>Dev Portal</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
