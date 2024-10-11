import { SearchNaturalNutrientsType } from "@/types/api/searchNaturalNutrients";
import useFood from "@/store/foodPage/useFood";
import useFoodActions from "@/store/foodPage/useFoodActions";
import { UseQueryResult } from "@tanstack/react-query";

const useHandleSelectChange = (
  searchNaturalData: UseQueryResult<SearchNaturalNutrientsType, Error>
) => {
  const { currentQuantity, currentAlternative } = useFood();

  const {
    updateCurrentCalories,
    updateCurrentAlternative,
    updateTotalCalories,
  } = useFoodActions();

  const handleSelectChange = (value: string) => {
    updateCurrentAlternative(value);

    // If there is no data, return
    if (!searchNaturalData.data?.foods) return;

    // Find the selected food alternative based on the current alternative measure
    const selectedFood = searchNaturalData.data?.foods[0].alt_measures?.find(
      (item) => item.measure === currentAlternative
    );

    // Get the full calories of the food item
    const fullCalories = searchNaturalData.data?.foods[0].nf_calories;

    // Get the full serving weight of the food item in grams
    const fullServingWeight =
      searchNaturalData.data?.foods[0].serving_weight_grams;

    // Get the serving weight of the selected food alternative
    const currentServingWeight = selectedFood?.serving_weight;

    // Check if the current serving weight is not available
    if (!currentServingWeight) {
      // Round the full calories to the nearest integer
      const fullCaloriesRounded = Math.round(fullCalories);

      // Update the current calories with the rounded full calories
      updateCurrentCalories(fullCaloriesRounded);

      // Update the total calories by multiplying the rounded full calories with the current quantity
      updateTotalCalories(fullCaloriesRounded * currentQuantity);
    } else {
      // Calculate the total calories taken per serving based on the current serving weight
      const totalCaloriesTakenPerServing =
        (currentServingWeight / fullServingWeight) * fullCalories;

      // Round the total calories taken per serving to the nearest integer
      const totalCaloriesTakenPerServingRounded = Math.round(
        totalCaloriesTakenPerServing
      );

      // Update the current calories with the rounded total calories taken per serving
      updateCurrentCalories(totalCaloriesTakenPerServingRounded);

      // Calculate the full calories rounded by multiplying the total calories taken per serving with the current quantity
      const fullCaloriesRounded = Math.round(
        totalCaloriesTakenPerServing * currentQuantity
      );

      // Update the total calories with the rounded full calories
      updateTotalCalories(fullCaloriesRounded);
    }
  };

  return { handleSelectChange };
};

export default useHandleSelectChange;
