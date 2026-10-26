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
    <section id="destinations-section" className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8DFD0] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Editorial Field Notes • Destinations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15]">
              Places that linger <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C77B5A]">long after the journey.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-left md:text-right">
            <p className="text-sm font-light text-[#7D8876] max-w-xs leading-relaxed">
              From mirror alpine waters to wind-carved ancient Tibetan canyons and emerald tea slopes.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="space-y-6">
          
          {/* Row 1: Large Featured Anchor (Pokhara) + Editorial Column (Mustang) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Pokhara - Large Panorama Feature */}
            <div 
              onClick={() => onSelectDestination(pokhara.name)}
              className="lg:col-span-7 group relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8DFD0] shadow-sm bg-[#173D32]"
            >
              <img 
                src={pokhara.image} 
                alt={pokhara.name}
                className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/90 via-[#173D32]/30 to-black/20"></div>

              {/* Top coordinates & tag */}
              <div className="absolute top-6 inset-x-6 flex items-center justify-between text-xs font-mono text-[#F7F5EF]/80">
                <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
                  {pokhara.coordinates || '28.2096° N, 83.9856° E'}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#173D32]/80 backdrop-blur-md text-[#E8DFD0] border border-[#E8DFD0]/30 font-sans text-[11px]">
                  Alt. {pokhara.altitude}
                </span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-6 inset-x-6 text-[#F7F5EF]">
                <div className="text-[11px] uppercase tracking-widest text-[#A8B8A0] font-light mb-1">
                  Valley of Lakes & Fishtail Reflections
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-serif font-light text-white group-hover:text-[#E8DFD0] transition-colors">
                      {pokhara.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F7F5EF]/80 font-light mt-1 max-w-md">
                      {pokhara.tagline}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F7F5EF] text-[#173D32] flex items-center justify-center shrink-0 group-hover:bg-[#C77B5A] group-hover:text-white transition-all shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-4 text-[11px] text-[#A8B8A0] font-light">
                  <span>{pokhara.tourCount} Journeys</span>
                  <span>•</span>
                  <span>{pokhara.stayCount} Stays</span>
                  <span>•</span>
                  <span className="hidden sm:inline">{pokhara.popularFor.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Mustang - Tall Editorial Monolith */}
            <div 
              onClick={() => onSelectDestination(mustang.name)}
              className="lg:col-span-5 group relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8DFD0] shadow-sm bg-[#173D32]"
            >
              <img 
                src={mustang.image} 
                alt={mustang.name}
                className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/90 via-[#173D32]/30 to-black/20"></div>

              <div className="absolute top-6 inset-x-6 flex items-center justify-between text-xs font-mono text-[#F7F5EF]/80">
                <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
                  {mustang.coordinates || '29.1824° N, 83.9576° E'}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#173D32]/80 backdrop-blur-md text-[#E8DFD0] border border-[#E8DFD0]/30 font-sans text-[11px]">
                  Alt. {mustang.altitude}
                </span>
              </div>

              <div className="absolute bottom-6 inset-x-6 text-[#F7F5EF]">
                <div className="text-[11px] uppercase tracking-widest text-[#A8B8A0] font-light mb-1">
                  The Ancient Walled Kingdom
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-serif font-light text-white group-hover:text-[#E8DFD0] transition-colors">
                      {mustang.name}
                    </h3>
                    <p className="text-xs text-[#F7F5EF]/80 font-light mt-1 max-w-xs">
                      {mustang.tagline}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F7F5EF] text-[#173D32] flex items-center justify-center shrink-0 group-hover:bg-[#C77B5A] group-hover:text-white transition-all shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-3 text-[11px] text-[#A8B8A0] font-light">
                  <span>{mustang.tourCount} Journeys</span>
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
              className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8DFD0] shadow-sm bg-[#173D32]"
            >
              <img 
                src={ilam.image} 
                alt={ilam.name}
                className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/40 to-transparent"></div>

              <div className="absolute top-5 left-5">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#F7F5EF] text-[10px] font-mono border border-white/20">
                  Alt. {ilam.altitude}
                </span>
              </div>

              <div className="absolute bottom-5 inset-x-5 text-[#F7F5EF]">
                <span className="text-[10px] uppercase tracking-widest text-[#A8B8A0] font-light">Eastern Slopes</span>
                <h3 className="text-2xl font-serif font-light text-white group-hover:text-[#E8DFD0] transition-colors mt-0.5">
                  {ilam.name}
                </h3>
                <p className="text-xs text-[#F7F5EF]/80 font-light mt-1 line-clamp-2">
                  {ilam.tagline}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-[#A8B8A0]">
                  <span>{ilam.popularFor[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C77B5A]" />
                </div>
              </div>
            </div>

            {/* Rara Lake */}
            <div 
              onClick={() => onSelectDestination(rara.name)}
              className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8DFD0] shadow-sm bg-[#173D32]"
            >
              <img 
                src={rara.image} 
                alt={rara.name}
                className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/40 to-transparent"></div>

              <div className="absolute top-5 left-5">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#F7F5EF] text-[10px] font-mono border border-white/20">
                  Alt. {rara.altitude}
                </span>
              </div>

              <div className="absolute bottom-5 inset-x-5 text-[#F7F5EF]">
                <span className="text-[10px] uppercase tracking-widest text-[#A8B8A0] font-light">Wild Karnali</span>
                <h3 className="text-2xl font-serif font-light text-white group-hover:text-[#E8DFD0] transition-colors mt-0.5">
                  {rara.name}
                </h3>
                <p className="text-xs text-[#F7F5EF]/80 font-light mt-1 line-clamp-2">
                  {rara.tagline}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-[#A8B8A0]">
                  <span>{rara.popularFor[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C77B5A]" />
                </div>
              </div>
            </div>

            {/* Mardi Himal */}
            <div 
              onClick={() => onSelectDestination(mardi.name)}
              className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8DFD0] shadow-sm bg-[#173D32]"
            >
              <img 
                src={mardi.image} 
                alt={mardi.name}
                className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/40 to-transparent"></div>

              <div className="absolute top-5 left-5">
                <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#F7F5EF] text-[10px] font-mono border border-white/20">
                  Alt. {mardi.altitude}
                </span>
              </div>

              <div className="absolute bottom-5 inset-x-5 text-[#F7F5EF]">
                <span className="text-[10px] uppercase tracking-widest text-[#A8B8A0] font-light">Sacred Fishtail Ridge</span>
                <h3 className="text-2xl font-serif font-light text-white group-hover:text-[#E8DFD0] transition-colors mt-0.5">
                  {mardi.name}
                </h3>
                <p className="text-xs text-[#F7F5EF]/80 font-light mt-1 line-clamp-2">
                  {mardi.tagline}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-[#A8B8A0]">
                  <span>{mardi.popularFor[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C77B5A]" />
                </div>
              </div>
            </div>

          </div>

          {/* Row 3: Bandipur Heritage Spread */}
          <div 
            onClick={() => onSelectDestination(bandipur.name)}
            className="group relative h-[260px] sm:h-[300px] rounded-3xl overflow-hidden cursor-pointer border border-[#E8DFD0] shadow-sm bg-[#173D32]"
          >
            <img 
              src={bandipur.image} 
              alt={bandipur.name}
              className="w-full h-full object-cover editorial-image-zoom filter brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#173D32]/95 via-[#173D32]/50 to-transparent"></div>

            <div className="absolute inset-y-0 left-0 p-6 sm:p-10 flex flex-col justify-between max-w-xl text-[#F7F5EF]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#A8B8A0] font-light">
                  18th-Century Newari Living Heritage • Alt. {bandipur.altitude}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-light text-white group-hover:text-[#E8DFD0] transition-colors mt-1">
                  {bandipur.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F5EF]/80 font-light mt-2">
                  {bandipur.tagline}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-[#E8DFD0]">
                <span className="flex items-center gap-1.5 underline decoration-[#C77B5A] underline-offset-4">
                  Explore Bandipur stays & walks
                </span>
                <ArrowRight className="w-4 h-4 text-[#C77B5A] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
