import { CartItem } from '../redux/cartSlice/types';

export const selectAddedCartItem = (
  items: any[],
  id: string | undefined,
  weight: number | undefined,
): CartItem | undefined => items.find((obj) => obj.id === id && obj.weight === weight);
