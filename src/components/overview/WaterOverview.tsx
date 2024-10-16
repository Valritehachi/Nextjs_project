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

export const description = "A bar chart for calorie intake over the past week.";

const chartConfig = {
  water: {
    label: "Water",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const WaterOverview = () => {
  const chartData = useGetChartData(false);

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
            <Bar dataKey="water" fill="var(--color-water)" radius={8} />
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

export default WaterOverview;
