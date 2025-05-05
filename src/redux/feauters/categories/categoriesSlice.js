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

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const data = await fetchWithFallback("categories?populate=*");
    return data.data;
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