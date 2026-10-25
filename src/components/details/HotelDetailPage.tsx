import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowLeft, 
  Check, 
  Coffee, 
  Wifi, 
  Tv, 
  ShieldCheck, 
  Sparkles,
  BedDouble,
  Maximize2
} from 'lucide-react';
import { HotelItem, HotelRoom, AppView } from '../../types';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface HotelDetailPageProps {
  hotel: HotelItem;
  onNavigate: (view: AppView) => void;
  onProceedCheckout: (hotel: HotelItem, room: HotelRoom, checkIn: string, checkOut: string, nights: number) => void;
}

export const HotelDetailPage: React.FC<HotelDetailPageProps> = ({ hotel, onNavigate, onProceedCheckout }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(hotel.rooms[0]?.id || '');
  const [checkInDate, setCheckInDate] = useState('2026-11-10');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-13');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Nights calculation
  const nights = 3; // default for simplicity in prototype
  const selectedRoom = hotel.rooms.find((r) => r.id === selectedRoomId) || hotel.rooms[0];
  const totalAmount = selectedRoom ? selectedRoom.priceNPR * nights : hotel.startingPriceNPR * nights;

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <div className="pb-6 border-b border-[#E8EAF0]">
          <button
            onClick={() => onNavigate({ type: 'search', category: 'hotels' })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101D45] hover:text-[#1769F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Hotels & Stays</span>
          </button>
        </div>

        {/* Title & Location Header */}
        <div className="pt-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
              {hotel.propertyType}
            </span>
            <div className="flex items-center gap-1 text-[#FFB91F]">
              {Array.from({ length: hotel.starRating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFB91F]" />
              ))}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#101D45] tracking-tight">
            {hotel.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-[#57647E]">
            <span className="flex items-center gap-1 font-bold text-[#101D45]">
              <Star className="w-4 h-4 fill-[#FFB91F] text-[#FFB91F]" />
              {hotel.rating} ({hotel.reviewCount} reviews)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#F45B18]" />
              {hotel.address}
            </span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-3xl overflow-hidden shadow-card border border-[#E8EAF0] bg-white p-2">
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden rounded-2xl">
            <img
              src={hotel.images[activeImageIndex] || hotel.images[0]}
              alt={hotel.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {hotel.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative flex-1 aspect-[16/10] lg:aspect-auto rounded-xl overflow-hidden border-2 transition-all min-w-[120px] lg:min-w-0 ${
                  activeImageIndex === idx ? 'border-[#F45B18] ring-2 ring-[#F45B18]/20' : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Rooms & Sticky Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          
          {/* Left Column: Property Details & Room Selection */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <h2 className="text-xl font-black text-[#101D45] mb-3">About the Property</h2>
              <p className="text-sm sm:text-base text-[#57647E] leading-relaxed">
                {hotel.overview}
              </p>

              {/* Amenities */}
              <div className="mt-6 pt-6 border-t border-[#E8EAF0]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#101D45] mb-3">
                  Property Highlights & Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#101D45] font-medium">
                      <Check className="w-4 h-4 text-[#08C5C9] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Room Selection */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-black text-[#101D45]">Available Room Categories</h2>
                <p className="text-xs text-[#8F9BB3] mt-1">Select your preferred room to calculate total stay</p>
              </div>

              <div className="space-y-4">
                {hotel.rooms.map((room) => {
                  const isSelected = selectedRoomId === room.id;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#F45B18] bg-[#FFF2EB]/20 shadow-sm'
                          : 'border-[#E8EAF0] hover:border-[#D7DBE5] bg-white'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-base text-[#101D45]">{room.name}</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F8EE] text-[#15803D]">
                              {room.availableRooms} rooms left
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-[#57647E] mt-1.5 font-medium">
                            <span className="flex items-center gap-1">
                              <BedDouble className="w-3.5 h-3.5 text-[#1769F5]" />
                              {room.bedType}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3.5 h-3.5 text-[#08C5C9]" />
                              Up to {room.capacity} Guests
                            </span>
                            <span>•</span>
                            <span>{room.sizeSqFt} sq. ft.</span>
                          </div>

                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {room.perks.map((perk, i) => (
                              <span key={i} className="text-[11px] font-medium text-[#15803D] bg-[#E8F8EE] px-2 py-0.5 rounded-md">
                                ✓ {perk}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E8EAF0]">
                          <div>
                            <div className="text-[11px] text-[#8F9BB3]">Per night in NPR</div>
                            <div className="text-xl font-black text-[#101D45]">
                              {formatNPR(room.priceNPR)}
                            </div>
                          </div>

                          <button
                            type="button"
                            className={`mt-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                              isSelected
                                ? 'bg-[#F45B18] text-white shadow-sm'
                                : 'bg-[#F7F8FA] text-[#101D45] hover:bg-[#E8EAF0]'
                            }`}
                          >
                            {isSelected ? 'Room Selected' : 'Select Room'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Check-in / Check-out Policies */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8EAF0] text-xs sm:text-sm text-[#57647E] space-y-2">
              <div className="font-bold text-[#101D45] text-base mb-1">Check-in Policies & Terms</div>
              <p>• Standard Check-in: <strong>{hotel.checkIn}</strong> • Check-out: <strong>{hotel.checkOut}</strong></p>
              <p>• {hotel.cancellationPolicy}</p>
              <p>• Valid government ID (Nagarikta or Passport) required upon arrival at front desk.</p>
            </div>

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#E8EAF0] shadow-card space-y-6">
              
              <div className="flex items-baseline justify-between pb-4 border-b border-[#E8EAF0]">
                <div>
                  <div className="text-xs text-[#8F9BB3]">Selected Room</div>
                  <div className="text-xl font-black text-[#101D45] line-clamp-1">
                    {selectedRoom?.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-[#F45B18]">
                    {formatNPR(selectedRoom ? selectedRoom.priceNPR : 0)}
                  </div>
                  <div className="text-[10px] text-[#8F9BB3]">/ night</div>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl border border-[#E8EAF0] bg-[#FDFDFE]">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#101D45] focus:outline-none cursor-pointer"
                  />
                </div>
                <div className="p-3 rounded-2xl border border-[#E8EAF0] bg-[#FDFDFE]">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8F9BB3] mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-[#101D45] focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Price Calculation */}
              <div className="space-y-2 pt-2 border-t border-[#E8EAF0] text-xs text-[#57647E]">
                <div className="flex justify-between">
                  <span>{formatNPR(selectedRoom?.priceNPR || 0)} × {nights} Nights</span>
                  <span className="font-semibold text-[#101D45]">{formatNPR(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Government 13% VAT & Service</span>
                  <span className="font-semibold text-[#15803D]">Included</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8EAF0] text-sm font-bold text-[#101D45]">
                  <span>Total Amount (NPR)</span>
                  <span className="text-lg font-black text-[#F45B18]">{formatNPR(totalAmount)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => selectedRoom && onProceedCheckout(hotel, selectedRoom, checkInDate, checkOutDate, nights)}
                className="w-full py-4 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                Reserve Stay
              </button>

              <div className="text-[11px] text-center text-[#8F9BB3]">
                🛡️ Instant voucher confirmation • Pay via Fonepay, Card or at Desk
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
