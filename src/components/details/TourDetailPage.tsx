import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Check, 
  X as XIcon, 
  Calendar, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Mountain, 
  ArrowLeft,
  Share2,
  Heart,
  AlertCircle
} from 'lucide-react';
import { TourItem, AppView } from '../../types';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface TourDetailPageProps {
  tour: TourItem;
  onNavigate: (view: AppView) => void;
  onProceedCheckout: (tour: TourItem, date: string, travelers: number) => void;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({ tour, onNavigate, onProceedCheckout }) => {
  const [selectedDate, setSelectedDate] = useState('2026-11-15');
  const [travelersCount, setTravelersCount] = useState(2);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const totalPrice = tour.priceNPR * travelersCount;

  const handleShare = () => {
    toast.success('Tour link copied to clipboard!');
  };

  const handleSave = () => {
    toast.success('Added to your Ghumio Saved Expeditions');
  };

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8EAF0]">
          <button
            onClick={() => onNavigate({ type: 'search', category: 'tours' })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101D45] hover:text-[#1769F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Himalayan Tours</span>
          </button>

          <div className="flex items-center gap-2">
            <button 
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-white border border-[#E8EAF0] text-[#57647E] hover:text-[#101D45] hover:bg-[#F7F8FA]"
              title="Share Tour"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={handleSave}
              className="p-2.5 rounded-xl bg-white border border-[#E8EAF0] text-[#57647E] hover:text-[#DC2626] hover:bg-[#F7F8FA]"
              title="Save Tour"
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="pt-6 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
              {tour.difficulty} Grade
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF2EB] text-[#F45B18] border border-[#F45B18]/20">
              {tour.travelStyle}
            </span>
            {tour.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9EB] text-[#B7791F]">
                {tour.badge}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#101D45] tracking-tight leading-tight">
            {tour.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-[#57647E]">
            <span className="flex items-center gap-1 font-semibold text-[#101D45]">
              <Star className="w-4 h-4 fill-[#FFB91F] text-[#FFB91F]" />
              {tour.rating} ({tour.reviewCount} verified trekker reviews)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#F45B18]" />
              {tour.destination}, {tour.region}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#1769F5]" />
              {tour.duration}
            </span>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-3xl overflow-hidden shadow-card border border-[#E8EAF0] bg-white p-2">
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden rounded-2xl relative">
            <img
              src={tour.images[activeImageIndex] || tour.images[0]}
              alt={tour.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {tour.images.map((img, idx) => (
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

        {/* Main Content & Sticky Booking Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          
          {/* Left Column: Details, Itinerary, Inclusions */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <h2 className="text-xl font-black text-[#101D45] mb-3">Trek Overview</h2>
              <p className="text-sm sm:text-base text-[#57647E] leading-relaxed">
                {tour.overview}
              </p>

              {/* Key Highlights */}
              <div className="mt-6 pt-6 border-t border-[#E8EAF0]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#101D45] mb-3">
                  Trek Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#101D45]">
                      <span className="w-5 h-5 rounded-full bg-[#E8F8EE] text-[#15803D] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day by Day Itinerary */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black text-[#101D45]">Daily Trek Itinerary</h2>
                  <p className="text-xs text-[#8F9BB3] mt-0.5">Step-by-step route and acclimatization schedule</p>
                </div>
                <button
                  onClick={() => setExpandedDay(expandedDay === null ? 1 : null)}
                  className="text-xs font-bold text-[#1769F5] hover:underline"
                >
                  {expandedDay === null ? 'Expand Days' : 'Collapse All'}
                </button>
              </div>

              <div className="space-y-3">
                {tour.itinerary.map((day) => {
                  const isOpen = expandedDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="border border-[#E8EAF0] rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setExpandedDay(isOpen ? null : day.day)}
                        className="w-full flex items-center justify-between p-4 text-left bg-[#FDFDFE] hover:bg-[#F7F8FA]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-[#101D45] text-white flex items-center justify-center text-xs font-black shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <span className="text-sm font-bold text-[#101D45]">{day.title}</span>
                            {day.altitude && (
                              <span className="ml-2 text-xs font-semibold text-[#F45B18]">
                                (Alt. {day.altitude})
                              </span>
                            )}
                          </div>
                        </div>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#8F9BB3]" /> : <ChevronDown className="w-4 h-4 text-[#8F9BB3]" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-1 bg-white text-xs sm:text-sm text-[#57647E] leading-relaxed border-t border-[#E8EAF0]">
                          {day.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <h2 className="text-xl font-black text-[#101D45] mb-6">What's Included & Excluded</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#15803D] flex items-center gap-1.5 mb-3">
                    <Check className="w-4 h-4 text-[#15803D]" />
                    <span>Included in Package</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#57647E]">
                    {tour.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#15803D] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-1.5 mb-3">
                    <XIcon className="w-4 h-4 text-[#DC2626]" />
                    <span>Not Included</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#57647E]">
                    {tour.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Provider Trust Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8EAF0] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FE] text-[#1769F5] flex items-center justify-center font-black text-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#8F9BB3] font-semibold">Organized & Guided By</div>
                  <div className="font-bold text-[#101D45]">{tour.provider.name}</div>
                  <div className="text-xs text-[#57647E]">
                    Government Licensed • {tour.provider.experienceYears} Years Himalayan Experience
                  </div>
                </div>
              </div>

              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-[#15803D]">Verified Operator</div>
                <div className="text-[11px] text-[#8F9BB3]">TIMS & ACAP Compliant</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Widget (Desktop) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#E8EAF0] shadow-card space-y-6">
              
              <div className="flex items-baseline justify-between pb-4 border-b border-[#E8EAF0]">
                <div>
                  <div className="text-xs text-[#8F9BB3]">Standard Package Fare</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#101D45]">
                    {formatNPR(tour.priceNPR)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#15803D] font-bold">All-inclusive</div>
                  <div className="text-[11px] text-[#8F9BB3]">Per person in NPR</div>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-1.5">
                  Departure Date from Kathmandu
                </label>
                <div className="flex items-center gap-2 p-3 rounded-2xl border border-[#E8EAF0] bg-[#FDFDFE]">
                  <Calendar className="w-4 h-4 text-[#1769F5] shrink-0" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-transparent text-sm font-bold text-[#101D45] focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Number of Trekkers */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-1.5">
                  Number of Trekkers
                </label>
                <div className="flex items-center justify-between p-3 rounded-2xl border border-[#E8EAF0] bg-[#FDFDFE]">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#08C5C9]" />
                    <span className="text-sm font-bold text-[#101D45]">{travelersCount} Person(s)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                      className="w-7 h-7 rounded-lg bg-[#F7F8FA] border border-[#E8EAF0] text-[#101D45] font-bold text-sm flex items-center justify-center hover:bg-[#E8EAF0]"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-[#101D45] w-4 text-center">{travelersCount}</span>
                    <button
                      type="button"
                      onClick={() => setTravelersCount(travelersCount + 1)}
                      className="w-7 h-7 rounded-lg bg-[#F7F8FA] border border-[#E8EAF0] text-[#101D45] font-bold text-sm flex items-center justify-center hover:bg-[#E8EAF0]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-2 pt-2 border-t border-[#E8EAF0] text-xs text-[#57647E]">
                <div className="flex justify-between">
                  <span>{formatNPR(tour.priceNPR)} × {travelersCount} trekker(s)</span>
                  <span className="font-semibold text-[#101D45]">{formatNPR(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Permits, Guide & Lodging</span>
                  <span className="font-semibold text-[#15803D]">Included</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8EAF0] text-sm font-bold text-[#101D45]">
                  <span>Total Amount (NPR)</span>
                  <span className="text-lg font-black text-[#F45B18]">{formatNPR(totalPrice)}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => onProceedCheckout(tour, selectedDate, travelersCount)}
                className="w-full py-4 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
              </button>

              <div className="text-[11px] text-center text-[#8F9BB3] leading-tight">
                🔒 Instant Booking Confirmation • Free cancellation up to 7 days prior
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Sticky Mobile Booking Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[#E8EAF0] p-4 z-40 shadow-2xl flex items-center justify-between">
        <div>
          <div className="text-[10px] text-[#8F9BB3]">Total for {travelersCount} person(s)</div>
          <div className="text-lg font-black text-[#101D45]">{formatNPR(totalPrice)}</div>
        </div>
        <button
          onClick={() => onProceedCheckout(tour, selectedDate, travelersCount)}
          className="px-6 py-3 rounded-2xl bg-[#F45B18] text-white font-bold text-sm shadow-sm hover:bg-[#DF4810]"
        >
          Book Expedition
        </button>
      </div>

    </div>
  );
};
