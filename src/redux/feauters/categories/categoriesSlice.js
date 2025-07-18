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
    
    const cloudResponse = await fetch(`${CLOUD_API}/${endpoint}`);
    
    if (!cloudResponse.ok) {
      throw new Error(`Richiesta API cloud fallita: ${cloudResponse.status}`);
    }
    
    return await cloudResponse.json();
  }
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    // ✅ Rimosso ?populate=* e data.data
    const data = await fetchWithFallback("categories");
    return data; // json-server restituisce direttamente l'array
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;