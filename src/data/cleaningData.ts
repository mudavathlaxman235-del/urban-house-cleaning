import { ServiceItem, PricingPlan, GalleryItem, SampleReview } from '../types';

import heroCleanerImg from '../assets/images/hyderabad_home_cleaner_1789651102185.jpg';
import hyderabadCityImg from '../assets/images/hyderabad_city_night_1789651116772.jpg';

import kitchenBeforeImg from '../assets/images/kitchen_messy_before_1789651189626.jpg';
import kitchenAfterImg from '../assets/images/kitchen_sparkle_clean_1789651130948.jpg';

import bathroomBeforeImg from '../assets/images/bathroom_dirty_before_1789651202318.jpg';
import bathroomAfterImg from '../assets/images/bathroom_sparkle_clean_1789651146188.jpg';

import livingBeforeImg from '../assets/images/living_dusty_before_1789651215609.jpg';
import livingAfterImg from '../assets/images/livingroom_sparkle_clean_1789651160638.jpg';

import bedroomBeforeImg from '../assets/images/bedroom_messy_before_1789651229935.jpg';
import bedroomAfterImg from '../assets/images/bedroom_sparkle_clean_1789651173325.jpg';

export { heroCleanerImg, hyderabadCityImg };

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bathroom-cleaning',
    title: 'Bathroom Cleaning',
    shortDesc: 'Deep cleaning & disinfection',
    fullDesc: 'Comprehensive descaling, anti-bacterial sanitization, and deep scrubbing of wall tiles, shower partitions, taps, basins, and sanitary ware.',
    features: [
      'Hard water scale & stain removal',
      'Tile scrubbing & grout line cleaning',
      'Mirror, glass & chrome fitting polish',
      'Disinfection of toilet bowl & wash basin'
    ],
    iconName: 'Bath'
  },
  {
    id: 'kitchen-cleaning',
    title: 'Kitchen Cleaning',
    shortDesc: 'Grease removal & surface cleaning',
    fullDesc: 'Intensive degreasing and surface sanitization covering countertops, chimney exterior, stovetop burners, sink descaling, and cabinets.',
    features: [
      'Stovetop & kitchen slab degreasing',
      'Exterior chimney & exhaust hood wipedown',
      'Sink & drain opening sanitization',
      'Cabinet exterior wipedown & grease removal'
    ],
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'living-bedroom',
    title: 'Living Room & Bedroom',
    shortDesc: 'Dusting, vacuuming & full clean',
    fullDesc: 'Meticulous dry & wet dusting, deep upholstery vacuuming, fan & fixture wipe, and complete area sanitization for a tranquil living space.',
    features: [
      'Ceiling fans, lights & switchboard wipe',
      'Mattress & sofa surface vacuuming',
      'Balcony railing & sliding window tracks',
      'Wardrobe exterior & mirror polishing'
    ],
    iconName: 'BedDouble'
  },
  {
    id: 'floor-cleaning',
    title: 'Floor Cleaning',
    shortDesc: 'Tile, marble, wooden & all floor types',
    fullDesc: 'Specialized mechanized and manual floor scrubbing tailored safely to vitrified tiles, Italian marble, granite, and hardwood floors.',
    features: [
      'Safe pH-neutral cleansing agents',
      'Edge-to-edge grout scrub & stain lift',
      'Residue-free damp microfiber mop finish',
      'Skirting board dusting & wipe'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'move-in-out',
    title: 'Move In / Move Out',
    shortDesc: 'Complete home transformation',
    fullDesc: 'Turnkey deep-clean preparing vacant or newly leased flats and villas for immediate, fresh occupancy or smooth handover.',
    features: [
      'Interior & exterior wardrobe wipe',
      'Complete kitchen & bathroom deep scrub',
      'Paint fleck & post-renovation dust removal',
      'Full home vacuum, wash & sanitization'
    ],
    iconName: 'Home'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1bhk',
    bhk: '1 BHK',
    price: '₹4,099',
    priceNum: 4099,
    idealFor: 'Compact 1 BHK flats up to 650 sq.ft',
    includes: [
      '1 Bedroom complete clean & vacuum',
      '1 Master bathroom deep scrub & descaling',
      'Living room & dining area wipedown',
      'Kitchen countertop & surface degrease',
      'All floors mopped with sanitizing solution'
    ]
  },
  {
    id: '2bhk',
    bhk: '2 BHK',
    price: '₹5,999',
    priceNum: 5999,
    popular: true,
    idealFor: 'Standard 2 BHK apartments up to 1,200 sq.ft',
    includes: [
      '2 Bedrooms thorough dusting & vacuuming',
      '2 Bathrooms complete deep descaling',
      'Spacious hall & dining deep cleaning',
      'Kitchen deep degreasing & sink sanitization',
      'Balcony wash & window tracks wiped'
    ]
  },
  {
    id: '3bhk',
    bhk: '3 BHK',
    price: '₹7,999',
    priceNum: 7999,
    idealFor: 'Large 3 BHK apartments up to 1,800 sq.ft',
    includes: [
      '3 Bedrooms complete dusting & floor scrubbing',
      'Up to 3 Bathrooms intensive descaling',
      'Living, dining & family lounge clean',
      'Complete kitchen deep clean & cabinet wipe',
      'Multiple balconies & utility area wash'
    ]
  },
  {
    id: '4bhk',
    bhk: '4 BHK',
    price: '₹10,999',
    priceNum: 10999,
    idealFor: 'Expansive 4 BHK apartments up to 2,500 sq.ft',
    includes: [
      '4 Bedrooms detail dusting & floor polishing',
      'Up to 4 Bathrooms high-pressure descaling',
      'Large foyer, living & dining deep clean',
      'Heavy-duty kitchen degreasing & polish',
      'All balconies, utility & store rooms covered'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-kitchen',
    category: 'Kitchen',
    title: 'Kitchen Deep Clean',
    description: 'Grease and spice splatter removal on quartz counters and chimney backsplashes.',
    beforeImg: kitchenBeforeImg,
    afterImg: kitchenAfterImg,
    highlight: 'Degreased & Spotless'
  },
  {
    id: 'gallery-bathroom',
    category: 'Bathroom',
    title: 'Bathroom Descaling',
    description: 'Elimination of stubborn hard water stains on glass enclosures and chrome fittings.',
    beforeImg: bathroomBeforeImg,
    afterImg: bathroomAfterImg,
    highlight: 'Disinfected & Gleaming'
  },
  {
    id: 'gallery-living',
    category: 'Living Room',
    title: 'Living Room Revival',
    description: 'Dust-free Italian marble floor scrub, sofa vacuuming, and spotless balcony glass.',
    beforeImg: livingBeforeImg,
    afterImg: livingAfterImg,
    highlight: 'Pristine & Refreshed'
  },
  {
    id: 'gallery-bedroom',
    category: 'Bedroom',
    title: 'Bedroom Sanitization',
    description: 'Detailed dusting of wardrobes, wooden flooring polish, and allergen vacuuming.',
    beforeImg: bedroomBeforeImg,
    afterImg: bedroomAfterImg,
    highlight: 'Calm & Dust-Free'
  }
];

/**
 * SAMPLE / PLACEHOLDER REVIEWS
 * Clearly marked placeholder reviews as requested in prompt:
 * "Use placeholder/sample reviews clearly marked in the code so they can easily be replaced with genuine customer reviews later.
 * Do NOT fabricate claims such as '200+ reviews', '4.9/5', or specific customer names unless real review data is supplied."
 */
export const SAMPLE_REVIEWS: SampleReview[] = [
  {
    id: 'sample-review-1',
    isPlaceholderNotice: true,
    authorLabel: 'Apartment Resident',
    locationArea: 'HITEC City, Hyderabad',
    homeType: '3 BHK Deep Clean',
    comment: 'The team was punctual, courteous, and brought all their own equipment. The bathroom descaling made the glass partitions look brand new again.'
  },
  {
    id: 'sample-review-2',
    isPlaceholderNotice: true,
    authorLabel: 'Homeowner',
    locationArea: 'Banjara Hills, Hyderabad',
    homeType: '2 BHK Move-In Clean',
    comment: 'Booked on short notice before moving in. They took great care of the wooden flooring and kitchen cabinets. Very satisfied with the transparent pricing.'
  },
  {
    id: 'sample-review-3',
    isPlaceholderNotice: true,
    authorLabel: 'Gated Community Resident',
    locationArea: 'Gachibowli, Hyderabad',
    homeType: '4 BHK Regular Maintenance',
    comment: 'Attentive to detail and used pleasant eco-friendly cleaning supplies that left no chemical odor. Will definitely book again for festive cleaning.'
  }
];

export const TRUST_POINTS = [
  {
    title: 'Professional Cleaning Team',
    desc: 'Trained, polite, and uniformed personnel who handle your home furnishings with genuine care.'
  },
  {
    title: 'Careful Attention to Detail',
    desc: 'From ceiling fan blades to hard-to-reach corner grout, we do not overlook small spots.'
  },
  {
    title: 'Quality Cleaning Products',
    desc: 'Carefully chosen eco-friendly solutions that are tough on grime while gentle on surfaces and family health.'
  },
  {
    title: 'Reliable Service',
    desc: 'Confirmed arrival slots, dependable scheduling, and seamless coordination across Hyderabad.'
  },
  {
    title: 'Transparent Pricing',
    desc: 'Clear upfront pricing based on home configuration with zero hidden fees or surprise add-ons.'
  },
  {
    title: 'Customer-Focused Service',
    desc: 'Open communication, respectful conduct inside your residence, and responsive support at every step.'
  }
];

export const SERVICE_CATEGORIES = [
  {
    title: 'Home Cleaning',
    desc: 'Comprehensive deep cleaning for independent residences, duplexes, and family houses.',
    badge: 'Popular'
  },
  {
    title: 'Apartment Cleaning',
    desc: 'Tailored cleaning for gated community high-rises and residential towers across Hyderabad.',
    badge: 'Everyday Care'
  },
  {
    title: 'Villa Cleaning',
    desc: 'Extensive multi-level cleaning for villas, penthouses, and spacious luxury properties.',
    badge: 'Turnkey Service'
  },
  {
    title: 'Office Cleaning',
    desc: 'Professional tidying, floor care, and sanitization for boutique studios, clinics, and offices.',
    badge: 'Commercial'
  }
];
