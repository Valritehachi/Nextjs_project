"use client";

import { useGetDailyEntriesOverviewPage } from "@/hooks/db/dailySummaryDataHooks";
import { format, subDays } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useGetDayWeightEntry } from "@/hooks/db/weightDataHooks";

export const description = "A bar chart for calorie intake over the past week.";

const chartConfig = {
  weight: {
    label: "Weight",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const UseGetDailyEntry = (day: number): number => {
  const today = new Date().toLocaleDateString();
  const currentDay = subDays(today, day).toLocaleDateString();
  const dateWeightData = useGetDayWeightEntry(currentDay);
  const weight: number =
    dateWeightData.data && dateWeightData.data?.length > 0
      ? Number(dateWeightData.data[0]?.weight)
      : 0;
  return weight;
};

const WeightOverview = () => {
  const today = new Date().toLocaleDateString();

  let day1 = UseGetDailyEntry(0);
  let day2 = UseGetDailyEntry(1);
  let day3 = UseGetDailyEntry(2);
  let day4 = UseGetDailyEntry(3);
  let day5 = UseGetDailyEntry(4);
  let day6 = UseGetDailyEntry(5);
  let day7 = UseGetDailyEntry(6);

  const minWeight = Math.min(day1, day2, day3, day4, day5, day6, day7);
  const maxWeight = Math.max(day1, day2, day3, day4, day5, day6, day7);

  const yAxisDomain = [minWeight - 10, maxWeight + 10];

  const chartData = [
    {
      day: `${format(subDays(today, 6), "ccc")}`,
      weight: day7,
    },
    { day: `${format(subDays(today, 5), "ccc")}`, weight: day6 },
    { day: `${format(subDays(today, 4), "ccc")}`, weight: day5 },
    { day: `${format(subDays(today, 3), "ccc")}`, weight: day4 },
    { day: `${format(subDays(today, 2), "ccc")}`, weight: day3 },
    { day: `${format(subDays(today, 1), "ccc")}`, weight: day2 },
    { day: `${format(today, "ccc")}`, weight: day1 },
  ];

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Weekly Weight Trend</CardTitle>
        <CardDescription>Weight (kg) over the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[30vh] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
            >
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis
                domain={yAxisDomain}
                axisLine={false}
                tickLine={false}
                tickCount={5}
                tickFormatter={(value) => `${value.toFixed(1)}`}
                label={{
                  value: "kg",
                  angle: 0,
                  position: "insideLeft",
                  offset: 0,
                }}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="var(--color-weight)"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "var(--color-weight)",
                  stroke: "var(--color-weight)",
                }}
                activeDot={{
                  r: 6,
                  fill: "var(--color-weight)",
                  stroke: "var(--background)",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Weight over the past week
        </div>
      </CardFooter>
    </Card>
  );
};

export default WeightOverview;
