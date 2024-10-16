"use client";

import { useGetDailyEntriesOverviewPage } from "@/hooks/db/dailySummaryDataHooks";
import { subDays } from "date-fns";

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
  const weightData = useGetWeightEntry();
  console.log(weightData.data);
  const day1 = weightData.data ? weightData.data[0]?.weight : 0;
  const day2 = weightData.data ? weightData.data[1]?.weight : 0;
  const day3 = weightData.data ? weightData.data[2]?.weight : 0;
  const day4 = weightData.data ? weightData.data[3]?.weight : 0;
  const day5 = weightData.data ? weightData.data[4]?.weight : 0;
  const day6 = weightData.data ? weightData.data[5]?.weight : 0;
  const day7 = weightData.data ? weightData.data[6]?.weight : 0;

  const chartData = [
    {
      day: "6 days ago",
      weight: day7,
    },
    { day: "5 days ago", weight: day6 },
    { day: "4 days ago", weight: day5 },
    { day: "3 days ago", weight: day4 },
    { day: "2 days ago", weight: day3 },
    { day: "Yesterday", weight: day2 },
    { day: "Today", weight: day1 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>A bar chart of calorie intake over the past week</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="weight" fill="var(--color-weight)" radius={8} />
          </BarChart>
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
