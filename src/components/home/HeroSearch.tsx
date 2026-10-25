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
  TrendingUp,
  ShieldCheck,
  CheckCircle2
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
  const [tourMonth, setTourMonth] = useState('Autumn (Oct - Nov)');
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
      onSearch('tours', tourDestination === 'All Nepal' ? '' : tourDestination, tourDestination === 'All Nepal' ? '' : tourDestination);
    } else if (activeTab === 'hotels') {
      onSearch('hotels', hotelDestination, hotelDestination);
    } else if (activeTab === 'bus') {
      onSearch('bus', `${busFrom} to ${busTo}`, busTo.includes('Pokhara') ? 'Pokhara' : 'Kathmandu');
    } else {
      onSearch('activities', activityLocation, activityLocation);
    }
  };

  const tabs: { id: ServiceCategory; label: string; icon: React.ReactNode; subtitle: string }[] = [
    { id: 'tours', label: 'Tours & Treks', icon: <Compass className="w-4 h-4" />, subtitle: 'Himalayan expeditions' },
    { id: 'hotels', label: 'Hotels & Stays', icon: <Hotel className="w-4 h-4" />, subtitle: 'Lakeside & heritage' },
    { id: 'bus', label: 'Bus Tickets', icon: <Bus className="w-4 h-4" />, subtitle: 'Tourist VIP Sofas' },
    { id: 'activities', label: 'Activities', icon: <Sparkles className="w-4 h-4" />, subtitle: 'Paragliding & rafting' },
  ];

  return (
    <div className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      
      {/* Background Decorative Gradient & Geometry */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB91F]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#08C5C9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F45B18]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EAF0] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F45B18]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#101D45]">
              Nepal's Dedicated Travel Hub
            </span>
            <span className="text-[11px] font-medium text-[#8F9BB3] hidden sm:inline">
              • Verified Sherpa Guides & Direct Tourist Buses
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

        </div>

        {/* Search Panel Card */}
        <div className="bg-white rounded-3xl shadow-card border border-[#E8EAF0] overflow-hidden transition-all duration-300">
          
          {/* Category Tabs */}
          <div className="flex border-b border-[#E8EAF0] bg-[#F7F8FA] overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-4 text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
                    isActive
                      ? 'border-[#F45B18] text-[#101D45] bg-white shadow-sm'
                      : 'border-transparent text-[#57647E] hover:text-[#101D45] hover:bg-slate-100/60'
                  }`}
                >
                  <span className={`p-1.5 rounded-lg ${isActive ? 'bg-[#F45B18] text-white' : 'bg-slate-200/60 text-[#57647E]'}`}>
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-center">
                
                <div className="md:col-span-4 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] focus-within:border-[#F45B18] focus-within:ring-2 focus-within:ring-[#F45B18]/15 bg-[#FDFDFE] transition-all">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Destination / Mountain Region
                  </label>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#F45B18] shrink-0" />
                    <select
                      value={tourDestination}
                      onChange={(e) => setTourDestination(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="All Nepal">All Nepal (Annapurna, Everest, Langtang)</option>
                      <option value="Annapurna">Annapurna Sanctuary & Circuit</option>
                      <option value="Everest">Everest & Khumbu Base Camp</option>
                      <option value="Pokhara">Pokhara & Mardi Himal</option>
                      <option value="Kathmandu">Kathmandu Valley Cultural</option>
                      <option value="Mustang">Upper Mustang Hidden Kingdom</option>
                      <option value="Chitwan">Chitwan National Park Safari</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] focus-within:border-[#F45B18] focus-within:ring-2 focus-within:ring-[#F45B18]/15 bg-[#FDFDFE] transition-all">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Travel Window
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-[#1769F5] shrink-0" />
                    <select
                      value={tourMonth}
                      onChange={(e) => setTourMonth(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="Autumn (Oct - Nov)">Autumn Peak (Oct - Nov 2026)</option>
                      <option value="Spring (March - May)">Spring Rhododendron (Mar - May)</option>
                      <option value="Winter (Dec - Feb)">Winter Clear Skies (Dec - Feb)</option>
                      <option value="Anytime">Anytime / Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] focus-within:border-[#F45B18] focus-within:ring-2 focus-within:ring-[#F45B18]/15 bg-[#FDFDFE] transition-all">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Group Size
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-[#08C5C9] shrink-0" />
                    <select
                      value={tourTravelers}
                      onChange={(e) => setTourTravelers(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="1 Solo Trekker">1 Solo Trekker</option>
                      <option value="2 Trekkers">2 Trekkers (Couple / Friends)</option>
                      <option value="3-5 Trekkers">3-5 Trekkers (Small Group)</option>
                      <option value="6+ Trekkers">6+ Trekkers (Private Group)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full h-[58px] bg-[#F45B18] hover:bg-[#DF4810] active:scale-[0.98] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>

              </div>
            )}

            {/* Category: Hotels */}
            {activeTab === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-center">
                
                <div className="md:col-span-4 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Destination / City
                  </label>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#F45B18] shrink-0" />
                    <select
                      value={hotelDestination}
                      onChange={(e) => setHotelDestination(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="Pokhara">Pokhara (Lakeside & Sarangkot)</option>
                      <option value="Kathmandu">Kathmandu (Thamel & Heritage)</option>
                      <option value="Chitwan">Chitwan (Meghauli & Sauraha)</option>
                      <option value="Bandipur">Bandipur Hilltop Town</option>
                      <option value="Everest">Everest / Namche Lodges</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Check-in Date
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-[#1769F5] shrink-0" />
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Rooms & Guests
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-[#08C5C9] shrink-0" />
                    <select
                      value={hotelGuests}
                      onChange={(e) => setHotelGuests(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="1 Adult, 1 Room">1 Adult, 1 Room</option>
                      <option value="2 Adults, 1 Room">2 Adults, 1 Room</option>
                      <option value="2 Adults, 2 Children, 1 Family Suite">2 Adults, 2 Children</option>
                      <option value="4 Adults, 2 Rooms">4 Adults, 2 Rooms</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full h-[58px] bg-[#F45B18] hover:bg-[#DF4810] active:scale-[0.98] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Search className="w-5 h-5" />
                    <span>Find Stays</span>
                  </button>
                </div>

              </div>
            )}

            {/* Category: Bus Tickets */}
            {activeTab === 'bus' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-center">
                
                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Departure From
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Bus className="w-5 h-5 text-[#FFB91F] shrink-0" />
                    <select
                      value={busFrom}
                      onChange={(e) => setBusFrom(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="Kathmandu (Sorhakhutte)">Kathmandu (Sorhakhutte Stand)</option>
                      <option value="Pokhara (Tourist Bus Park)">Pokhara (Tourist Bus Park)</option>
                      <option value="Chitwan (Sauraha)">Chitwan (Sauraha Park)</option>
                      <option value="Lumbini (Buddha Chowk)">Lumbini (Buddha Chowk)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Destination To
                  </label>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#F45B18] shrink-0" />
                    <select
                      value={busTo}
                      onChange={(e) => setBusTo(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="Pokhara (Tourist Bus Park)">Pokhara (Tourist Bus Park)</option>
                      <option value="Kathmandu (Sorhakhutte)">Kathmandu (Sorhakhutte Stand)</option>
                      <option value="Chitwan (Sauraha)">Chitwan (Sauraha Park)</option>
                      <option value="Lumbini (Buddha Chowk)">Lumbini (Buddha Chowk)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Travel Date
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1769F5] shrink-0" />
                    <input
                      type="date"
                      value={busDate}
                      onChange={(e) => setBusDate(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-xs focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Passengers
                  </label>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#08C5C9] shrink-0" />
                    <select
                      value={busPassengers}
                      onChange={(e) => setBusPassengers(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-xs focus:outline-none cursor-pointer"
                    >
                      <option value="1 Seat">1 Seat</option>
                      <option value="2 Seats">2 Seats</option>
                      <option value="3 Seats">3 Seats</option>
                      <option value="4+ Seats">4+ Seats</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full h-[58px] bg-[#F45B18] hover:bg-[#DF4810] active:scale-[0.98] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Search className="w-5 h-5" />
                    <span>Find Buses</span>
                  </button>
                </div>

              </div>
            )}

            {/* Category: Activities */}
            {activeTab === 'activities' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-center">
                
                <div className="md:col-span-4 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Location in Nepal
                  </label>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#F45B18] shrink-0" />
                    <select
                      value={activityLocation}
                      onChange={(e) => setActivityLocation(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="Pokhara">Pokhara (Paragliding, Ultralight, Zipflyer)</option>
                      <option value="Kathmandu">Kathmandu (Scenic Flight, Rafting, Heritage)</option>
                      <option value="Chitwan">Chitwan (Jungle Safari & Canoeing)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Activity Type
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-[#FFB91F] shrink-0" />
                    <select
                      value={activityCategory}
                      onChange={(e) => setActivityCategory(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    >
                      <option value="All Activities">All Adventure & Cultural</option>
                      <option value="Paragliding">Tandem Paragliding</option>
                      <option value="Bungee & Canyon">Bungee & Giant Swing</option>
                      <option value="White Water Rafting">White Water Rafting</option>
                      <option value="Helicopter Tour">Everest Sightseeing Flight</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3 p-3.5 rounded-2xl border border-[#E8EAF0] hover:border-[#D7DBE5] bg-[#FDFDFE]">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Activity Date
                  </label>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-[#1769F5] shrink-0" />
                    <input
                      type="date"
                      value={activityDate}
                      onChange={(e) => setActivityDate(e.target.value)}
                      className="w-full bg-transparent text-[#101D45] font-semibold text-sm focus:outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full h-[58px] bg-[#F45B18] hover:bg-[#DF4810] active:scale-[0.98] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>

              </div>
            )}

            {/* Quick Trending Suggestions Bar */}
            <div className="mt-4 pt-4 border-t border-[#E8EAF0] flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-[#8F9BB3] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#F45B18]" />
                Trending in Nepal:
              </span>
              
              <button
                type="button"
                onClick={() => onNavigate({ type: 'bus-detail', id: 'bus-ktm-pkr-sofa-jagadamba' })}
                className="px-3 py-1 rounded-full bg-[#F7F8FA] hover:bg-[#EEF4FE] text-[#101D45] hover:text-[#1769F5] border border-[#E8EAF0] transition-colors font-medium"
              >
                🚌 Kathmandu ⇄ Pokhara VIP Sofa Bus (NPR 1,850)
              </button>

              <button
                type="button"
                onClick={() => onNavigate({ type: 'tour-detail', id: 'tour-annapurna-circuit' })}
                className="px-3 py-1 rounded-full bg-[#F7F8FA] hover:bg-[#FFF2EB] text-[#101D45] hover:text-[#F45B18] border border-[#E8EAF0] transition-colors font-medium"
              >
                🏔️ Annapurna Circuit 14-Day
              </button>

              <button
                type="button"
                onClick={() => onNavigate({ type: 'activity-detail', id: 'act-paragliding-pokhara' })}
                className="px-3 py-1 rounded-full bg-[#F7F8FA] hover:bg-[#E6FAFB] text-[#101D45] hover:text-[#08C5C9] border border-[#E8EAF0] transition-colors font-medium"
              >
                🪂 Sarangkot Paragliding (GoPro HD)
              </button>

              <button
                type="button"
                onClick={() => onNavigate({ type: 'hotel-detail', id: 'hotel-pavilions-pokhara' })}
                className="px-3 py-1 rounded-full bg-[#F7F8FA] hover:bg-[#FFF9EB] text-[#101D45] hover:text-[#B7791F] border border-[#E8EAF0] transition-colors font-medium"
              >
                🏡 The Pavilions Fewa Lake Villa
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};
