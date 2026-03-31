import { CartItemType } from '../types';

export const calculateSubtotal = (items: CartItemType[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateDiscount = (subtotal: number, discountPercentage: number): number => {
  return subtotal * (discountPercentage / 100);
};

export const calculateTotal = (subtotal: number, deliveryFee: number, discount: number = 0): number => {
  return subtotal - discount + deliveryFee;
};
