import React, { useState } from 'react';
import { 
  Compass, 
  Hotel, 
  Bus, 
  Sparkles, 
  Search, 
  MapPin, 
  Calendar, 
  ArrowRight,
  ChevronRight,
  Mountain,
  Compass as CompassIcon
} from 'lucide-react';
import { ServiceCategory, AppView } from '../../types';

interface HeroSearchProps {
  onSearch: (category: ServiceCategory, query?: string, destination?: string) => void;
  onNavigate: (view: AppView) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('tours');
  const [destination, setDestination] = useState('All Destinations');
  const [selectedSeason, setSelectedSeason] = useState('Autumn & Spring (Peak)');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const destQuery = destination === 'All Destinations' ? '' : destination;
    onSearch(activeTab, destQuery, destQuery);
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#173D32] text-[#F7F5EF]">
      
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/places/hero-himalaya.svg" 
          alt="Annapurna Range Himalayan Landscape" 
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-1000 scale-100 hover:scale-[1.02]"
        />
        {/* Editorial Subtle Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-[#173D32]/40 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
      </div>

      {/* Top Editorial Meta Bar inside Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="flex items-center justify-between text-xs tracking-[0.25em] text-[#A8B8A0] uppercase font-light border-b border-[#F7F5EF]/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C77B5A]"></span>
            <span>Nepal Editorial Archive</span>
            <span className="text-[#F7F5EF]/30 hidden sm:inline">•</span>
            <span className="text-[#F7F5EF]/80 hidden sm:inline font-mono">28°35'N, 83°49'E</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[#F7F5EF]/70 font-mono text-[11px]">
            <span>ALT. 4,130M</span>
            <span>ANNAPURNA BASIN</span>
            <span className="text-[#A8B8A0]">PEAK VISIBILITY 100%</span>
          </div>
        </div>
      </div>

      {/* Center Cinematic Editorial Statement */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 my-auto">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#F7F5EF]/10 backdrop-blur-md border border-[#F7F5EF]/20 text-[#A8B8A0] text-xs font-light mb-6">
            <Mountain className="w-3.5 h-3.5 text-[#C77B5A]" />
            <span className="tracking-widest uppercase text-[10px]">Travel, at your own pace</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F7F5EF] tracking-tight leading-[1.08] mb-6">
            Somewhere between the mountains <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E8DFD0]">and you.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F7F5EF]/80 font-light leading-relaxed max-w-xl mb-10">
            Find the places, journeys, and quiet moments that make travel unforgettable across the high ridges and sacred valleys of Nepal.
          </p>

          {/* Dual Editorial CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onSearch('tours')}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#F7F5EF] text-[#173D32] hover:bg-[#E8DFD0] transition-all font-medium text-sm tracking-wide shadow-lg group"
            >
              <span>Explore journeys</span>
              <ArrowRight className="w-4 h-4 text-[#C77B5A] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToDestinations}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-[#F7F5EF] transition-all font-light text-sm tracking-wide"
            >
              <span>Discover destinations</span>
              <ChevronRight className="w-4 h-4 text-[#A8B8A0]" />
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Discreet Quick-Finder Strip */}
      <div className="relative z-10 w-full bg-gradient-to-t from-[#173D32] via-[#173D32]/95 to-transparent pt-8 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F7F5EF]/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-[#E8DFD0] shadow-2xl text-[#252923]">
            
            {/* Category Selector Tabs */}
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E8DFD0]/80 overflow-x-auto no-scrollbar">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#7D8876] mr-2 hidden sm:inline">
                Mode:
              </span>
              
              <button
                type="button"
                onClick={() => setActiveTab('tours')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === 'tours'
                    ? 'bg-[#173D32] text-[#F7F5EF] font-medium shadow-xs'
                    : 'text-[#252923]/70 hover:text-[#173D32] hover:bg-[#E8DFD0]/40'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Journeys & Treks</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('hotels')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === 'hotels'
                    ? 'bg-[#173D32] text-[#F7F5EF] font-medium shadow-xs'
                    : 'text-[#252923]/70 hover:text-[#173D32] hover:bg-[#E8DFD0]/40'
                }`}
              >
                <Hotel className="w-3.5 h-3.5" />
                <span>Stays & Lodges</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('bus')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === 'bus'
                    ? 'bg-[#173D32] text-[#F7F5EF] font-medium shadow-xs'
                    : 'text-[#252923]/70 hover:text-[#173D32] hover:bg-[#E8DFD0]/40'
                }`}
              >
                <Bus className="w-3.5 h-3.5" />
                <span>Transits (Bus)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('activities')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all ${
                  activeTab === 'activities'
                    ? 'bg-[#173D32] text-[#F7F5EF] font-medium shadow-xs'
                    : 'text-[#252923]/70 hover:text-[#173D32] hover:bg-[#E8DFD0]/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Experiences</span>
              </button>
            </div>

            {/* Quick Filter Inputs */}
            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              
              {/* Destination selector */}
              <div className="sm:col-span-5 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white border border-[#E8DFD0]">
                <MapPin className="w-4 h-4 text-[#C77B5A] shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#7D8876]">
                    Where to
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent text-xs font-medium text-[#252923] focus:outline-none cursor-pointer"
                  >
                    <option value="All Destinations">All Nepal Regions</option>
                    <option value="Pokhara">Pokhara & Annapurna</option>
                    <option value="Mustang">Upper Mustang</option>
                    <option value="Ilam">Ilam Tea Slopes</option>
                    <option value="Rara Lake">Rara Alpine Lake</option>
                    <option value="Mardi Himal">Mardi Himal Ridge</option>
                    <option value="Bandipur">Bandipur Hilltop</option>
                    <option value="Kathmandu">Kathmandu Valley</option>
                    <option value="Everest">Everest & Khumbu</option>
                    <option value="Chitwan">Chitwan Safari</option>
                  </select>
                </div>
              </div>

              {/* Season / Timing selector */}
              <div className="sm:col-span-4 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white border border-[#E8DFD0]">
                <Calendar className="w-4 h-4 text-[#173D32] shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#7D8876]">
                    Season / Window
                  </label>
                  <select
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="w-full bg-transparent text-xs font-medium text-[#252923] focus:outline-none cursor-pointer"
                  >
                    <option value="Autumn & Spring (Peak)">Autumn & Spring (Peak Clear Skies)</option>
                    <option value="Winter Solitude">Winter (Quiet Trails & Snow Vistas)</option>
                    <option value="Monsoon Green">Monsoon (Lush Valleys & Rainshadow)</option>
                    <option value="Next 30 Days">Immediate (Next 30 Days Departure)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full h-full py-3 px-4 rounded-xl bg-[#173D32] text-[#F7F5EF] hover:bg-[#C77B5A] transition-colors flex items-center justify-center gap-2 text-xs font-medium tracking-wide shadow-sm"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search {activeTab === 'tours' ? 'Journeys' : activeTab === 'hotels' ? 'Stays' : activeTab === 'bus' ? 'Buses' : 'Adventures'}</span>
                </button>
              </div>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
};
