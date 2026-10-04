import React from 'react';
import { Lock } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="relative z-40 bg-[#17171d] border-b border-[#252429]">
      <a
        href="https://hackclub.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0 z-50 transition-transform hover:translate-y-1 block focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
        title="Hack Club HQ"
        aria-label="Hack Club Main HQ"
      >
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club Flag"
          className="w-20 sm:w-28 md:w-36 drop-shadow-md"
        />
      </a>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pl-22 sm:pl-32 md:pl-44 py-2.5 sm:py-3.5 flex items-center justify-between">
        <button
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-2 sm:gap-3 text-left group focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden cursor-pointer"
          aria-label="Hack Club Marina Overview"
        >
          <img
            src="https://i.ibb.co/KJpRrXr/image-removebg-preview-6.png"
            alt="Hack Club Logo"
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg lg:text-xl tracking-tight text-white group-hover:text-[#ec3750] transition-colors leading-none">
              HACK CLUB <span className="text-[#ec3750]">MARINA</span>
            </span>
            <span className="text-xs font-semibold text-white mt-0.5">
              Marina High School Chapter
            </span>
          </div>
        </button>

        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-2 lg:gap-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden ${
              activeTab === 'overview'
                ? 'bg-[#252429] text-white border border-[#ec3750]/60'
                : 'text-white hover:text-[#ec3750]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveTab('hackathons')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden ${
              activeTab === 'hackathons'
                ? 'bg-[#252429] text-white border border-[#ec3750]/60'
                : 'text-white hover:text-[#ec3750]'
            }`}
          >
            Hackathons & Devpost
          </button>

          <button
            onClick={() => setActiveTab('constitution')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden ${
              activeTab === 'constitution'
                ? 'bg-[#252429] text-white border border-[#338eda]/60'
                : 'text-white hover:text-[#338eda]'
            }`}
          >
            Constitution
          </button>

          <button
            onClick={() => setActiveTab('signup')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#33d6a6] focus-visible:outline-hidden ${
              activeTab === 'signup'
                ? 'bg-[#252429] text-white border border-[#33d6a6]/60'
                : 'text-white hover:text-[#33d6a6]'
            }`}
          >
            Contact & Join
          </button>

          <button
            onClick={() => setActiveTab('devportal')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-extrabold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden ${
              activeTab === 'devportal'
                ? 'bg-[#252429] text-[#f1c40f] border border-[#f1c40f]/60'
                : 'text-[#f1c40f] hover:text-white'
            }`}
            title="Internal Finance & Developer Portal"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Dev Portal</span>
          </button>
        </nav>

        <div className="hidden xs:flex items-center gap-2">
          <button
            onClick={() => setActiveTab('signup')}
            className="px-4 sm:px-5 py-2 rounded-md font-black text-xs sm:text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white transition-all shadow-md cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
          >
            Join Chapter
          </button>
        </div>
      </div>

      <div className="md:hidden border-t border-[#252429] px-3 py-2 overflow-x-auto flex items-center gap-2 scrollbar-none bg-[#121217]">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-md whitespace-nowrap transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden ${
            activeTab === 'overview' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-white'
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab('hackathons')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-md whitespace-nowrap transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden ${
            activeTab === 'hackathons' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-white'
          }`}
        >
          Hackathons & Devpost
        </button>

        <button
          onClick={() => setActiveTab('constitution')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-md whitespace-nowrap transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#338eda] focus-visible:outline-hidden ${
            activeTab === 'constitution' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-white'
          }`}
        >
          Constitution
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-md whitespace-nowrap transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#33d6a6] focus-visible:outline-hidden ${
            activeTab === 'signup' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-white'
          }`}
        >
          Contact & Join
        </button>
        <button
          onClick={() => setActiveTab('devportal')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-md whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#f1c40f] focus-visible:outline-hidden ${
            activeTab === 'devportal' ? 'bg-[#f1c40f] text-[#121217]' : 'bg-[#252429] text-[#f1c40f]'
          }`}
        >
          <Lock className="w-3 h-3" />
          <span>Dev Portal</span>
        </button>
      </div>
    </header>
  );
};
