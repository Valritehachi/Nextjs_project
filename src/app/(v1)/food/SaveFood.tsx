"use client";
import { Button } from "@/components/ui/button";
import useFood from "@/store/foodPage/useFood";
import useFoodActions from "@/store/foodPage/useFoodActions";
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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addFoodEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food", "entries", currentDate, userId],
      });
    },
  });

  const updateDailySummary = useMutation({
    mutationFn: updateTotalCaloriesForDay,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food", "daily", currentDate, userId],
      });
    },
  });

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
