import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodPageState {
  currentFood: string;
  currentCalories: number;
  currentQuantity: number;
  foodType: CurrentFoodType;
}

export type CurrentFoodType = "breakfast" | "lunch" | "dinner" | "snack";

const initialState: FoodPageState = {
  currentFood: "",
  currentCalories: 0,
  currentQuantity: 1,
  foodType: "breakfast",
};

const foodPageSlice = createSlice({
  name: "foodPage",
  initialState,
  reducers: {
    setCurrentFood: (state, action: PayloadAction<string>) => {
      state.currentFood = action.payload;
    },
    setCurrentQuantity: (state, action: PayloadAction<number>) => {
      state.currentQuantity = action.payload;
    },
    setCurrentCalories: (state, action: PayloadAction<number>) => {
      state.currentCalories = action.payload;
    },
    setCurrentFoodType: (state, action: PayloadAction<CurrentFoodType>) => {
      state.foodType = action.payload;
    },
  },
});

export const {
  setCurrentFood,
  setCurrentQuantity,
  setCurrentCalories,
  setCurrentFoodType,
} = foodPageSlice.actions;

export default foodPageSlice.reducer;
