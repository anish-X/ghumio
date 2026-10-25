import React from 'react';
import { MapPin, Mountain, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../../data/mockData';
import { ServiceCategory } from '../../types';

interface DestinationGridProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({ onSelectDestination }) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1769F5] mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
              Nepal Geographic Focus
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
              Iconic Himalayan & Cultural Destinations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E]">
              From subtropical jungle safaris to 5,000m glacial passes and ancient medieval palaces.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs text-[#8F9BB3] font-medium">
              8 Featured Himalayan Regions • 180+ Local Operators
            </span>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest, index) => {
            const isFeatured = index === 0 || index === 1;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest.name)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm border border-[#E8EAF0] card-hover-lift ${
                  isFeatured ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                }`}
              >
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/90 via-[#101D45]/40 to-transparent" />

                {/* Top Badge: Altitude */}
                {dest.altitude && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    <Mountain className="w-3 h-3 text-[#FFB91F]" />
                    <span>Alt. {dest.altitude}</span>
                  </div>
                )}

                {/* Bottom Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight group-hover:text-[#FFB91F] transition-colors">
                      {dest.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#F45B18] transition-colors">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-200 mt-1 line-clamp-1 font-normal">
                    {dest.tagline}
                  </p>

                  {/* Badges / Metrics */}
                  <div className="mt-3 pt-3 border-t border-white/15 flex items-center gap-3 text-[11px] text-slate-300">
                    <span className="font-semibold text-white">{dest.tourCount} Tours</span>
                    <span>•</span>
                    <span className="font-semibold text-white">{dest.stayCount} Stays</span>
                    {isFeatured && (
                      <>
                        <span>•</span>
                        <span className="hidden sm:inline text-slate-300">
                          Highlights: {dest.popularFor.slice(0, 2).join(', ')}
                        </span>
                      </>
                    )}
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
