import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Hotel, 
  Bus, 
  Sparkles, 
  Luggage, 
  User, 
  Menu, 
  X, 
  ShieldCheck, 
  BriefcaseBusiness,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ServiceCategory, AppView } from '../../types';

interface HeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  activeTripsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, activeTripsCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);

  const navItems: { label: string; category: ServiceCategory; icon: React.ReactNode }[] = [
    { label: 'Journeys', category: 'tours', icon: <Compass className="w-3.5 h-3.5" /> },
    { label: 'Stays', category: 'hotels', icon: <Hotel className="w-3.5 h-3.5" /> },
    { label: 'Transits', category: 'bus', icon: <Bus className="w-3.5 h-3.5" /> },
    { label: 'Experiences', category: 'activities', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  const isCategoryActive = (category: ServiceCategory) => {
    return (currentView.type === 'search' && currentView.category === category) ||
      (currentView.type === 'tour-detail' && category === 'tours') ||
      (currentView.type === 'hotel-detail' && category === 'hotels') ||
      (currentView.type === 'bus-detail' && category === 'bus') ||
      (currentView.type === 'activity-detail' && category === 'activities');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#E8DFD0] transition-colors duration-200">
      {/* Editorial Top Notice */}
      <div className="bg-[#173D32] text-[#F7F5EF] text-[11px] py-1.5 px-4 tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A8B8A0] animate-pulse"></span>
            <span className="font-light text-[#F7F5EF]/90">
              Ghumio Journal • Travel, at your own pace across Nepal • Verified local Sherpa & community guides
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#F7F5EF]/80 text-[11px]">
            <button 
              onClick={() => onNavigate({ type: 'supplier-portal' })}
              className="hover:text-[#A8B8A0] transition-colors flex items-center gap-1 font-light"
            >
              <BriefcaseBusiness className="w-3 h-3" />
              Supplier Portal
            </button>
            <span className="text-[#A8B8A0]/40">|</span>
            <button 
              onClick={() => onNavigate({ type: 'admin-dashboard' })}
              className="hover:text-[#A8B8A0] transition-colors flex items-center gap-1 font-light"
            >
              <ShieldCheck className="w-3 h-3" />
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <button 
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173D32] rounded-xl p-1"
              aria-label="Ghumio Home"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-xs flex items-center justify-center bg-white border border-[#E8DFD0]">
                <img 
                  src="/assets/ghumio.jpg" 
                  alt="Ghumio Logo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-serif tracking-tight text-[#173D32] leading-none flex items-center font-bold">
                  Ghumio<span className="text-[#C77B5A] text-xl ml-0.5">•</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#7D8876] mt-0.5">
                  Nepal Sanctuary
                </span>
              </div>
            </button>

            {/* Desktop Editorial Category Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
              <button
                onClick={() => onNavigate({ type: 'home' })}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  currentView.type === 'home'
                    ? 'text-[#173D32] bg-[#E8DFD0]/60 font-semibold'
                    : 'text-[#252923]/70 hover:text-[#173D32] hover:bg-[#E8DFD0]/30'
                }`}
              >
                Journal
              </button>

              {navItems.map((item) => {
                const active = isCategoryActive(item.category);
                return (
                  <button
                    key={item.category}
                    onClick={() => onNavigate({ type: 'search', category: item.category })}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      active
                        ? 'text-[#173D32] bg-[#E8DFD0]/80 font-semibold shadow-2xs'
                        : 'text-[#252923]/70 hover:text-[#173D32] hover:bg-[#E8DFD0]/30'
                    }`}
                  >
                    <span className={active ? 'text-[#173D32]' : 'text-[#7D8876]'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            
            {/* My Trips Action */}
            <button
              onClick={() => onNavigate({ type: 'my-trips' })}
              className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                currentView.type === 'my-trips'
                  ? 'border-[#173D32] text-[#173D32] bg-[#E8DFD0]/50'
                  : 'border-[#E8DFD0] text-[#252923] hover:border-[#173D32] hover:bg-[#E8DFD0]/30'
              }`}
            >
              <Luggage className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span className="hidden sm:inline">My Trips</span>
              {activeTripsCount > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#C77B5A] rounded-full">
                  {activeTripsCount}
                </span>
              )}
            </button>

            {/* Account Profile Action */}
            <button
              onClick={() => onNavigate({ type: 'account-profile' })}
              className={`flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium border transition-all ${
                currentView.type === 'account-profile'
                  ? 'border-[#173D32] bg-[#173D32] text-[#F7F5EF]'
                  : 'border-[#E8DFD0] text-[#252923] hover:bg-[#E8DFD0]/30'
              }`}
              title="Customer Account"
            >
              <div className="w-5 h-5 rounded-full bg-[#173D32] text-[#F7F5EF] flex items-center justify-center text-[10px] font-medium">
                AS
              </div>
              <span className="hidden md:inline text-xs">Aarav S.</span>
            </button>

            {/* Portal Switch Dropdown */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#252923]/70 bg-transparent border border-[#E8DFD0] hover:text-[#173D32] hover:border-[#173D32]"
              >
                <Layers className="w-3 h-3 text-[#173D32]" />
                <span>Portals</span>
                <ChevronDown className="w-3 h-3 text-[#7D8876]" />
              </button>

              {portalDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-[#F7F5EF] rounded-2xl shadow-xl border border-[#E8DFD0] py-2 z-50 animate-in fade-in-50 zoom-in-95"
                  onMouseLeave={() => setPortalDropdownOpen(false)}
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#7D8876]">
                    Operator & Admin
                  </div>
                  <button
                    onClick={() => {
                      setPortalDropdownOpen(false);
                      onNavigate({ type: 'supplier-portal' });
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs text-[#252923] hover:bg-[#E8DFD0]/50 flex items-center gap-2.5 transition-colors"
                  >
                    <BriefcaseBusiness className="w-3.5 h-3.5 text-[#C77B5A]" />
                    <div>
                      <div className="font-semibold text-xs text-[#173D32]">Supplier Dashboard</div>
                      <div className="text-[10px] text-[#7D8876]">Tours, fleet & lodges</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setPortalDropdownOpen(false);
                      onNavigate({ type: 'admin-dashboard' });
                    }}
                    className="w-full text-left px-3.5 py-2 text-xs text-[#252923] hover:bg-[#E8DFD0]/50 flex items-center gap-2.5 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#173D32]" />
                    <div>
                      <div className="font-semibold text-xs text-[#173D32]">Platform Admin</div>
                      <div className="text-[10px] text-[#7D8876]">Moderation & oversight</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Editorial Primary CTA */}
            <button
              onClick={() => onNavigate({ type: 'search', category: 'tours' })}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-[#173D32] text-[#F7F5EF] hover:bg-[#C77B5A] transition-all shadow-xs"
            >
              <span>Explore journeys</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#173D32] hover:bg-[#E8DFD0]/40 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD0] bg-[#F7F5EF] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'home' });
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E8DFD0]/40 text-xs font-medium text-[#173D32]"
            >
              <Compass className="w-3.5 h-3.5 text-[#173D32]" />
              Journal Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'tours' });
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E8DFD0]/40 text-xs font-medium text-[#173D32]"
            >
              <Compass className="w-3.5 h-3.5 text-[#C77B5A]" />
              Journeys & Treks
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'hotels' });
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E8DFD0]/40 text-xs font-medium text-[#173D32]"
            >
              <Hotel className="w-3.5 h-3.5 text-[#173D32]" />
              Stays & Lodges
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'bus' });
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E8DFD0]/40 text-xs font-medium text-[#173D32]"
            >
              <Bus className="w-3.5 h-3.5 text-[#C77B5A]" />
              Transits (Buses)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'activities' });
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E8DFD0]/40 text-xs font-medium text-[#173D32]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#173D32]" />
              Experiences
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'my-trips' });
              }}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#E8DFD0]/60 text-xs font-medium text-[#173D32]"
            >
              <Luggage className="w-3.5 h-3.5 text-[#C77B5A]" />
              My Trips ({activeTripsCount})
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8DFD0] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'supplier-portal' });
              }}
              className="flex-1 py-2 px-3 text-xs font-medium text-center rounded-xl border border-[#E8DFD0] text-[#173D32] hover:bg-[#E8DFD0]/30"
            >
              Supplier Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'admin-dashboard' });
              }}
              className="flex-1 py-2 px-3 text-xs font-medium text-center rounded-xl border border-[#E8DFD0] text-[#173D32] hover:bg-[#E8DFD0]/30"
            >
              Platform Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
