import { useAppSelector } from "../../store/hooks";

export const useWaterIntakeLimit = () => {
  return useAppSelector((state) => state.bodyPage.waterIntakeLimit);
};

export const useCalorieLimit = () => {
  return useAppSelector((state) => state.bodyPage.caloriesLimit);
};

export const useCurrentBodyCalories = () => {
  return useAppSelector((state) => state.bodyPage.currentBodyCalories);
};

export const useBodyPageUserId = () => {
  return useAppSelector((state) => state.bodyPage.userId);
};
