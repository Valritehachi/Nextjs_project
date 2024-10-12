"use client";
import { Button } from "@/components/ui/button";
import { useUpdateTotalCaloriesForDay } from "@/hooks/db/dailySummaryDataHooks";
import useFood from "@/hooks/food/useFood";
import useFoodActions from "@/hooks/food/useFoodActions";
import { useAddFoodEntry } from "@/hooks/db/foodDataHooks";

const SaveFood: React.FC<{ today?: boolean }> = ({ today }) => {
  const {
    currentFood,
    currentQuantity,
    foodType,
    currentCalories,
    currentPhoto,
    currentAlternative,
    currentDate,
    userId,
  } = useFood();
  const todaysDate = new Date().toLocaleDateString();

  const { resetFoodPageState } = useFoodActions();

  const mutation = useAddFoodEntry();
  const updateDailySummary = useUpdateTotalCaloriesForDay();

  const handleAddFood = async () => {
    resetFoodPageState();
    await mutation.mutateAsync({
      dateConsumed: today ? todaysDate : currentDate,
      alternativeFood: currentAlternative,
      calories: currentCalories,
      foodName: currentFood,
      quantity: currentQuantity,
      foodType: foodType,
      photo: currentPhoto,
      userId,
    });
    await updateDailySummary.mutateAsync({ date: currentDate, userId });
  };

  return (
    <Button
      type="submit"
      disabled={mutation.isPending || updateDailySummary.isPending}
      onClick={handleAddFood}
    >
      Save changes
    </Button>
  );
};

export default SaveFood;
