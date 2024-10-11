import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodPageState {
  currentFood: string;
  currentAltnative: string;
  currentCalories: number;
  currentQuantity: number;
  foodType: CurrentFoodType;
}

export type CurrentFoodType = "breakfast" | "lunch" | "dinner" | "snack";

const initialState: FoodPageState = {
  currentFood: "",
  currentAltnative: "",
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
    setCurrentAlternative: (state, action: PayloadAction<string>) => {
      state.currentAltnative = action.payload;
    },

    AddFood: (state) => {},
  },
});

export const {
  setCurrentFood,
  setCurrentQuantity,
  setCurrentCalories,
  setCurrentFoodType,
  setCurrentAlternative,
} = foodPageSlice.actions;

export default foodPageSlice.reducer;
