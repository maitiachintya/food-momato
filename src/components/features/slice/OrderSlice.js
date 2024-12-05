// src/features/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { order_Url } from '../../../api/Url_Api';

const initialState = { products: [], loading: false, error: null };

const API_URL = order_Url;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const OrderSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default OrderSlice.reducer;