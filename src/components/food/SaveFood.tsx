"use client";
import { Button } from "@/components/ui/button";
import { useUpdateTotalCaloriesForDay } from "@/hooks/db/dailySummaryDataHooks";
import useFoodActions from "@/hooks/food/useFoodActions";
import { useAddFoodEntry } from "@/hooks/db/foodDataHooks";
import {
  useCurrentAlternative,
  useCurrentDate,
  useCurrentFood,
  useCurrentPhoto,
  useCurrentQuantity,
  useFoodType,
  useTotalCalories,
  useFoodPageUserId,
} from "@/hooks/food/useFood";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const SaveFood: React.FC<{ today?: boolean }> = ({ today }) => {
  const currentFood = useCurrentFood();
  const currentQuantity = useCurrentQuantity();
  const foodType = useFoodType();
  const totalCalories = useTotalCalories();
  const currentPhoto = useCurrentPhoto();
  const currentAlternative = useCurrentAlternative();
  const currentDate = useCurrentDate();
  const userId = useFoodPageUserId();

  const todaysDate = new Date().toLocaleDateString();

  const { toast } = useToast();
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
    toast({
      title: "Food added",
      description: `${currentQuantity} ${currentAlternative} of ${currentFood} for ${foodType} added successfully for ${format(
        today ? todaysDate : currentDate,
        "PPPP"
      )}`,
    });
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
