import { useAppDispatch } from "@/store/hooks";
import {
  setCurrentFood,
  setCurrentQuantity,
  setCurrentCalories,
  setCurrentFoodType,
  setCurrentAlternative,
  setTotalCalories,
  setCurrentPhoto,
  resetState,
} from "@/store/foodPage/foodPageSlice";
import { CurrentFoodType } from "@/store/foodPage/foodPageSlice";

const useFoodActions = () => {
  const dispatch = useAppDispatch();

  const updateCurrentFood = (food: string) => {
    dispatch(setCurrentFood(food));
  };

  const updateCurrentQuantity = (quantity: number) => {
    dispatch(setCurrentQuantity(quantity));
  };

  const updateCurrentCalories = (calories: number) => {
    dispatch(setCurrentCalories(calories));
  };

  const updateCurrentFoodType = (type: CurrentFoodType) => {
    dispatch(setCurrentFoodType(type));
  };

  const updateCurrentAlternative = (alternative: string) => {
    dispatch(setCurrentAlternative(alternative));
  };

  const updateTotalCalories = (calories: number) => {
    dispatch(setTotalCalories(calories));
  };

  const updateCurrentPhoto = (photo: string) => {
    dispatch(setCurrentPhoto(photo));
  };

  const resetFoodPageState = () => {
    dispatch(resetState());
  };

  return {
    updateCurrentFood,
    updateCurrentQuantity,
    updateCurrentCalories,
    updateCurrentFoodType,
    updateCurrentAlternative,
    updateTotalCalories,
    resetFoodPageState,
    updateCurrentPhoto,
  };
};

export default useFoodActions;
