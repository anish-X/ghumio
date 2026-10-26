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
    <section className="py-16 sm:py-24 bg-[#FFFCF7] border-b border-[#E8EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFB91F] mb-2">
              <Bus className="w-3.5 h-3.5 text-[#FFB91F]" />
              Tourist Highway Coaches
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#101D45] tracking-tight">
              Popular Intercity Tourist Bus Routes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#57647E] max-w-xl">
              Guaranteed 2x1 VIP Sofa seating, air-suspension comfort, snack boxes & clean highway stops.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#1769F5] hover:text-[#0E56D1] group"
          >
            <span>View all routes</span>
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
                className="group bg-white rounded-3xl p-5 sm:p-6 border border-[#E8EAF0] hover:border-[#1769F5]/40 shadow-xs hover:shadow-card card-hover-lift transition-all duration-200 cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Operator & Badge */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2 mb-1.5">
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
                    <h3 className="text-lg sm:text-xl font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors">
                      {bus.operator}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#8F9BB3] mt-1 font-medium">
                      <span>Coach #{bus.busNumber}</span>
                      <span>•</span>
                      <span className="text-[#15803D] font-semibold">{bus.seats.filter(s => !s.isBooked).length} seats open</span>
                    </div>
                  </div>

                  {/* Middle: Departure & Route Timeline */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center justify-between max-w-sm">
                      <div className="text-left">
                        <div className="text-lg sm:text-xl font-bold text-[#101D45]">{bus.departureTime}</div>
                        <div className="text-xs text-[#57647E] font-semibold mt-0.5">{bus.from}</div>
                        <div className="text-[10px] text-[#8F9BB3] truncate max-w-[120px]">{bus.departureStation}</div>
                      </div>

                      <div className="flex flex-col items-center px-4">
                        <span className="text-[11px] font-semibold text-[#8F9BB3]">{bus.duration}</span>
                        <div className="relative w-28 h-0.5 bg-[#E8EAF0] my-2">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F45B18]"></div>
                        </div>
                        <span className="text-[10px] text-[#1769F5] font-semibold flex items-center gap-1">
                          <Wifi className="w-3 h-3" />
                          <span>Wi-Fi AC</span>
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold text-[#101D45]">{bus.arrivalTime}</div>
                        <div className="text-xs text-[#57647E] font-semibold mt-0.5">{bus.to}</div>
                        <div className="text-[10px] text-[#8F9BB3] truncate max-w-[120px]">{bus.arrivalStation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & Seat Action */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8EAF0]">
                    <div className="text-left lg:text-right">
                      <div className="text-[11px] text-[#8F9BB3]">Fixed NPR Fare</div>
                      <div className="text-xl sm:text-2xl font-black text-[#101D45]">
                        {formatNPR(bus.priceNPR)}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1769F5] group-hover:bg-[#0E56D1] text-white font-bold text-xs transition-all shadow-sm"
                    >
                      <Armchair className="w-4 h-4" />
                      <span>Select seat</span>
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
