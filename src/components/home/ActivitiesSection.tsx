import React from 'react';
import { Sparkles, Clock, MapPin, Star, ShieldCheck, ArrowRight, Video } from 'lucide-react';
import { ACTIVITIES_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface ActivitiesSectionProps {
  onSelectActivity: (id: string) => void;
  onExploreMore: () => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ onSelectActivity, onExploreMore }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F45B18] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F45B18]"></span>
              High-Thrill & Cultural Adventures
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
              Unforgettable Nepal Activities & Day Tours
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E]">
              From paragliding over Fewa Lake to 228m canyon bungee jumps and Everest sightseeing flights.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1769F5] hover:text-[#0E56D1] group"
          >
            <span>View all activities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES_DATA.map((act) => {
            return (
              <div
                key={act.id}
                onClick={() => onSelectActivity(act.id)}
                className="group bg-[#FFFCF7] hover:bg-white rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-sm hover:shadow-card card-hover-lift cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={act.images[0]}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#101D45] text-white shadow-sm">
                        {act.category}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                      <Star className="w-3 h-3 fill-[#FFB91F] text-[#FFB91F]" />
                      <span>{act.rating}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-1 text-[11px] text-[#57647E] mb-1 font-medium">
                      <MapPin className="w-3 h-3 text-[#F45B18]" />
                      <span>{act.location}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-2 leading-snug">
                      {act.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-xs text-[#8F9BB3]">
                      <Clock className="w-3.5 h-3.5 text-[#08C5C9]" />
                      <span>{act.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="p-4 sm:p-5 pt-0 mt-2">
                  <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#8F9BB3]">Per person</div>
                      <div className="text-base font-black text-[#101D45]">
                        {formatNPR(act.priceNPR)}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-xl bg-[#F45B18]/10 group-hover:bg-[#F45B18] text-[#F45B18] group-hover:text-white font-bold text-xs transition-colors"
                    >
                      Book Now
                    </button>
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
