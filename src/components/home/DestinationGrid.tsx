import React from 'react';
import { MapPin, Mountain, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../../data/mockData';

interface DestinationGridProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationGrid: React.FC<DestinationGridProps> = ({ onSelectDestination }) => {
  // Find key requested destinations
  const pokhara = DESTINATIONS.find(d => d.id === 'pokhara') || DESTINATIONS[0];
  const mustang = DESTINATIONS.find(d => d.id === 'mustang') || DESTINATIONS[1];
  const ilam = DESTINATIONS.find(d => d.id === 'ilam') || DESTINATIONS[2];
  const rara = DESTINATIONS.find(d => d.id === 'rara') || DESTINATIONS[3];
  const mardi = DESTINATIONS.find(d => d.id === 'mardi') || DESTINATIONS[4];
  const bandipur = DESTINATIONS.find(d => d.id === 'bandipur') || DESTINATIONS[5];

  return (
    <section id="destinations-section" className="py-16 sm:py-24 bg-white border-y border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F45B18] mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
              Geographic Focus
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#101D45] tracking-tight">
              Iconic Himalayan & Cultural Sanctuaries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E] max-w-xl">
              From mirror alpine waters to wind-carved ancient Tibetan canyons and emerald tea slopes.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs text-[#8F9BB3] font-medium bg-[#F7F8FA] px-3.5 py-1.5 rounded-full border border-[#E8EAF0]">
              6 Highlighted Regions • 180+ Local Operators
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="space-y-6">
          
          {/* Row 1: Large Featured Anchor (Pokhara) + Editorial Column (Mustang) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Pokhara - Large Panorama Feature */}
            <div 
              onClick={() => onSelectDestination(pokhara.name)}
              className="lg:col-span-7 group relative h-[420px] sm:h-[460px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8EAF0] shadow-sm card-hover-lift bg-[#101D45]"
            >
              <img 
                src={pokhara.image} 
                alt={pokhara.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/95 via-[#101D45]/40 to-transparent"></div>

              {/* Top coordinates & tag */}
              <div className="absolute top-5 inset-x-5 flex items-center justify-between text-xs text-white">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 font-mono text-[11px]">
                  {pokhara.coordinates || '28.2096° N, 83.9856° E'}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#101D45]/80 backdrop-blur-md text-[#FFB91F] border border-white/20 text-[11px] font-bold">
                  Alt. {pokhara.altitude}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 inset-x-6 text-white">
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#08C5C9] mb-1">
                  Valley of Lakes & Fishtail Reflections
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FFB91F] transition-colors">
                      {pokhara.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-md line-clamp-1 font-normal">
                      {pokhara.tagline}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#F45B18] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-4 text-xs text-slate-300">
                  <span className="font-bold text-white">{pokhara.tourCount} Tours</span>
                  <span>•</span>
                  <span className="font-bold text-white">{pokhara.stayCount} Stays</span>
                  <span>•</span>
                  <span className="hidden sm:inline">{pokhara.popularFor.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Mustang - Tall Monolith */}
            <div 
              onClick={() => onSelectDestination(mustang.name)}
              className="lg:col-span-5 group relative h-[420px] sm:h-[460px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8EAF0] shadow-sm card-hover-lift bg-[#101D45]"
            >
              <img 
                src={mustang.image} 
                alt={mustang.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/95 via-[#101D45]/40 to-transparent"></div>

              <div className="absolute top-5 inset-x-5 flex items-center justify-between text-xs text-white">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 font-mono text-[11px]">
                  {mustang.coordinates || '29.1824° N, 83.9576° E'}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#101D45]/80 backdrop-blur-md text-[#FFB91F] border border-white/20 text-[11px] font-bold">
                  Alt. {mustang.altitude}
                </span>
              </div>

              <div className="absolute bottom-6 inset-x-6 text-white">
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#FFB91F] mb-1">
                  The Ancient Walled Kingdom
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FFB91F] transition-colors">
                      {mustang.name}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 max-w-xs line-clamp-1 font-normal">
                      {mustang.tagline}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-[#F45B18] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-3 text-xs text-slate-300">
                  <span className="font-bold text-white">{mustang.tourCount} Tours</span>
                  <span>•</span>
                  <span>Restricted Kingdom</span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Triptych Layout (Ilam, Rara Lake, Mardi Himal) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Ilam */}
            <div 
              onClick={() => onSelectDestination(ilam.name)}
              className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8EAF0] shadow-sm card-hover-lift bg-[#101D45]"
            >
              <img 
                src={ilam.image} 
                alt={ilam.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/95 via-[#101D45]/40 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  Alt. {ilam.altitude}
                </span>
              </div>

              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#08C5C9]">Eastern Slopes</span>
                <h3 className="text-xl font-black text-white group-hover:text-[#FFB91F] transition-colors mt-0.5">
                  {ilam.name}
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2 font-normal">
                  {ilam.tagline}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                  <span>{ilam.popularFor[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#F45B18]" />
                </div>
              </div>
            </div>

            {/* Rara Lake */}
            <div 
              onClick={() => onSelectDestination(rara.name)}
              className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8EAF0] shadow-sm card-hover-lift bg-[#101D45]"
            >
              <img 
                src={rara.image} 
                alt={rara.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/95 via-[#101D45]/40 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  Alt. {rara.altitude}
                </span>
              </div>

              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#08C5C9]">Wild Karnali</span>
                <h3 className="text-xl font-black text-white group-hover:text-[#FFB91F] transition-colors mt-0.5">
                  {rara.name}
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2 font-normal">
                  {rara.tagline}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                  <span>{rara.popularFor[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#F45B18]" />
                </div>
              </div>
            </div>

            {/* Mardi Himal */}
            <div 
              onClick={() => onSelectDestination(mardi.name)}
              className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8EAF0] shadow-sm card-hover-lift bg-[#101D45]"
            >
              <img 
                src={mardi.image} 
                alt={mardi.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D45]/95 via-[#101D45]/40 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                  Alt. {mardi.altitude}
                </span>
              </div>

              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#08C5C9]">Sacred Ridge</span>
                <h3 className="text-xl font-black text-white group-hover:text-[#FFB91F] transition-colors mt-0.5">
                  {mardi.name}
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2 font-normal">
                  {mardi.tagline}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                  <span>{mardi.popularFor[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#F45B18]" />
                </div>
              </div>
            </div>

          </div>

          {/* Row 3: Bandipur Heritage Spread */}
          <div 
            onClick={() => onSelectDestination(bandipur.name)}
            className="group relative h-[240px] sm:h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8EAF0] shadow-sm card-hover-lift bg-[#101D45]"
          >
            <img 
              src={bandipur.image} 
              alt={bandipur.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101D45]/95 via-[#101D45]/60 to-transparent"></div>

            <div className="absolute inset-y-0 left-0 p-6 sm:p-10 flex flex-col justify-between max-w-xl text-white">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#FFB91F]">
                  18th-Century Newari Living Heritage • Alt. {bandipur.altitude}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FFB91F] transition-colors mt-1">
                  {bandipur.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2 font-normal">
                  {bandipur.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <span className="underline decoration-[#F45B18] underline-offset-4">
                  Explore Bandipur stays & walks
                </span>
                <div className="w-7 h-7 rounded-full bg-[#F45B18] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
