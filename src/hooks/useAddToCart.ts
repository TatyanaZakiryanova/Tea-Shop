import { useCallback } from 'react';

import { SingleTea } from '../pages/TeaPage/types';
import { addItem } from '../redux/cartSlice/cartSlice';
import { CartItem } from '../redux/cartSlice/types';
import { useAppDispatch } from '../redux/store';
import { calculatePrice } from '../utils/CalculatePrice';

const useAddToCart = (tea: SingleTea | null, activeWeight: number) => {
  const dispatch = useAppDispatch();

  const onClickAddItem = useCallback(() => {
    if (!tea) {
      return;
    }
    const calculatedPrice = calculatePrice(tea.price, tea.weight[activeWeight]);

    const item: CartItem = {
      id: tea.id,
      imageUrl: tea.imageUrl,
      title: tea.title,
      type: tea.type,
      weight: tea.weight[activeWeight],
      price: calculatedPrice,
      rating: tea.rating,
      count: 0,
    };
    dispatch(addItem(item));
  }, [dispatch, tea, activeWeight]);

  return { onClickAddItem };
};

export default useAddToCart;
