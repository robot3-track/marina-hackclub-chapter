import React, { useState } from 'react';
import { motion } from 'motion/react';

interface CarouselItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  icon: string;
  linkText: string;
  linkUrl: string;
  accentBorder: string;
}

const HACKATHON_CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps',
    tag: 'First Event • Nov 14–15th',
    tagColor: '#38bdf8',
    description: 'Our first major challenge! Build space apps, satellite tools, and Earth solutions using official NASA open data on November 14–15th.',
    icon: '/nasa-logo.svg',
    linkText: 'NASA Space Apps',
    linkUrl: 'https://www.spaceappschallenge.org',
    accentBorder: 'hover:border-[#38bdf8]',
  },
  {
    id: 'scrapyard',
    title: 'Scrapyard 2026',
    tag: 'Global Hardware Hackathon',
    tagColor: '#ec3750',
    description: 'Hack Club flagship high school hardware & software hackathon taking place in 100+ cities worldwide simultaneously.',
    icon: '/flag-standalone.svg',
    linkText: 'Explore Scrapyard',
    linkUrl: 'https://scrapyard.hackclub.com',
    accentBorder: 'hover:border-[#ec3750]',
  },
  {
    id: 'highseas',
    title: 'High Seas Shipathon',
    tag: 'Winter Shipathon',
    tagColor: '#338eda',
    description: 'Ship projects every week, earn Doubloons, and claim free laptops, 3D printers, microcontrollers & tech grants.',
    icon: '/2026.svg',
    linkText: 'View High Seas',
    linkUrl: 'https://highseas.hackclub.com',
    accentBorder: 'hover:border-[#338eda]',
  },
  {
    id: 'arcade',
    title: 'Hack Club Arcade',
    tag: 'Build & Earn Hardware',
    tagColor: '#f1c40f',
    description: 'Log hours coding games, websites, or apps, and trade your development hours for real physical electronics & kits.',
    icon: '/hcb-light.png',
    linkText: 'Check Arcade',
    linkUrl: 'https://arcade.hackclub.com',
    accentBorder: 'hover:border-[#f1c40f]',
  },
  {
    id: 'devpost-hs',
    title: 'Devpost High School Hacks',
    tag: 'Devpost Competitions',
    tagColor: '#33d6a6',
    description: 'Team up with Marina High School chapter members to build software apps & games for global Devpost competitions.',
    icon: '/devpost.svg',
    linkText: 'Devpost Portal',
    linkUrl: 'https://devpost.com/hackathons',
    accentBorder: 'hover:border-[#33d6a6]',
  },
  {
    id: 'epoch',
    title: 'Epoch & Assemble',
    tag: 'HQ Flagship Events',
    tagColor: '#a633d6',
    description: '42-hour international teen hackathons with hardware labs, workshops, midnight karaoke, and global hacker networking.',
    icon: '/flag-orpheus-top.svg',
    linkText: 'Discover Epoch',
    linkUrl: 'https://epoch.hackclub.com',
    accentBorder: 'hover:border-[#a633d6]',
  },
  {
    id: 'bantam',
    title: 'Sprig & Bantam Grants',
    tag: 'Custom Hardware Grants',
    tagColor: '#ff8c37',
    description: 'Build a tilemap game in JS to receive a free custom handheld console kit shipped straight to your doorstep.',
    icon: '/icon-rounded.svg',
    linkText: 'Claim Sprig Kit',
    linkUrl: 'https://sprig.hackclub.com',
    accentBorder: 'hover:border-[#ff8c37]',
  },
];

export const CarouselTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const doubleItems = [...HACKATHON_CAROUSEL_ITEMS, ...HACKATHON_CAROUSEL_ITEMS];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >

      <div 
        className="relative overflow-hidden rounded-xl bg-[#131317] border border-[#2d2d38] p-4 sm:p-6 shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#131317] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#131317] to-transparent z-10 pointer-events-none" />

        <div 
          className="flex gap-4 sm:gap-6 w-max"
          style={{
            animation: 'marqueeCarousel 32s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {doubleItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`w-[280px] sm:w-[340px] flex-shrink-0 p-4 sm:p-5 rounded-xl bg-[#1e1e24] border border-[#2d2d38] ${item.accentBorder} transition-all duration-300 flex flex-col justify-between space-y-4 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span 
                    className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#17171d] border border-[#2d2d38]"
                    style={{ color: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 sm:h-7 object-contain"
                  />
                </div>

                <h4 className="text-base sm:text-lg font-black text-white">
                  {item.title}
                </h4>

                <p className="text-xs text-[#8492a6] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <a
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors pt-3 border-t border-[#2d2d38]"
                style={{ color: item.tagColor }}
              >
                <span>{item.linkText}</span>
                <span className="font-mono text-sm">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
