import React from 'react';
import { Clock, ShieldCheck, Star, Users, MapPin, ArrowRight } from 'lucide-react';
import { TOURS_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';
import { TourItem } from '../../types';

interface FeaturedToursProps {
  onSelectTour: (id: string) => void;
  onExploreMore: () => void;
}

export const FeaturedTours: React.FC<FeaturedToursProps> = ({ onSelectTour, onExploreMore }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FFFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F45B18] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F45B18]"></span>
              Handcrafted Himalayan Expeditions
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
              Recommended Trekking & Holiday Packages
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E]">
              Fully supported with licensed Sherpa mountain guides, park permits & teahouse stays.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1769F5] hover:text-[#0E56D1] group"
          >
            <span>View all 35+ expeditions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Tours Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOURS_DATA.map((tour) => {
            const difficultyColors: Record<string, string> = {
              Easy: 'bg-[#E8F8EE] text-[#15803D]',
              Moderate: 'bg-[#EEF4FE] text-[#1769F5]',
              Challenging: 'bg-[#FFF9EB] text-[#B7791F]',
              Strenuous: 'bg-[#FFF2EB] text-[#F45B18]',
            };

            return (
              <div
                key={tour.id}
                onClick={() => onSelectTour(tour.id)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-card card-hover-lift cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={tour.images[0]}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                      {tour.badge ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white shadow-sm">
                          {tour.badge}
                        </span>
                      ) : (
                        <span></span>
                      )}

                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${difficultyColors[tour.difficulty] || 'bg-slate-100 text-slate-700'}`}>
                        {tour.difficulty}
                      </span>
                    </div>

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FFB91F]" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    
                    <div className="flex items-center justify-between text-xs text-[#8F9BB3] mb-2 font-medium">
                      <span className="flex items-center gap-1 text-[#57647E]">
                        <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                        {tour.destination} • {tour.region}
                      </span>
                      <span className="flex items-center gap-1 text-[#101D45] font-bold">
                        <Star className="w-3.5 h-3.5 fill-[#FFB91F] text-[#FFB91F]" />
                        {tour.rating} <span className="text-[#8F9BB3] font-normal">({tour.reviewCount})</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-2 leading-snug">
                      {tour.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#57647E] line-clamp-2 leading-relaxed">
                      {tour.overview}
                    </p>

                    {/* Highlights pill preview */}
                    <div className="mt-3.5 pt-3.5 border-t border-[#E8EAF0] space-y-1.5">
                      <div className="text-[11px] font-semibold text-[#101D45] flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#08C5C9]" />
                        <span>By {tour.provider.name} ({tour.provider.experienceYears}+ yrs exp.)</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Price and Action Footer */}
                <div className="p-5 pt-0 mt-2">
                  <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#8F9BB3]">All-inclusive from</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-xl font-black text-[#101D45]">
                          {formatNPR(tour.priceNPR)}
                        </span>
                        {tour.originalPriceNPR && (
                          <span className="text-xs text-[#8F9BB3] line-through">
                            {formatNPR(tour.originalPriceNPR)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-[#1769F5]/10 group-hover:bg-[#1769F5] text-[#1769F5] group-hover:text-white font-bold text-xs transition-all flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
