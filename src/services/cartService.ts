import { Product } from '../types';
import { URLS } from '../constants/images';

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Organic Bananas',
    price: 4.99,
    image: URLS.bananas,
    weight: '1 kg',
  },
  {
    id: '2',
    title: 'Fresh Strawberries',
    price: 3.99,
    originalPrice: 5.99,
    image: URLS.strawberries,
    weight: '250 g',
  },
  {
    id: '3',
    title: 'Whole Milk',
    price: 2.49,
    image: URLS.productDairyMilk,
    weight: '1 L',
  },
  {
    id: '4',
    title: 'Sourdough Bread',
    price: 5.49,
    image: URLS.bread,
    weight: '500 g',
  },
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_PRODUCTS);
    }, 500);
  });
};
