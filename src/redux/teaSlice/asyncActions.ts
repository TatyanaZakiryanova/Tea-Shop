import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { SearchParams, Tea } from './types';

export const fetchTeas = createAsyncThunk<Tea[], SearchParams>(
  'tea/fetchTeasStatus',
  async (params) => {
    const { order, category, search, sortBy, currentPage } = params;
    const res: AxiosResponse<Tea[]> = await axios.get(
      `https://6608a863a2a5dd477b14ab61.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${search}&page=${currentPage}&limit=${10}`,
    );
    return res.data;
  },
);
