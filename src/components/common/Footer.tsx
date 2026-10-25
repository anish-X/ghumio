import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Award, Compass, Heart, ArrowUpRight } from 'lucide-react';
import { AppView, ServiceCategory } from '../../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#101D45] text-white pt-16 pb-12 border-t border-[#1A2A5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#1A2A5E]">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#F45B18]/20 flex items-center justify-center text-[#F45B18] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">100% Verified Local Operators</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Every trekking agency, licensed Sherpa guide, hotel and tourist bus fleet is pre-vetted.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#08C5C9]/20 flex items-center justify-center text-[#08C5C9] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Zero Hidden Fees in NPR</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Direct operator pricing with transparent government taxes and conservation permits included.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#FFB91F]/20 flex items-center justify-center text-[#FFB91F] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white">Kathmandu & Pokhara Support</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Real-time assistance via WhatsApp, phone, and airport desks across Nepal's key travel hubs.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12 border-b border-[#1A2A5E]">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/20">
                <img src="/assets/ghumio.jpg" alt="Ghumio" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Ghum<span className="text-white">i</span><span className="text-[#F45B18]">o</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Nepal's dedicated digital travel marketplace. Bridging travelers with authentic Himalayan adventures, lakeside serenity, tourist buses, and mountain boutique stays.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                <span>Thamel Marg, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#FFB91F] mb-4">
              Explore Nepal
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Annapurna' })} 
                  className="hover:text-white transition-colors"
                >
                  Annapurna Circuit & Sanctuary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Everest' })} 
                  className="hover:text-white transition-colors"
                >
                  Everest Base Camp Treks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'bus' })} 
                  className="hover:text-white transition-colors"
                >
                  Kathmandu ⇄ Pokhara VIP Sofa Buses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'hotels', destination: 'Pokhara' })} 
                  className="hover:text-white transition-colors"
                >
                  Fewa Lakeside Luxury Resorts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'activities', destination: 'Pokhara' })} 
                  className="hover:text-white transition-colors"
                >
                  Sarangkot Tandem Paragliding
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Portals & Account */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#08C5C9] mb-4">
              Marketplace Portals
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'my-trips' })} 
                  className="hover:text-white transition-colors"
                >
                  My Booked Trips
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'account-profile' })} 
                  className="hover:text-white transition-colors"
                >
                  Traveler Profile & Preferences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'supplier-portal' })} 
                  className="hover:text-[#F45B18] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>Supplier Business Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'admin-dashboard' })} 
                  className="hover:text-[#08C5C9] transition-colors flex items-center gap-1 font-medium"
                >
                  <span>Ghumio Admin Console</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Payments */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Accepted Mock Payments
            </h5>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-2.5 py-1 rounded bg-[#E6FAFB] text-[#08C5C9] border border-[#08C5C9]/30">Fonepay QR</span>
                <span className="px-2.5 py-1 rounded bg-[#E8F8EE] text-[#15803D] border border-[#15803D]/30">eSewa</span>
                <span className="px-2.5 py-1 rounded bg-[#F4EEFB] text-[#7E22CE] border border-[#7E22CE]/30">Khalti</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">Visa / MC</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-2">
                All pricing displayed in Nepalese Rupees (NPR). Instant confirmation with local merchant voucher.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Prototype Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Ghumio Technologies Nepal. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 bg-[#1A2A5E] px-3.5 py-1.5 rounded-full text-[11px] text-[#FFB91F]">
            <span className="w-2 h-2 rounded-full bg-[#FFB91F]"></span>
            <span>Frontend UI Prototype Demonstration • Simulated Transactions Only</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
