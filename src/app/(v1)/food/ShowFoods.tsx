"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { FoodSelect } from "@/db/schema";
import { getFoodEntriesByDay } from "@/utils/db/foodTableUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";
import FoodTypeData from "./FoodTypeData";

const ShowFoods: React.FC<{ userId: string }> = ({ userId }) => {
  const currentDate = new Date().toLocaleDateString();
  const foodData = useQuery({
    queryKey: ["food", "entries", currentDate, userId],
    queryFn: () => getFoodEntriesByDay({ date: currentDate, userId }),
  });

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
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
        Food data
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <FoodTypeData foodData={breakfastData} type={"Breakfast"} />
        <FoodTypeData foodData={lunchData} type={"Lunch"} />
        <FoodTypeData foodData={dinnerData} type={"Dinner"} />
        <FoodTypeData foodData={snackData} type={"Snack"} />
      </Accordion>
    </div>
  );
};
export default ShowFoods;
