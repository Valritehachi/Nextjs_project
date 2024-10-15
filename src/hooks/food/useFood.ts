import { differenceInCalendarDays } from "date-fns";
import { useAppSelector } from "../../store/hooks";

export const useCurrentFood = () => {
  return useAppSelector((state) => state.foodPage.currentFood);
};

export const useCurrentQuantity = () => {
  return useAppSelector((state) => state.foodPage.currentQuantity);
};

export const useCurrentCalories = () => {
  return useAppSelector((state) => state.foodPage.currentCalories);
};

export const useCurrentAlternative = () => {
  return useAppSelector((state) => state.foodPage.currentAlternative);
};

export const useTotalCalories = () => {
  return useAppSelector((state) => state.foodPage.totalCalories);
};

export const useFoodType = () => {
  return useAppSelector((state) => state.foodPage.foodType);
};

export const useCurrentPhoto = () => {
  return useAppSelector((state) => state.foodPage.currentPhoto);
};

export const useCurrentDate = () => {
  return useAppSelector((state) => state.foodPage.currentDate);
};

export const useUserId = () => {
  return useAppSelector((state) => state.foodPage.userId);
};

export const useIsPast = () => {
  const currentDate = useAppSelector((state) => state.foodPage.currentDate);
  return differenceInCalendarDays(new Date(currentDate), new Date()) < 1;
};
