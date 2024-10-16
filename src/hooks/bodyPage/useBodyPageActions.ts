import { useAppDispatch } from "@/store/hooks";
import {
  resetState,
  setCaloriesLimit,
  setCurrentBodyCalories,
  setCurrentUserId,
  setWaterIntakeLimit,
  setWeightDifferencePerWeek,
} from "@/store/bodyPage/bodyPageSlice";

const useBodyPageActions = () => {
  const dispatch = useAppDispatch();

  const updateCurrentBodyPageUserId = (userId: string) => {
    dispatch(setCurrentUserId(userId));
  };

  const updateCaloriesLimit = (calories: number) => {
    dispatch(setCaloriesLimit(calories));
  };
  const updateCurrentBodyCalories = (calories: number) => {
    dispatch(setCurrentBodyCalories(calories));
  };

  const updateWaterIntakeLimit = (ml: number) => {
    dispatch(setWaterIntakeLimit(ml));
  };
  const updateWeightDifferencePerWeek = (kg: number) => {
    dispatch(setWeightDifferencePerWeek(kg));
  };

  const resetBodyPageState = () => {
    dispatch(resetState());
  };

  return {
    updateCurrentBodyPageUserId,
    updateCaloriesLimit,
    updateWaterIntakeLimit,
    updateCurrentBodyCalories,
    updateWeightDifferencePerWeek,
    resetBodyPageState,
  };
};

export default useBodyPageActions;
