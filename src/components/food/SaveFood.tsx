"use client";
import { Button } from "@/components/ui/button";
import { useUpdateTotalCaloriesForDay } from "@/hooks/db/dailySummaryDataHooks";
import useFoodActions from "@/hooks/food/useFoodActions";
import { useAddFoodEntry } from "@/hooks/db/foodDataHooks";
import { useCurrentAlternative, useCurrentDate, useCurrentFood, useCurrentPhoto, useCurrentQuantity, useFoodType, useTotalCalories, useUserId } from "@/hooks/food/useFood";

const SaveFood: React.FC<{ today?: boolean }> = ({ today }) => {

  const currentFood = useCurrentFood();
  const currentQuantity = useCurrentQuantity();
  const foodType = useFoodType();
  const totalCalories = useTotalCalories();
  const currentPhoto = useCurrentPhoto();
  const currentAlternative = useCurrentAlternative();
  const currentDate = useCurrentDate();
  const userId = useUserId();

  const todaysDate = new Date().toLocaleDateString();

  const { resetFoodPageState } = useFoodActions();

  const mutation = useAddFoodEntry();
  const updateDailySummary = useUpdateTotalCaloriesForDay();

  const handleAddFood = async () => {
    await mutation.mutateAsync({
      dateConsumed: today ? todaysDate : currentDate,
      alternativeFood: currentAlternative,
      calories: totalCalories,
      foodName: currentFood,
      quantity: currentQuantity,
      foodType: foodType,
      photo: currentPhoto,
      userId,
    });
    await updateDailySummary.mutateAsync({ date: currentDate, userId });
    resetFoodPageState();
  };

  return (
    <Button
      type="submit"
      disabled={
        mutation.isPending ||
        updateDailySummary.isPending ||
        !currentFood ||
        !currentQuantity ||
        !currentAlternative
      }
      onClick={handleAddFood}
    >
      Save changes
    </Button>
  );
};

export default SaveFood;
