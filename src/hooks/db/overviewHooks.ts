import { subDays } from "date-fns";
import { useGetDailyEntriesOverviewPage } from "./dailySummaryDataHooks";

export const useGetChartData = (calories: boolean) => {
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

  if (calories) {
    return [
      {
        day: "6 days ago",
        calories: day7.data?.[0]?.totalCalories,
      },
      { day: "5 days ago", calories: day6.data?.[0]?.totalCalories },
      { day: "4 days ago", calories: day5.data?.[0]?.totalCalories },
      { day: "3 days ago", calories: day4.data?.[0]?.totalCalories },
      { day: "2 days ago", calories: day3.data?.[0]?.totalCalories },
      { day: "Yesterday", calories: day2.data?.[0]?.totalCalories },
      { day: "Today", calories: day1.data?.[0]?.totalCalories },
    ];
  }
  // return { day1, day2, day3, day4, day5, day6, day7 };
  return [
    {
      day: "6 days ago",
      water: day7.data?.[0]?.totalWater,
    },
    { day: "5 days ago", water: day6.data?.[0]?.totalWater },
    { day: "4 days ago", water: day5.data?.[0]?.totalWater },
    { day: "3 days ago", water: day4.data?.[0]?.totalWater },
    { day: "2 days ago", water: day3.data?.[0]?.totalWater },
    { day: "Yesterday", water: day2.data?.[0]?.totalWater },
    { day: "Today", water: day1.data?.[0]?.totalWater },
  ];
};
