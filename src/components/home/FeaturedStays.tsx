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
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#08C5C9] mb-2">
              <Hotel className="w-3.5 h-3.5 text-[#08C5C9]" />
              Handpicked Nepal Accommodations
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#101D45] tracking-tight">
              Lakeside Villas, Eco Lodges & Heritage Stays
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E] max-w-xl">
              From restored 14th-century Newari palaces to tranquil Fewa Lake tented villas and mountain-view eco retreats.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1769F5] hover:text-[#0E56D1] group"
          >
            <span>View all stays</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOTELS_DATA.map((hotel) => {
            return (
              <div
                key={hotel.id}
                onClick={() => onSelectHotel(hotel.id)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-card card-hover-lift cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={hotel.images[0]}
                      alt={hotel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white shadow-sm">
                        {hotel.propertyType}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#FFB91F] text-[#FFB91F]" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#57647E] mb-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                      <span>{hotel.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-1 leading-snug">
                      {hotel.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#57647E] line-clamp-2 leading-relaxed font-normal">
                      {hotel.overview}
                    </p>

                    {/* Amenities pills */}
                    <div className="mt-3.5 pt-3.5 border-t border-[#E8EAF0] flex flex-wrap gap-1.5">
                      {hotel.amenities.slice(0, 3).map((amenity, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-[#F7F8FA] text-[#57647E] text-[11px] font-medium border border-[#E8EAF0]"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Starting Price */}
                <div className="p-5 pt-0 mt-1">
                  <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#8F9BB3]">Starting from / night</div>
                      <span className="text-lg sm:text-xl font-black text-[#101D45]">
                        {formatNPR(hotel.startingPriceNPR)}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-[#08C5C9]/10 group-hover:bg-[#08C5C9] text-[#08C5C9] group-hover:text-white font-bold text-xs transition-all flex items-center gap-1 shadow-2xs"
                    >
                      <span>Check suites</span>
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
