"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { FoodSelect } from "@/db/schema";
import { getDailySummaryByDay } from "@/utils/db/dailySummaryTableUtils";
import { getFoodEntriesByDay } from "@/utils/db/foodTableUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const DailyData: React.FC<{ userId: string }> = ({ userId }) => {
  const currentDate = new Date().toLocaleDateString();
  const dailyData = useQuery({
    queryKey: ["food", "daily", currentDate, userId],
    queryFn: () => getDailySummaryByDay({ date: currentDate, userId }),
  });
  const requiredCalories = 2000;
  const consumedCalories = dailyData.data?.[0]?.totalCalories ?? 0;
  const progress = (consumedCalories / requiredCalories) * 100;

  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Daily data
      </h4>
      <Progress value={progress} className="w-full h-4" />
    </div>
  );
};
export default DailyData;
