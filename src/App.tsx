import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { AppView, ServiceCategory, TourItem, HotelItem, BusItem, ActivityItem, BookingRecord, HotelRoom } from './types';
import { TOURS_DATA, HOTELS_DATA, BUSES_DATA, ACTIVITIES_DATA, INITIAL_BOOKINGS } from './data/mockData';

// Layout & Common
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// Home Views
import { HeroSearch } from './components/home/HeroSearch';
import { DestinationGrid } from './components/home/DestinationGrid';
import { EscapeMoodSection } from './components/home/EscapeMoodSection';
import { FeaturedTours } from './components/home/FeaturedTours';
import { TravelStorySection } from './components/home/TravelStorySection';
import { BusRoutesSection } from './components/home/BusRoutesSection';
import { FeaturedStays } from './components/home/FeaturedStays';
import { ActivitiesSection } from './components/home/ActivitiesSection';
import { TrustAndReassurance } from './components/home/TrustAndReassurance';

// Search & Details
import { SearchResultsPage } from './components/search/SearchResultsPage';
import { TourDetailPage } from './components/details/TourDetailPage';
import { HotelDetailPage } from './components/details/HotelDetailPage';
import { BusDetailPage } from './components/details/BusDetailPage';
import { ActivityDetailPage } from './components/details/ActivityDetailPage';

// Booking & Account
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { BookingSuccessPage } from './components/checkout/BookingSuccessPage';
import { MyTripsPage } from './components/account/MyTripsPage';
import { ProfilePage } from './components/account/ProfilePage';

// Portals
import { SupplierPortalPage } from './components/supplier/SupplierPortalPage';
import { AdminDashboardPage } from './components/admin/AdminDashboardPage';

export function App() {
  const [currentView, setCurrentView] = useState<AppView>({ type: 'home' });
  const [bookings, setBookings] = useState<BookingRecord[]>(INITIAL_BOOKINGS);

  // Active bookings count for badge
  const activeBookingsCount = bookings.filter((b) => b.status === 'confirmed' || b.status === 'pending').length;

  // Checkout prefill state
  const [checkoutData, setCheckoutData] = useState<{
    itemType: ServiceCategory;
    itemData: any;
    prefillData: any;
  } | null>(null);

  // Active success booking
  const [lastCreatedBooking, setLastCreatedBooking] = useState<BookingRecord | null>(null);

  // Navigation Helper
  const handleNavigate = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Search Handler
  const handleSearch = (category: ServiceCategory, query?: string, destination?: string) => {
    setCurrentView({
      type: 'search',
      category,
      query,
      destination,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Tour selection
  const handleSelectTour = (id: string) => {
    setCurrentView({ type: 'tour-detail', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hotel selection
  const handleSelectHotel = (id: string) => {
    setCurrentView({ type: 'hotel-detail', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Bus selection
  const handleSelectBus = (id: string) => {
    setCurrentView({ type: 'bus-detail', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Activity selection
  const handleSelectActivity = (id: string) => {
    setCurrentView({ type: 'activity-detail', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Checkout Handlers
  const handleProceedTourCheckout = (tour: TourItem, date: string, travelers: number) => {
    setCheckoutData({
      itemType: 'tours',
      itemData: tour,
      prefillData: { date, travelers },
    });
    setCurrentView({ type: 'checkout', itemType: 'tours', itemId: tour.id, prefillData: { date, travelers } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedHotelCheckout = (hotel: HotelItem, room: HotelRoom, checkIn: string, checkOut: string, nights: number) => {
    setCheckoutData({
      itemType: 'hotels',
      itemData: hotel,
      prefillData: { room, checkIn, checkOut, nights },
    });
    setCurrentView({ type: 'checkout', itemType: 'hotels', itemId: hotel.id, prefillData: { room, checkIn, checkOut, nights } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedBusCheckout = (bus: BusItem, selectedSeatNumbers: string[], totalFare: number) => {
    setCheckoutData({
      itemType: 'bus',
      itemData: bus,
      prefillData: { seats: selectedSeatNumbers, totalFare },
    });
    setCurrentView({ type: 'checkout', itemType: 'bus', itemId: bus.id, prefillData: { seats: selectedSeatNumbers, totalFare } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedActivityCheckout = (activity: ActivityItem, date: string, timeSlot: string, participants: number) => {
    setCheckoutData({
      itemType: 'activities',
      itemData: activity,
      prefillData: { date, timeSlot, participants },
    });
    setCurrentView({ type: 'checkout', itemType: 'activities', itemId: activity.id, prefillData: { date, timeSlot, participants } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingCompleted = (newBooking: BookingRecord) => {
    setBookings([newBooking, ...bookings]);
    setLastCreatedBooking(newBooking);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings.map((b) => b.id === bookingId ? { ...b, status: 'cancelled' } : b));
  };

  // Determine if header & footer should render (for customer flow vs dedicated portals)
  const isDedicatedPortal = currentView.type === 'supplier-portal' || currentView.type === 'admin-dashboard';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF7] text-[#101D45] selection:bg-[#F45B18]/15 selection:text-[#F45B18]">
      <Toaster position="top-right" richColors />

      {!isDedicatedPortal && (
        <Header 
          currentView={currentView} 
          onNavigate={handleNavigate}
          activeTripsCount={activeBookingsCount}
        />
      )}

      <main className="flex-1">
        {/* VIEW: HOME */}
        {currentView.type === 'home' && (
          <>
            <HeroSearch 
              onSearch={handleSearch} 
              onNavigate={handleNavigate} 
            />
            <DestinationGrid 
              onSelectDestination={(dest) => handleSearch('tours', dest, dest)} 
            />
            <EscapeMoodSection
              onSelectEscape={(cat, query) => handleSearch(cat, query, query)}
            />
            <FeaturedTours 
              onSelectTour={handleSelectTour} 
              onExploreMore={() => handleSearch('tours')} 
            />
            <TravelStorySection
              onExploreJourneys={() => handleSearch('tours')}
            />
            <BusRoutesSection 
              onSelectBus={handleSelectBus} 
              onExploreMore={() => handleSearch('bus')} 
            />
            <FeaturedStays 
              onSelectHotel={handleSelectHotel} 
              onExploreMore={() => handleSearch('hotels')} 
            />
            <ActivitiesSection 
              onSelectActivity={handleSelectActivity} 
              onExploreMore={() => handleSearch('activities')} 
            />
            <TrustAndReassurance 
              onNavigate={handleNavigate} 
            />
          </>
        )}

        {/* VIEW: SEARCH RESULTS */}
        {currentView.type === 'search' && (
          <SearchResultsPage
            key={`${currentView.category}-${currentView.destination || ''}-${currentView.query || ''}`}
            initialCategory={currentView.category}
            initialQuery={currentView.query}
            initialDestination={currentView.destination}
            onNavigate={handleNavigate}
          />
        )}

        {/* VIEW: TOUR DETAIL */}
        {currentView.type === 'tour-detail' && (() => {
          const tour = TOURS_DATA.find((t) => t.id === currentView.id) || TOURS_DATA[0];
          return (
            <TourDetailPage
              tour={tour}
              onNavigate={handleNavigate}
              onProceedCheckout={handleProceedTourCheckout}
            />
          );
        })()}

        {/* VIEW: HOTEL DETAIL */}
        {currentView.type === 'hotel-detail' && (() => {
          const hotel = HOTELS_DATA.find((h) => h.id === currentView.id) || HOTELS_DATA[0];
          return (
            <HotelDetailPage
              hotel={hotel}
              onNavigate={handleNavigate}
              onProceedCheckout={handleProceedHotelCheckout}
            />
          );
        })()}

        {/* VIEW: BUS DETAIL */}
        {currentView.type === 'bus-detail' && (() => {
          const bus = BUSES_DATA.find((b) => b.id === currentView.id) || BUSES_DATA[0];
          return (
            <BusDetailPage
              bus={bus}
              onNavigate={handleNavigate}
              onProceedCheckout={handleProceedBusCheckout}
            />
          );
        })()}

        {/* VIEW: ACTIVITY DETAIL */}
        {currentView.type === 'activity-detail' && (() => {
          const act = ACTIVITIES_DATA.find((a) => a.id === currentView.id) || ACTIVITIES_DATA[0];
          return (
            <ActivityDetailPage
              activity={act}
              onNavigate={handleNavigate}
              onProceedCheckout={handleProceedActivityCheckout}
            />
          );
        })()}

        {/* VIEW: CHECKOUT */}
        {currentView.type === 'checkout' && checkoutData && (
          <CheckoutPage
            itemType={checkoutData.itemType}
            itemData={checkoutData.itemData}
            prefillData={checkoutData.prefillData}
            onNavigate={handleNavigate}
            onBookingCompleted={handleBookingCompleted}
          />
        )}

        {/* VIEW: BOOKING SUCCESS */}
        {currentView.type === 'booking-success' && (() => {
          const booking = bookings.find((b) => b.id === currentView.bookingId) || lastCreatedBooking || bookings[0];
          return (
            <BookingSuccessPage
              booking={booking}
              onNavigate={handleNavigate}
            />
          );
        })()}

        {/* VIEW: MY TRIPS */}
        {currentView.type === 'my-trips' && (
          <MyTripsPage
            bookings={bookings}
            onNavigate={handleNavigate}
            onCancelBooking={handleCancelBooking}
          />
        )}

        {/* VIEW: PROFILE */}
        {currentView.type === 'account-profile' && (
          <ProfilePage onNavigate={handleNavigate} />
        )}

        {/* VIEW: SUPPLIER PORTAL */}
        {currentView.type === 'supplier-portal' && (
          <SupplierPortalPage onNavigate={handleNavigate} />
        )}

        {/* VIEW: ADMIN DASHBOARD */}
        {currentView.type === 'admin-dashboard' && (
          <AdminDashboardPage onNavigate={handleNavigate} />
        )}
      </main>

      {!isDedicatedPortal && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;

