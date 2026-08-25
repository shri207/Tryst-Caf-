export type PageId = 
  | 'home'
  | 'menu'
  | 'story'
  | 'bakery'
  | 'coffee'
  | 'gallery'
  | 'events'
  | 'contact'
  | 'reservation';

export type MenuCategory = 
  | 'all'
  | 'healthy-bowls'
  | 'breakfast-eggs'
  | 'take-your-time'
  | 'chicken-steak'
  | 'seafood'
  | 'lamb-steak'
  | 'bakery-patisserie'
  | 'coffee-hot-beverages'
  | 'cold-shakes-coolers';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryTitle: string;
  price: number;
  priceSecondary?: number;
  description: string;
  image: string;
  isVegetarian?: boolean;
  isNonVeg?: boolean;
  isChefSpecial?: boolean;
  isAllDayBreakfast?: boolean;
  timing?: string;
  tags?: string[];
  pairing?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'coffee' | 'interiors' | 'bakery' | 'outdoor' | 'people';
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingPreference: 'indoor-cozy' | 'outdoor-open-air' | 'patio-corner' | 'no-preference';
  occasion?: string;
  specialRequests?: string;
}
