import { db } from "@/db/db";
import { DailySummaryInsert, dailySummaryTable, foodTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { getWaterEntriesByDay } from "./hydrationTableUtils";
import { getFoodEntriesByDay } from "./foodTableUtils";

export const updateTotalCaloriesForDay = async (
  date: DailySummaryInsert["date"],
  userId: DailySummaryInsert["userId"]
) => {
  // Calculate total calories for the day
  const result = await getFoodEntriesByDay(date, userId);

  const totalCalories = result.reduce((acc, entry) => {
    return acc + entry.calories;
  }, 0);

  // Update the dailySummaryTable with the total calories
  await db
    .update(dailySummaryTable)
    .set({ totalCalories })
    .where(
      and(
        eq(dailySummaryTable.date, date),
        eq(dailySummaryTable.userId, userId)
      )
    );
};

export const updateTotalWaterForDay = async (
  date: DailySummaryInsert["date"],
  userId: DailySummaryInsert["userId"]
) => {
  // Calculate total water for the day
  const result = await getWaterEntriesByDay(date, userId);

  const totalWater = result.reduce((acc, entry) => {
    return acc + entry.waterConsumed;
  }, 0);

  // Update the dailySummaryTable with the total water
  await db
    .update(dailySummaryTable)
    .set({ totalWater })
    .where(
      and(
        eq(dailySummaryTable.date, date),
        eq(dailySummaryTable.userId, userId)
      )
    );
};
