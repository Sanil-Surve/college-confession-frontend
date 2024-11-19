import { configureStore } from "@reduxjs/toolkit";
import confessionReducer from "../features/ConfessionSlice";

const store = configureStore({
  reducer: {
    confessions: confessionReducer,
  },
});

export default store;