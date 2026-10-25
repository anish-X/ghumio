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
  Layers
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
    { label: 'Tours', category: 'tours', icon: <Compass className="w-4 h-4" /> },
    { label: 'Hotels', category: 'hotels', icon: <Hotel className="w-4 h-4" /> },
    { label: 'Bus Tickets', category: 'bus', icon: <Bus className="w-4 h-4" /> },
    { label: 'Activities', category: 'activities', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const isCategoryActive = (category: ServiceCategory) => {
    return (currentView.type === 'search' && currentView.category === category) ||
      (currentView.type === 'tour-detail' && category === 'tours') ||
      (currentView.type === 'hotel-detail' && category === 'hotels') ||
      (currentView.type === 'bus-detail' && category === 'bus') ||
      (currentView.type === 'activity-detail' && category === 'activities');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8EAF0] transition-shadow duration-200">
      {/* Top Banner Notice */}
      <div className="bg-[#101D45] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#08C5C9] animate-pulse"></span>
            <span className="font-medium text-slate-200">
              Nepal Travel Season Active: Special Autumn & Spring Rates in NPR • 100% Local Operator Guarantee
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-xs">
            <button 
              onClick={() => onNavigate({ type: 'supplier-portal' })}
              className="hover:text-[#FFB91F] transition-colors flex items-center gap-1"
            >
              <BriefcaseBusiness className="w-3.5 h-3.5" />
              Supplier Portal
            </button>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => onNavigate({ type: 'admin-dashboard' })}
              className="hover:text-[#08C5C9] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => onNavigate({ type: 'home' })}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F45B18] rounded-xl p-1"
              aria-label="Ghumio Home"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm flex items-center justify-center bg-white border border-[#E8EAF0]">
                <img 
                  src="/assets/ghumio.jpg" 
                  alt="Ghumio Logo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    // Fallback to text icon if asset fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black tracking-tight text-[#101D45] leading-none flex items-center">
                  Ghum<span className="text-[#101D45]">i</span><span className="text-[#F45B18]">o</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8F9BB3] mt-0.5">
                  Nepal Travel Marketplace
                </span>
              </div>
            </button>

            {/* Desktop Category Nav */}
            <nav className="hidden md:flex items-center gap-1 ml-4" aria-label="Main Navigation">
              <button
                onClick={() => onNavigate({ type: 'home' })}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  currentView.type === 'home'
                    ? 'text-[#101D45] bg-[#F1F4F9]'
                    : 'text-[#57647E] hover:text-[#101D45] hover:bg-[#F7F8FA]'
                }`}
              >
                Discover
              </button>

              {navItems.map((item) => {
                const active = isCategoryActive(item.category);
                return (
                  <button
                    key={item.category}
                    onClick={() => onNavigate({ type: 'search', category: item.category })}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'text-[#1769F5] bg-[#EEF4FE]'
                        : 'text-[#57647E] hover:text-[#101D45] hover:bg-[#F7F8FA]'
                    }`}
                  >
                    <span className={active ? 'text-[#1769F5]' : 'text-[#8F9BB3]'}>
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
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all ${
                currentView.type === 'my-trips'
                  ? 'border-[#1769F5] text-[#1769F5] bg-[#EEF4FE]'
                  : 'border-[#E8EAF0] text-[#101D45] hover:border-[#D7DBE5] hover:bg-[#F7F8FA]'
              }`}
            >
              <Luggage className="w-4 h-4 text-[#F45B18]" />
              <span className="hidden sm:inline">My Trips</span>
              {activeTripsCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#F45B18] rounded-full">
                  {activeTripsCount}
                </span>
              )}
            </button>

            {/* Account Profile Action */}
            <button
              onClick={() => onNavigate({ type: 'account-profile' })}
              className={`flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl text-sm font-semibold border transition-all ${
                currentView.type === 'account-profile'
                  ? 'border-[#101D45] bg-[#101D45] text-white'
                  : 'border-[#E8EAF0] text-[#101D45] hover:bg-[#F7F8FA]'
              }`}
              title="Customer Account"
            >
              <div className="w-6 h-6 rounded-full bg-[#101D45] text-white flex items-center justify-center text-xs font-bold">
                AS
              </div>
              <span className="hidden md:inline font-medium">Aarav S.</span>
            </button>

            {/* Portal Switch Dropdown (Supplier / Admin) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#57647E] bg-[#F7F8FA] border border-[#E8EAF0] hover:text-[#101D45] hover:bg-[#F1F4F9]"
              >
                <Layers className="w-3.5 h-3.5 text-[#1769F5]" />
                <span>Portals</span>
                <ChevronDown className="w-3 h-3 text-[#8F9BB3]" />
              </button>

              {portalDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-dropdown border border-[#E8EAF0] py-2 z-50 animate-in fade-in-50 zoom-in-95"
                  onMouseLeave={() => setPortalDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8F9BB3]">
                    Switch Perspective
                  </div>
                  <button
                    onClick={() => {
                      setPortalDropdownOpen(false);
                      onNavigate({ type: 'supplier-portal' });
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm text-[#101D45] hover:bg-[#F7F8FA] flex items-center gap-2.5"
                  >
                    <BriefcaseBusiness className="w-4 h-4 text-[#F45B18]" />
                    <div>
                      <div className="font-semibold text-xs">Supplier Dashboard</div>
                      <div className="text-[11px] text-[#8F9BB3]">Tours & bus fleet operator</div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setPortalDropdownOpen(false);
                      onNavigate({ type: 'admin-dashboard' });
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm text-[#101D45] hover:bg-[#F7F8FA] flex items-center gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#08C5C9]" />
                    <div>
                      <div className="font-semibold text-xs">Platform Admin</div>
                      <div className="text-[11px] text-[#8F9BB3]">Moderation & platform stats</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#101D45] hover:bg-[#F7F8FA] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8EAF0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'home' });
              }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] text-sm font-semibold text-[#101D45]"
            >
              <Compass className="w-4 h-4 text-[#F45B18]" />
              Discover Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'tours' });
              }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] text-sm font-semibold text-[#101D45]"
            >
              <Compass className="w-4 h-4 text-[#1769F5]" />
              Tours & Treks
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'hotels' });
              }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] text-sm font-semibold text-[#101D45]"
            >
              <Hotel className="w-4 h-4 text-[#08C5C9]" />
              Hotels & Stays
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'bus' });
              }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] text-sm font-semibold text-[#101D45]"
            >
              <Bus className="w-4 h-4 text-[#FFB91F]" />
              Bus Tickets
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'search', category: 'activities' });
              }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F8FA] text-sm font-semibold text-[#101D45]"
            >
              <Sparkles className="w-4 h-4 text-[#F45B18]" />
              Activities
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'my-trips' });
              }}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#EEF4FE] text-sm font-semibold text-[#1769F5]"
            >
              <Luggage className="w-4 h-4 text-[#1769F5]" />
              My Trips ({activeTripsCount})
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8EAF0] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'supplier-portal' });
              }}
              className="flex-1 py-2 px-3 text-xs font-semibold text-center rounded-xl border border-[#E8EAF0] text-[#101D45]"
            >
              Supplier Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate({ type: 'admin-dashboard' });
              }}
              className="flex-1 py-2 px-3 text-xs font-semibold text-center rounded-xl border border-[#E8EAF0] text-[#101D45]"
            >
              Platform Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
