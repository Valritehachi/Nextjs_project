import {
  CurrentFoodType,
  resetState,
  setCurrentAlternative,
  setCurrentCalories,
  setCurrentDate,
  setCurrentFood,
  setCurrentFoodType,
  setCurrentPhoto,
  setCurrentQuantity,
  setCurrentFoodPageUserId,
  setTotalCalories,
} from "@/store/foodPage/foodPageSlice";
import { useAppDispatch } from "@/store/hooks";

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

  const updateCurrentDate = (date: string) => {
    dispatch(setCurrentDate(date));
  };
  const updateCurrentUserId = (userId: string) => {
    dispatch(setCurrentFoodPageUserId(userId));
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
    updateCurrentDate,
    updateCurrentUserId,
    updateCurrentPhoto,
  };
};

export default useFoodActions;
