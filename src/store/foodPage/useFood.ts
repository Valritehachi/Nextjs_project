import { useAppSelector } from "../hooks";

const useFood = () => {
  const currentFood = useAppSelector((state) => state.foodPage.currentFood);
  const currentQuantity = useAppSelector(
    (state) => state.foodPage.currentQuantity
  );
  const currentCalories = useAppSelector(
    (state) => state.foodPage.currentCalories
  );
  const currentAlternative = useAppSelector(
    (state) => state.foodPage.currentAltnative
  );
  const totalCalories = useAppSelector((state) => state.foodPage.totalCalories);
  const foodType = useAppSelector((state) => state.foodPage.foodType);

  return {
    currentFood,
    currentQuantity,
    currentCalories,
    currentAlternative,
    totalCalories,
    foodType,
  };
};

export default useFood;
