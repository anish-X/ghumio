import React from 'react';
import { Sparkles, Clock, MapPin, Star, ShieldCheck, ArrowRight, Compass } from 'lucide-react';
import { ACTIVITIES_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface ActivitiesSectionProps {
  onSelectActivity: (id: string) => void;
  onExploreMore: () => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ onSelectActivity, onExploreMore }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8DFD0] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Adventures • Day Expeditions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15]">
              Experiences that quicken <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C77B5A]">the pulse of travel.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light text-[#7D8876] leading-relaxed">
              Thermal flights over lake reflections, canyon river rapids, and high mountain helicopter traverses with certified instructors.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#173D32] hover:text-[#C77B5A] transition-colors py-2 group"
          >
            <span>View all experiences</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES_DATA.map((act) => {
            return (
              <div
                key={act.id}
                onClick={() => onSelectActivity(act.id)}
                className="group bg-[#F7F5EF] hover:bg-white rounded-3xl overflow-hidden border border-[#E8DFD0] hover:border-[#173D32]/30 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#173D32]">
                    <img
                      src={act.images[0]}
                      alt={act.title}
                      className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
                    />

                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium bg-[#173D32]/90 backdrop-blur-md text-[#F7F5EF] border border-[#F7F5EF]/20">
                        {act.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-mono border border-white/20">
                      <Clock className="w-3 h-3 text-[#E8DFD0]" />
                      <span>{act.duration}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-[#7D8876] mb-1.5 font-mono">
                      <span>{act.location}</span>
                      <span className="flex items-center gap-1 text-[#173D32] font-sans font-semibold">
                        <Star className="w-3 h-3 fill-[#C77B5A] text-[#C77B5A]" />
                        {act.rating}
                      </span>
                    </div>

                    <h3 className="text-base font-serif font-light text-[#173D32] group-hover:text-[#C77B5A] transition-colors line-clamp-1 leading-snug">
                      {act.title}
                    </h3>

                    <p className="mt-2 text-xs font-light text-[#252923]/75 line-clamp-2 leading-relaxed">
                      {act.overview}
                    </p>
                  </div>
                </div>

                {/* Footer with Price */}
                <div className="p-5 pt-0 mt-1">
                  <div className="pt-3 border-t border-[#E8DFD0]/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#7D8876]">Per Person</div>
                      <div className="text-lg font-serif font-medium text-[#173D32]">
                        {formatNPR(act.priceNPR)}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#173D32] text-[#F7F5EF] group-hover:bg-[#C77B5A] flex items-center justify-center transition-colors shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
