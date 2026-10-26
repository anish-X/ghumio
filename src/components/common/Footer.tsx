import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Award, Compass, Heart, ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { AppView, ServiceCategory } from '../../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#101D45] text-white pt-16 pb-12 border-t border-[#1A2A5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Travel Dispatch Bar */}
        <div className="pb-12 mb-12 border-b border-[#1A2A5E] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFB91F] block mb-2">
              The Himalayan Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Quiet trail notes, seasonal pass reports & secret escapes.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg font-normal">
              Delivered once a month with zero spam. Written directly by certified local Sherpa guides and community hosts.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-white/10 border border-[#08C5C9]/40 text-[#08C5C9] text-xs font-semibold">
                <Check className="w-4 h-4 text-[#FFB91F]" />
                <span>You are subscribed to the Dispatch. Welcome to Ghumio.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your personal email..."
                  required
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#F45B18] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-xs tracking-wide flex items-center gap-1.5 shrink-0 shadow-sm transition-all"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A2A5E]">
          
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/20">
                <img src="/assets/ghumio.jpg" alt="Ghumio" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Ghum<span className="text-white">i</span><span className="text-[#F45B18]">o</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              Nepal's dedicated digital travel marketplace. Bridging travelers with authentic Himalayan adventures, lakeside serenity, tourist buses, and mountain boutique stays.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
              <span>Thamel Marg, Kathmandu • Lakeside, Pokhara</span>
            </div>
          </div>

          {/* Curated Paths */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#FFB91F] mb-4">
              Curated Treks & Tours
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
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
                  Everest Base Camp & Heli Return
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Mustang' })} 
                  className="hover:text-white transition-colors"
                >
                  Upper Mustang Walled Lo Manthang
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Mardi Himal' })} 
                  className="hover:text-white transition-colors"
                >
                  Mardi Himal Scenic Ridge
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Rara Lake' })} 
                  className="hover:text-white transition-colors"
                >
                  Rara Lake Far-West Expedition
                </button>
              </li>
            </ul>
          </div>

          {/* Stays & Transits */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#08C5C9] mb-4">
              Stays & Transits
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
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
                  onClick={() => onNavigate({ type: 'search', category: 'hotels', destination: 'Bandipur' })} 
                  className="hover:text-white transition-colors"
                >
                  Bandipur Heritage Boutique
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'bus' })} 
                  className="hover:text-white transition-colors"
                >
                  Kathmandu ⇄ Pokhara VIP Bus
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'activities' })} 
                  className="hover:text-white transition-colors"
                >
                  Tandem Paragliding & Rafting
                </button>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1769F5] mb-4">
              Marketplace Portals
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
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
                  onClick={() => onNavigate({ type: 'supplier-portal' })} 
                  className="hover:text-white transition-colors"
                >
                  Supplier Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'admin-dashboard' })} 
                  className="hover:text-white transition-colors"
                >
                  Platform Admin
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'account-profile' })} 
                  className="hover:text-white transition-colors"
                >
                  Customer Account
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Prototype Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-3">
            <span>© 2026 Ghumio Technologies Nepal. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#FFB91F]">Frontend UI/UX Prototype</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Local Currency: NPR (रू)</span>
            <span>100% Local Guide Standard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
