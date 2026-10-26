import React from 'react';
import { ShieldCheck, CheckCircle2, Headphones, Sparkles, Building2, ArrowRight } from 'lucide-react';
import { AppView } from '../../types';

interface TrustAndReassuranceProps {
  onNavigate: (view: AppView) => void;
}

export const TrustAndReassurance: React.FC<TrustAndReassuranceProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8EAF0] shadow-card">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769F5]">
              Built for Nepal Travel
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight mt-1">
              Why Mindful Travelers Book with Ghumio
            </h2>
            <p className="text-sm sm:text-base text-[#57647E] mt-2">
              We eliminate multiple middlemen and opaque cash quotes with transparent local NPR rates and pre-screened certified partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF2EB] flex items-center justify-center text-[#F45B18]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#101D45]">Verified Sherpa & Tourist Operators</h3>
              <p className="text-sm text-[#57647E] leading-relaxed font-normal">
                All mountain guides carry government licenses, ACAP/TIMS registration compliance, and wilderness first aid qualifications.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF4FE] flex items-center justify-center text-[#1769F5]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#101D45]">Real-time Seat & Room Locks</h3>
              <p className="text-sm text-[#57647E] leading-relaxed font-normal">
                Select your exact bus seat (front window, solo VIP sofa) or specific lake-view resort room before paying.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E6FAFB] flex items-center justify-center text-[#08C5C9]">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#101D45]">On-ground Help in Pokhara & KTM</h3>
              <p className="text-sm text-[#57647E] leading-relaxed font-normal">
                Direct helpline for mountain weather updates, highway bus station pickups, flight delays, and itinerary adjustments.
              </p>
            </div>
          </div>
        </div>

        {/* Partner with Us Callout Banner */}
        <div className="mt-12 rounded-3xl bg-[#101D45] p-8 sm:p-12 text-white relative overflow-hidden shadow-card">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#FFB91F] mb-4 border border-white/15">
              <Building2 className="w-3.5 h-3.5" />
              For Travel Businesses & Fleet Operators
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
              Are you a hotelier, trekking company, or bus operator in Nepal?
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed font-normal">
              List your tours, rooms, or coach seats on Ghumio. Gain direct access to local and international travelers with automated digital payouts and inventory management.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate({ type: 'supplier-portal' })}
                className="px-6 py-3 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <span>Open Supplier Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate({ type: 'admin-dashboard' })}
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
              >
                Explore Admin View
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
