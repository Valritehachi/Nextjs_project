import { useAppDispatch } from "@/store/hooks";
import {
  setCaloriesLimit,
  setCurrentBodyCalories,
  setCurrentUserId,
  setWaterIntakeLimit,
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

  return {
    updateCurrentBodyPageUserId,
    updateCaloriesLimit,
    updateWaterIntakeLimit,
    updateCurrentBodyCalories,
  };
};

export default useBodyPageActions;
