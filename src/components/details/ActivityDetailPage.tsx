import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Video, 
  Check, 
  AlertTriangle 
} from 'lucide-react';
import { ActivityItem, AppView } from '../../types';
import { formatNPR } from '../../lib/utils';

interface ActivityDetailPageProps {
  activity: ActivityItem;
  onNavigate: (view: AppView) => void;
  onProceedCheckout: (act: ActivityItem, date: string, timeSlot: string, participants: number) => void;
}

export const ActivityDetailPage: React.FC<ActivityDetailPageProps> = ({ activity, onNavigate, onProceedCheckout }) => {
  const [selectedDate, setSelectedDate] = useState('2026-11-05');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(activity.timeSlots[0] || '09:30 AM');
  const [participantsCount, setParticipantsCount] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const totalAmount = activity.priceNPR * participantsCount;

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="pb-6 border-b border-[#E8EAF0]">
          <button
            onClick={() => onNavigate({ type: 'search', category: 'activities' })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101D45] hover:text-[#1769F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Nepal Activities</span>
          </button>
        </div>

        {/* Title Header */}
        <div className="pt-6 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
              {activity.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E6FAFB] text-[#08C5C9]">
              CAAN / NTA Certified
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#101D45] tracking-tight">
            {activity.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs sm:text-sm text-[#57647E]">
            <span className="flex items-center gap-1 font-bold text-[#101D45]">
              <Star className="w-4 h-4 fill-[#FFB91F] text-[#FFB91F]" />
              {activity.rating} ({activity.reviewCount} verified reviews)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#F45B18]" />
              {activity.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#1769F5]" />
              {activity.duration}
            </span>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 rounded-3xl overflow-hidden shadow-card border border-[#E8EAF0] bg-white p-2">
          <div className="lg:col-span-8 aspect-[16/10] overflow-hidden rounded-2xl">
            <img
              src={activity.images[activeImageIndex] || activity.images[0]}
              alt={activity.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {activity.images.map((img, idx) => (
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

        {/* Content & Booking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <h2 className="text-xl font-black text-[#101D45] mb-3">Experience Description</h2>
              <p className="text-sm sm:text-base text-[#57647E] leading-relaxed">
                {activity.overview}
              </p>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-[#E8EAF0]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#101D45] mb-3">
                  Key Experience Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activity.highlights.map((h, i) => (
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

            {/* Inclusions & Requirements */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <h2 className="text-xl font-black text-[#101D45] mb-6">Inclusions & Safety Requirements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#15803D] mb-3">
                    What's Included
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#57647E]">
                    {activity.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#B7791F] mb-3">
                    Participant Guidelines
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#57647E]">
                    {activity.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#B7791F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Provider License */}
            <div className="p-6 rounded-3xl bg-white border border-[#E8EAF0] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6FAFB] text-[#08C5C9] flex items-center justify-center font-black">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#8F9BB3] font-semibold">Authorized Adventure Partner</div>
                  <div className="font-bold text-[#101D45]">{activity.provider.name}</div>
                  <div className="text-xs text-[#57647E]">License Reg: {activity.provider.license}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Slot & Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#E8EAF0] shadow-card space-y-6">
              
              <div className="flex items-baseline justify-between pb-4 border-b border-[#E8EAF0]">
                <div>
                  <div className="text-xs text-[#8F9BB3]">Experience Fare</div>
                  <div className="text-2xl font-black text-[#101D45]">
                    {formatNPR(activity.priceNPR)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#15803D] font-bold">Photos & Video Included</div>
                  <div className="text-[10px] text-[#8F9BB3]">Per participant</div>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-1.5">
                  Select Date
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

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-1.5">
                  Select Time Slot
                </label>
                <div className="space-y-2">
                  {activity.timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`w-full p-3 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#F45B18] bg-[#FFF2EB] text-[#F45B18] shadow-sm'
                            : 'border-[#E8EAF0] bg-white text-[#101D45] hover:bg-[#F7F8FA]'
                        }`}
                      >
                        <span>{slot}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#F45B18]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Participants Counter */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-1.5">
                  Participants
                </label>
                <div className="flex items-center justify-between p-3 rounded-2xl border border-[#E8EAF0] bg-[#FDFDFE]">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#08C5C9]" />
                    <span className="text-sm font-bold text-[#101D45]">{participantsCount} Participant(s)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setParticipantsCount(Math.max(1, participantsCount - 1))}
                      className="w-7 h-7 rounded-lg bg-[#F7F8FA] border border-[#E8EAF0] text-[#101D45] font-bold text-sm hover:bg-[#E8EAF0]"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-[#101D45] w-4 text-center">{participantsCount}</span>
                    <button
                      type="button"
                      onClick={() => setParticipantsCount(participantsCount + 1)}
                      className="w-7 h-7 rounded-lg bg-[#F7F8FA] border border-[#E8EAF0] text-[#101D45] font-bold text-sm hover:bg-[#E8EAF0]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2 pt-2 border-t border-[#E8EAF0] text-xs text-[#57647E]">
                <div className="flex justify-between">
                  <span>{formatNPR(activity.priceNPR)} × {participantsCount}</span>
                  <span className="font-semibold text-[#101D45]">{formatNPR(totalAmount)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8EAF0] text-sm font-bold text-[#101D45]">
                  <span>Total Amount (NPR)</span>
                  <span className="text-xl font-black text-[#F45B18]">{formatNPR(totalAmount)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onProceedCheckout(activity, selectedDate, selectedTimeSlot, participantsCount)}
                className="w-full py-4 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                Book Activity Slot
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

