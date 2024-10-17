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
import { useGetChartData } from "@/hooks/db/overviewHooks";
import {
  useGetWeightEntriesForWeek,
  useGetWeightEntry,
} from "@/hooks/db/weightDataHooks";

export const description = "A bar chart for calorie intake over the past week.";

const chartConfig = {
  weight: {
    label: "Weight",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const WeightOverview = () => {
  const today = new Date().toLocaleDateString();
  const weightData = useGetWeightEntry();
  // const day1 = weightData.data ? weightData.data[0]?.weight : 0;
  // const day2 = weightData.data ? weightData.data[1]?.weight : 0;
  // const day3 = weightData.data ? weightData.data[2]?.weight : 0;
  // const day4 = weightData.data ? weightData.data[3]?.weight : 0;
  // const day5 = weightData.data ? weightData.data[4]?.weight : 0;
  // const day6 = weightData.data ? weightData.data[5]?.weight : 0;
  // const day7 = weightData.data ? weightData.data[6]?.weight : 0;
  const day1 = weightData.data ? Number(weightData.data[0]?.weight) : 0;
  const day2 = weightData.data ? Number(weightData.data[1]?.weight) : 0;
  const day3 = weightData.data ? Number(weightData.data[2]?.weight) : 0;
  const day4 = weightData.data ? Number(weightData.data[3]?.weight) : 0;
  const day5 = weightData.data ? Number(weightData.data[4]?.weight) : 0;
  const day6 = weightData.data ? Number(weightData.data[5]?.weight) : 0;
  const day7 = weightData.data ? Number(weightData.data[6]?.weight) : 0;

  const minWeight = Math.min(day1, day2, day3, day4, day5, day6, day7);
  const maxWeight = Math.max(day1, day2, day3, day4, day5, day6, day7);

  const yAxisDomain = [minWeight - 0.5, maxWeight + 0.5];

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
          Calorie intake over the past week
        </div>
      </CardFooter>
    </Card>
  );
};

export default WeightOverview;
