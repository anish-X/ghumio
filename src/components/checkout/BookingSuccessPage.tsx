import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  Printer, 
  MapPin, 
  Calendar, 
  Users, 
  QrCode, 
  Luggage, 
  ArrowRight,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { BookingRecord, AppView } from '../../types';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface BookingSuccessPageProps {
  booking: BookingRecord;
  onNavigate: (view: AppView) => void;
}

export const BookingSuccessPage: React.FC<BookingSuccessPageProps> = ({ booking, onNavigate }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadVoucher = () => {
    toast.success(`Digital E-Voucher (${booking.bookingCode}.pdf) saved to downloads.`);
  };

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Success Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8EAF0] shadow-card text-center">
          
          <div className="w-16 h-16 rounded-full bg-[#E8F8EE] text-[#15803D] mx-auto flex items-center justify-center mb-4">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E8F8EE] text-[#15803D] inline-block mb-2">
            ✓ Instant Booking Confirmed
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
            Thank you, {booking.traveler.fullName}!
          </h1>

          <p className="text-xs sm:text-sm text-[#57647E] mt-1">
            Your booking confirmation has been issued and sent to <strong>{booking.traveler.email}</strong>.
          </p>

          {/* Reference Banner */}
          <div className="my-6 p-4 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-xs text-[#8F9BB3] font-semibold">Ghumio Booking Reference</div>
              <div className="text-xl font-mono font-black text-[#101D45]">{booking.bookingCode}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadVoucher}
                className="px-3.5 py-2 rounded-xl bg-white border border-[#E8EAF0] text-xs font-bold text-[#101D45] hover:bg-[#F1F4F9] flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF Voucher</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-white border border-[#E8EAF0] text-xs font-bold text-[#101D45] hover:bg-[#F1F4F9] flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Booking Summary Box */}
          <div className="text-left p-6 rounded-2xl border border-[#E8EAF0] bg-white space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-[#E8EAF0]">
              {booking.itemImage && (
                <img
                  src={booking.itemImage}
                  alt={booking.itemTitle}
                  className="w-16 h-16 rounded-xl object-cover border border-[#E8EAF0] shrink-0"
                />
              )}
              <div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EEF4FE] text-[#1769F5]">
                  {booking.serviceType}
                </span>
                <h3 className="font-bold text-base text-[#101D45] mt-1">{booking.itemTitle}</h3>
                <div className="text-xs text-[#57647E] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#F45B18]" />
                  <span>{booking.destination}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-[#57647E]">
              <div>
                <div className="text-[#8F9BB3] font-medium">Travel Date</div>
                <div className="font-bold text-[#101D45] text-sm mt-0.5">{booking.travelDate}</div>
              </div>

              <div>
                <div className="text-[#8F9BB3] font-medium">Booking Scope</div>
                <div className="font-bold text-[#101D45] text-sm mt-0.5">{booking.quantityText}</div>
              </div>

              <div>
                <div className="text-[#8F9BB3] font-medium">Payment Method</div>
                <div className="font-bold text-[#101D45] capitalize mt-0.5">{booking.paymentMethod} (Authorized)</div>
              </div>

              <div>
                <div className="text-[#8F9BB3] font-medium">Total Amount Paid</div>
                <div className="font-black text-[#F45B18] text-sm mt-0.5">{formatNPR(booking.pricing.totalAmountNPR)}</div>
              </div>
            </div>

            {/* QR Code Voucher Graphic */}
            <div className="pt-4 border-t border-[#E8EAF0] flex items-center justify-between">
              <div className="text-xs text-[#57647E]">
                <div className="font-bold text-[#101D45]">Check-in QR Code</div>
                <p className="text-[11px] text-[#8F9BB3]">Show this code on departure or check-in.</p>
              </div>
              <div className="w-14 h-14 rounded-xl bg-slate-900 text-white flex items-center justify-center p-1">
                <QrCode className="w-10 h-10" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate({ type: 'my-trips' })}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#101D45] hover:bg-[#1A2A5E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Luggage className="w-4 h-4 text-[#F45B18]" />
              <span>Go to My Trips</span>
            </button>

            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white border border-[#E8EAF0] hover:bg-[#F7F8FA] text-[#101D45] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore More of Nepal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 text-[11px] text-[#8F9BB3]">
            Need immediate changes? Call our 24/7 Kathmandu operations desk at <strong>+977 1 4412345</strong>.
          </div>

        </div>

      </div>
    </div>
  );
};
