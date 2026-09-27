import React, { useState } from 'react';
import { motion } from 'motion/react';
import Icon from '@hackclub/icons';
import { CONSTITUTION_ARTICLES } from '../data/chapterData';

export const ConstitutionViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeArticleId, setActiveArticleId] = useState<string>('all');

  const filteredArticles = CONSTITUTION_ARTICLES.filter(article => {
    const matchesTab = activeArticleId === 'all' || article.id === activeArticleId;
    if (!matchesTab) return false;

    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const titleMatch = article.title.toLowerCase().includes(term);
    const contentMatch = article.sections.some(sec =>
      sec.content.toLowerCase().includes(term) || (sec.title && sec.title.toLowerCase().includes(term))
    );

    return titleMatch || contentMatch;
  });

  return (
    <section className="relative overflow-hidden py-10 sm:py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div 
        className="absolute inset-x-0 bottom-0 h-96 sm:h-[480px] bg-cover bg-bottom opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/hackclub_sprue_bg_1788727720034.jpg')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#ec3750_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club Top Flag" className="h-10 object-contain" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Hack Club Marina Constitution
          </h2>

          <p className="text-sm sm:text-base text-white font-normal">
            Official constitution governing Hack Club Marina Chapter of Marina High School, operating as a 501(c)(3) fiscally sponsored nonprofit student organization under Hack Club Bank (The Hack Foundation, EIN: 81-2908499). Covering membership, officer duties, finances, and meeting procedures.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#1e1e24] p-4 sm:p-6 rounded-md border border-[#2d2d38] space-y-4 shadow-md"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="relative w-full sm:w-80">
              <Icon glyph="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
              <input
                type="text"
                placeholder="Search constitution bylaws..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm rounded-md bg-[#17171d] text-white placeholder-white/60 border border-[#2d2d38] focus:border-[#ec3750] focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveArticleId('all')}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden ${
                  activeArticleId === 'all'
                    ? 'bg-[#ec3750] text-white'
                    : 'bg-[#17171d] text-white hover:text-[#ec3750] border border-[#2d2d38]'
                }`}
              >
                All Articles
              </button>
              {CONSTITUTION_ARTICLES.map(art => (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden ${
                    activeArticleId === art.id
                      ? 'bg-[#ec3750] text-white'
                      : 'bg-[#17171d] text-white hover:text-[#ec3750] border border-[#2d2d38]'
                  }`}
                >
                  {art.title.split(' - ')[0]}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {filteredArticles.length === 0 ? (
            <div className="p-8 sm:p-12 text-center bg-[#1e1e24] rounded-md border border-[#2d2d38]">
              <p className="text-sm font-semibold text-white">
                No matching articles found for "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-sm font-bold text-[#ec3750] hover:underline cursor-pointer focus-visible:ring-2 focus-visible:ring-[#ec3750] focus-visible:outline-hidden"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredArticles.map(article => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="p-5 sm:p-8 rounded-md bg-[#1e1e24] border border-[#2d2d38] space-y-4 shadow-md"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#2d2d38]">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#ec3750] inline-block"></span>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    {article.title}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {article.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-1.5 text-sm sm:text-base leading-relaxed text-white">
                      {sec.number && (
                        <span className="font-extrabold text-[#ec3750] block text-xs sm:text-sm uppercase tracking-wider mt-2">
                          {sec.number} {sec.title ? `• ${sec.title}` : ''}
                        </span>
                      )}
                      <p className="font-normal text-white">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-md bg-[#1e1e24] border border-[#2d2d38] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md"
        >
          <div className="flex items-center gap-3">
            <img src="https://assets.hackclub.com/hcb-light.svg" alt="Hack Club Bank" className="w-8 h-8 object-contain" />
            <div>
              <p className="font-extrabold text-sm sm:text-base text-white">
                Ratified Charter of Hack Club Marina Chapter
              </p>
              <p className="text-xs sm:text-sm text-white font-medium">
                Marina High School Interclub Council & Hack Club HQ Supported
              </p>
            </div>
          </div>

          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-bold bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
          >
            <span>Hack Club Main HQ</span>
            <span className="font-mono text-sm">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
