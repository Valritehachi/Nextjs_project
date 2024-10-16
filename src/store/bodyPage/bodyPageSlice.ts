import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BodyPageState {
  caloriesLimit: number;
  currentBodyCalories: number;
  waterIntakeLimit: number;
  weightDifferencePerWeek: number;
  userId: string;
}

const initialState: BodyPageState = {
  caloriesLimit: 0,
  currentBodyCalories: 0,
  waterIntakeLimit: 0,
  weightDifferencePerWeek: 0,
  userId: "",
};

const bodyPageSlice = createSlice({
  name: "bodyPage",
  initialState,
  reducers: {
    setCurrentUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setCaloriesLimit: (state, action: PayloadAction<number>) => {
      state.caloriesLimit = action.payload;
    },
    setWaterIntakeLimit: (state, action: PayloadAction<number>) => {
      state.waterIntakeLimit = action.payload;
    },
    setCurrentBodyCalories: (state, action: PayloadAction<number>) => {
      state.currentBodyCalories = action.payload;
    },
    setWeightDifferencePerWeek: (state, action: PayloadAction<number>) => {
      state.weightDifferencePerWeek = action.payload;
    },

    resetState: (state) => {
      return {
        ...initialState,
        userId: state.userId,
      };
    },
  },
});

export const {
  setCaloriesLimit,
  setWaterIntakeLimit,
  setCurrentUserId,
  setCurrentBodyCalories,
  setWeightDifferencePerWeek,
  resetState,
} = bodyPageSlice.actions;

export default bodyPageSlice.reducer;
