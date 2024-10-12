import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FoodPageState {
  currentFood: string;
  currentAltnative: string;
  currentCalories: number;
  totalCalories: number;
  currentQuantity: number;
  foodType: CurrentFoodType;
  currentPhoto: string;
  currentDate: string;
  userId: string;
}

export type CurrentFoodType = "breakfast" | "lunch" | "dinner" | "snack";

const initialState: FoodPageState = {
  currentFood: "",
  currentAltnative: "",
  currentCalories: 0,
  totalCalories: 0,
  currentQuantity: 1,
  foodType: "breakfast",
  currentPhoto: "",
  userId: "",
  currentDate: new Date().toLocaleDateString(),
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
    setTotalCalories: (state, action: PayloadAction<number>) => {
      state.totalCalories = action.payload;
    },
    setCurrentPhoto: (state, action: PayloadAction<string>) => {
      state.currentPhoto = action.payload;
    },
    setCurrentDate: (state, action: PayloadAction<string>) => {
      state.currentDate = action.payload;
    },
    setCurrentUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },

    resetState: (state) => {
      state = initialState;
    },
  },
});

export const {
  setCurrentFood,
  setCurrentQuantity,
  setCurrentCalories,
  setCurrentFoodType,
  setCurrentAlternative,
  setTotalCalories,
  setCurrentPhoto,
  setCurrentDate,
  setCurrentUserId,
  resetState,
} = foodPageSlice.actions;

export default foodPageSlice.reducer;
