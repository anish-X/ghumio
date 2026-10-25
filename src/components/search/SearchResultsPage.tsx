import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  Hotel, 
  Bus, 
  Sparkles, 
  Filter, 
  X, 
  ChevronDown, 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpDown,
  RotateCcw,
  SlidersHorizontal,
  Armchair
} from 'lucide-react';
import { ServiceCategory, AppView, TourItem, HotelItem, BusItem, ActivityItem } from '../../types';
import { TOURS_DATA, HOTELS_DATA, BUSES_DATA, ACTIVITIES_DATA } from '../../data/mockData';
import { formatNPR } from '../../lib/utils';

interface SearchResultsPageProps {
  initialCategory: ServiceCategory;
  initialQuery?: string;
  initialDestination?: string;
  onNavigate: (view: AppView) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  initialCategory,
  initialQuery = '',
  initialDestination = '',
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating-desc'>('recommended');

  // Filter States
  const [maxPrice, setMaxPrice] = useState<number>(150000);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('All');
  const [selectedBusType, setSelectedBusType] = useState<string>('All');
  const [selectedActivityCategory, setSelectedActivityCategory] = useState<string>('All');
  const [minRating, setMinRating] = useState<number>(0);

  // Reset Filters
  const handleResetFilters = () => {
    setMaxPrice(150000);
    setSelectedDifficulty('All');
    setSelectedPropertyType('All');
    setSelectedBusType('All');
    setSelectedActivityCategory('All');
    setMinRating(0);
    setSearchQuery('');
    setSelectedDestination('');
  };

  // Filter and Sort Tours
  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      const matchDest = !selectedDestination || selectedDestination === 'All Nepal' || 
        tour.destination.toLowerCase().includes(selectedDestination.toLowerCase()) ||
        tour.region.toLowerCase().includes(selectedDestination.toLowerCase());
      const matchQuery = !searchQuery || 
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = tour.priceNPR <= maxPrice;
      const matchDiff = selectedDifficulty === 'All' || tour.difficulty === selectedDifficulty;
      const matchRating = tour.rating >= minRating;
      return matchDest && matchQuery && matchPrice && matchDiff && matchRating;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNPR - b.priceNPR;
      if (sortBy === 'price-desc') return b.priceNPR - a.priceNPR;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedDestination, searchQuery, maxPrice, selectedDifficulty, minRating, sortBy]);

  // Filter and Sort Hotels
  const filteredHotels = useMemo(() => {
    return HOTELS_DATA.filter((hotel) => {
      const matchDest = !selectedDestination || selectedDestination === 'All Nepal' || 
        hotel.destination.toLowerCase().includes(selectedDestination.toLowerCase()) ||
        hotel.location.toLowerCase().includes(selectedDestination.toLowerCase());
      const matchQuery = !searchQuery || 
        hotel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = hotel.startingPriceNPR <= maxPrice;
      const matchType = selectedPropertyType === 'All' || hotel.propertyType === selectedPropertyType;
      const matchRating = hotel.rating >= minRating;
      return matchDest && matchQuery && matchPrice && matchType && matchRating;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.startingPriceNPR - b.startingPriceNPR;
      if (sortBy === 'price-desc') return b.startingPriceNPR - a.startingPriceNPR;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedDestination, searchQuery, maxPrice, selectedPropertyType, minRating, sortBy]);

  // Filter and Sort Buses
  const filteredBuses = useMemo(() => {
    return BUSES_DATA.filter((bus) => {
      const matchDest = !selectedDestination || selectedDestination === 'All Nepal' || 
        bus.to.toLowerCase().includes(selectedDestination.toLowerCase()) ||
        bus.from.toLowerCase().includes(selectedDestination.toLowerCase());
      const matchQuery = !searchQuery || 
        bus.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bus.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bus.to.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = bus.priceNPR <= maxPrice;
      const matchType = selectedBusType === 'All' || bus.busType.includes(selectedBusType);
      const matchRating = bus.rating >= minRating;
      return matchDest && matchQuery && matchPrice && matchType && matchRating;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNPR - b.priceNPR;
      if (sortBy === 'price-desc') return b.priceNPR - a.priceNPR;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedDestination, searchQuery, maxPrice, selectedBusType, minRating, sortBy]);

  // Filter and Sort Activities
  const filteredActivities = useMemo(() => {
    return ACTIVITIES_DATA.filter((act) => {
      const matchDest = !selectedDestination || selectedDestination === 'All Nepal' || 
        act.destination.toLowerCase().includes(selectedDestination.toLowerCase()) ||
        act.location.toLowerCase().includes(selectedDestination.toLowerCase());
      const matchQuery = !searchQuery || 
        act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = act.priceNPR <= maxPrice;
      const matchCat = selectedActivityCategory === 'All' || act.category === selectedActivityCategory;
      const matchRating = act.rating >= minRating;
      return matchDest && matchQuery && matchPrice && matchCat && matchRating;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNPR - b.priceNPR;
      if (sortBy === 'price-desc') return b.priceNPR - a.priceNPR;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedDestination, searchQuery, maxPrice, selectedActivityCategory, minRating, sortBy]);

  const currentCount = 
    activeCategory === 'tours' ? filteredTours.length :
    activeCategory === 'hotels' ? filteredHotels.length :
    activeCategory === 'bus' ? filteredBuses.length :
    filteredActivities.length;

  return (
    <div className="min-h-screen bg-[#FFFCF7] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Category Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8EAF0]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8F9BB3] mb-1">
              <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-[#101D45]">Home</button>
              <span>/</span>
              <span className="capitalize text-[#101D45]">{activeCategory}</span>
              {selectedDestination && (
                <>
                  <span>/</span>
                  <span className="text-[#F45B18]">{selectedDestination}</span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#101D45] tracking-tight flex items-center gap-2.5">
              <span>Explore Nepal</span>
              <span className="text-[#F45B18] capitalize">{activeCategory}</span>
              <span className="text-sm font-semibold text-[#8F9BB3] bg-white px-2.5 py-1 rounded-full border border-[#E8EAF0]">
                {currentCount} results
              </span>
            </h1>
          </div>

          {/* Category Switcher Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'tours', label: 'Tours', icon: <Compass className="w-4 h-4" /> },
              { id: 'hotels', label: 'Hotels', icon: <Hotel className="w-4 h-4" /> },
              { id: 'bus', label: 'Buses', icon: <Bus className="w-4 h-4" /> },
              { id: 'activities', label: 'Activities', icon: <Sparkles className="w-4 h-4" /> },
            ].map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as ServiceCategory);
                    handleResetFilters();
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#101D45] text-white shadow-sm'
                      : 'bg-white text-[#57647E] border border-[#E8EAF0] hover:bg-[#F7F8FA]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Filter Bar (Secondary) */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E8EAF0] text-xs font-bold text-[#101D45]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#F45B18]" />
              <span>Filters ({currentCount})</span>
            </button>

            {/* Quick Filter: Region */}
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-[#E8EAF0] text-xs font-semibold text-[#101D45] focus:outline-none"
            >
              <option value="">All Regions</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Annapurna">Annapurna</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Everest">Everest</option>
              <option value="Chitwan">Chitwan</option>
              <option value="Mustang">Mustang</option>
              <option value="Bandipur">Bandipur</option>
            </select>

            {(selectedDestination || searchQuery || selectedDifficulty !== 'All' || minRating > 0) && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#DC2626] hover:bg-[#FEE2E2]/40 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all</span>
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8F9BB3] font-medium hidden sm:inline">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#E8EAF0] text-xs font-bold text-[#101D45] focus:outline-none cursor-pointer"
            >
              <option value="recommended">Featured / Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Guest Rating: Highest First</option>
            </select>
          </div>
        </div>

        {/* Main Content Layout (Sidebar Filters + Results List) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6 bg-white p-6 rounded-3xl border border-[#E8EAF0] shadow-sm h-fit">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EAF0]">
              <div className="flex items-center gap-2 font-bold text-sm text-[#101D45]">
                <Filter className="w-4 h-4 text-[#F45B18]" />
                <span>Filter Experiences</span>
              </div>
              <button onClick={handleResetFilters} className="text-xs text-[#1769F5] hover:underline font-semibold">
                Clear all
              </button>
            </div>

            {/* Price Range Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-[#101D45] mb-2">
                <span>Maximum Price</span>
                <span className="text-[#F45B18] font-black">{formatNPR(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={150000}
                step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#F45B18] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8F9BB3] mt-1 font-medium">
                <span>NPR 1,000</span>
                <span>NPR 150,000</span>
              </div>
            </div>

            {/* Category-Specific Filters */}
            {activeCategory === 'tours' && (
              <div className="pt-4 border-t border-[#E8EAF0]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-2">
                  Trek Difficulty
                </label>
                <div className="space-y-1.5">
                  {['All', 'Easy', 'Moderate', 'Challenging', 'Strenuous'].map((diff) => (
                    <label key={diff} className="flex items-center gap-2 text-xs font-semibold text-[#57647E] cursor-pointer hover:text-[#101D45]">
                      <input
                        type="radio"
                        name="difficulty"
                        checked={selectedDifficulty === diff}
                        onChange={() => setSelectedDifficulty(diff)}
                        className="accent-[#F45B18]"
                      />
                      <span>{diff}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'hotels' && (
              <div className="pt-4 border-t border-[#E8EAF0]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-2">
                  Property Type
                </label>
                <div className="space-y-1.5">
                  {['All', 'Resort', 'Heritage Stay', 'Eco Lodge', 'Boutique Hotel'].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-xs font-semibold text-[#57647E] cursor-pointer hover:text-[#101D45]">
                      <input
                        type="radio"
                        name="propType"
                        checked={selectedPropertyType === type}
                        onChange={() => setSelectedPropertyType(type)}
                        className="accent-[#F45B18]"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'bus' && (
              <div className="pt-4 border-t border-[#E8EAF0]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-2">
                  Coach Class
                </label>
                <div className="space-y-1.5">
                  {['All', 'Sofa', 'Super Deluxe', 'Tourist Express'].map((bType) => (
                    <label key={bType} className="flex items-center gap-2 text-xs font-semibold text-[#57647E] cursor-pointer hover:text-[#101D45]">
                      <input
                        type="radio"
                        name="busClass"
                        checked={selectedBusType === bType}
                        onChange={() => setSelectedBusType(bType)}
                        className="accent-[#F45B18]"
                      />
                      <span>{bType === 'Sofa' ? '2x1 VIP Sofa Seater' : bType}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeCategory === 'activities' && (
              <div className="pt-4 border-t border-[#E8EAF0]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-2">
                  Activity Genre
                </label>
                <div className="space-y-1.5">
                  {['All', 'Paragliding', 'Bungee & Canyon', 'White Water Rafting', 'Helicopter Tour'].map((genre) => (
                    <label key={genre} className="flex items-center gap-2 text-xs font-semibold text-[#57647E] cursor-pointer hover:text-[#101D45]">
                      <input
                        type="radio"
                        name="actGenre"
                        checked={selectedActivityCategory === genre}
                        onChange={() => setSelectedActivityCategory(genre)}
                        className="accent-[#F45B18]"
                      />
                      <span>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Minimum Rating Filter */}
            <div className="pt-4 border-t border-[#E8EAF0]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#8F9BB3] mb-2">
                Minimum Guest Rating
              </label>
              <div className="space-y-1.5">
                {[
                  { label: 'Any Rating', val: 0 },
                  { label: '4.8★ & above (Superb)', val: 4.8 },
                  { label: '4.5★ & above (Very Good)', val: 4.5 },
                ].map((item) => (
                  <label key={item.val} className="flex items-center gap-2 text-xs font-semibold text-[#57647E] cursor-pointer hover:text-[#101D45]">
                    <input
                      type="radio"
                      name="minRate"
                      checked={minRating === item.val}
                      onChange={() => setMinRating(item.val)}
                      className="accent-[#F45B18]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reassurance Banner */}
            <div className="pt-4 border-t border-[#E8EAF0]">
              <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-[#E8EAF0] text-xs text-[#57647E]">
                <div className="font-bold text-[#101D45] flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                  <span>Transparent Rates</span>
                </div>
                All prices are fixed in Nepalese Rupees (NPR). No tourist double-pricing markups.
              </div>
            </div>

          </aside>

          {/* Results Grid List */}
          <div className="lg:col-span-3">
            
            {/* If zero results */}
            {currentCount === 0 && (
              <div className="p-12 text-center bg-white rounded-3xl border border-[#E8EAF0] shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#FFF2EB] text-[#F45B18] mx-auto flex items-center justify-center mb-4">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#101D45]">No matches found</h3>
                <p className="text-sm text-[#57647E] mt-1 max-w-sm mx-auto">
                  Try widening your price range, clearing specific filters, or searching another Himalayan destination.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-[#F45B18] text-white font-bold text-xs shadow-sm hover:bg-[#DF4810]"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Tours Results */}
            {activeCategory === 'tours' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    onClick={() => onNavigate({ type: 'tour-detail', id: tour.id })}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-card card-hover-lift cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
                            {tour.difficulty}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#FFB91F]" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between text-xs text-[#8F9BB3] mb-2 font-medium">
                          <span className="flex items-center gap-1 text-[#57647E]">
                            <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                            {tour.destination}
                          </span>
                          <span className="flex items-center gap-1 text-[#101D45] font-bold">
                            <Star className="w-3.5 h-3.5 fill-[#FFB91F] text-[#FFB91F]" />
                            {tour.rating} ({tour.reviewCount})
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-2">
                          {tour.title}
                        </h3>

                        <p className="mt-2 text-xs text-[#57647E] line-clamp-2">
                          {tour.overview}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-[#8F9BB3]">From / person</div>
                          <div className="text-lg font-black text-[#101D45]">{formatNPR(tour.priceNPR)}</div>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-[#1769F5] text-white font-bold text-xs hover:bg-[#0E56D1]">
                          View Itinerary
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Hotels Results */}
            {activeCategory === 'hotels' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    onClick={() => onNavigate({ type: 'hotel-detail', id: hotel.id })}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-card card-hover-lift cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img src={hotel.images[0]} alt={hotel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
                            {hotel.propertyType}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-md text-[#101D45] text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#FFB91F] text-[#FFB91F]" />
                          <span>{hotel.rating}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="text-xs text-[#57647E] mb-1 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                          <span>{hotel.location}</span>
                        </div>
                        <h3 className="text-base font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-1">
                          {hotel.title}
                        </h3>
                        <p className="mt-2 text-xs text-[#57647E] line-clamp-2">{hotel.overview}</p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-[#8F9BB3]">From / night</div>
                          <div className="text-lg font-black text-[#101D45]">{formatNPR(hotel.startingPriceNPR)}</div>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-[#101D45] text-white font-bold text-xs hover:bg-[#F45B18]">
                          Select Rooms
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Buses Results */}
            {activeCategory === 'bus' && (
              <div className="space-y-4">
                {filteredBuses.map((bus) => (
                  <div
                    key={bus.id}
                    onClick={() => onNavigate({ type: 'bus-detail', id: bus.id })}
                    className="group bg-white rounded-3xl p-5 border border-[#E8EAF0] hover:border-[#1769F5]/40 shadow-sm hover:shadow-card transition-all cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#EEF4FE] text-[#1769F5] font-bold text-xs">
                            {bus.busType}
                          </span>
                          <span className="text-xs text-[#8F9BB3]">Reg: {bus.busNumber}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#101D45] mt-1">{bus.operator}</h3>
                        <div className="text-xs text-[#57647E] mt-1">
                          Departure: <span className="font-bold text-[#101D45]">{bus.departureTime}</span> from {bus.from} • Arrival: <span className="font-bold text-[#101D45]">{bus.arrivalTime}</span> in {bus.to}
                        </div>
                      </div>

                      <div className="text-left sm:text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E8EAF0]">
                        <div>
                          <div className="text-[11px] text-[#8F9BB3]">Seat Fare</div>
                          <div className="text-xl font-black text-[#101D45]">{formatNPR(bus.priceNPR)}</div>
                        </div>
                        <button className="px-4 py-2 mt-2 rounded-xl bg-[#F45B18] text-white font-bold text-xs hover:bg-[#DF4810] flex items-center gap-1.5">
                          <Armchair className="w-3.5 h-3.5" />
                          <span>Pick Seat</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Activities Results */}
            {activeCategory === 'activities' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => onNavigate({ type: 'activity-detail', id: act.id })}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#E8EAF0] shadow-card card-hover-lift cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img src={act.images[0]} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#101D45] text-white">
                            {act.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#FFB91F] text-[#FFB91F]" />
                          <span>{act.rating}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="text-xs text-[#57647E] mb-1 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#F45B18]" />
                          <span>{act.location}</span>
                        </div>
                        <h3 className="text-base font-bold text-[#101D45] group-hover:text-[#1769F5] transition-colors line-clamp-2">
                          {act.title}
                        </h3>
                        <p className="mt-2 text-xs text-[#57647E] line-clamp-2">{act.overview}</p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                        <div>
                          <div className="text-[11px] text-[#8F9BB3]">Per person</div>
                          <div className="text-lg font-black text-[#101D45]">{formatNPR(act.priceNPR)}</div>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-[#F45B18] text-white font-bold text-xs hover:bg-[#DF4810]">
                          Book Experience
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="ml-auto w-full max-w-xs bg-white h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EAF0]">
              <h3 className="font-bold text-base text-[#101D45]">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-2 text-[#57647E]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span>Max Price:</span>
                <span className="text-[#F45B18]">{formatNPR(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={150000}
                step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#F45B18]"
              />
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3 rounded-2xl bg-[#F45B18] text-white font-bold text-sm shadow-sm"
            >
              Apply Filters ({currentCount})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
