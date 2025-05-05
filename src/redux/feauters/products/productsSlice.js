import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LOCAL_API = "http://localhost:1337/api";
const CLOUD_API = "https://lovable-animal-afb45367af.strapiapp.com/api";

// Funzione di utilità per il fetch con fallback
const fetchWithFallback = async (endpoint) => {
  // Richiesta locale con timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 secondi di timeout
  
  try {
    const response = await fetch(`${LOCAL_API}/${endpoint}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Richiesta API locale fallita: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    console.log(`API locale fallita: ${error.message}. Provo con l'API cloud...`);
    
    // Fallback su API cloud
    const cloudResponse = await fetch(`${CLOUD_API}/${endpoint}`);
    
    if (!cloudResponse.ok) {
      throw new Error(`Richiesta API cloud fallita: ${cloudResponse.status}`);
    }
    
    return await cloudResponse.json();
  }
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await fetchWithFallback("products?populate=*");
    return data.data;
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const data = await fetchWithFallback(`products?filters[id][$eq]=${id}&populate=*`);
    if (data.data && data.data.length > 0) {
      return data.data[0];
    } else {
      throw new Error("Prodotto non trovato");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    currentProduct: null,
    status: "idle",
    productStatus: "idle",
    error: null,
    productError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Gestione del thunk per il prodotto singolo
      .addCase(getProductById.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.currentProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.productStatus = "failed";
        state.productError = action.error.message;
      });
  },
});

export default productsSlice.reducer;