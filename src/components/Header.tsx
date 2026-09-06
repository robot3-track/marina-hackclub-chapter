import React from 'react';
import { FileText, Users, Sparkles, MessageSquare, Phone } from 'lucide-react';

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
      {/* Hack Club Flag dangling banner - Positioned Top Left without overlapping */}
      <a
        href="https://hackclub.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 left-0 z-50 transition-transform hover:translate-y-1 block"
        title="Hack Club HQ"
      >
        <img
          src="/flag-orpheus-top.svg"
          alt="Hack Club Flag"
          className="w-20 sm:w-28 md:w-36 drop-shadow-md"
        />
      </a>

      {/* Main Nav Container - Padded left so it NEVER overlaps the flag */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pl-22 sm:pl-32 md:pl-44 py-2.5 sm:py-3.5 flex items-center justify-between">
        
        {/* Clean Logo and Title */}
        <button
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none"
        >
          <img
            src="/icon-rounded.svg"
            alt="Hack Club Logo"
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-lg lg:text-xl tracking-tight text-white group-hover:text-[#ec3750] transition-colors leading-none">
              HACK CLUB <span className="text-[#ec3750]">MARINA</span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-medium text-[#8492a6] mt-0.5">
              Marina High School Chapter
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-1.5 text-sm font-extrabold rounded-full transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#252429] text-white border border-[#ec3750]/50'
                : 'text-[#8492a6] hover:text-white'
            }`}
          >
            About
          </button>

          <button
            onClick={() => setActiveTab('hackathons')}
            className={`px-3.5 py-1.5 text-sm font-extrabold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'hackathons'
                ? 'bg-[#252429] text-white border border-[#ec3750]/50'
                : 'text-[#8492a6] hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#ec3750]" />
            Hackathons & Devpost
          </button>

          <button
            onClick={() => setActiveTab('constitution')}
            className={`px-3.5 py-1.5 text-sm font-extrabold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'constitution'
                ? 'bg-[#252429] text-white border border-[#ec3750]/50'
                : 'text-[#8492a6] hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4 text-[#338eda]" />
            Constitution
          </button>

          <button
            onClick={() => setActiveTab('signup')}
            className={`px-3.5 py-1.5 text-sm font-extrabold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'signup'
                ? 'bg-[#252429] text-white border border-[#ec3750]/50'
                : 'text-[#8492a6] hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#33d6a6]" />
            Contact & Join
          </button>
        </nav>

        {/* Hack Club Style Action Pill */}
        <div className="hidden xs:flex items-center gap-2">
          <button
            onClick={() => setActiveTab('signup')}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-black text-xs sm:text-sm bg-[#ec3750] hover:bg-[#d62b42] text-white transition-all transform hover:scale-105 shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <span>Join Chapter</span>
          </button>
        </div>
      </div>

      {/* Mobile Scrollable Nav Bar */}
      <div className="md:hidden border-t border-[#252429] px-3 py-2 overflow-x-auto flex items-center gap-2 scrollbar-none bg-[#121217]">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-full whitespace-nowrap transition-colors ${
            activeTab === 'overview' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-[#8492a6]'
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab('hackathons')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-full whitespace-nowrap transition-colors ${
            activeTab === 'hackathons' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-[#8492a6]'
          }`}
        >
          Hackathons & Devpost
        </button>

        <button
          onClick={() => setActiveTab('constitution')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-full whitespace-nowrap transition-colors ${
            activeTab === 'constitution' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-[#8492a6]'
          }`}
        >
          Constitution
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`px-3.5 py-1.5 text-xs font-extrabold rounded-full whitespace-nowrap transition-colors ${
            activeTab === 'signup' ? 'bg-[#ec3750] text-white' : 'bg-[#252429] text-[#8492a6]'
          }`}
        >
          Contact & Join
        </button>
      </div>
    </header>
  );
};
