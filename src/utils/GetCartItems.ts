import { CartItem } from '../redux/cartSlice/types';
import { calcTotalCost } from './CalculateCost';

export const GetCartItems = () => {
  const cartData = localStorage.getItem('cart');
  const items: CartItem[] | [] = cartData ? JSON.parse(cartData) : [];
  const totalCost = calcTotalCost(items);

  return {
    items: items as CartItem[],
    totalCost,
  };
};
