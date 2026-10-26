import React from 'react';
import { Star, MapPin, ArrowRight, Sparkles, Coffee, Hotel } from 'lucide-react';
import { HOTELS_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface FeaturedStaysProps {
  onSelectHotel: (id: string) => void;
  onExploreMore: () => void;
}

export const FeaturedStays: React.FC<FeaturedStaysProps> = ({ onSelectHotel, onExploreMore }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8DFD0] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-3">
              <Hotel className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Quiet Lodges • Rest & Respite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15]">
              Lakeside villas, eco lodges <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C77B5A]">& heritage courtyards.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light text-[#7D8876] leading-relaxed">
              Carefully chosen sanctuaries from restored Newari brick mansions to quiet Fewa Lake tented villas and organic hill retreats.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#173D32] hover:text-[#C77B5A] transition-colors py-2 group"
          >
            <span>Explore all stays</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOTELS_DATA.map((hotel) => {
            return (
              <div
                key={hotel.id}
                onClick={() => onSelectHotel(hotel.id)}
                className="group bg-[#F7F5EF] hover:bg-white rounded-3xl overflow-hidden border border-[#E8DFD0] hover:border-[#173D32]/30 transition-all duration-300 shadow-2xs hover:shadow-lg cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#173D32]">
                    <img
                      src={hotel.images[0]}
                      alt={hotel.title}
                      className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
                    />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium bg-[#173D32]/90 backdrop-blur-md text-[#F7F5EF] border border-[#F7F5EF]/20">
                        {hotel.propertyType}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-mono border border-white/20">
                      <Star className="w-3 h-3 fill-[#C77B5A] text-[#C77B5A]" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#7D8876] mb-2 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#C77B5A]" />
                      <span>{hotel.location}</span>
                    </div>

                    <h3 className="text-xl font-serif font-light text-[#173D32] group-hover:text-[#C77B5A] transition-colors line-clamp-1 leading-snug">
                      {hotel.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm font-light text-[#252923]/75 line-clamp-2 leading-relaxed">
                      {hotel.overview}
                    </p>

                    {/* Amenities pills */}
                    <div className="mt-4 pt-4 border-t border-[#E8DFD0]/80 flex flex-wrap gap-1.5">
                      {hotel.amenities.slice(0, 3).map((amenity, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full bg-[#E8DFD0]/40 text-[#173D32] text-[10px] font-light"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Starting Price */}
                <div className="p-6 pt-0 mt-2">
                  <div className="pt-4 border-t border-[#E8DFD0]/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#7D8876] font-mono">From / Night</div>
                      <span className="text-xl font-serif font-medium text-[#173D32]">
                        {formatNPR(hotel.startingPriceNPR)}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="px-4 py-2 rounded-full bg-[#173D32] group-hover:bg-[#C77B5A] text-[#F7F5EF] text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>Check suites</span>
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
