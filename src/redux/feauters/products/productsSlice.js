import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch('http://localhost:1337/api/products');
    const data = await response.json();
    return data.data;
  }
);

// Nuovo thunk per recuperare un singolo prodotto
export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id) => {
    const response = await fetch(`http://localhost:1337/api/products?filters[id][$eq]=${id}`);
    if (!response.ok) {
      throw new Error('Errore nel recupero del prodotto');
    }
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      return data.data[0];
    } else {
      throw new Error('Prodotto non trovato');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProduct: null,
    status: 'idle',
    productStatus: 'idle',
    error: null,
    productError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Gestione del thunk per il prodotto singolo
      .addCase(getProductById.pending, (state) => {
        state.productStatus = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productStatus = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.productStatus = 'failed';
        state.productError = action.error.message;
      });
  }
});

export default productsSlice.reducer;