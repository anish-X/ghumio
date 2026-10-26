import { TourItem, HotelItem, BusItem, BusSeat, ActivityItem, DestinationCard, MoodEscape, BookingRecord } from '../types';

export const DESTINATIONS: DestinationCard[] = [
  {
    id: 'pokhara',
    name: 'Pokhara',
    tagline: 'Quiet waters, mirror reflections & the shadow of Fishtail',
    image: '/assets/places/pokhara.svg',
    tourCount: 42,
    stayCount: 88,
    altitude: '822 m',
    coordinates: '28.2096° N, 83.9856° E',
    region: 'Gandaki',
    popularFor: ['Fewa Lake', 'Paragliding', 'Peace Pagoda', 'Sarangkot Sunrise']
  },
  {
    id: 'mustang',
    name: 'Mustang',
    tagline: 'Wind-carved canyons, sacred caves & the walled kingdom of Lo',
    image: '/assets/places/mustang.svg',
    tourCount: 14,
    stayCount: 18,
    altitude: '3,840 m',
    coordinates: '29.1824° N, 83.9576° E',
    region: 'Dhaulagiri',
    popularFor: ['Lo Manthang', 'Sky Caves', 'Tibetan Culture', 'Muktinath']
  },
  {
    id: 'ilam',
    name: 'Ilam',
    tagline: 'Misty tea gardens, rolling emerald hills & slow mornings',
    image: '/assets/places/ilam.svg',
    tourCount: 12,
    stayCount: 22,
    altitude: '1,208 m',
    coordinates: '26.9114° N, 87.9272° E',
    region: 'Koshi',
    popularFor: ['Kanyam Tea Estate', 'Antu Danda Sunrise', 'Mai Pokhari', 'Cardamom Trails']
  },
  {
    id: 'rara',
    name: 'Rara Lake',
    tagline: 'Untouched waters mirroring alpine pine silence in the far west',
    image: '/assets/places/rara.svg',
    tourCount: 8,
    stayCount: 10,
    altitude: '2,990 m',
    coordinates: '29.5342° N, 82.0832° E',
    region: 'Karnali',
    popularFor: ['Pristine Waters', 'Murma Top', 'Pine Forests', 'Remote Solitude']
  },
  {
    id: 'mardi',
    name: 'Mardi Himal',
    tagline: 'Knife-edge ridges walking alongside Machapuchare sanctuary',
    image: '/assets/places/mardi.svg',
    tourCount: 18,
    stayCount: 15,
    altitude: '4,500 m',
    coordinates: '28.4872° N, 83.9189° E',
    region: 'Annapurna',
    popularFor: ['High Camp', 'Machapuchare Ridge', 'Forest Camps', 'Rhododendron Bloom']
  },
  {
    id: 'bandipur',
    name: 'Bandipur',
    tagline: 'Preserved 18th-century Newari stone streets & timeless balcony life',
    image: '/assets/places/bandipur.svg',
    tourCount: 9,
    stayCount: 19,
    altitude: '1,030 m',
    coordinates: '27.9304° N, 84.4172° E',
    region: 'Tanahun',
    popularFor: ['Heritage Bazaars', 'Silkhani Peak', 'Siddha Cave', 'Slate Pavements']
  },
  {
    id: 'annapurna',
    name: 'Annapurna Sanctuary',
    tagline: 'Glacial amphitheatre ringed by ten towering peaks',
    image: '/assets/places/annapurna.svg',
    tourCount: 35,
    stayCount: 24,
    altitude: '4,130 m',
    coordinates: '28.5962° N, 83.8203° E',
    region: 'Gandaki',
    popularFor: ['Base Camp Trek', 'Poon Hill', 'Mardi Himal', 'Hot Springs']
  },
  {
    id: 'kathmandu',
    name: 'Kathmandu Valley',
    tagline: 'Living heritage, medieval squares & artisan courtyard sanctuaries',
    image: '/assets/places/kathmandu.svg',
    tourCount: 56,
    stayCount: 140,
    altitude: '1,400 m',
    coordinates: '27.7172° N, 85.3240° E',
    region: 'Bagmati',
    popularFor: ['Boudhanath', 'Patan Durbar', 'Bhaktapur', 'Pashupatinath']
  },
  {
    id: 'everest',
    name: 'Everest & Khumbu',
    tagline: 'Legendary Sherpa trails, glacial moraines & high passes',
    image: '/assets/places/everest.svg',
    tourCount: 28,
    stayCount: 32,
    altitude: '5,364 m',
    coordinates: '27.9881° N, 86.9250° E',
    region: 'Solukhumbu',
    popularFor: ['Everest Base Camp', 'Kala Patthar', 'Gokyo Lakes', 'Namche Bazaar']
  },
  {
    id: 'chitwan',
    name: 'Chitwan National Park',
    tagline: 'Sub-tropical forest canopies, river mist & wildlife sanctuary',
    image: '/assets/places/chitwan.svg',
    tourCount: 19,
    stayCount: 45,
    altitude: '150 m',
    coordinates: '27.5341° N, 84.4525° E',
    region: 'Narayani',
    popularFor: ['Jeep Safari', 'Bird Watching', 'Canoe Ride', 'Tharu Culture']
  }
];

export const ESCAPES_DATA: MoodEscape[] = [
  {
    id: 'wild',
    title: 'Into the Wild',
    subtitle: 'Dense canopies & river mist',
    description: 'Track one-horned rhinos, drift along misty rivers, and hear the forest awaken at dawn.',
    query: 'Chitwan Safari',
    category: 'activities',
    iconName: 'Compass',
    tags: ['Wildlife', 'Canoeing', 'Birding', 'Sub-tropical'],
    destinations: ['Chitwan', 'Bardia', 'Koshi Tappu']
  },
  {
    id: 'slow-living',
    title: 'Slow Living',
    subtitle: 'Tea slopes & quiet verandas',
    description: 'Wake to mist rising over rolling tea estates in Ilam, organic farm harvests, and unhurried coffee.',
    query: 'Ilam',
    category: 'hotels',
    iconName: 'Coffee',
    tags: ['Tea Estates', 'Homestays', 'Reading', 'Quiet Walks'],
    destinations: ['Ilam', 'Dhulikhel', 'Begnas']
  },
  {
    id: 'mountain-solitude',
    title: 'Mountain Solitude',
    subtitle: 'Far from footsteps & noise',
    description: 'Camp beside the deep blue stillness of Rara Lake or trek the silence of Upper Mustang.',
    query: 'Rara',
    category: 'tours',
    iconName: 'Mountain',
    tags: ['Alpine Lakes', 'High Silence', 'Stargazing', 'Wilderness'],
    destinations: ['Rara Lake', 'Upper Mustang', 'Phoksundo']
  },
  {
    id: 'weekend-escapes',
    title: 'Weekend Escapes',
    subtitle: 'Two days above the clouds',
    description: 'Quick mountain retreats just a bus ride away from Kathmandu or Pokhara for fresh pine air.',
    query: 'Bandipur',
    category: 'hotels',
    iconName: 'Sunset',
    tags: ['2-Day Getaway', 'Valley Views', 'Hill Stations', 'Sunrise'],
    destinations: ['Bandipur', 'Nagarkot', 'Chandragiri']
  },
  {
    id: 'cultural-immersion',
    title: 'Cultural Immersion',
    subtitle: 'Centuries of living craft',
    description: 'Dwell inside medieval Newari courtyard homes, watch master woodcarvers, and join ancient feast rituals.',
    query: 'Heritage',
    category: 'tours',
    iconName: 'Footprints',
    tags: ['Newari Architecture', 'Monasteries', 'Craft Traditions', 'Festivals'],
    destinations: ['Bhaktapur', 'Patan', 'Panauti', 'Mustang']
  },
  {
    id: 'hidden-trails',
    title: 'Hidden Trails',
    subtitle: 'Unmarked paths & quiet ridges',
    description: 'Step off the beaten circuits to knife-edge ridges like Mardi Himal and panoramic shepherd paths.',
    query: 'Mardi Himal',
    category: 'tours',
    iconName: 'Trees',
    tags: ['Ridge Treks', 'Rhododendron', 'Local Lodges', 'Off-beat'],
    destinations: ['Mardi Himal', 'Khopra Danda', 'Pikey Peak']
  }
];

export const TOURS_DATA: TourItem[] = [
  {
    id: 'tour-annapurna-circuit',
    title: 'Annapurna Circuit & Thorong La Pass High Trek',
    destination: 'Annapurna',
    region: 'Gandaki Province',
    duration: '14 Days / 13 Nights',
    durationDays: 14,
    difficulty: 'Challenging',
    groupSize: 'Max 10 persons',
    travelStyle: 'Tea-house Trekking & High Altitude Pass',
    priceNPR: 68500,
    originalPriceNPR: 76000,
    rating: 4.95,
    reviewCount: 142,
    featured: true,
    badge: 'Nepal Bestseller',
    images: [
      '/assets/places/mardi.svg',
      '/assets/places/annapurna.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'Cross the world-renowned Thorong La Pass at 5,416m, journeying through sub-tropical river basins, alpine forests, and the arid trans-Himalayan Tibetan plateau of Mustang.',
    highlights: [
      'Summit the historic Thorong La Pass at 5,416 meters altitude',
      'Visit holy Muktinath temple sacred to both Hindus & Buddhists',
      'Witness dramatic views of Annapurna I, II, Dhaulagiri, & Manaslu',
      'Acclimatization day exploring Ice Lake and Manang village'
    ],
    itinerary: [
      { day: 1, title: 'Drive Kathmandu to Besisahar & Dharapani', desc: 'Scenic mountain highway drive through Trishuli and Marshyangdi river valleys.', altitude: '1,860 m' },
      { day: 2, title: 'Trek Dharapani to Chame', desc: 'Ascend through pine and oak forests with striking views of Lamjung Himal.', altitude: '2,670 m' },
      { day: 3, title: 'Chame to Pisang', desc: 'Enter the dramatic curved rock face of Paungda Danda and upper alpine zone.', altitude: '3,200 m' },
      { day: 4, title: 'Upper Pisang to Manang via Ghyaru', desc: 'Panoramic Himalayan views overlooking the turquoise glaciers of Annapurna.', altitude: '3,540 m' },
      { day: 5, title: 'Manang Acclimatization & Exploration', desc: 'Day hike to Gangapurna Lake viewpoint and acclimatization briefing.', altitude: '3,540 m' },
      { day: 6, title: 'Manang to Yak Kharka', desc: 'Ascend above tree-line into open yak pasturelands.', altitude: '4,050 m' },
      { day: 7, title: 'Yak Kharka to Thorong Phedi Base', desc: 'Steady climb to the base of the mighty pass with early rest.', altitude: '4,450 m' },
      { day: 8, title: 'Cross Thorong La Pass (5,416m) to Muktinath', desc: 'Pre-dawn ascent to the pass flags followed by descent to holy Muktinath.', altitude: '5,416 m' }
    ],
    included: [
      'Government licensed experienced Sherpa trekking guide',
      'All TIMS Cards and ACAP Annapurna conservation permits',
      '13 nights teahouse accommodation during trek',
      'All meals (Breakfast, Lunch, Dinner with seasonal fruits) during trek',
      'Porters (1 porter between 2 trekkers, max 18kg baggage)',
      'Emergency first aid kit with portable pulse oximeter'
    ],
    excluded: [
      'Travel and high-altitude medical evacuation insurance',
      'Personal trekking gear (down jacket, sleeping bag available for rent in Pokhara/KTM)',
      'Personal hot showers and battery recharging fees at teahouses',
      'Tips for guide and porters (customary 10-15%)'
    ],
    meetingPoint: 'Ghumio Welcome Desk, Thamel Marg, Kathmandu (07:00 AM)',
    cancellationPolicy: 'Free cancellation up to 7 days before departure. 80% refund up to 72 hours before start.',
    provider: {
      name: 'Highland Sherpa Explorations Pvt. Ltd.',
      verified: true,
      rating: 4.96,
      experienceYears: 16
    }
  },
  {
    id: 'tour-ebc-heli-return',
    title: 'Everest Base Camp Trek with Scenic Helicopter Flyback',
    destination: 'Everest',
    region: 'Khumbu, Sagarmatha National Park',
    duration: '11 Days / 10 Nights',
    durationDays: 11,
    difficulty: 'Strenuous',
    groupSize: 'Small Group (Max 8)',
    travelStyle: 'Classic Himalayan Trek + Luxury Heli Flyback',
    priceNPR: 145000,
    originalPriceNPR: 165000,
    rating: 4.98,
    reviewCount: 98,
    featured: true,
    badge: 'Luxury Adventure',
    images: [
      '/assets/places/everest.svg',
      '/assets/places/annapurna.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'Stand at the foot of Mount Everest (8,848.86m) and Kala Patthar, then skip the 4-day strenuous downhill hike with an exhilarating direct helicopter flight back from Gorakshep to Lukla/Kathmandu.',
    highlights: [
      'Trek through historic Sherpa settlements of Namche Bazaar and Tengboche',
      'Stand upon Khumbu Glacier at official Everest Base Camp (5,364m)',
      'Sunrise 360-degree Everest panorama from Kala Patthar (5,550m)',
      'Return in style via Airbus B3/H125 helicopter over the Himalayan ice falls'
    ],
    itinerary: [
      { day: 1, title: 'Flight to Lukla (2,840m) & Trek to Phakding', desc: 'Thrilling mountain flight into Tenzing-Hillary airport and easy walk along Dudh Koshi.', altitude: '2,610 m' },
      { day: 2, title: 'Phakding to Namche Bazaar', desc: 'Cross Hillary suspension bridges and climb the pine ridges to the Sherpa capital.', altitude: '3,440 m' },
      { day: 3, title: 'Acclimatization Day in Namche', desc: 'Hike to Everest View Hotel for first panoramic glimpse of Everest, Lhotse, and Ama Dablam.', altitude: '3,880 m' },
      { day: 4, title: 'Namche to Tengboche Monastery', desc: 'Visit the spiritual heart of Khumbu surrounded by rhododendron forest and Ama Dablam.', altitude: '3,860 m' },
      { day: 5, title: 'Tengboche to Dingboche', desc: 'Above tree line into alpine shrubland with views of Island Peak and Makalu.', altitude: '4,410 m' },
      { day: 6, title: 'Dingboche to Lobuche', desc: 'Pass the memorials of brave mountaineers at Thokla Pass and approach Khumbu Glacier.', altitude: '4,940 m' },
      { day: 7, title: 'Lobuche to Gorakshep & Everest Base Camp', desc: 'Reach the world-famous Base Camp upon the glacier before retreating to Gorakshep lodge.', altitude: '5,364 m' },
      { day: 8, title: 'Sunrise Kala Patthar (5,550m) & Helicopter Return to Kathmandu', desc: 'Dawn ascent for the iconic sunrise over Everest summit, followed by luxury helicopter return.', altitude: '1,400 m' }
    ],
    included: [
      'Domestic scheduled flight Kathmandu/Ramechhap to Lukla',
      'Chartered helicopter flight Gorakshep to Kathmandu',
      'Sagarmatha National Park entry and Pasang Lhamu municipality permits',
      'Top-tier lodge accommodation with private twin rooms where available',
      'Oxygen cylinder and Gamow hyperbaric bag safety support',
      'Senior Wilderness First Responder certified Himalayan guide'
    ],
    excluded: [
      'International airfare to Nepal',
      'Emergency personal evacuation coverage',
      'Personal alcohol, carbonated drinks, and snacks'
    ],
    meetingPoint: 'Tribhuvan International Airport Domestic Terminal, Kathmandu',
    cancellationPolicy: 'Full refund up to 14 days before trek date. 50% refund up to 5 days before departure.',
    provider: {
      name: 'Khumbu Alpine Expeditions',
      verified: true,
      rating: 4.98,
      experienceYears: 22
    }
  },
  {
    id: 'tour-mardi-himal',
    title: 'Mardi Himal Scenic Ridge Eco-Trek',
    destination: 'Pokhara',
    region: 'Annapurna Conservation Area',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    difficulty: 'Moderate',
    groupSize: 'Min 2, Max 12',
    travelStyle: 'Scenic Ridge Walking & Close Mountain Views',
    priceNPR: 24500,
    originalPriceNPR: 28000,
    rating: 4.91,
    reviewCount: 76,
    badge: 'Popular Short Trek',
    images: [
      '/assets/places/mardi.svg',
      '/assets/places/annapurna.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'The ideal short trek from Pokhara. Walk along dramatic elevated mountain ridges directly facing the sacred Machhapuchhre (Fishtail Peak) and Annapurna South.',
    highlights: [
      'Intimate close-up views of holy Machhapuchhre (Fishtail Mountain)',
      'Reach Mardi Himal High Camp (3,580m) & View Point (4,200m)',
      'Charming local Gurung hospitality at Australian Camp and Landruk',
      'Short duration makes it perfect for limited vacation schedules'
    ],
    itinerary: [
      { day: 1, title: 'Drive Pokhara to Kande & Trek to Forest Camp', desc: 'Through oak and rhododendron forest via Australian Camp.', altitude: '2,550 m' },
      { day: 2, title: 'Forest Camp to Low Camp', desc: 'Ascend steadily with glimpses of Mardi Himal and Fishtail peaks.', altitude: '2,970 m' },
      { day: 3, title: 'Low Camp to High Camp', desc: 'Break through the tree line onto the open ridge overlooking Annapurna Sanctuary.', altitude: '3,580 m' },
      { day: 4, title: 'Mardi Himal Viewpoint (4,200m) & Descend to Badal Danda', desc: 'Sunrise vantage point followed by relaxing evening above cloud inversions.', altitude: '3,210 m' },
      { day: 5, title: 'Descend to Siding Village & Private Jeep Drive to Pokhara', desc: 'Scenic descent and drive back along Mardi river to Lakeside Pokhara.', altitude: '822 m' }
    ],
    included: [
      'Private vehicle transfer Pokhara - Kande and Siding - Pokhara',
      'ACAP permit and TIMS registration',
      'Expert local trekking guide and porter service',
      'All meals and clean teahouse lodging during the trek'
    ],
    excluded: [
      'Pokhara hotel stay before and after trek',
      'Personal hot showers and gadget recharging'
    ],
    meetingPoint: 'Lakeside Center, Pokhara (07:30 AM)',
    cancellationPolicy: 'Free cancellation up to 48 hours before start date.',
    provider: {
      name: 'Annapurna Trails & Treks',
      verified: true,
      rating: 4.92,
      experienceYears: 12
    }
  },
  {
    id: 'tour-ktm-heritage',
    title: 'Kathmandu, Patan & Bhaktapur 3-Day Living Heritage Immersion',
    destination: 'Kathmandu',
    region: 'Kathmandu Valley',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    difficulty: 'Easy',
    groupSize: 'Flexible',
    travelStyle: 'Art, Architecture & Newari Gastronomy',
    priceNPR: 18500,
    rating: 4.88,
    reviewCount: 64,
    images: [
      '/assets/places/kathmandu.svg',
      '/assets/places/pokhara.svg',
      '/assets/places/annapurna.svg'
    ],
    overview: 'Discover 7 UNESCO World Heritage sites across three medieval kingdoms. Experience ancient woodcarving, stone temples, rooftop butter lamps, and authentic Newari banquets.',
    highlights: [
      'Explore the 55-window palace and Nyatapola temple in Bhaktapur',
      'Circumambulate with pilgrims at Boudhanath Stupa at dusk',
      'Witness living craftsmanship at Patan Museum and metal workshops',
      'Authentic Newari culinary tasting (Choila, Bara, and Yomari)'
    ],
    itinerary: [
      { day: 1, title: 'Kathmandu Durbar Square & Swayambhunath (Monkey Temple)', desc: 'Marvel at Kumari Ghar (Living Goddess) and panoramic hilltop temple overlooking the valley.' },
      { day: 2, title: 'Patan City of Fine Arts & Boudhanath Stupa', desc: 'Patan museum, Golden Temple, and rooftop sunset tea observing the spinning prayer wheels.' },
      { day: 3, title: 'Bhaktapur Medieval Square & Changu Narayan', desc: 'Pottery square artisans and the oldest stone-inscribed temple in Nepal.' }
    ],
    included: [
      'Private air-conditioned electric car transfers',
      'All UNESCO World Heritage site entrance monument tickets',
      'Licensed art historian cultural guide',
      'Traditional Newari heritage banquet lunch in Patan'
    ],
    excluded: ['Hotel accommodation (can be packaged)', 'Personal donations at temples'],
    meetingPoint: 'Hotel pickup in Kathmandu or Patan',
    cancellationPolicy: 'Free cancellation up to 24 hours in advance.',
    provider: {
      name: 'Mandala Cultural Heritage Walks',
      verified: true,
      rating: 4.89,
      experienceYears: 18
    }
  },
  {
    id: 'tour-upper-mustang',
    title: 'Upper Mustang: Journey to the Walled City of Lo Manthang',
    destination: 'Mustang',
    region: 'Dhaulagiri Zone',
    duration: '10 Days / 9 Nights',
    durationDays: 10,
    difficulty: 'Moderate',
    groupSize: 'Max 8 persons',
    travelStyle: 'Trans-Himalayan Cultural Discovery & Overland Jeep',
    priceNPR: 82000,
    originalPriceNPR: 95000,
    rating: 4.97,
    reviewCount: 48,
    featured: true,
    badge: 'Restricted Kingdom',
    images: [
      '/assets/places/mustang.svg',
      '/assets/places/bandipur.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'Enter the once forbidden Himalayan kingdom of Lo. Cross red sandstone canyons, cliffside sky caves, and 800-year-old painted Gompas on the Tibetan border.',
    highlights: [
      'Explore the ancient royal palace and narrow alleys of Lo Manthang',
      'Discover mysterious sky caves etched into ochre cliffs',
      'Visit Choedhe and Jampa monasteries with original murals',
      'Travel through Kali Gandaki gorge, deepest canyon on earth'
    ],
    itinerary: [
      { day: 1, title: 'Pokhara to Jomsom & Kagbeni', desc: 'Scenic flight along Annapurna and Dhaulagiri followed by medieval border post Kagbeni.', altitude: '2,800 m' },
      { day: 2, title: 'Kagbeni to Chele', desc: 'Cross the Kali Gandaki and ascend through red eroded cliffs to Chele.', altitude: '3,050 m' },
      { day: 3, title: 'Chele to Syangboche & Ghami', desc: 'Cross high passes with panoramic views of Damodar Himal.', altitude: '3,520 m' },
      { day: 4, title: 'Ghami to Charang & Lo Manthang', desc: 'Longest mani wall in Mustang and arrival at the white-walled capital.', altitude: '3,840 m' },
      { day: 5, title: 'Lo Manthang Living Culture & Royal Monasteries', desc: 'Private audience with local elders and exploration of ancient monasteries.', altitude: '3,840 m' }
    ],
    included: [
      'Special Restricted Area Permit ($500 USD equivalent included)',
      'ACAP permit and licensed Mustang heritage guide',
      '4WD Land Cruiser overland transport and airport transfers',
      'Traditional Tibetan lodge accommodation & home-cooked meals'
    ],
    excluded: [
      'Horse rentals in Lo Manthang',
      'Personal donations at monasteries'
    ],
    meetingPoint: 'Jomsom Airport or Pokhara Lakeside Desk',
    cancellationPolicy: '70% refund up to 14 days before entry date due to permit fees.',
    provider: {
      name: 'Lo Heritage Treks & Expeditions',
      verified: true,
      rating: 4.97,
      experienceYears: 19
    }
  },
  {
    id: 'tour-rara-lake',
    title: 'Rara Lake & Far-West Karnali Alpine Wilderness Expedition',
    destination: 'Rara Lake',
    region: 'Karnali Province',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    difficulty: 'Moderate',
    groupSize: 'Min 2, Max 10',
    travelStyle: 'Pristine Wilderness, Camping & Pine Ridge Trek',
    priceNPR: 46000,
    originalPriceNPR: 52000,
    rating: 4.94,
    reviewCount: 38,
    badge: 'Wilderness Sanctuary',
    images: [
      '/assets/places/rara.svg',
      '/assets/places/hero-himalaya.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'Discover Nepal’s largest and most tranquil alpine lake at 2,990m, where crystalline azure waters reflect snow-dusted pine forests and starry midnight skies without crowds.',
    highlights: [
      'Sunrise hike to Murma Top (3,700m) with 360-degree Karnali panorama',
      'Wooden boat drifting across the 5km mirror expanse of Rara',
      'Camp beneath the clearest stargazing skies in the Himalayas',
      'Encounter rare musk deer, red pandas, and migrant waterfowl'
    ],
    itinerary: [
      { day: 1, title: 'Flight Kathmandu to Nepalgunj & Talcha (Mugu)', desc: 'Dramatic flight over Karnali gorge into mountain airstrip of Talcha.', altitude: '2,735 m' },
      { day: 2, title: 'Talcha to Rara Lake Rim', desc: 'Gentle trek through blue pine and spruce forests to the serene lake shore.', altitude: '2,990 m' },
      { day: 3, title: 'Lakeside Quiet Day & Wooden Boating', desc: 'Quiet paddle across pristine waters and bird watching on the northern rim.', altitude: '2,990 m' },
      { day: 4, title: 'Ascent to Murma Viewpoint', desc: 'Climb through juniper meadows to Murma Top for complete lake vista.', altitude: '3,700 m' },
      { day: 5, title: 'Talcha Return & Scenic Flight to Kathmandu', desc: 'Farewell to Karnali wilderness and flight return.', altitude: '1,400 m' }
    ],
    included: [
      'Domestic flights Nepalgunj - Talcha - Nepalgunj',
      'Rara National Park conservation permits and environmental fees',
      'Experienced wilderness guide and camping crew',
      'Comfortable eco-tented accommodation with organic meals'
    ],
    excluded: ['Warm down sleeping bag rental (optional)', 'Personal trekking gear'],
    meetingPoint: 'Nepalgunj Airport Terminal / Kathmandu Office',
    cancellationPolicy: 'Free cancellation up to 7 days before departure.',
    provider: {
      name: 'Karnali Wild Journeys',
      verified: true,
      rating: 4.95,
      experienceYears: 14
    }
  }
];

export const HOTELS_DATA: HotelItem[] = [
  {
    id: 'hotel-pavilions-pokhara',
    title: 'The Pavilions Himalayas Lake View',
    destination: 'Pokhara',
    location: 'Phewa Lake South Bank, Pokhara',
    address: 'Pumdi Bhumdi-2, Pokhara, Nepal',
    propertyType: 'Resort',
    starRating: 5,
    rating: 4.96,
    reviewCount: 112,
    startingPriceNPR: 22000,
    featured: true,
    images: [
      '/assets/places/resort.svg',
      '/assets/places/pokhara.svg',
      '/assets/places/annapurna.svg'
    ],
    overview: 'Accessible only by handcrafted wooden boat and gentle lake trail, The Pavilions Lake View offers 8 exclusive tented villas blending luxury safari aesthetics with panoramic views of Fewa Lake and Machhapuchhre.',
    amenities: [
      'Panoramic Himalayan Views',
      'Organic Farm-to-Table Restaurant',
      'Infinity Pool Overlooking Lake',
      'Ayurvedic Wellness Spa',
      'Complimentary Lake Boat Transfers',
      'High-Speed Wi-Fi',
      'Yoga & Meditation Pavilion'
    ],
    checkIn: '14:00',
    checkOut: '11:00',
    cancellationPolicy: 'Free cancellation up to 5 days before check-in. 50% charge thereafter.',
    rooms: [
      {
        id: 'room-lake-villa',
        name: 'Grand Lake Villa with Private Terrace',
        capacity: 2,
        bedType: '1 King Bed',
        sizeSqFt: 650,
        priceNPR: 22000,
        originalPriceNPR: 26000,
        availableRooms: 3,
        perks: ['Breakfast Included', 'Lake Boat Transfers', 'Free Cancellation', 'Welcome Drink'],
        images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80']
      },
      {
        id: 'room-annapurna-suite',
        name: 'Himalayan Ridge Presidential Suite',
        capacity: 4,
        bedType: '2 King Beds',
        sizeSqFt: 1100,
        priceNPR: 38000,
        availableRooms: 1,
        perks: ['Full Board Meals', 'Private Butler', 'Complimentary Ayurvedic Massage', 'Bottle of Wine'],
        images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80']
      }
    ]
  },
  {
    id: 'hotel-dwarikas-ktm',
    title: "The Dwarika's Hotel Kathmandu",
    destination: 'Kathmandu',
    location: 'Battisputali, Kathmandu',
    address: 'Battisputali Road, Kathmandu 44600, Nepal',
    propertyType: 'Heritage Stay',
    starRating: 5,
    rating: 4.97,
    reviewCount: 235,
    startingPriceNPR: 29500,
    featured: true,
    images: [
      '/assets/places/kathmandu.svg',
      '/assets/places/resort.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'A living museum of Newari terracotta craft, Dwarika\'s preserves carved woodworks from the 13th to 16th centuries. Courtyards with brick columns, artisanal handwoven silks, and Krishnarpan multi-course royal feasts.',
    amenities: [
      'Historic 14th Century Courtyards',
      'Pancha Kosha Himalayan Spa',
      'Krishnarpan Royal 22-Course Dining',
      'Sunken Outdoor Garden Pool',
      'Library & Antique Art Gallery',
      'Valet Parking',
      '24/7 Concierge'
    ],
    checkIn: '14:00',
    checkOut: '12:00',
    cancellationPolicy: 'Free cancellation up to 72 hours before arrival.',
    rooms: [
      {
        id: 'room-heritage-deluxe',
        name: 'Heritage Deluxe Room with Carved Woodwork',
        capacity: 2,
        bedType: '1 Royal King or 2 Twins',
        sizeSqFt: 480,
        priceNPR: 29500,
        originalPriceNPR: 34000,
        availableRooms: 5,
        perks: ['Gourmet Breakfast', 'Courtyard Tea Ceremony', 'Fast Wi-Fi', 'Artisan Toiletries'],
        images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80']
      },
      {
        id: 'room-junior-suite',
        name: 'Royal Newari Junior Suite',
        capacity: 3,
        bedType: '1 Four-Poster King Bed',
        sizeSqFt: 720,
        priceNPR: 46000,
        availableRooms: 2,
        perks: ['Breakfast & Evening Canapes', 'Airport Luxury Sedan Transfer', 'Soaking Copper Tub'],
        images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80']
      }
    ]
  },
  {
    id: 'hotel-barahi-chitwan',
    title: 'Barahi Jungle Lodge & Eco Reserve',
    destination: 'Chitwan',
    location: 'Meghauli, Rapti Riverfront, Chitwan',
    address: 'Meghauli Serai, Chitwan National Park Buffer Zone',
    propertyType: 'Eco Lodge',
    starRating: 5,
    rating: 4.93,
    reviewCount: 94,
    startingPriceNPR: 24000,
    images: [
      '/assets/places/chitwan.svg',
      '/assets/places/resort.svg'
    ],
    overview: 'Positioned right on the tranquil confluence of Rapti and Narayani rivers, Barahi offers thatch-roof cottage suites constructed with indigenous bamboo, elephant grass, and stone overlooking rhino crossing points.',
    amenities: [
      'Rapti River View Terrace',
      'Private Safari Naturalist Included',
      'Riverside Bush Dinner with Bonfire',
      'Swimming Pool Facing National Park',
      'Tharu Cultural Performances'
    ],
    checkIn: '13:00',
    checkOut: '11:00',
    cancellationPolicy: 'Free cancellation up to 7 days prior.',
    rooms: [
      {
        id: 'room-river-cottage',
        name: 'Deluxe River-Facing Thatched Cottage',
        capacity: 2,
        bedType: '1 King or 2 Twins',
        sizeSqFt: 580,
        priceNPR: 24000,
        availableRooms: 4,
        perks: ['All Meals (Breakfast, Lunch, Dinner)', 'Daily Jungle Jeep Safari', 'Sundowner River Tea'],
        images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80']
      }
    ]
  },
  {
    id: 'hotel-old-inn-bandipur',
    title: 'The Old Inn Heritage Mansion',
    destination: 'Bandipur',
    location: 'Main Bazaar, Bandipur, Tanahun',
    address: 'Historic Bazaar Street, Bandipur',
    propertyType: 'Heritage Stay',
    starRating: 4,
    rating: 4.87,
    reviewCount: 78,
    startingPriceNPR: 9500,
    images: [
      '/assets/places/kathmandu.svg',
      '/assets/places/resort.svg'
    ],
    overview: 'A meticulously conserved 18th-century Newari merchant mansion with wooden balconies, low beamed ceilings, brass lanterns, and sweeping views of the Marsyangdi valley and Manaslu peaks.',
    amenities: [
      'Bazaar View Verandah',
      'Himalayan Sunrise Dining Terrace',
      'Authentic Clay Fireplaces',
      'High-Speed Wi-Fi',
      'Walking Tour of Bandipur Town'
    ],
    checkIn: '13:00',
    checkOut: '11:00',
    cancellationPolicy: 'Free cancellation up to 48 hours prior.',
    rooms: [
      {
        id: 'room-balcony-deluxe',
        name: 'Carved Balcony Heritage Room',
        capacity: 2,
        bedType: '1 Double Bed',
        sizeSqFt: 340,
        priceNPR: 9500,
        availableRooms: 3,
        perks: ['Traditional Breakfast', 'Bazaar View', 'Local Guide Tour'],
        images: ['https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1000&q=80']
      }
    ]
  }
];

// Helper to generate realistic seats for buses
function generateBusSeats(busType: string, basePrice: number): BusSeat[] {
  const seats: BusSeat[] = [];
  const rows = busType.includes('Sofa') ? 7 : 9;
  
  for (let r = 1; r <= rows; r++) {
    // 2x1 for Sofa VIP or 2x2 for Super Deluxe
    if (busType.includes('Sofa')) {
      // Columns: 0, 1 (Left), aisle, 3 (Right single seat)
      seats.push({
        seatNumber: `${r}A`,
        row: r,
        col: 0,
        type: 'business',
        isBooked: r === 2 || r === 5,
        priceNPR: basePrice
      });
      seats.push({
        seatNumber: `${r}B`,
        row: r,
        col: 1,
        type: 'business',
        isBooked: r === 2,
        priceNPR: basePrice
      });
      seats.push({
        seatNumber: `${r}C`,
        row: r,
        col: 3,
        type: 'business',
        isBooked: r === 1 || r === 4,
        priceNPR: basePrice + 150 // Premium solo window
      });
    } else {
      // 2x2 standard layout
      ['A', 'B', 'C', 'D'].forEach((colChar, index) => {
        const col = index < 2 ? index : index + 1; // leave 2 for aisle
        seats.push({
          seatNumber: `${r}${colChar}`,
          row: r,
          col: col,
          type: 'standard',
          isBooked: (r === 3 && index === 0) || (r === 1 && index === 2) || (r === 6 && index === 3),
          priceNPR: basePrice
        });
      });
    }
  }
  return seats;
}

export const BUSES_DATA: BusItem[] = [
  {
    id: 'bus-ktm-pkr-sofa-jagadamba',
    operator: 'Jagadamba VIP Travels',
    busNumber: 'Ba 5 Kha 8842',
    busType: 'VIP Sofa Seater',
    from: 'Kathmandu',
    to: 'Pokhara',
    departureStation: 'Sorhakhutte Tourist Bus Stand (Near Thamel)',
    arrivalStation: 'Tourist Bus Park, Rashtrabank Chowk, Pokhara',
    departureTime: '07:00 AM',
    arrivalTime: '02:30 PM',
    duration: '7h 30m',
    priceNPR: 1850,
    rating: 4.92,
    reviewCount: 388,
    featured: true,
    amenities: [
      '2x1 Wide Luxury Reclining Sofa',
      'Chilled Air Conditioning',
      'Individual USB Fast Charger',
      'Complimentary Snack Box & Mineral Water',
      'Suspension Air-Brake Comfort',
      'Onboard Host & Clean Washroom Stops'
    ],
    seats: generateBusSeats('VIP Sofa Seater', 1850),
    totalSeats: 21,
    availableSeats: 16
  },
  {
    id: 'bus-pkr-ktm-sofa-baba',
    operator: 'Baba Adventure Deluxe Express',
    busNumber: 'Ga 2 Kha 4190',
    busType: 'VIP Sofa Seater',
    from: 'Pokhara',
    to: 'Kathmandu',
    departureStation: 'Tourist Bus Park, Pokhara',
    arrivalStation: 'Sorhakhutte, Thamel Marg, Kathmandu',
    departureTime: '07:30 AM',
    arrivalTime: '03:00 PM',
    duration: '7h 30m',
    priceNPR: 1750,
    rating: 4.89,
    reviewCount: 290,
    featured: true,
    amenities: [
      'Plush 140° Recline Sofa',
      'High Speed 4G Wi-Fi',
      'Bottle of Water & Tea Voucher',
      'Large Luggage Compartment',
      'Air Suspended Chassis'
    ],
    seats: generateBusSeats('VIP Sofa Seater', 1750),
    totalSeats: 21,
    availableSeats: 17
  },
  {
    id: 'bus-ktm-pkr-deluxe-mountain',
    operator: 'Mountain Overland Tourist Express',
    busNumber: 'Ba 4 Kha 6211',
    busType: 'Super Deluxe AC',
    from: 'Kathmandu',
    to: 'Pokhara',
    departureStation: 'Sorhakhutte Tourist Stand, Kathmandu',
    arrivalStation: 'Lakeside Tourist Park, Pokhara',
    departureTime: '06:45 AM',
    arrivalTime: '02:15 PM',
    duration: '7h 30m',
    priceNPR: 1200,
    rating: 4.78,
    reviewCount: 412,
    amenities: [
      'Comfort High-Back Reclining Seats',
      'Air Conditioning & Heating',
      'Scenic Window Views',
      'Hygienic Highway Lunch Stop'
    ],
    seats: generateBusSeats('Super Deluxe AC', 1200),
    totalSeats: 36,
    availableSeats: 31
  },
  {
    id: 'bus-ktm-chitwan-greenline',
    operator: 'Greenline Safari Tourist Coach',
    busNumber: 'Ba 3 Kha 9012',
    busType: 'Tourist Express AC',
    from: 'Kathmandu',
    to: 'Chitwan',
    departureStation: 'Kantipath (Near Garden of Dreams), Kathmandu',
    arrivalStation: 'Sauraha Tourist Bus Station, Chitwan',
    departureTime: '07:15 AM',
    arrivalTime: '12:45 PM',
    duration: '5h 30m',
    priceNPR: 1600,
    rating: 4.85,
    reviewCount: 164,
    featured: true,
    amenities: [
      'Buffet Lunch Included at Riverside Resort',
      'Cool Mineral Water',
      'Spacious Legroom',
      'Professional Tourist Driver'
    ],
    seats: generateBusSeats('VIP Sofa Seater', 1600),
    totalSeats: 21,
    availableSeats: 18
  },
  {
    id: 'bus-pkr-chitwan-safari',
    operator: 'Blue Sky AC Tourist Coach',
    busNumber: 'Ga 1 Kha 3381',
    busType: 'Super Deluxe AC',
    from: 'Pokhara',
    to: 'Chitwan',
    departureStation: 'Tourist Bus Park, Pokhara',
    arrivalStation: 'Sauraha Bus Park, Chitwan',
    departureTime: '07:30 AM',
    arrivalTime: '01:00 PM',
    duration: '5h 30m',
    priceNPR: 1100,
    rating: 4.75,
    reviewCount: 122,
    amenities: [
      'Reclining Seats',
      'AC & Audio System',
      'Riverside Restroom Break'
    ],
    seats: generateBusSeats('Super Deluxe AC', 1100),
    totalSeats: 36,
    availableSeats: 32
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 'act-paragliding-pokhara',
    title: 'Tandem Paragliding over Fewa Lake with HD GoPro Footage',
    destination: 'Pokhara',
    location: 'Sarangkot Takeoff, Pokhara',
    category: 'Paragliding',
    duration: '30-40 min flight (3 hr total)',
    durationHours: 3,
    priceNPR: 8500,
    originalPriceNPR: 9500,
    rating: 4.96,
    reviewCount: 310,
    featured: true,
    images: [
      '/assets/places/paragliding.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'Soar like an eagle alongside thermal currents over Pokhara valley with the full Annapurna range and Machhapuchhre reflecting in Fewa Lake beneath your feet.',
    highlights: [
      'Takeoff from 1,600m high Sarangkot viewpoint',
      'Experienced APPI / Civil Aviation Nepal certified pilot',
      'Includes high-resolution GoPro photos and 4K aerial video',
      'Smooth water-edge landing right by Fewa Lakeside'
    ],
    included: [
      'Hotel pickup and drop-off in private 4WD from Lakeside',
      'Full safety gear and pre-flight harness inspection',
      'GoPro photo & video package transferred to your smartphone',
      'Full passenger flight insurance coverage'
    ],
    requirements: [
      'Weight limit: 35 kg to 105 kg',
      'Wear sturdy walking shoes and warm windbreaker',
      'No previous experience required'
    ],
    timeSlots: ['09:30 AM', '11:30 AM (Peak Thermal)', '01:30 PM'],
    provider: {
      name: 'Skyline Paragliding Pokhara',
      verified: true,
      license: 'CAAN-AD-042'
    }
  },
  {
    id: 'act-bungee-kusma',
    title: 'The Cliff Kusma 228m World-Class Bungee & Canyon Swing',
    destination: 'Pokhara',
    location: 'Kusma Suspension Bridge, Kali Gandaki River',
    category: 'Bungee & Canyon',
    duration: 'Full Day (Includes 2h scenic drive from Pokhara)',
    durationHours: 6,
    priceNPR: 9800,
    rating: 4.94,
    reviewCount: 184,
    featured: true,
    images: [
      '/assets/places/annapurna.svg',
      '/assets/places/pokhara.svg'
    ],
    overview: 'Leap off the world\'s second-highest bungee bridge suspended 228 meters directly above the roaring Kali Gandaki canyon, designed by top Swiss safety engineers.',
    highlights: [
      'World-record 228m freefall above Kali Gandaki River Gorge',
      '520-meter private suspension bridge walkway experience',
      'Drone 4K action footage & HD bridge camera package available',
      'Stunning drive through Baglung and Parbat mountain villages'
    ],
    included: [
      'Round-trip AC coach transfer from Pokhara Lakeside',
      'Certified jump master briefing and safety gear',
      'Official Cliff Jump Certificate & Ghumio adventurer badge'
    ],
    requirements: ['Weight limit: 45 kg to 110 kg', 'Minimum age: 14 years old'],
    timeSlots: ['07:30 AM Departure', '10:30 AM Departure'],
    provider: {
      name: 'The Cliff Nepal Pvt. Ltd.',
      verified: true,
      license: 'NTA-ACT-109'
    }
  },
  {
    id: 'act-trishuli-rafting',
    title: 'Trishuli River Class III+ Whitewater Rafting with Riverside Lunch',
    destination: 'Kathmandu',
    location: 'Charaudi to Fishling, Prithvi Highway',
    category: 'White Water Rafting',
    duration: '1 Day (approx 7 hours)',
    durationHours: 7,
    priceNPR: 4800,
    rating: 4.87,
    reviewCount: 145,
    images: [
      '/assets/places/pokhara.svg',
      '/assets/places/annapurna.svg'
    ],
    overview: 'Navigate famous rapids like "Upset", "Surprise", and "Ladies Delight" through deep limestone gorges with swimming breaks in calm sandy coves.',
    highlights: [
      'Thrilling Class III / III+ rapids suitable for both beginners and thrill seekers',
      'Freshly prepared hot buffet lunch at scenic private riverside camp',
      'Can be used as a scenic adventure transfer between Kathmandu and Pokhara / Chitwan'
    ],
    included: [
      'Certified International Rafting Federation river guides',
      'High-buoyancy life jackets, helmets, and paddles',
      'Waterproof dry-bags for valuables and cameras',
      'Warm buffet lunch with fresh salads and river tea'
    ],
    requirements: ['Swimwear or quick-dry shorts', 'Strap sandals or trainers'],
    timeSlots: ['07:00 AM Pickup from Kathmandu / Pokhara'],
    provider: {
      name: 'Ultimate Himalayan WhiteWater Journeys',
      verified: true,
      license: 'NRA-019'
    }
  },
  {
    id: 'act-everest-flight',
    title: 'Everest Scenic Mountain Flight with Guaranteed Window Seat',
    destination: 'Kathmandu',
    location: 'TIA Domestic Airport, Kathmandu',
    category: 'Helicopter Tour',
    duration: '1 Hour Airborne (2.5 hr total)',
    durationHours: 2.5,
    priceNPR: 14500,
    originalPriceNPR: 16000,
    rating: 4.92,
    reviewCount: 220,
    featured: true,
    images: [
      '/assets/places/everest.svg',
      '/assets/places/annapurna.svg'
    ],
    overview: 'Fly within 5 nautical miles of Mount Everest, Lhotse, Makalu, and Kanchenjunga aboard a modern ATR-72 pressurized aircraft with cockpit visit during cruise.',
    highlights: [
      'Every passenger receives a guaranteed private window seat',
      'Spot 14 Himalayan snow peaks with guided inflight mountain map',
      'Captain invites every passenger to the cockpit for Everest photographs',
      'Signed Everest Flight Achievement Certificate upon landing'
    ],
    included: [
      'Guaranteed window seat on ATR-72 aircraft',
      'Flight champagne toast or fruit punch',
      'Airport lounge check-in assistance',
      'Flight certificate signed by pilot'
    ],
    requirements: ['Government ID or passport required for airport security'],
    timeSlots: ['06:30 AM (Best Clear View)', '07:30 AM', '08:30 AM'],
    provider: {
      name: 'Buddha Air & Yeti Mountain Flights',
      verified: true,
      license: 'AOC-NP-004'
    }
  }
];

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'book-gh-1094',
    bookingCode: 'GHM-882190',
    serviceType: 'tours',
    itemId: 'tour-annapurna-circuit',
    itemTitle: 'Annapurna Circuit & Thorong La Pass High Trek',
    itemImage: '/assets/places/annapurna.svg',
    destination: 'Annapurna',
    travelDate: '2026-11-15',
    returnDate: '2026-11-28',
    quantityText: '2 Adult Trekkers',
    traveler: {
      fullName: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      phone: '+977 9841234567',
      nationality: 'Nepali',
      specialRequests: 'Vegetarian meals preferred along the trek.'
    },
    pricing: {
      baseAmountNPR: 137000,
      taxesAndServiceFeeNPR: 6850,
      discountNPR: 5000,
      totalAmountNPR: 138850
    },
    paymentMethod: 'fonepay',
    paymentStatus: 'paid',
    status: 'confirmed',
    confirmationType: 'instant',
    createdAt: '2026-10-20'
  },
  {
    id: 'book-gh-1095',
    bookingCode: 'GHM-654122',
    serviceType: 'bus',
    itemId: 'bus-ktm-pkr-sofa-jagadamba',
    itemTitle: 'Jagadamba VIP Travels (Kathmandu -> Pokhara)',
    itemImage: '/assets/places/tourist-bus.svg',
    destination: 'Pokhara',
    travelDate: '2026-11-04',
    quantityText: '2 VIP Sofa Seats',
    selectedSeats: ['3C', '4C'],
    traveler: {
      fullName: 'Sunita Adhikari',
      email: 'sunita.adhikari@example.com',
      phone: '+977 9813998877',
      nationality: 'Nepali'
    },
    pricing: {
      baseAmountNPR: 3700,
      taxesAndServiceFeeNPR: 185,
      discountNPR: 0,
      totalAmountNPR: 3885
    },
    paymentMethod: 'fonepay',
    paymentStatus: 'paid',
    status: 'confirmed',
    confirmationType: 'instant',
    createdAt: '2026-10-24'
  },
  {
    id: 'book-gh-1096',
    bookingCode: 'GHM-341908',
    serviceType: 'hotels',
    itemId: 'hotel-barahi-chitwan',
    itemTitle: 'Barahi Jungle Lodge & Eco Reserve',
    itemImage: '/assets/places/chitwan.svg',
    destination: 'Chitwan',
    travelDate: '2026-09-12',
    returnDate: '2026-09-15',
    quantityText: 'Deluxe Thatched Cottage (3 Nights)',
    selectedRoomName: 'Deluxe River-Facing Thatched Cottage',
    traveler: {
      fullName: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      phone: '+977 9841234567',
      nationality: 'Nepali'
    },
    pricing: {
      baseAmountNPR: 72000,
      taxesAndServiceFeeNPR: 3600,
      discountNPR: 4000,
      totalAmountNPR: 71600
    },
    paymentMethod: 'card',
    paymentStatus: 'paid',
    status: 'completed',
    confirmationType: 'instant',
    createdAt: '2026-08-28'
  }
];

export const SUPPLIER_LISTINGS = [
  {
    id: 'sup-1',
    title: 'Annapurna Circuit & Thorong La Pass High Trek',
    type: 'Tour',
    priceNPR: 68500,
    status: 'Active',
    rating: 4.95,
    bookingsCount: 48,
    revenueNPR: 3288000,
    inventory: 'Available (Daily)'
  },
  {
    id: 'sup-2',
    title: 'Mardi Himal Scenic Ridge Eco-Trek',
    type: 'Tour',
    priceNPR: 24500,
    status: 'Active',
    rating: 4.91,
    bookingsCount: 32,
    revenueNPR: 784000,
    inventory: 'Available (Daily)'
  },
  {
    id: 'sup-3',
    title: 'Upper Mustang 4WD Overland Adventure',
    type: 'Tour',
    priceNPR: 95000,
    status: 'Under Review',
    rating: 0,
    bookingsCount: 0,
    revenueNPR: 0,
    inventory: 'Pending Verification'
  }
];

export const ADMIN_STATS = {
  totalGrossBookingsNPR: 14820000,
  monthlyActiveBookings: 842,
  registeredSuppliers: 124,
  pendingSupplierApprovals: 5,
  payoutsSettledNPR: 11850000,
  disputeRatePercent: '0.4%'
};
