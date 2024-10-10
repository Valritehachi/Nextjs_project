import { configureStore } from "@reduxjs/toolkit";
import foodPageReducer from "./foodPage/foodPageSlice";

export const store = configureStore({
  reducer: {
    foodPage: foodPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
