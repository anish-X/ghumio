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
    <footer className="bg-[#173D32] text-[#F7F5EF] pt-20 pb-12 border-t border-[#173D32]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Inspiration Prompt */}
        <div className="pb-16 mb-16 border-b border-[#F7F5EF]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A8B8A0] block mb-2">
              The Himalayan Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F7F5EF] tracking-tight">
              Quiet field notes, seasonal trail reports, and unlisted mountain escapes.
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-light text-[#F7F5EF]/70 max-w-lg">
              Delivered once a month with zero spam. Written directly by local Sherpa naturalists and conservationists.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-[#F7F5EF]/10 border border-[#A8B8A0]/40 text-[#A8B8A0] text-xs">
                <Check className="w-4 h-4 text-[#C77B5A]" />
                <span>You are subscribed to the Dispatch. Welcome to the sanctuary.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your personal email..."
                  required
                  className="flex-1 px-4 py-3 rounded-full bg-[#F7F5EF]/10 border border-[#F7F5EF]/20 text-[#F7F5EF] placeholder-[#F7F5EF]/40 text-xs focus:outline-none focus:border-[#A8B8A0] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-full bg-[#F7F5EF] text-[#173D32] hover:bg-[#C77B5A] hover:text-white transition-all text-xs font-medium tracking-wide flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#F7F5EF]/15">
          
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#F7F5EF]">
                Ghumio<span className="text-[#C77B5A] text-xl ml-0.5">•</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#A8B8A0] px-2 py-0.5 rounded-full border border-[#A8B8A0]/30">
                Nepal
              </span>
            </div>
            <p className="text-xs sm:text-sm font-light text-[#F7F5EF]/75 leading-relaxed max-w-sm">
              A Nepal-first travel publication and platform. Bringing travelers, local Sherpa teams, eco-lodges, and mountain routes into respectful harmony.
            </p>
            <div className="pt-2 text-xs font-mono text-[#A8B8A0] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Thamel Marg, Kathmandu • Lakeside, Pokhara</span>
            </div>
          </div>

          {/* Journeys */}
          <div className="md:col-span-3">
            <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A8B8A0] mb-4">
              Curated Paths
            </h5>
            <ul className="space-y-2.5 text-xs font-light text-[#F7F5EF]/80">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Annapurna' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Annapurna Circuit & Sanctuary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Everest' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Everest Base Camp & Kala Patthar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Mustang' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Upper Mustang Walled Lo Manthang
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Mardi Himal' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Mardi Himal Silent Ridge
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'tours', destination: 'Rara Lake' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Rara Lake Alpine Wilderness
                </button>
              </li>
            </ul>
          </div>

          {/* Stays & Transits */}
          <div className="md:col-span-2">
            <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A8B8A0] mb-4">
              Stays & Transits
            </h5>
            <ul className="space-y-2.5 text-xs font-light text-[#F7F5EF]/80">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'hotels', destination: 'Pokhara' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Fewa Lakeside Eco Lodges
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'hotels', destination: 'Bandipur' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Bandipur Heritage Haveli
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'bus' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  VIP Sofa Seater Tourist Bus
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'search', category: 'activities' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Paragliding & Wilderness Rafting
                </button>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div className="md:col-span-2">
            <h5 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A8B8A0] mb-4">
              Portals
            </h5>
            <ul className="space-y-2.5 text-xs font-light text-[#F7F5EF]/80">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'my-trips' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Guest Trip Itinerary
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'supplier-portal' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Supplier Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'admin-dashboard' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Platform Admin
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'account-profile' })} 
                  className="hover:text-[#C77B5A] transition-colors"
                >
                  Traveler Profile
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Prototype Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A8B8A0] font-light gap-4">
          <div className="flex items-center gap-4">
            <span>© 2026 Ghumio Technologies Nepal. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#C77B5A]">Editorial UI/UX Prototype</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px]">
            <span>LOCAL CURRENCY: NPR (रू)</span>
            <span>RESPONSIBLE TREKKING STANDARD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
