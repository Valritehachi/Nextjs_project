"use client";
import { Progress } from "@/components/ui/progress";
import { useGetDailyEntriesByDay } from "@/hooks/db/dailySummaryDataHooks";
import useFood from "@/hooks/food/useFood";
import { format, formatRelative } from "date-fns";
import { useMemo } from "react";
import AddFood from "./AddFood";
import useRelativeDate from "@/hooks/date/useDateDifference";

const DailyData: React.FC = () => {
  const today = new Date().toLocaleDateString();
  const { currentDate } = useFood();
  const dailyData = useGetDailyEntriesByDay();

  const requiredCalories = 2000;
  const consumedCalories = dailyData.data?.[0]?.totalCalories ?? 0;

  const requiredWater = 2000;
  const consumedWater = dailyData.data?.[0]?.totalWater ?? 0;

  const progress = useMemo(
    () => (consumedCalories / requiredCalories) * 100,
    [consumedCalories]
  );
  const waterProgress = useMemo(
    () => (consumedWater / requiredWater) * 100,
    [consumedWater]
  );

  const relativeDate = useRelativeDate(currentDate);

  return (
    <div>
      <div className="flex gap-2">
        <h3 className="scroll-m-20 text-2xl pl-2 font-semibold tracking-tight">
          {relativeDate.currentRelativeDate}
        </h3>
        {relativeDate.isPast && <AddFood />}
      </div>
      <div className="flex gap-4 flex-col w-full">
        <div>
          <h4 className="scroll-m-20 text-lg text-center font-semibold tracking-tight">
            Calories
          </h4>
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <Progress value={progress} className="w-full h-4" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p className="text-sm font-bold">{consumedCalories}</p>
                <p className="text-sm"> Cal Intake</p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">Cal remaining </p>
                <p className="text-sm font-bold">
                  {requiredCalories - consumedCalories}
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
              <Progress value={waterProgress} className="w-full h-4" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p className="text-sm font-bold">{consumedWater}</p>
                <p className="text-sm"> Water Intake</p>
              </div>
              <div className="flex gap-2">
                <p className="text-sm">Water intake </p>
                <p className="text-sm font-bold">
                  {requiredWater - consumedWater}
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
