import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LOCAL_API = "http://localhost:1337/api";
const CLOUD_API = "https://cocktail-api-data-2.onrender.com";

const fetchWithFallback = async (endpoint) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);
  
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
    // ✅ Rimosso ?populate=* e data.data
    const data = await fetchWithFallback("products");
    return data; // json-server restituisce direttamente l'array
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    // ✅ Usa la sintassi di json-server
    const data = await fetchWithFallback(`products/${id}`);
    return data; // json-server restituisce direttamente l'oggetto
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