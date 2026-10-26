import React from 'react';
import { ShieldCheck, CheckCircle2, Headphones, Sparkles, Building2, ArrowRight, HeartHandshake } from 'lucide-react';
import { AppView } from '../../types';

interface TrustAndReassuranceProps {
  onNavigate: (view: AppView) => void;
}

export const TrustAndReassurance: React.FC<TrustAndReassuranceProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="bg-[#F7F5EF] rounded-3xl p-8 sm:p-12 border border-[#E8DFD0] shadow-sm">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7D8876]">
              Ethical Travel Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#173D32] tracking-tight mt-1">
              Why mindful travelers <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C77B5A]">journey with Ghumio.</span>
            </h2>
            <p className="text-sm font-light text-[#7D8876] mt-3 leading-relaxed">
              We connect travelers directly to pre-screened Nepali mountain leaders, community lodges, and regulated transport cooperatives with zero hidden commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8DFD0]/50 flex items-center justify-center text-[#173D32]">
                <ShieldCheck className="w-5 h-5 text-[#C77B5A]" />
              </div>
              <h3 className="text-xl font-serif font-light text-[#173D32]">Verified Sherpa Leaders</h3>
              <p className="text-xs sm:text-sm font-light text-[#252923]/75 leading-relaxed">
                All mountain guides carry government licenses, ACAP/TIMS compliance, fair porter insurance, and high-altitude emergency training.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8DFD0]/50 flex items-center justify-center text-[#173D32]">
                <Sparkles className="w-5 h-5 text-[#C77B5A]" />
              </div>
              <h3 className="text-xl font-serif font-light text-[#173D32]">Exact Seat & Suite Reservation</h3>
              <p className="text-xs sm:text-sm font-light text-[#252923]/75 leading-relaxed">
                Choose your specific panoramic tourist bus sofa seat (2x1 layout) or lake-facing eco suite before leaving home.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8DFD0]/50 flex items-center justify-center text-[#173D32]">
                <Headphones className="w-5 h-5 text-[#C77B5A]" />
              </div>
              <h3 className="text-xl font-serif font-light text-[#173D32]">On-ground Field Desks</h3>
              <p className="text-xs sm:text-sm font-light text-[#252923]/75 leading-relaxed">
                Direct phone and WhatsApp support in Kathmandu and Pokhara for mountain weather updates, highway bus assistance, and permits.
              </p>
            </div>
          </div>
        </div>

        {/* Partner with Us Callout Banner */}
        <div className="mt-12 rounded-3xl bg-[#173D32] p-8 sm:p-12 text-[#F7F5EF] relative overflow-hidden shadow-xl border border-[#173D32]">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-widest text-[#A8B8A0] mb-4 border border-white/15">
              <Building2 className="w-3.5 h-3.5 text-[#C77B5A]" />
              For Nepali Travel Businesses & Guides
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-serif font-light tracking-tight leading-snug">
              Are you an eco lodge, certified guide, or tourist coach operator?
            </h3>
            
            <p className="text-xs sm:text-sm font-light text-[#F7F5EF]/80 mt-3 leading-relaxed">
              Showcase your journeys, rooms, or coach seats on Ghumio. Connect directly with travelers who value responsible hospitality, with fair NPR settlements and digital reservation tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate({ type: 'supplier-portal' })}
                className="px-6 py-3 rounded-full bg-[#F7F5EF] hover:bg-[#C77B5A] text-[#173D32] hover:text-white font-medium text-xs tracking-wide shadow-sm transition-all flex items-center gap-2"
              >
                <span>Open Supplier Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate({ type: 'admin-dashboard' })}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F5EF] font-light text-xs tracking-wide transition-all border border-white/20"
              >
                Platform Oversight View
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
