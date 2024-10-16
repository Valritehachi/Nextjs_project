import { configureStore } from "@reduxjs/toolkit";
import bodyPageReducer from "./bodyPage/bodyPageSlice";
import foodPageReducer from "./foodPage/foodPageSlice";

export const store = configureStore({
  reducer: {
    foodPage: foodPageReducer,
    bodyPage: bodyPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
