"use client";
import { Progress } from "@/components/ui/progress";
import { useGetDailyEntriesByDay } from "@/hooks/db/dailySummaryDataHooks";
import { useMemo } from "react";
import AddFood from "./AddFood";
import useRelativeDate from "@/hooks/date/useDateDifference";
import { useCurrentDate, useIsPast } from "@/hooks/food/useFood";
import { cn } from "@/lib/utils";
import { useAddUserEntry, useGetUserEntry } from "@/hooks/db/userDataHooks";

const DailyData: React.FC = () => {
  const today = new Date().toLocaleDateString();
  const currentDate = useCurrentDate();
  const isPast = useIsPast();

  const dailyData = useGetDailyEntriesByDay();
  const userData = useGetUserEntry();

  const showAddFood = currentDate !== today && isPast;

  const requiredCalories = userData.data?.[0]?.preferredCalories ?? 0;
  const requiredWater = userData.data?.[0]?.preferredWater ?? 0;

  const consumedCalories = dailyData.data?.[0]?.totalCalories ?? 0;
  const consumedWater = dailyData.data?.[0]?.totalWater ?? 0;

  let calorieProgress = (consumedCalories / requiredCalories) * 100;
  let waterProgress = (consumedWater / requiredWater) * 100;

  const isCaloriesAbove = consumedCalories - requiredCalories > 0;
  const isWaterAbove = consumedWater - requiredWater > 0;

  const relativeDate = useRelativeDate(currentDate);

  return (
    <div>
      <div className="flex gap-2">
        <h3 className="scroll-m-20 text-2xl pl-2 font-semibold tracking-tight">
          {relativeDate}
        </h3>
        {showAddFood && <AddFood />}
      </div>
      <div className="flex gap-2 flex-col w-full">
        <div>
          <h4 className="scroll-m-20 text-lg text-center font-semibold tracking-tight">
            Calories
          </h4>
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <Progress
                value={isCaloriesAbove ? 0 : calorieProgress}
                className={cn("w-full h-4", isCaloriesAbove && "bg-red-500")}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p className="text-sm font-bold">{consumedCalories}</p>
                <p className="text-sm"> Cal Intake</p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">
                  {isCaloriesAbove ? "Cal exceeded " : "Cal remaining "}
                </p>
                <p className="text-sm font-bold">
                  {isCaloriesAbove
                    ? Math.abs(requiredCalories - consumedCalories)
                    : requiredCalories - consumedCalories}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">Cal limit </p>
                <p className="text-sm font-bold">{requiredCalories}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="scroll-m-20 text-lg text-center font-semibold tracking-tight">
            Water
          </h4>
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <Progress
                value={isWaterAbove ? 0 : waterProgress}
                className={cn("w-full h-4", isWaterAbove && "bg-green-500 ")}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p className="text-sm font-bold">{consumedWater}</p>
                <p className="text-sm"> Water Intake</p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">
                  {isWaterAbove ? "Water exceeded " : "Water remaining "}
                </p>
                <p className="text-sm font-bold">
                  {isWaterAbove
                    ? Math.abs(requiredWater - consumedWater)
                    : requiredWater - consumedWater}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">Water limit </p>
                <p className="text-sm font-bold">{requiredWater}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DailyData;
