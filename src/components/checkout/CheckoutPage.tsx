import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Lock, 
  QrCode, 
  CreditCard, 
  Wallet, 
  Building, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  MapPin,
  Calendar,
  Users,
  Armchair
} from 'lucide-react';
import { AppView, BookingRecord, ServiceCategory } from '../../types';
import { formatNPR } from '../../lib/utils';
import { toast } from 'sonner';

interface CheckoutPageProps {
  itemType: ServiceCategory;
  itemData: any; // TourItem | HotelItem | BusItem | ActivityItem
  prefillData?: any;
  onNavigate: (view: AppView) => void;
  onBookingCompleted: (newBooking: BookingRecord) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  itemType,
  itemData,
  prefillData = {},
  onNavigate,
  onBookingCompleted,
}) => {
  // Form fields
  const [fullName, setFullName] = useState('Aarav Sharma');
  const [email, setEmail] = useState('aarav.sharma@example.com');
  const [phone, setPhone] = useState('+977 9841234567');
  const [nationality, setNationality] = useState('Nepali');
  const [specialRequests, setSpecialRequests] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(0);

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'fonepay' | 'esewa' | 'khalti' | 'card' | 'pay_at_desk'>('fonepay');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculation based on itemType
  let title = itemData?.title || itemData?.operator || 'Nepal Travel Service';
  let image = itemData?.images ? itemData.images[0] : (itemData?.operator ? 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80' : '');
  let destination = itemData?.destination || itemData?.to || 'Nepal';
  let travelDate = prefillData.date || prefillData.checkIn || '2026-11-15';
  let returnDate = prefillData.checkOut || undefined;

  let baseAmount = 0;
  let quantityText = '';

  if (itemType === 'tours') {
    const trekkers = prefillData.travelers || 2;
    baseAmount = (itemData?.priceNPR || 68500) * trekkers;
    quantityText = `${trekkers} Adult Trekker(s)`;
  } else if (itemType === 'hotels') {
    const nights = prefillData.nights || 3;
    const roomPrice = prefillData.room?.priceNPR || itemData?.startingPriceNPR || 22000;
    baseAmount = roomPrice * nights;
    quantityText = `${prefillData.room?.name || 'Selected Room'} (${nights} Nights)`;
  } else if (itemType === 'bus') {
    const seats = prefillData.seats || ['3C'];
    baseAmount = prefillData.totalFare || (itemData?.priceNPR || 1850) * seats.length;
    quantityText = `${seats.length} VIP Seat(s): ${seats.join(', ')}`;
  } else {
    const count = prefillData.participants || 1;
    baseAmount = (itemData?.priceNPR || 8500) * count;
    quantityText = `${count} Participant(s) • ${prefillData.timeSlot || '09:30 AM'}`;
  }

  const taxesFee = Math.round(baseAmount * 0.05); // 5% service & conservation permit processing
  const totalAmount = baseAmount + taxesFee - discountApplied;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'GHUMIO2026' || promoCode.trim().toUpperCase() === 'NAMASTE') {
      const discount = Math.min(2000, Math.round(baseAmount * 0.1));
      setDiscountApplied(discount);
      toast.success(`Coupon code ${promoCode.toUpperCase()} applied! You saved ${formatNPR(discount)}.`);
    } else {
      toast.error('Invalid coupon. Try using GHUMIO2026 for a prototype discount.');
    }
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phone) {
      toast.error('Please complete all required traveler contact fields.');
      return;
    }

    setIsProcessing(true);

    // Simulate payment transaction
    setTimeout(() => {
      setIsProcessing(false);

      const newBooking: BookingRecord = {
        id: `book-gh-${Date.now().toString().slice(-4)}`,
        bookingCode: `GHM-${Math.floor(100000 + Math.random() * 900000)}`,
        serviceType: itemType,
        itemId: itemData.id,
        itemTitle: title,
        itemImage: image,
        destination: destination,
        travelDate: travelDate,
        returnDate: returnDate,
        quantityText: quantityText,
        selectedSeats: prefillData.seats,
        selectedRoomName: prefillData.room?.name,
        traveler: {
          fullName,
          email,
          phone,
          nationality,
          specialRequests
        },
        pricing: {
          baseAmountNPR: baseAmount,
          taxesAndServiceFeeNPR: taxesFee,
          discountNPR: discountApplied,
          totalAmountNPR: totalAmount
        },
        paymentMethod,
        paymentStatus: paymentMethod === 'pay_at_desk' ? 'pending' : 'paid',
        status: 'confirmed',
        confirmationType: 'instant',
        createdAt: new Date().toISOString().split('T')[0]
      };

      onBookingCompleted(newBooking);
      toast.success('Simulated booking confirmed! Voucher generated.');
      onNavigate({ type: 'booking-success', bookingId: newBooking.id });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="pb-6 border-b border-[#E8EAF0] flex items-center justify-between">
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#101D45] hover:text-[#1769F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Cancel and return to marketplace</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-[#15803D]">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure 256-Bit SSL Checkout</span>
          </div>
        </div>

        {/* Header */}
        <div className="pt-6 pb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight">
            Review Booking & Confirm
          </h1>
          <p className="text-xs sm:text-sm text-[#57647E] mt-1">
            Complete traveler contact details and select payment option to finalize your reservation.
          </p>
        </div>

        <form onSubmit={handleSubmitPayment} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Traveler Info & Payment Methods */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Traveler Information Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm">
              <h2 className="text-lg font-black text-[#101D45] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#F45B18]" />
                <span>Primary Traveler / Contact Details</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101D45] mb-1">
                    Full Name (As on Passport / Citizenship) *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold focus:outline-none focus:border-[#F45B18]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101D45] mb-1">
                    Email Address (For E-Ticket & Voucher) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold focus:outline-none focus:border-[#F45B18]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101D45] mb-1">
                    Mobile Phone (Nepal WhatsApp / SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold focus:outline-none focus:border-[#F45B18]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101D45] mb-1">
                    Nationality
                  </label>
                  <select
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-sm text-[#101D45] font-semibold focus:outline-none focus:border-[#F45B18]"
                  >
                    <option value="Nepali">Nepali Citizen</option>
                    <option value="International">International Tourist</option>
                    <option value="SAARC">SAARC Resident</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#101D45] mb-1">
                    Special Requests / Dietary Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Vegetarian meal during trek, window seat preference, late arrival notes..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8EAF0] text-xs text-[#101D45] focus:outline-none focus:border-[#F45B18]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8EAF0] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-[#101D45] flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#15803D]" />
                  <span>Choose Payment Method</span>
                </h2>
                <span className="text-[11px] font-bold text-[#FFB91F] bg-[#FFF9EB] px-2.5 py-1 rounded-full">
                  Prototype Sandbox
                </span>
              </div>

              {/* Payment Options Grid */}
              <div className="space-y-3">
                
                {/* Fonepay QR */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'fonepay' ? 'border-[#F45B18] bg-[#FFF2EB]/20' : 'border-[#E8EAF0] hover:border-[#D7DBE5]'
                }`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'fonepay'}
                    onChange={() => setPaymentMethod('fonepay')}
                    className="mt-1 accent-[#F45B18]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#101D45]">Fonepay QR (Recommended in Nepal)</span>
                      <span className="text-[11px] font-bold text-[#08C5C9] bg-[#E6FAFB] px-2 py-0.5 rounded-md">Instant Lock</span>
                    </div>
                    <p className="text-xs text-[#57647E] mt-0.5">
                      Scan QR from any Nepal banking app (Global IME, Nabil, NIC Asia, Everest, Siddhartha, etc.).
                    </p>
                  </div>
                </label>

                {/* eSewa */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'esewa' ? 'border-[#F45B18] bg-[#FFF2EB]/20' : 'border-[#E8EAF0] hover:border-[#D7DBE5]'
                }`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'esewa'}
                    onChange={() => setPaymentMethod('esewa')}
                    className="mt-1 accent-[#F45B18]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#101D45]">eSewa Mobile Wallet</span>
                      <span className="text-[11px] font-bold text-[#15803D] bg-[#E8F8EE] px-2 py-0.5 rounded-md">Nepal Wallet</span>
                    </div>
                    <p className="text-xs text-[#57647E] mt-0.5">
                      Direct digital settlement with your registered eSewa mobile ID.
                    </p>
                  </div>
                </label>

                {/* Khalti */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'khalti' ? 'border-[#F45B18] bg-[#FFF2EB]/20' : 'border-[#E8EAF0] hover:border-[#D7DBE5]'
                }`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'khalti'}
                    onChange={() => setPaymentMethod('khalti')}
                    className="mt-1 accent-[#F45B18]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-sm text-[#101D45]">Khalti Digital Wallet</span>
                    <p className="text-xs text-[#57647E] mt-0.5">Pay via Khalti balance or Khalti bank portal.</p>
                  </div>
                </label>

                {/* Credit / Debit Card */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'border-[#F45B18] bg-[#FFF2EB]/20' : 'border-[#E8EAF0] hover:border-[#D7DBE5]'
                }`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="mt-1 accent-[#F45B18]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-sm text-[#101D45]">Credit / Debit Card (Visa / Mastercard)</span>
                    <p className="text-xs text-[#57647E] mt-0.5">Supports both domestic SCT and international foreign cards.</p>
                  </div>
                </label>

                {/* Pay at Desk */}
                <label className={`flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'pay_at_desk' ? 'border-[#F45B18] bg-[#FFF2EB]/20' : 'border-[#E8EAF0] hover:border-[#D7DBE5]'
                }`}>
                  <input
                    type="radio"
                    name="payMethod"
                    checked={paymentMethod === 'pay_at_desk'}
                    onChange={() => setPaymentMethod('pay_at_desk')}
                    className="mt-1 accent-[#F45B18]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-sm text-[#101D45]">Pay at Departure Desk / Hotel Check-in</span>
                    <p className="text-xs text-[#57647E] mt-0.5">Reserve online; pay cash in NPR directly to the bus or hotel counter.</p>
                  </div>
                </label>

              </div>

              {/* Prototype Simulation Notice */}
              <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] text-xs text-[#57647E] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#FFB91F] shrink-0 mt-0.5" />
                <span>
                  <strong>Prototype Simulation Mode:</strong> Submitting will instantly simulate an authorized transaction and create a valid test voucher. No actual funds are deducted.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary & Total */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#E8EAF0] shadow-card space-y-6">
              
              <h3 className="text-lg font-black text-[#101D45] pb-4 border-b border-[#E8EAF0]">
                Reservation Summary
              </h3>

              {/* Item Card */}
              <div className="flex items-start gap-4">
                <img
                  src={image}
                  alt={title}
                  className="w-20 h-20 rounded-2xl object-cover border border-[#E8EAF0] shrink-0"
                />
                <div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EEF4FE] text-[#1769F5]">
                    {itemType}
                  </span>
                  <h4 className="font-bold text-sm text-[#101D45] mt-1 line-clamp-2">
                    {title}
                  </h4>
                  <div className="text-xs text-[#57647E] mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F45B18]" />
                    <span>{destination}</span>
                  </div>
                </div>
              </div>

              {/* Detail Items */}
              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] space-y-2 text-xs text-[#57647E]">
                <div className="flex justify-between">
                  <span>Travel Date:</span>
                  <span className="font-bold text-[#101D45]">{travelDate}</span>
                </div>
                {returnDate && (
                  <div className="flex justify-between">
                    <span>Return / Check-out:</span>
                    <span className="font-bold text-[#101D45]">{returnDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Booking Scope:</span>
                  <span className="font-bold text-[#101D45]">{quantityText}</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-1.5">
                  Have a Promo Voucher?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter GHUMIO2026"
                    className="flex-1 px-3 py-2 rounded-xl border border-[#E8EAF0] text-xs text-[#101D45] font-semibold focus:outline-none focus:border-[#F45B18]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 rounded-xl bg-[#101D45] text-white text-xs font-bold hover:bg-[#F45B18] transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="space-y-2.5 pt-4 border-t border-[#E8EAF0] text-xs text-[#57647E]">
                <div className="flex justify-between">
                  <span>Base Rate</span>
                  <span className="font-semibold text-[#101D45]">{formatNPR(baseAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Permits, Taxes & Service Fee</span>
                  <span className="font-semibold text-[#101D45]">{formatNPR(taxesFee)}</span>
                </div>
                {discountApplied > 0 && (
                  <div className="flex justify-between text-[#15803D] font-bold">
                    <span>Voucher Discount</span>
                    <span>-{formatNPR(discountApplied)}</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-[#E8EAF0] text-base font-black text-[#101D45]">
                  <span>Total Due (NPR)</span>
                  <span className="text-xl text-[#F45B18]">{formatNPR(totalAmount)}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-[#F45B18] hover:bg-[#DF4810] disabled:opacity-75 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Authorizing Simulated Voucher...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Confirm & Pay {formatNPR(totalAmount)}</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-center text-[#8F9BB3]">
                By confirming, you agree to Ghumio's Nepal Operator Cancellation Policy.
              </div>

            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
