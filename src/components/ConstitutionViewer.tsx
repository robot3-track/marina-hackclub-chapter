import React, { useState } from 'react';
import { CONSTITUTION_ARTICLES } from '../data/chapterData';
import { Search, FileText, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';

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
    <section className="py-16 bg-[#17171d] text-white border-t border-[#252429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#338eda]/10 border border-[#338eda]/30 text-[#338eda] text-xs font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Official Charter & Bylaws</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Hack Club Marina Constitution
          </h2>

          <p className="text-sm sm:text-base text-[#8492a6]">
            Official constitution governing Hack Club Marina Chapter of Marina High School. Covering membership, officer duties, finances, and meeting procedures.
          </p>
        </div>

        {/* Search & Article Filter Bar */}
        <div className="bg-[#1e1e24] p-5 sm:p-6 rounded-2xl border border-[#2d2d38] space-y-4 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#8492a6]" />
              <input
                type="text"
                placeholder="Search constitution bylaws..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full bg-[#17171d] text-white placeholder-[#8492a6] border border-[#2d2d38] focus:border-[#ec3750] outline-none"
              />
            </div>

            {/* Jump Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveArticleId('all')}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  activeArticleId === 'all'
                    ? 'bg-[#ec3750] text-white'
                    : 'bg-[#17171d] text-[#8492a6] hover:text-white border border-[#2d2d38]'
                }`}
              >
                All Articles
              </button>
              {CONSTITUTION_ARTICLES.map(art => (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    activeArticleId === art.id
                      ? 'bg-[#ec3750] text-white'
                      : 'bg-[#17171d] text-[#8492a6] hover:text-white border border-[#2d2d38]'
                  }`}
                >
                  {art.title.split(' - ')[0]}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center bg-[#1e1e24] rounded-2xl border border-[#2d2d38]">
              <p className="text-sm font-semibold text-[#8492a6]">
                No matching articles found for "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs font-bold text-[#ec3750] hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredArticles.map(article => (
              <div
                key={article.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] space-y-4"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#2d2d38]">
                  <Bookmark className="w-5 h-5 text-[#ec3750]" />
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {article.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {article.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-1.5 text-sm sm:text-base leading-relaxed text-[#a0aec0]">
                      {sec.number && (
                        <span className="font-extrabold text-[#ec3750] block text-xs uppercase tracking-wider mt-2">
                          {sec.number} {sec.title ? `• ${sec.title}` : ''}
                        </span>
                      )}
                      <p className="font-normal text-white/90">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Ratified Charter Footer */}
        <div className="p-6 rounded-2xl bg-[#1e1e24] border border-[#2d2d38] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#33d6a6] flex-shrink-0" />
            <div>
              <p className="font-extrabold text-sm">
                Ratified Charter of Hackclub Marina Chapter
              </p>
              <p className="text-xs text-[#8492a6]">
                Marina High School Interclub Council & Hack Club HQ Supported
              </p>
            </div>
          </div>

          <a
            href="https://hackclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#ec3750] hover:bg-[#d62b42] text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Hack Club Main HQ</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
