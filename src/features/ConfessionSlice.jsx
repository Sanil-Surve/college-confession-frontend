import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://college-confession-backend.onrender.com/api/confessions";

export const fetchConfessions = createAsyncThunk("confessions/fetch", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const createConfession = createAsyncThunk("confessions/create", async (formData) => {
  const response = await axios.post(BASE_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
});

export const voteConfession = createAsyncThunk("confessions/vote", async ({ id, type }) => {
  const response = await axios.put(`${BASE_URL}/${id}/vote`, { type });
  return response.data;
});

const ConfessionSlice = createSlice({
  name: "confessions",
  initialState: {
    confessions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfessions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConfessions.fulfilled, (state, action) => {
        state.loading = false;
        state.confessions = action.payload;
      })
      .addCase(fetchConfessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createConfession.fulfilled, (state, action) => {
        state.confessions.unshift(action.payload);
      })
      .addCase(voteConfession.fulfilled, (state, action) => {
        const index = state.confessions.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) state.confessions[index] = action.payload;
      });
  },
});

export default ConfessionSlice.reducer;