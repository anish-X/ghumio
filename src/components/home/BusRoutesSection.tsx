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
    <section className="py-20 sm:py-28 bg-[#F7F5EF] text-[#252923] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8DFD0] pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-light tracking-[0.25em] uppercase text-[#7D8876] mb-3">
              <Bus className="w-3.5 h-3.5 text-[#C77B5A]" />
              <span>Transits • Scenic Highway Co-ops</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#173D32] tracking-tight leading-[1.15]">
              Scenic tourist transit <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C77B5A]">with panoramic glass.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-light text-[#7D8876] leading-relaxed">
              Travel along river gorges in comfort with guaranteed 2x1 VIP sofa seats, air suspension, sanitized rest stops, and live seat selection.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#173D32] hover:text-[#C77B5A] transition-colors py-2 group"
          >
            <span>View all routes</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bus Route List / Cards */}
        <div className="space-y-4">
          {BUSES_DATA.map((bus) => {
            return (
              <div
                key={bus.id}
                onClick={() => onSelectBus(bus.id)}
                className="group bg-[#F7F5EF] hover:bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD0] hover:border-[#173D32]/30 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Operator & Badge */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#173D32]/10 text-[#173D32] text-[10px] font-mono uppercase tracking-wider">
                        {bus.busType}
                      </span>
                      {bus.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#C77B5A]/15 text-[#C77B5A] text-[10px] font-medium flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Top Highway Fleet
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-serif font-light text-[#173D32] group-hover:text-[#C77B5A] transition-colors">
                      {bus.operator}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#7D8876] mt-1 font-mono">
                      <span>Coach #{bus.busNumber}</span>
                      <span>•</span>
                      <span>{bus.seats.filter(s => !s.isBooked).length} seats open</span>
                    </div>
                  </div>

                  {/* Middle: Departure & Route Timeline */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center justify-between max-w-sm">
                      <div className="text-left">
                        <div className="text-xl font-serif font-medium text-[#173D32]">{bus.departureTime}</div>
                        <div className="text-xs text-[#7D8876] font-mono mt-0.5">{bus.from}</div>
                        <div className="text-[10px] text-[#7D8876]/70 truncate max-w-[120px]">{bus.departureStation}</div>
                      </div>

                      <div className="flex flex-col items-center px-4">
                        <span className="text-[10px] font-mono text-[#7D8876]">{bus.duration}</span>
                        <div className="relative w-28 h-0.5 bg-[#E8DFD0] my-2">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C77B5A]"></div>
                        </div>
                        <span className="text-[10px] text-[#173D32] flex items-center gap-1">
                          <Wifi className="w-3 h-3" />
                          <span>Wi-Fi AC</span>
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-serif font-medium text-[#173D32]">{bus.arrivalTime}</div>
                        <div className="text-xs text-[#7D8876] font-mono mt-0.5">{bus.to}</div>
                        <div className="text-[10px] text-[#7D8876]/70 truncate max-w-[120px]">{bus.arrivalStation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Price & Seat Action */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E8DFD0]/80">
                    <div className="text-left lg:text-right">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-[#7D8876]">Fixed NPR Fare</div>
                      <div className="text-2xl font-serif font-medium text-[#173D32]">
                        {formatNPR(bus.priceNPR)}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#173D32] group-hover:bg-[#C77B5A] text-[#F7F5EF] text-xs font-medium tracking-wide transition-all shadow-2xs"
                    >
                      <Armchair className="w-3.5 h-3.5" />
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
