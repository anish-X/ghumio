import React from 'react';
import { Bus, Clock, MapPin, Wifi, ShieldCheck, ArrowRight, Armchair, Sparkles } from 'lucide-react';
import { BUSES_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface BusRoutesSectionProps {
  onSelectBus: (id: string) => void;
  onExploreMore: () => void;
}

export const BusRoutesSection: React.FC<BusRoutesSectionProps> = ({ onSelectBus, onExploreMore }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFB91F] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB91F]"></span>
              Tourist Highway Coaches
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
              Popular Intercity Tourist Bus Routes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E]">
              Guaranteed 2x1 VIP Sofa seating, air-suspension comfort, snack boxes & clean highway stops.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1769F5] hover:text-[#0E56D1] group"
          >
            <span>View all tourist routes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bus Route List / Cards */}
        <div className="space-y-4">
          {BUSES_DATA.map((bus) => {
            return (
              <div
                key={bus.id}
                onClick={() => onSelectBus(bus.id)}
                className="group bg-[#FFFCF7] hover:bg-white rounded-3xl p-5 sm:p-6 border border-[#E8EAF0] hover:border-[#1769F5]/40 shadow-sm hover:shadow-card transition-all duration-200 cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Operator & Badge */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#EEF4FE] text-[#1769F5] font-bold text-xs">
                        {bus.busType}
                      </span>
                      {bus.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFF9EB] text-[#B7791F] font-bold text-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Top Rated
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#101D45] mt-2 group-hover:text-[#1769F5] transition-colors">
                      {bus.operator}
                    </h3>
                    
                    <div className="text-xs text-[#8F9BB3] mt-0.5 font-medium">
                      Coach Reg: {bus.busNumber} • {bus.availableSeats} of {bus.totalSeats} seats open
                    </div>

                    {/* Amenities list */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {bus.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className="text-[11px] font-medium text-[#57647E] bg-white border border-[#E8EAF0] px-2 py-0.5 rounded-md">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle: Timing & Route */}
                  <div className="lg:col-span-5 border-y lg:border-y-0 lg:border-x border-[#E8EAF0] py-4 lg:py-0 lg:px-6">
                    <div className="flex items-center justify-between">
                      {/* Departure */}
                      <div>
                        <div className="text-xl font-black text-[#101D45]">{bus.departureTime}</div>
                        <div className="text-xs font-semibold text-[#57647E]">{bus.from}</div>
                        <div className="text-[11px] text-[#8F9BB3] line-clamp-1">{bus.departureStation}</div>
                      </div>

                      {/* Line & Duration */}
                      <div className="flex flex-col items-center px-4">
                        <span className="text-[11px] font-bold text-[#8F9BB3] mb-1">{bus.duration}</span>
                        <div className="w-24 sm:w-32 h-[2px] bg-[#E8EAF0] relative flex items-center justify-between">
                          <span className="w-2 h-2 rounded-full bg-[#101D45]"></span>
                          <Bus className="w-3.5 h-3.5 text-[#F45B18]" />
                          <span className="w-2 h-2 rounded-full bg-[#F45B18]"></span>
                        </div>
                        <span className="text-[10px] text-[#8F9BB3] mt-1">Direct Highway AC</span>
                      </div>

                      {/* Arrival */}
                      <div className="text-right">
                        <div className="text-xl font-black text-[#101D45]">{bus.arrivalTime}</div>
                        <div className="text-xs font-semibold text-[#57647E]">{bus.to}</div>
                        <div className="text-[11px] text-[#8F9BB3] line-clamp-1">{bus.arrivalStation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & CTA */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-3">
                    <div className="text-left lg:text-right">
                      <div className="text-[11px] text-[#8F9BB3]">Per seat fare</div>
                      <div className="text-xl sm:text-2xl font-black text-[#101D45]">
                        {formatNPR(bus.priceNPR)}
                      </div>
                      <div className="text-[11px] text-[#15803D] font-semibold">Zero booking fee</div>
                    </div>

                    <button
                      type="button"
                      className="px-5 py-2.5 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <Armchair className="w-4 h-4" />
                      <span>Select Seats</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
