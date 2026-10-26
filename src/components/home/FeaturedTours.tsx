import React from 'react';
import { Clock, ShieldCheck, Star, Users, MapPin, ArrowRight, Compass, HeartHandshake } from 'lucide-react';
import { TOURS_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface FeaturedToursProps {
  onSelectTour: (id: string) => void;
  onExploreMore: () => void;
}

export const FeaturedTours: React.FC<FeaturedToursProps> = ({ onSelectTour, onExploreMore }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8DFD0] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Curated Journeys • Unhurried Paths</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15]">
              Expeditions crafted <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C77B5A]">with local stewardship.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light text-[#7D8876] leading-relaxed">
              Every route is guided by certified local Sherpa leaders and community cooperatives, ensuring safety, cultural dignity, and direct local economic benefit.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#173D32] hover:text-[#C77B5A] transition-colors py-2 group"
          >
            <span>Explore all journeys</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Narrative Journey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS_DATA.map((tour) => {
            return (
              <div
                key={tour.id}
                onClick={() => onSelectTour(tour.id)}
                className="group bg-[#F7F5EF] hover:bg-white rounded-3xl overflow-hidden border border-[#E8DFD0] hover:border-[#173D32]/30 transition-all duration-300 shadow-2xs hover:shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Presentation */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#173D32]">
                    <img
                      src={tour.images[0]}
                      alt={tour.title}
                      className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                    {/* Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                      {tour.badge ? (
                        <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium bg-[#173D32]/90 backdrop-blur-md text-[#F7F5EF] border border-[#F7F5EF]/20">
                          {tour.badge}
                        </span>
                      ) : (
                        <span></span>
                      )}

                      <span className="px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium bg-black/40 backdrop-blur-md text-white border border-white/20">
                        {tour.difficulty}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-white font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#E8DFD0]" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    
                    <div className="flex items-center justify-between text-xs text-[#7D8876] mb-2 font-mono">
                      <span>{tour.destination} • {tour.region}</span>
                      <span className="flex items-center gap-1 text-[#173D32] font-sans font-semibold">
                        <Star className="w-3.5 h-3.5 fill-[#C77B5A] text-[#C77B5A]" />
                        {tour.rating} <span className="text-[#7D8876] font-normal font-mono">({tour.reviewCount})</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-light text-[#173D32] group-hover:text-[#C77B5A] transition-colors line-clamp-2 leading-snug">
                      {tour.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm font-light text-[#252923]/75 line-clamp-2 leading-relaxed">
                      {tour.overview}
                    </p>

                    {/* Guide & Community Stewardship Indicator */}
                    <div className="mt-4 pt-4 border-t border-[#E8DFD0]/80">
                      <div className="text-[11px] font-medium text-[#173D32] flex items-center gap-1.5">
                        <HeartHandshake className="w-3.5 h-3.5 text-[#C77B5A]" />
                        <span>Led by {tour.provider.name}</span>
                      </div>
                      <div className="text-[10px] text-[#7D8876] pl-5">
                        Certified Sherpa leader • Fair-wage porter standard
                      </div>
                    </div>

                  </div>
                </div>

                {/* Price and Action Footer */}
                <div className="p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-[#E8DFD0]/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#7D8876] font-mono">
                        Transparent NPR Rate
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-serif font-medium text-[#173D32]">
                          {formatNPR(tour.priceNPR)}
                        </span>
                        {tour.originalPriceNPR && (
                          <span className="text-xs text-[#7D8876] line-through font-mono">
                            {formatNPR(tour.originalPriceNPR)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="px-4 py-2 rounded-full bg-[#173D32] group-hover:bg-[#C77B5A] text-[#F7F5EF] text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>View journey</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
