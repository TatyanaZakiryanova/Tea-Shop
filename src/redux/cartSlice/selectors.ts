import { RootState } from '../store';

export const cartItemsSelector = (state: RootState) => state.cartReducer.items;
export const totalCostSelector = (state: RootState) => state.cartReducer.totalCost;
