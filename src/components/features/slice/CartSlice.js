import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { cart_URL } from '../../../api/Url_Api';

// API URL
const api_url = cart_URL;

// Async thunk for adding to the cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product, { rejectWithValue }) => {
    try {
      // Make API request to add the item to the cart
      const response = await axios.post(api_url, product);
      return response.data;  // Assuming the response has the updated cart data
    } catch (error) {
      return rejectWithValue(error.response.data);  // Return error if request fails
    }
  }
);

// Async thunk for removing an item from the cart
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (productId, { rejectWithValue }) => {
    try {
      // Make API request to remove the item from the cart
      await axios.delete(`${api_url}/${productId}`);
      return productId;  // Return the product ID to update state
    } catch (error) {
      return rejectWithValue(error.response.data);  // Return error if request fails
    }
  }
);

// Async thunk for fetching cart items
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      // Make API request to get the cart items
      const response = await axios.get(api_url);
      return response.data;  // Assuming the response has the cart items
    } catch (error) {
      return rejectWithValue(error.response.data);  // Return error if request fails
    }
  }
);

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    status: 'idle',  // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];  // Clear the cart from state
    },
  },
  extraReducers: (builder) => {
    builder
      // Add to cart
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems.push(action.payload);  // Add the new item to the cart
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;  // Set error if failed
      })

      // Remove from cart
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Fetch cart items
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;  // Set the fetched cart items
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;  // Set error if failed
      });
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
