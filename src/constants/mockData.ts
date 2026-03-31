import { URLS } from './images';
import { STRINGS } from './strings';

export const COUPONS_DATA = [
  { id: '1', code: 'SAVE120', pct: '₹120', criteria: 'Add items worth ₹20\nto avail this offer' },
  { id: '2', code: 'AFORRO6', pct: '6%', criteria: null },
  { id: '3', code: 'FLAT250', pct: '₹250', criteria: null }
];

export const SIMILAR_ITEMS = [
  { id: 's1', brand: 'Tata Tea', title: 'Gold Premium Assam Tea Rich Taste', weight: '1 kg', price: 444, originalPrice: 888, discount: '50% OFF', image: URLS.tataTea, hasOptions: true, variants: [{ weight: '3 x 1 kg', price: 444, originalPrice: 444 }, { weight: '1 x 1 kg', price: 155, originalPrice: 160 }] },
  { id: 's2', brand: 'Skyr', title: 'Icelandic Style Unflavored Yogurt', weight: '500 g', price: 150, originalPrice: 200, discount: '25% OFF', image: URLS.yogurt, hasOptions: false, variants: [] },
  { id: 's3', brand: 'Britannia', title: 'Organic Apple Cider Vinegar', weight: '500 ml', price: 299, originalPrice: 350, discount: '14% OFF', image: URLS.vinegar, hasOptions: true, variants: [{ weight: '2 x 500 ml', price: 580, originalPrice: 700 }, { weight: '1 x 500 ml', price: 299, originalPrice: 350 }] }
];

export const SUGGESTED_ITEMS = [
  { id: 'f1', brand: 'Amul', title: 'Fresh Paneer Block', weight: '200 g', price: 85, originalPrice: 90, discount: '5% OFF', image: URLS.paneer, hasOptions: false, variants: [] },
  { id: 'f2', brand: 'Aashirvaad', title: 'Whole Wheat Atta 5kg', weight: '5 kg', price: 210, originalPrice: 250, discount: '16% OFF', image: URLS.wheat, hasOptions: true, variants: [{ weight: '2 x 5 kg', price: 400, originalPrice: 500 }, { weight: '1 x 5 kg', price: 210, originalPrice: 250 }] },
  { id: 'f3', brand: 'Fortune', title: 'Besan Original', weight: '1 kg', price: 95, originalPrice: 110, discount: '13% OFF', image: URLS.besan, hasOptions: false, variants: [] }
];

export const OUT_OF_STOCK_ITEM = {
  id: 'oos1', 
  title: 'Dairy Milk Silk Chocolate Bar', 
  weight: '64 g', 
  price: 120, 
  originalPrice: 120, 
  image: URLS.chocolate
};

export const MAIN_PRODUCT = {
  id: 'main1', brand: 'Cadbury', title: 'Dairy milk Silk Chocolate Bar', weight: '64 g', price: 444, originalPrice: 444, image: URLS.silk, hasOptions: true, isOutOfStock: true, variants: [{ weight: '3 x 64 g', price: 444, originalPrice: 444 }, { weight: '1 x 64 g', price: 160, originalPrice: 160 }]
};

export const PRODUCT_IMAGES = [
  URLS.productPlaceholder,
  URLS.productSilk,
];

export const DELIVERY_INSTRUCTIONS = [
  { id: '1', key: STRINGS.instructionRingBell, icon: 'BellOff' },
  { id: '2', key: STRINGS.instructionDontCall, icon: 'PhoneOff' },
  { id: '3', key: STRINGS.instructionLeaveGuard, icon: 'User' },
];
