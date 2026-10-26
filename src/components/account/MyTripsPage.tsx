import React, { useState } from 'react';
import { 
  Luggage, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  Eye, 
  X, 
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { BookingRecord, AppView } from '../../types';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface MyTripsPageProps {
  bookings: BookingRecord[];
  onNavigate: (view: AppView) => void;
  onCancelBooking: (bookingId: string) => void;
}

export const MyTripsPage: React.FC<MyTripsPageProps> = ({ bookings, onNavigate, onCancelBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('upcoming');
  const [selectedBookingForModal, setSelectedBookingForModal] = useState<BookingRecord | null>(null);
  const [cancelModalBooking, setCancelModalBooking] = useState<BookingRecord | null>(null);
  const [cancelReason, setCancelReason] = useState('Change of travel dates');

  const filteredBookings = bookings.filter((b) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'upcoming') return b.status === 'confirmed' || b.status === 'pending';
    if (activeTab === 'completed') return b.status === 'completed';
    return b.status === 'cancelled';
  });

  const handleConfirmCancel = () => {
    if (cancelModalBooking) {
      onCancelBooking(cancelModalBooking.id);
      toast.success(`Cancellation request for ${cancelModalBooking.bookingCode} submitted.`);
      setCancelModalBooking(null);
    }
  };

  const getStatusBadge = (status: BookingRecord['status']) => {
    switch (status) {
      case 'confirmed':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F8EE] text-[#15803D]">● Confirmed</span>;
      case 'pending':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9EB] text-[#B7791F]">⏳ Awaiting Confirmation</span>;
      case 'completed':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EEF4FE] text-[#1769F5]">✓ Completed Trip</span>;
      case 'cancelled':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FEE2E2] text-[#DC2626]">✕ Cancelled</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8EAF0] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1769F5] mb-1">
              <Luggage className="w-3.5 h-3.5 text-[#F45B18]" />
              <span>Customer Trips Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
              My Trips & Reservations
            </h1>
            <p className="text-xs sm:text-sm text-[#57647E] mt-1">
              Manage your upcoming Himalayan treks, tourist bus vouchers, and lakeside hotel bookings.
            </p>
          </div>

          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="px-4 py-2.5 rounded-2xl bg-[#F45B18] text-white font-bold text-xs sm:text-sm hover:bg-[#DF4810] transition-colors self-start md:self-auto"
          >
            + Book Another Trip
          </button>
        </div>

        {/* Tabs Filter */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2">
          {[
            { id: 'upcoming', label: 'Upcoming Trips' },
            { id: 'completed', label: 'Past Trips' },
            { id: 'all', label: 'All Bookings' },
            { id: 'cancelled', label: 'Cancelled' },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                  active
                    ? 'bg-[#101D45] text-white shadow-sm'
                    : 'bg-white text-[#57647E] border border-[#E8EAF0] hover:bg-[#F7F8FA]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Trips List */}
        <div className="mt-6 space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#E8EAF0] shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#F7F8FA] text-[#8F9BB3] mx-auto flex items-center justify-center mb-4">
                <Luggage className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#101D45]">No trips found in this view</h3>
              <p className="text-xs text-[#57647E] mt-1 max-w-sm mx-auto">
                Discover Nepal's top destinations or book a tourist VIP sofa bus to get your journey underway.
              </p>
              <button
                onClick={() => onNavigate({ type: 'home' })}
                className="mt-5 px-5 py-2.5 rounded-xl bg-[#101D45] text-white font-bold text-xs hover:bg-[#F45B18]"
              >
                Explore Destinations
              </button>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E8EAF0] shadow-sm hover:shadow-card transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Thumbnail & Main Info */}
                  <div className="lg:col-span-5 flex items-start gap-4">
                    <img
                      src={b.itemImage}
                      alt={b.itemTitle}
                      className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl object-cover border border-[#E8EAF0] shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EEF4FE] text-[#1769F5]">
                          {b.serviceType}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#8F9BB3]">
                          {b.bookingCode}
                        </span>
                      </div>

                      <h3 className="font-bold text-base sm:text-lg text-[#101D45] line-clamp-1">
                        {b.itemTitle}
                      </h3>

                      <div className="text-xs text-[#57647E] mt-1 flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                        <span>{b.destination}</span>
                      </div>

                      <div className="text-xs text-[#8F9BB3] mt-0.5">
                        {b.quantityText}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Dates & Status */}
                  <div className="lg:col-span-4 border-y lg:border-y-0 lg:border-x border-[#E8EAF0] py-4 lg:py-0 lg:px-6">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-[#8F9BB3] font-medium">Booking Status:</span>
                      {getStatusBadge(b.status)}
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[#101D45] font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-[#1769F5]" />
                        <span>Departure / Check-in: <strong>{b.travelDate}</strong></span>
                      </div>
                      {b.returnDate && (
                        <div className="flex items-center gap-1.5 text-[#57647E]">
                          <Clock className="w-3.5 h-3.5 text-[#8F9BB3]" />
                          <span>Return / Check-out: {b.returnDate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Pricing & Voucher Actions */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-3">
                    <div className="text-left lg:text-right">
                      <div className="text-[11px] text-[#8F9BB3]">Total Fare Paid</div>
                      <div className="text-xl font-black text-[#101D45]">
                        {formatNPR(b.pricing.totalAmountNPR)}
                      </div>
                      <div className="text-[10px] text-[#15803D] font-semibold capitalize">
                        {b.paymentMethod} • Authorized
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedBookingForModal(b)}
                        className="px-3.5 py-2 rounded-xl bg-[#F7F8FA] border border-[#E8EAF0] text-xs font-bold text-[#101D45] hover:bg-[#101D45] hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Voucher</span>
                      </button>

                      {b.status === 'confirmed' && (
                        <button
                          onClick={() => setCancelModalBooking(b)}
                          className="px-3 py-2 rounded-xl text-xs font-bold text-[#DC2626] hover:bg-[#FEE2E2]/50 transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Voucher Detail Modal */}
      {selectedBookingForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedBookingForModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4FE] text-[#1769F5] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#101D45]">Official Ghumio E-Voucher</h3>
                <div className="text-xs font-mono font-bold text-[#F45B18]">
                  Code: {selectedBookingForModal.bookingCode}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] space-y-2 text-xs text-[#57647E]">
              <div><strong>Service:</strong> {selectedBookingForModal.itemTitle}</div>
              <div><strong>Destination:</strong> {selectedBookingForModal.destination}</div>
              <div><strong>Travel Date:</strong> {selectedBookingForModal.travelDate}</div>
              <div><strong>Booked For:</strong> {selectedBookingForModal.traveler.fullName} ({selectedBookingForModal.traveler.phone})</div>
              <div><strong>Amount Paid:</strong> {formatNPR(selectedBookingForModal.pricing.totalAmountNPR)}</div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  toast.success('PDF Voucher downloaded to device.');
                  setSelectedBookingForModal(null);
                }}
                className="flex-1 py-3 rounded-xl bg-[#101D45] text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save E-Voucher</span>
              </button>
              <button
                onClick={() => setSelectedBookingForModal(null)}
                className="px-5 py-3 rounded-xl border border-[#E8EAF0] text-xs font-bold text-[#57647E]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancellation Request Modal */}
      {cancelModalBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setCancelModalBooking(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#101D45]">Request Cancellation</h3>
                <div className="text-xs text-[#8F9BB3]">
                  Booking Reference: {cancelModalBooking.bookingCode}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#57647E] leading-relaxed">
              Are you sure you wish to cancel this reservation for <strong>{cancelModalBooking.itemTitle}</strong>?
            </p>

            <div>
              <label className="block text-xs font-bold text-[#101D45] mb-1">
                Reason for Cancellation
              </label>
              <select
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E8EAF0] text-xs font-semibold text-[#101D45]"
              >
                <option value="Change of travel dates">Change of travel dates</option>
                <option value="Flight delay / mountain weather">Flight delay / mountain weather</option>
                <option value="Health / altitude acclimatization">Health / altitude acclimatization</option>
                <option value="Found alternative itinerary">Found alternative itinerary</option>
              </select>
            </div>

            <div className="p-3 rounded-xl bg-[#FFF9EB] border border-[#FFB91F]/30 text-[11px] text-[#B7791F]">
              Refund policy: In prototype mode, 100% of the simulated fare ({formatNPR(cancelModalBooking.pricing.totalAmountNPR)}) will be credited to your test wallet.
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmCancel}
                className="flex-1 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs"
              >
                Confirm Cancellation
              </button>
              <button
                onClick={() => setCancelModalBooking(null)}
                className="px-4 py-3 rounded-xl border border-[#E8EAF0] text-xs font-bold text-[#57647E]"
              >
                Keep Trip
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

