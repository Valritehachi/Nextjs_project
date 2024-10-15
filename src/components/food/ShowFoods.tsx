"use client";
import { Accordion } from "@/components/ui/accordion";

import FoodTypeData from "./FoodTypeData";
import { useGetFoodEntriesByDay } from "@/hooks/db/foodDataHooks";

const ShowFoods: React.FC = () => {
  const foodData = useGetFoodEntriesByDay();

  const breakfastData = foodData.data?.filter(
    (item) => item.foodType === "breakfast"
  );
  const lunchData = foodData.data?.filter((item) => item.foodType === "lunch");
  const dinnerData = foodData.data?.filter(
    (item) => item.foodType === "dinner"
  );
  const snackData = foodData.data?.filter((item) => item.foodType === "snack");

  return (
    <div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight p-2">
        Food data
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <div className="flex flex-col gap-2">
          <FoodTypeData foodData={breakfastData} type={"Breakfast"} />
          <FoodTypeData foodData={lunchData} type={"Lunch"} />
          <FoodTypeData foodData={dinnerData} type={"Dinner"} />
          <FoodTypeData foodData={snackData} type={"Snack"} />
        </div>
      </Accordion>
    </div>
  );
};
export default ShowFoods;
