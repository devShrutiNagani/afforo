import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addToCart, removeFromCart, updateQuantity, clearCart, setDeliveryAddress } from '../store/cartSlice';
import { Product } from '../types';

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);

  return {
    items: cart.items,
    deliveryFee: cart.deliveryFee,
    discountPercentage: cart.discountPercentage,
    deliveryAddress: cart.deliveryAddress,
    setAddress: (address: string | null) => dispatch(setDeliveryAddress(address)),
    addItem: (product: Product) => dispatch(addToCart(product)),
    removeItem: (id: string) => dispatch(removeFromCart(id)),
    updateItemQuantity: (id: string, quantity: number) => dispatch(updateQuantity({ id, quantity })),
    clear: () => dispatch(clearCart()),
  };
};
