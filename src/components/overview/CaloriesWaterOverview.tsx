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
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useGetChartData } from "@/hooks/db/overviewHooks";

export const description = "A bar chart for calorie intake over the past week.";

const chartConfig = {
  calories: {
    label: "Calories (Kcal)",
    color: "hsl(var(--chart-1))",
  },
  water: {
    label: "Water (ml)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const CaloriesWaterOverview = () => {
  const startdate = new Date();
  const endDate = subDays(startdate, 6);
  const chartData = useGetChartData();
  const cardDescription = `Calories (kcal) and Water (ml) intake from ${format(
    endDate,
    "PPPP"
  )} - ${format(startdate, "PPPP")}`;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Weekly Intake Chart</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[30vh] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 40,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />{" "}
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="var(--color-calories)"
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="var(--color-water)"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="calories"
                fill="var(--color-calories)"
                name="Calories (kcal)"
              />
              <Bar
                yAxisId="right"
                dataKey="water"
                fill="var(--color-water)"
                name="Water (ml)"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Days over the week
        </div>
        {/* <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
};

export default CaloriesWaterOverview;
