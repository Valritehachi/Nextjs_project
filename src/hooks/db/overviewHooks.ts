import { format, subDays } from "date-fns";
import { useGetDailyEntriesOverviewPage } from "./dailySummaryDataHooks";

export const useGetChartData = () => {
  const today = new Date().toLocaleDateString();
  const day1 = useGetDailyEntriesOverviewPage(today);
  const day2 = useGetDailyEntriesOverviewPage(
    subDays(today, 1).toLocaleDateString()
  );
  const day3 = useGetDailyEntriesOverviewPage(
    subDays(today, 2).toLocaleDateString()
  );
  const day4 = useGetDailyEntriesOverviewPage(
    subDays(today, 3).toLocaleDateString()
  );
  const day5 = useGetDailyEntriesOverviewPage(
    subDays(today, 4).toLocaleDateString()
  );
  const day6 = useGetDailyEntriesOverviewPage(
    subDays(today, 5).toLocaleDateString()
  );
  const day7 = useGetDailyEntriesOverviewPage(
    subDays(today, 6).toLocaleDateString()
  );

  return [
    {
      day: `${format(subDays(today, 6), "ccc")}`,
      calories: day7.data?.[0]?.totalCalories ?? 0,
      water: day7.data?.[0]?.totalWater ?? 0,
    },
    {
      day: `${format(subDays(today, 5), "ccc")}`,
      calories: day6.data?.[0]?.totalCalories ?? 0,
      water: day6.data?.[0]?.totalWater ?? 0,
    },

    {
      day: `${format(subDays(today, 4), "ccc")}`,
      calories: day5.data?.[0]?.totalCalories ?? 0,
      water: day5.data?.[0]?.totalWater ?? 0,
    },
    {
      day: `${format(subDays(today, 3), "ccc")}`,
      calories: day4.data?.[0]?.totalCalories ?? 0,
      water: day4.data?.[0]?.totalWater ?? 0,
    },
    {
      day: `${format(subDays(today, 2), "ccc")}`,
      calories: day3.data?.[0]?.totalCalories ?? 0,
      water: day3.data?.[0]?.totalWater ?? 0,
    },
    {
      day: `${format(subDays(today, 1), "ccc")}`,

      calories: day2.data?.[0]?.totalCalories ?? 0,
      water: day2.data?.[0]?.totalWater ?? 0,
    },
    {
      day: `${format(today, "ccc")}`,
      calories: day1.data?.[0]?.totalCalories ?? 0,
      water: day1.data?.[0]?.totalWater ?? 0,
    },
  ];
};
