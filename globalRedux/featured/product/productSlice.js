import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/app/utiliz/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params) => {
    const response = await axiosInstance.get('/get-products', { params });
    return response.data;
  }
);

export const loadMoreProducts = createAsyncThunk(
  'products/loadMoreProducts',
  async (params) => {
    const response = await axiosInstance.get('/get-loadProducts', { params });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    offset: 0,
    seenProducts: [],
  },
  reducers: {
    resetProducts: (state) => {
      state.data = [];
      state.offset = 0;
      state.seenProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.offset = action.payload.length;
        state.seenProducts = action.payload.map((product) => product._id);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loadMoreProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMoreProducts.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload];
        state.loading = false;
        state.offset += action.payload.length;
        state.seenProducts = [
          ...state.seenProducts,
          ...action.payload.map((product) => product._id),
        ];
      })
      .addCase(loadMoreProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetProducts } = productsSlice.actions;
export default productsSlice.reducer;
