import { configureStore } from "@reduxjs/toolkit";
import confessionReducer from "../features/confessionSlice";

const store = configureStore({
  reducer: {
    confessions: confessionReducer,
  },
});

export default store;