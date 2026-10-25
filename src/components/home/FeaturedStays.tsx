import React from 'react';
import { Star, MapPin, ArrowRight, Sparkles, Coffee } from 'lucide-react';
import { HOTELS_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface FeaturedStaysProps {
  onSelectHotel: (id: string) => void;
  onExploreMore: () => void;
}

export const FeaturedStays: React.FC<FeaturedStaysProps> = ({ onSelectHotel, onExploreMore }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#FFFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#08C5C9] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#08C5C9]"></span>
              Handpicked Nepal Accommodations
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
              Lakeside Villas, Heritage Stays & Eco Lodges
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E]">
              From restored 14th-century Newari palaces to tranquil mountain-view eco sanctuaries.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1769F5] hover:text-[#0E56D1] group"
          >
            <span>View all 80+ stays</span>
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

                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-md text-[#101D45] text-xs font-bold shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-[#FFB91F] text-[#FFB91F]" />
                      <span>{hotel.rating}</span>
                      <span className="text-[#8F9BB3] font-normal">({hotel.reviewCount})</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-xs text-[#57647E] mb-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                      <span>{hotel.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-1">
                      {hotel.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#57647E] line-clamp-2 leading-relaxed">
                      {hotel.overview}
                    </p>

                    {/* Amenities pills */}
                    <div className="mt-3.5 pt-3.5 border-t border-[#E8EAF0] flex flex-wrap gap-1.5">
                      {hotel.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className="text-[11px] font-medium text-[#57647E] bg-[#F7F8FA] px-2 py-0.5 rounded-md border border-[#E8EAF0]">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="p-5 pt-0 mt-2">
                  <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#8F9BB3]">From / night</div>
                      <div className="text-lg sm:text-xl font-black text-[#101D45]">
                        {formatNPR(hotel.startingPriceNPR)}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-[#101D45] text-white hover:bg-[#F45B18] font-bold text-xs transition-colors flex items-center gap-1"
                    >
                      <span>Check Rooms</span>
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
