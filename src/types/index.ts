export type ServiceCategory = 'tours' | 'hotels' | 'bus' | 'activities';

export type DestinationId = 'pokhara' | 'kathmandu' | 'annapurna' | 'everest' | 'chitwan' | 'mustang' | 'bandipur' | 'rara';

export interface TourItem {
  id: string;
  title: string;
  destination: string;
  region: string;
  duration: string;
  durationDays: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  groupSize: string;
  travelStyle: string;
  priceNPR: number;
  originalPriceNPR?: number;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  badge?: string;
  images: string[];
  overview: string;
  highlights: string[];
  itinerary: { day: number; title: string; desc: string; altitude?: string }[];
  included: string[];
  excluded: string[];
  meetingPoint: string;
  cancellationPolicy: string;
  provider: {
    name: string;
    verified: boolean;
    rating: number;
    experienceYears: number;
  };
}

export interface HotelRoom {
  id: string;
  name: string;
  capacity: number;
  bedType: string;
  sizeSqFt: number;
  priceNPR: number;
  originalPriceNPR?: number;
  availableRooms: number;
  perks: string[];
  images: string[];
}

export interface HotelItem {
  id: string;
  title: string;
  destination: string;
  location: string;
  address: string;
  propertyType: 'Resort' | 'Boutique Hotel' | 'Eco Lodge' | 'Heritage Stay' | 'Guesthouse';
  starRating: number;
  rating: number;
  reviewCount: number;
  startingPriceNPR: number;
  images: string[];
  overview: string;
  amenities: string[];
  rooms: HotelRoom[];
  checkIn: string;
  checkOut: string;
  cancellationPolicy: string;
  featured?: boolean;
}

export interface BusSeat {
  seatNumber: string;
  row: number;
  col: number; // 0, 1 = left side, 2 = aisle, 3, 4 = right side
  type: 'standard' | 'business' | 'sleeper';
  isBooked: boolean;
  priceNPR: number;
}

export interface BusItem {
  id: string;
  operator: string;
  busNumber: string;
  busType: 'Super Deluxe AC' | 'VIP Sofa Seater' | 'Tourist Express AC' | 'Sleeper Deluxe';
  from: string;
  to: string;
  departureStation: string;
  arrivalStation: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  priceNPR: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  seats: BusSeat[];
  totalSeats: number;
  availableSeats: number;
  featured?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  destination: string;
  location: string;
  category: 'Paragliding' | 'White Water Rafting' | 'Bungee & Canyon' | 'Jungle Safari' | 'Heritage & Culture' | 'Helicopter Tour';
  duration: string;
  durationHours: number;
  priceNPR: number;
  originalPriceNPR?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  overview: string;
  highlights: string[];
  included: string[];
  requirements: string[];
  timeSlots: string[];
  provider: {
    name: string;
    verified: boolean;
    license: string;
  };
  featured?: boolean;
}

export interface DestinationCard {
  id: string;
  name: string;
  tagline: string;
  image: string;
  tourCount: number;
  stayCount: number;
  altitude?: string;
  popularFor: string[];
}

export interface BookingRecord {
  id: string;
  bookingCode: string;
  serviceType: ServiceCategory;
  itemId: string;
  itemTitle: string;
  itemImage: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  quantityText: string;
  selectedSeats?: string[];
  selectedRoomName?: string;
  traveler: {
    fullName: string;
    email: string;
    phone: string;
    nationality: string;
    specialRequests?: string;
  };
  pricing: {
    baseAmountNPR: number;
    taxesAndServiceFeeNPR: number;
    discountNPR: number;
    totalAmountNPR: number;
  };
  paymentMethod: 'fonepay' | 'esewa' | 'khalti' | 'card' | 'pay_at_desk';
  paymentStatus: 'paid' | 'pending';
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  confirmationType: 'instant' | 'supplier_review';
  createdAt: string;
}

export type AppView = 
  | { type: 'home' }
  | { type: 'search'; category: ServiceCategory; query?: string; destination?: string }
  | { type: 'tour-detail'; id: string }
  | { type: 'hotel-detail'; id: string }
  | { type: 'bus-detail'; id: string }
  | { type: 'activity-detail'; id: string }
  | { type: 'checkout'; itemType: ServiceCategory; itemId: string; prefillData?: any }
  | { type: 'booking-success'; bookingId: string }
  | { type: 'my-trips' }
  | { type: 'account-profile' }
  | { type: 'supplier-portal'; tab?: string }
  | { type: 'admin-dashboard'; tab?: string };
