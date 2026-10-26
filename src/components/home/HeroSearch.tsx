import React, { useState } from 'react';
import { 
  Compass, 
  Hotel, 
  Bus, 
  Sparkles, 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Clock
} from 'lucide-react';
import { ServiceCategory, AppView } from '../../types';

interface HeroSearchProps {
  onSearch: (category: ServiceCategory, query?: string, destination?: string) => void;
  onNavigate: (view: AppView) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('tours');

  // Tour search state
  const [tourDestination, setTourDestination] = useState('All Nepal');
  const [tourMonth, setTourMonth] = useState('Autumn & Spring (Oct - Apr)');
  const [tourTravelers, setTourTravelers] = useState('2 Trekkers');

  // Hotel search state
  const [hotelDestination, setHotelDestination] = useState('Pokhara');
  const [checkInDate, setCheckInDate] = useState('2026-11-10');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-14');
  const [hotelGuests, setHotelGuests] = useState('2 Adults, 1 Room');

  // Bus search state
  const [busFrom, setBusFrom] = useState('Kathmandu (Sorhakhutte)');
  const [busTo, setBusTo] = useState('Pokhara (Tourist Bus Park)');
  const [busDate, setBusDate] = useState('2026-11-04');
  const [busPassengers, setBusPassengers] = useState('2 Seats');

  // Activity search state
  const [activityLocation, setActivityLocation] = useState('Pokhara');
  const [activityCategory, setActivityCategory] = useState('All Activities');
  const [activityDate, setActivityDate] = useState('2026-11-05');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'tours') {
      const dest = tourDestination === 'All Nepal' ? '' : tourDestination;
      onSearch('tours', dest, dest);
    } else if (activeTab === 'hotels') {
      onSearch('hotels', hotelDestination, hotelDestination);
    } else if (activeTab === 'bus') {
      onSearch('bus', `${busFrom} to ${busTo}`, busTo.includes('Pokhara') ? 'Pokhara' : 'Kathmandu');
    } else {
      onSearch('activities', activityLocation, activityLocation);
    }
  };

  const tabs: { id: ServiceCategory; label: string; icon: React.ReactNode; subtitle: string; color: string }[] = [
    { id: 'tours', label: 'Tours & Treks', icon: <Compass className="w-4 h-4" />, subtitle: 'Himalayan expeditions', color: '#F45B18' },
    { id: 'hotels', label: 'Hotels & Stays', icon: <Hotel className="w-4 h-4" />, subtitle: 'Lakeside & eco lodges', color: '#08C5C9' },
    { id: 'bus', label: 'Bus Tickets', icon: <Bus className="w-4 h-4" />, subtitle: 'VIP 2x1 sofa seating', color: '#1769F5' },
    { id: 'activities', label: 'Activities', icon: <Sparkles className="w-4 h-4" />, subtitle: 'Paragliding & rafting', color: '#FFB91F' },
  ];

  const popularPills = [
    { label: 'Annapurna Circuit', category: 'tours', query: 'Annapurna' },
    { label: 'Kathmandu ⇄ Pokhara Bus', category: 'bus', query: 'Kathmandu to Pokhara' },
    { label: 'Pokhara Lakeside Stays', category: 'hotels', query: 'Pokhara' },
    { label: 'Upper Mustang', category: 'tours', query: 'Mustang' },
    { label: 'Mardi Himal Trek', category: 'tours', query: 'Mardi Himal' },
    { label: 'Sarangkot Paragliding', category: 'activities', query: 'Pokhara' },
  ];

  return (
    <div className="relative pt-8 pb-16 lg:pt-14 lg:pb-22 overflow-hidden bg-[#FFFCF7]">
      
      {/* Background Subtle Gradient & Himalayan Backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB91F]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#08C5C9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F45B18]/10 rounded-full blur-3xl"></div>
        
        {/* Subtle Himalayan Line Illustration */}
        <div className="absolute bottom-0 inset-x-0 h-48 opacity-[0.04] bg-[radial-gradient(#101D45_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EAF0] shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F45B18]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#101D45]">
              Nepal's Travel Marketplace
            </span>
            <span className="text-[11px] font-medium text-[#8F9BB3] hidden sm:inline">
              • Direct Local Operators & Fixed NPR Rates
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#101D45] tracking-tight leading-[1.12]">
            Discover Nepal.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F45B18] via-[#FFB91F] to-[#1769F5]">
              Himalayas, Stays & Journeys
            </span>
            <span className="text-[#101D45]"> in one place.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#57647E] max-w-2xl font-normal leading-relaxed">
            Book verified Himalayan circuit treks, lakeside boutique villas, daily tourist VIP sofa buses, and high-altitude adventures with transparent local NPR pricing.
          </p>

          {/* Quick Reassurance Trust Pills */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-[#101D45]">
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8EAF0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
              100% Licensed Sherpa Guides
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8EAF0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1769F5]" />
              Real-time Bus Seat Selection
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E8EAF0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#08C5C9]" />
              Zero Hidden Checkout Fees
            </span>
          </div>

        </div>

        {/* Multi-Service Search Hub Card */}
        <div className="bg-white rounded-3xl shadow-card border border-[#E8EAF0] overflow-hidden transition-all duration-300">
          
          {/* Category Tabs Bar */}
          <div className="flex border-b border-[#E8EAF0] bg-[#F7F8FA] overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
                    isActive
                      ? 'border-[#F45B18] text-[#101D45] bg-white shadow-xs'
                      : 'border-transparent text-[#57647E] hover:text-[#101D45] hover:bg-slate-100/60'
                  }`}
                >
                  <span 
                    className="p-1.5 rounded-xl transition-colors"
                    style={{
                      backgroundColor: isActive ? tab.color : '#E8EAF0',
                      color: isActive ? '#FFFFFF' : '#57647E'
                    }}
                  >
                    {tab.icon}
                  </span>
                  <div className="text-left">
                    <div className="leading-tight">{tab.label}</div>
                    <div className="text-[10px] font-normal text-[#8F9BB3]">{tab.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Search Inputs Form */}
          <form onSubmit={handleSearchSubmit} className="p-4 sm:p-6 lg:p-7">
            
            {/* Category: Tours */}
            {activeTab === 'tours' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#F45B18] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Himalayan Destination / Region
                  </label>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F45B18] shrink-0" />
                    <select
                      value={tourDestination}
                      onChange={(e) => setTourDestination(e.target.value)}
                      className="w-full bg-transparent font-bold text-sm text-[#101D45] focus:outline-none cursor-pointer"
                    >
                      <option value="All Nepal">All Nepal (Annapurna, Everest, Mustang, Rara)</option>
                      <option value="Annapurna">Annapurna Sanctuary & Circuit</option>
                      <option value="Everest">Everest & Khumbu Base Camp</option>
                      <option value="Mustang">Upper Mustang Forbidden Kingdom</option>
                      <option value="Pokhara">Pokhara & Mardi Himal Ridge</option>
                      <option value="Rara Lake">Rara Lake Alpine Wilderness</option>
                      <option value="Ilam">Ilam Tea Slopes & East</option>
                      <option value="Kathmandu">Kathmandu Living Heritage</option>
                      <option value="Chitwan">Chitwan Safari & Wildlife</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-4 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#F45B18] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Trek Season / Window
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1769F5] shrink-0" />
                    <select
                      value={tourMonth}
                      onChange={(e) => setTourMonth(e.target.value)}
                      className="w-full bg-transparent font-bold text-sm text-[#101D45] focus:outline-none cursor-pointer"
                    >
                      <option value="Autumn & Spring (Oct - Apr)">Autumn & Spring (Clear Mountain Skies)</option>
                      <option value="Winter Solitude (Dec - Feb)">Winter Solitude (Quiet Trails & Snow Vistas)</option>
                      <option value="Monsoon Green (Jun - Aug)">Rainshadow Summer (Mustang & Dolpo)</option>
                      <option value="Immediate 30 Days">Immediate (Next 30 Days Departure)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="w-full h-full py-4 px-6 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Treks</span>
                  </button>
                </div>
              </div>
            )}

            {/* Category: Hotels */}
            {activeTab === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#08C5C9] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    City / Lake / Valley
                  </label>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#08C5C9] shrink-0" />
                    <select
                      value={hotelDestination}
                      onChange={(e) => setHotelDestination(e.target.value)}
                      className="w-full bg-transparent font-bold text-sm text-[#101D45] focus:outline-none cursor-pointer"
                    >
                      <option value="Pokhara">Pokhara (Fewa Lakeside & Sarangkot)</option>
                      <option value="Kathmandu">Kathmandu (Thamel & Boudhanath)</option>
                      <option value="Nagarkot">Nagarkot (Himalayan Sunrise Ridge)</option>
                      <option value="Chitwan">Chitwan (Sauraha Riverbank)</option>
                      <option value="Bandipur">Bandipur (Preserved Newari Hilltop)</option>
                      <option value="Dhulikhel">Dhulikhel (Panoramic Mountain View)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-5 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#08C5C9] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Dates (Check-in ⇄ Check-out)
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1769F5] shrink-0" />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="bg-transparent font-bold text-xs text-[#101D45] focus:outline-none"
                    />
                    <span className="text-[#8F9BB3] font-bold">⇄</span>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="bg-transparent font-bold text-xs text-[#101D45] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="w-full h-full py-4 px-6 rounded-2xl bg-[#101D45] hover:bg-[#1A2A5E] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4 text-[#08C5C9]" />
                    <span>Search Stays</span>
                  </button>
                </div>
              </div>
            )}

            {/* Category: Bus */}
            {activeTab === 'bus' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#1769F5] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Route Departure ⇄ Arrival
                  </label>
                  <div className="flex items-center gap-2">
                    <Bus className="w-4 h-4 text-[#1769F5] shrink-0" />
                    <select
                      value={`${busFrom} to ${busTo}`}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.includes('Pokhara')) {
                          setBusFrom('Kathmandu (Sorhakhutte)');
                          setBusTo('Pokhara (Tourist Bus Park)');
                        } else if (val.includes('Chitwan')) {
                          setBusFrom('Kathmandu (Sorhakhutte)');
                          setBusTo('Chitwan (Sauraha)');
                        } else {
                          setBusFrom('Pokhara (Tourist Bus Park)');
                          setBusTo('Kathmandu (Sorhakhutte)');
                        }
                      }}
                      className="w-full bg-transparent font-bold text-sm text-[#101D45] focus:outline-none cursor-pointer"
                    >
                      <option value="Kathmandu to Pokhara">Kathmandu ⇄ Pokhara (Sorhakhutte)</option>
                      <option value="Pokhara to Kathmandu">Pokhara ⇄ Kathmandu (Lakeside)</option>
                      <option value="Kathmandu to Chitwan">Kathmandu ⇄ Chitwan (Sauraha)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-5 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#1769F5] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Travel Date & Seat Class
                  </label>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1769F5] shrink-0" />
                      <input
                        type="date"
                        value={busDate}
                        onChange={(e) => setBusDate(e.target.value)}
                        className="bg-transparent font-bold text-xs text-[#101D45] focus:outline-none"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#1769F5] bg-[#EEF4FE] px-2.5 py-1 rounded-full">
                      VIP 2x1 Sofa Seater
                    </span>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="w-full h-full py-4 px-6 rounded-2xl bg-[#1769F5] hover:bg-[#0E56D1] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Buses</span>
                  </button>
                </div>
              </div>
            )}

            {/* Category: Activities */}
            {activeTab === 'activities' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-5 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#FFB91F] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Activity Location
                  </label>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FFB91F] shrink-0" />
                    <select
                      value={activityLocation}
                      onChange={(e) => setActivityLocation(e.target.value)}
                      className="w-full bg-transparent font-bold text-sm text-[#101D45] focus:outline-none cursor-pointer"
                    >
                      <option value="Pokhara">Pokhara (Paragliding, Ultralight, Zipflyer)</option>
                      <option value="The Cliff Kusma">The Cliff Kusma (World 2nd Highest Bungee)</option>
                      <option value="Trishuli River">Trishuli River (Whitewater Rafting)</option>
                      <option value="Chitwan">Chitwan (Jeep Safari & Canoe)</option>
                      <option value="Kathmandu">Kathmandu (Everest Heli Sightseeing)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-4 p-3 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] hover:border-[#FFB91F] transition-colors">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Date & Slots
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1769F5] shrink-0" />
                    <input
                      type="date"
                      value={activityDate}
                      onChange={(e) => setActivityDate(e.target.value)}
                      className="w-full bg-transparent font-bold text-xs text-[#101D45] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <button
                    type="submit"
                    className="w-full h-full py-4 px-6 rounded-2xl bg-[#101D45] hover:bg-[#1A2A5E] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Search className="w-4 h-4 text-[#FFB91F]" />
                    <span>Search Activities</span>
                  </button>
                </div>
              </div>
            )}

          </form>

        </div>

        {/* Popular Trending Quick Tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#8F9BB3] flex items-center gap-1.5 mr-1">
            <TrendingUp className="w-3.5 h-3.5 text-[#F45B18]" />
            Trending across Nepal:
          </span>
          {popularPills.map((pill) => (
            <button
              key={pill.label}
              type="button"
              onClick={() => onSearch(pill.category as ServiceCategory, pill.query, pill.query)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-[#EEF4FE] text-[#57647E] hover:text-[#1769F5] border border-[#E8EAF0] hover:border-[#1769F5]/40 transition-all shadow-2xs"
            >
              {pill.label}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
};
