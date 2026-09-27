import React from 'react';
import { Instagram, Lock } from 'lucide-react';

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
                src="https://assets.hackclub.com/icon-square.svg"
                alt="Hack Club Marina Logo"
                className="w-10 h-10 rounded-md object-contain"
              />
              <div>
                <span className="font-black text-lg text-white tracking-tight">HACK CLUB <span className="text-[#ec3750]">MARINA</span></span>
                <p className="text-xs text-[#8492a6]">Marina High School Chapter</p>
              </div>
            </div>

            <p className="text-xs text-[#8492a6] leading-relaxed max-w-sm">
              Official student chapter of Hack Club at Marina High School. Creating an inclusive space for high schoolers to learn coding, build hardware, and launch projects.
            </p>

            <div className="pt-1">
              <a
                href="https://www.instagram.com/hackclub.marina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#252429] hover:bg-[#2d2b33] border border-[#323138] text-white text-xs font-semibold transition-all hover:scale-105 group focus-visible:ring-2 focus-visible:ring-[#E4405F] focus-visible:outline-hidden"
              >
                <Instagram className="w-4 h-4 text-[#E4405F] group-hover:scale-110 transition-transform" />
                <span>Follow @hackclub.marina</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#ff8c37]">
              Chapter Direct Contacts
            </p>
            <ul className="space-y-2 text-xs text-[#8492a6]">
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E4405F] shrink-0" />
                <span className="text-white font-bold">Instagram:</span>
                <a href="https://www.instagram.com/hackclub.marina" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors font-mono font-bold">@hackclub.marina</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-bold">Text GC:</span>
                <a href="sms:6575058696" className="hover:text-[#ec3750] transition-colors font-mono font-bold">657-505-8696</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-bold">Email:</span>
                <a href="mailto:yychang100@student.hbuhsd.edu" className="hover:text-[#338eda] transition-colors font-mono font-bold">yychang100@student.hbuhsd.edu</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-bold">Sign Up Form:</span>
                <a href="https://forms.gle/oPvfMFuVs8yu46267" target="_blank" rel="noopener noreferrer" className="hover:text-[#ec3750] transition-colors font-mono font-bold">forms.gle/oPvfMFuVs8yu46267</a>
              </li>
              <li>
                <span className="text-white font-bold">Meetings:</span> Room 252 and Lunch on Mondays unless revised
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#ec3750]">
              Hack Club HQ
            </p>
            <ul className="space-y-2 text-xs font-medium text-[#8492a6]">
              <li>
                <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Hack Club Main HQ</span>
                  <span className="font-mono text-xs text-[#ec3750]">→</span>
                </a>
              </li>
              <li>
                <a href="https://hackclub.com/brand" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Hack Club Brand Assets</span>
                  <span className="font-mono text-xs text-[#ec3750]">→</span>
                </a>
              </li>
              <li>
                <a href="https://scrapbook.hackclub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Hack Club Scrapbook</span>
                  <span className="font-mono text-xs text-[#ec3750]">→</span>
                </a>
              </li>
              <li>
                <a href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <img src="/devpost.svg" alt="Devpost Logo" className="w-4 h-4 object-contain inline-block" />
                  <span>Devpost Hackathons</span>
                  <span className="font-mono text-xs text-[#338eda]">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#8492a6] gap-3">
          <p>© {new Date().getFullYear()} Hack Club Marina High School Chapter.</p>
          <div className="flex items-center gap-3">
            <span>Built for Marina HS Student Hack Clubbers</span>
            {setActiveTab && (
              <>
                <span>•</span>
                <button
                  onClick={() => setActiveTab('devportal')}
                  className="hover:text-[#f1c40f] transition-colors cursor-pointer flex items-center gap-1.5 font-semibold focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden"
                >
                  <Lock className="w-3 h-3 text-[#f1c40f]" />
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
