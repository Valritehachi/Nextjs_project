"use client";
import { Button } from "@/components/ui/button";
import { useUpdateTotalCaloriesForDay } from "@/hooks/db/dailySummaryDataHooks";
import useFood from "@/hooks/food/useFood";
import useFoodActions from "@/hooks/food/useFoodActions";
import { useAddFoodEntry } from "@/hooks/db/foodDataHooks";
import { updateTotalCaloriesForDay } from "@/utils/db/dailySummaryTableUtils";
import { addFoodEntry } from "@/utils/db/foodTableUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const SaveFood: React.FC<{ userId: string }> = ({ userId }) => {
  const {
    currentFood,
    currentQuantity,
    foodType,
    currentCalories,
    currentPhoto,
    currentAlternative,
  } = useFood();

  const { resetFoodPageState } = useFoodActions();

  const currentDate = new Date().toLocaleDateString();

  const mutation = useAddFoodEntry(userId);
  const updateDailySummary = useUpdateTotalCaloriesForDay(userId);

  const handleAddFood = async () => {
    resetFoodPageState();
    await mutation.mutateAsync({
      dateConsumed: currentDate,
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
