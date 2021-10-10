import { configureStore } from "@reduxjs/toolkit";
import translationsReducer from "../redux/slices/translations";

export const store = configureStore({
  reducer: {
    translations: translationsReducer,
  },
});
