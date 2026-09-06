import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121217] text-white border-t border-[#252429] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#252429]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/icon-square.svg"
                alt="Hack Club Marina Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <span className="font-black text-lg text-white tracking-tight">HACK CLUB <span className="text-[#ec3750]">MARINA</span></span>
                <p className="text-xs text-[#8492a6]">Marina High School Chapter</p>
              </div>
            </div>

            <p className="text-xs text-[#8492a6] leading-relaxed max-w-sm">
              Official student chapter of Hack Club at Marina High School. Creating an inclusive space for high schoolers to learn coding, build hardware, and launch projects.
            </p>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-[#ff8c37]">
              Chapter Direct Contacts
            </p>
            <ul className="space-y-2 text-xs text-[#8492a6]">
              <li className="flex items-center gap-2">
                <span className="text-white font-bold">Text GC:</span>
                <a href="sms:6575058696" className="hover:text-[#ec3750] transition-colors font-mono font-bold">657-505-8696</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-white font-bold">Email:</span>
                <a href="mailto:yychang100@student.hbuhsd.edu" className="hover:text-[#338eda] transition-colors font-mono font-bold">yychang100@student.hbuhsd.edu</a>
              </li>
              <li>
                <span className="text-white font-bold">Meetings:</span> Lunch & After School (Advisor's Classroom)
              </li>
            </ul>
          </div>

          {/* Hack Club Brand Links */}
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

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#8492a6] gap-3">
          <p>© {new Date().getFullYear()} Hack Club Marina High School Chapter.</p>
          <div className="flex items-center gap-1.5">
            <span>Built for Marina HS Student Hackers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
