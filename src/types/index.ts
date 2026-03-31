export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  weight: string;
  isOutOfStock?: boolean;
}

export interface CartItemType extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItemType[];
  deliveryFee: number;
  discountPercentage: number;
  deliveryAddress?: string | null;
}
