export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  iconName: string;
}

export interface PricingPlan {
  id: string;
  bhk: string;
  price: string;
  priceNum: number;
  popular?: boolean;
  idealFor: string;
  includes: string[];
}

export interface GalleryItem {
  id: string;
  category: 'Kitchen' | 'Bathroom' | 'Living Room' | 'Bedroom';
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  highlight: string;
}

export interface SampleReview {
  id: string;
  isPlaceholderNotice: boolean;
  authorLabel: string;
  locationArea: string;
  homeType: string;
  comment: string;
}

export interface BookingFormData {
  customerName: string;
  phoneNumber: string;
  serviceRequired: string;
  homeType: string;
  preferredDate: string;
  preferredTime: string;
  addressArea: string;
  additionalMessage: string;
}
