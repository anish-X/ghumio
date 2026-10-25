import React, { useState } from 'react';
import { 
  Bus, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowLeft, 
  Armchair, 
  Check, 
  Wifi, 
  Sparkles,
  Info
} from 'lucide-react';
import { BusItem, BusSeat, AppView } from '../../types';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface BusDetailPageProps {
  bus: BusItem;
  onNavigate: (view: AppView) => void;
  onProceedCheckout: (bus: BusItem, selectedSeatNumbers: string[], totalFare: number) => void;
}

export const BusDetailPage: React.FC<BusDetailPageProps> = ({ bus, onNavigate, onProceedCheckout }) => {
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState<string[]>(['3C']);

  const toggleSeat = (seat: BusSeat) => {
    if (seat.isBooked) {
      toast.error(`Seat ${seat.seatNumber} is already reserved by another passenger.`);
      return;
    }

    if (selectedSeatNumbers.includes(seat.seatNumber)) {
      if (selectedSeatNumbers.length === 1) {
        toast.info('You need at least 1 selected seat to book.');
        return;
      }
      setSelectedSeatNumbers(selectedSeatNumbers.filter((s) => s !== seat.seatNumber));
    } else {
      if (selectedSeatNumbers.length >= 6) {
        toast.warning('Maximum 6 seats per booking.');
        return;
      }
      setSelectedSeatNumbers([...selectedSeatNumbers, seat.seatNumber]);
      toast.success(`Seat ${seat.seatNumber} selected`);
    }
  };

  const totalFare = selectedSeatNumbers.reduce((sum, seatNum) => {
    const seatObj = bus.seats.find((s) => s.seatNumber === seatNum);
    return sum + (seatObj ? seatObj.priceNPR : bus.priceNPR);
  }, 0);

  // Group seats by row for layout rendering
  const maxRow = Math.max(...bus.seats.map((s) => s.row));
  const isSofa2x1 = bus.busType.includes('Sofa');

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="pb-6 border-b border-[#E8EAF0]">
          <button
            onClick={() => onNavigate({ type: 'search', category: 'bus' })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101D45] hover:text-[#1769F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Tourist Bus Schedules</span>
          </button>
        </div>

        {/* Header Route & Coach Summary */}
        <div className="pt-6 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
              {bus.busType}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF4FE] text-[#1769F5]">
              Coach #{bus.busNumber}
            </span>
            {bus.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9EB] text-[#B7791F]">
                ★ Top Rated Tourist Fleet
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#101D45] tracking-tight">
            {bus.operator}
          </h1>

          <div className="mt-4 p-5 rounded-3xl bg-white border border-[#E8EAF0] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs text-[#8F9BB3] font-semibold">Departure</div>
                <div className="text-xl font-black text-[#101D45]">{bus.departureTime}</div>
                <div className="text-xs font-bold text-[#57647E]">{bus.from}</div>
                <div className="text-[11px] text-[#8F9BB3]">{bus.departureStation}</div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-[11px] font-bold text-[#8F9BB3] mb-1">{bus.duration}</span>
                <div className="w-20 sm:w-28 h-[2px] bg-[#E8EAF0] flex items-center justify-between">
                  <span className="w-2 h-2 rounded-full bg-[#101D45]"></span>
                  <Bus className="w-3.5 h-3.5 text-[#F45B18]" />
                  <span className="w-2 h-2 rounded-full bg-[#F45B18]"></span>
                </div>
                <span className="text-[10px] text-[#15803D] font-bold mt-1">Air Suspended</span>
              </div>

              <div>
                <div className="text-xs text-[#8F9BB3] font-semibold">Estimated Arrival</div>
                <div className="text-xl font-black text-[#101D45]">{bus.arrivalTime}</div>
                <div className="text-xs font-bold text-[#57647E]">{bus.to}</div>
                <div className="text-[11px] text-[#8F9BB3]">{bus.arrivalStation}</div>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#E8EAF0] pt-4 md:pt-0 md:pl-6">
              <div className="text-xs text-[#8F9BB3]">Standard Fare</div>
              <div className="text-2xl font-black text-[#101D45]">{formatNPR(bus.priceNPR)}</div>
              <div className="text-[11px] text-[#15803D] font-semibold">Snack box & mineral water included</div>
            </div>
          </div>
        </div>

        {/* Seat Selection & Booking Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
          
          {/* Left Column: Interactive Seat Layout */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E8EAF0]">
              <div>
                <h2 className="text-xl font-black text-[#101D45]">Select Your Seat(s)</h2>
                <p className="text-xs text-[#8F9BB3] mt-0.5">
                  Click on an available seat to lock your reservation.
                </p>
              </div>

              {/* Seat Legend */}
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-md border-2 border-[#D7DBE5] bg-white"></span>
                  <span className="text-[#57647E]">Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-md bg-[#F45B18] text-white flex items-center justify-center text-[10px]">✓</span>
                  <span className="text-[#101D45]">Selected</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-md bg-slate-200 text-slate-400"></span>
                  <span className="text-[#8F9BB3]">Booked</span>
                </div>
              </div>
            </div>

            {/* Coach Cabin Visualization */}
            <div className="mt-8 max-w-sm mx-auto bg-[#F7F8FA] p-6 rounded-3xl border-2 border-dashed border-[#D7DBE5] relative">
              
              {/* Front Dashboard & Steering */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-[#E8EAF0] text-xs font-bold text-[#8F9BB3]">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[#101D45]">
                    🎯
                  </span>
                  <span>Driver Cabin</span>
                </div>
                <div className="text-[11px] text-[#57647E] bg-white px-2.5 py-1 rounded-lg border border-[#E8EAF0]">
                  Door Entrance
                </div>
              </div>

              {/* Seats Grid */}
              <div className="space-y-3">
                {Array.from({ length: maxRow }).map((_, rIdx) => {
                  const rowNum = rIdx + 1;
                  const rowSeats = bus.seats.filter((s) => s.row === rowNum);

                  return (
                    <div key={rowNum} className="flex items-center justify-between gap-2">
                      
                      {/* Left Pair (Columns 0, 1) */}
                      <div className="flex items-center gap-2">
                        {rowSeats.filter((s) => s.col <= 1).map((seat) => {
                          const isSelected = selectedSeatNumbers.includes(seat.seatNumber);
                          return (
                            <button
                              key={seat.seatNumber}
                              type="button"
                              onClick={() => toggleSeat(seat)}
                              disabled={seat.isBooked}
                              className={`w-11 h-12 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all ${
                                seat.isBooked
                                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-[#F45B18] text-white shadow-md scale-105 ring-2 ring-[#F45B18]/30'
                                  : 'bg-white border-2 border-[#D7DBE5] text-[#101D45] hover:border-[#F45B18] hover:bg-[#FFF2EB]/20'
                              }`}
                            >
                              <Armchair className="w-3.5 h-3.5 mb-0.5" />
                              <span>{seat.seatNumber}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Walkway Aisle */}
                      <div className="text-[10px] text-slate-400 font-mono tracking-widest px-2">
                        {rowNum}
                      </div>

                      {/* Right Single (VIP Sofa) or Right Pair (Standard 2x2) */}
                      <div className="flex items-center gap-2">
                        {rowSeats.filter((s) => s.col >= 2).map((seat) => {
                          const isSelected = selectedSeatNumbers.includes(seat.seatNumber);
                          return (
                            <button
                              key={seat.seatNumber}
                              type="button"
                              onClick={() => toggleSeat(seat)}
                              disabled={seat.isBooked}
                              className={`w-11 h-12 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all ${
                                seat.isBooked
                                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-[#F45B18] text-white shadow-md scale-105 ring-2 ring-[#F45B18]/30'
                                  : 'bg-white border-2 border-[#D7DBE5] text-[#101D45] hover:border-[#F45B18] hover:bg-[#FFF2EB]/20'
                              }`}
                            >
                              <Armchair className="w-3.5 h-3.5 mb-0.5" />
                              <span>{seat.seatNumber}</span>
                            </button>
                          );
                        })}
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Rear info */}
              <div className="text-center text-[10px] text-[#8F9BB3] font-semibold mt-6 pt-4 border-t border-[#E8EAF0]">
                Rear Emergency Exit • Luggage Deck Below
              </div>

            </div>

            {/* Coach Amenities */}
            <div className="mt-8 pt-6 border-t border-[#E8EAF0]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#101D45] mb-3">
                Onboard Amenities & Inclusions
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#57647E]">
                {bus.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Fare Calculation & Passenger CTA */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#E8EAF0] shadow-card space-y-6">
              
              <div className="pb-4 border-b border-[#E8EAF0]">
                <h3 className="text-lg font-black text-[#101D45]">Trip Fare Summary</h3>
                <div className="text-xs text-[#8F9BB3] mt-0.5">
                  Route: {bus.from} ➔ {bus.to}
                </div>
              </div>

              {/* Selected Seats Badges */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-2">
                  Selected Seats ({selectedSeatNumbers.length})
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedSeatNumbers.map((seatNum) => (
                    <span
                      key={seatNum}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF2EB] border border-[#F45B18]/30 text-[#F45B18] font-bold text-xs"
                    >
                      <Armchair className="w-3.5 h-3.5" />
                      <span>Seat {seatNum}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Boarding Point Info */}
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] text-xs text-[#57647E] space-y-1">
                <div className="font-bold text-[#101D45] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                  <span>Boarding Station:</span>
                </div>
                <p className="font-semibold text-[#101D45]">{bus.departureStation}</p>
                <p className="text-[11px] text-[#8F9BB3]">Please arrive 25 minutes prior to 07:00 AM departure.</p>
              </div>

              {/* Fare Calculation */}
              <div className="space-y-2 pt-2 border-t border-[#E8EAF0] text-xs text-[#57647E]">
                <div className="flex justify-between">
                  <span>Base Coach Fare ({selectedSeatNumbers.length} seat[s])</span>
                  <span className="font-semibold text-[#101D45]">{formatNPR(totalFare)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Highway Toll & Insurance</span>
                  <span className="font-semibold text-[#15803D]">Included</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8EAF0] text-sm font-bold text-[#101D45]">
                  <span>Total Amount (NPR)</span>
                  <span className="text-xl font-black text-[#F45B18]">{formatNPR(totalFare)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onProceedCheckout(bus, selectedSeatNumbers, totalFare)}
                className="w-full py-4 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                Proceed to Book Seats ({selectedSeatNumbers.length})
              </button>

              <div className="text-[11px] text-center text-[#8F9BB3]">
                🎟️ SMS & E-Ticket Voucher sent instantly • Show on boarding
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
