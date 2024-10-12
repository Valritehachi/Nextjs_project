"use server";
import { db } from "@/db/db";
import { DailySummaryInsert, dailySummaryTable, foodTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { getWaterEntriesByDay } from "./hydrationTableUtils";
import { getFoodEntriesByDay } from "./foodTableUtils";

interface DailySummaryParams {
  date: DailySummaryInsert["date"];
  userId: DailySummaryInsert["userId"];
}

export const updateTotalCaloriesForDay = async ({
  date,
  userId,
}: DailySummaryParams) => {
  // Calculate total calories for the day
  const result = await getFoodEntriesByDay({ date, userId });

  console.log("result", result);

  const totalCalories = result.reduce((acc, entry) => {
    return acc + entry.calories;
  }, 0);

  console.log("totalCalories", totalCalories);

  // Update the dailySummaryTable with the total calories
  // Check if there's already an entry for the day
  const existingEntry = await db
    .select()
    .from(dailySummaryTable)
    .where(
      and(
        eq(dailySummaryTable.date, date),
        eq(dailySummaryTable.userId, userId)
      )
    );

  if (existingEntry.length > 0) {
    // Update the existing entry
    await db
      .update(dailySummaryTable)
      .set({ totalCalories })
      .where(
        and(
          eq(dailySummaryTable.date, date),
          eq(dailySummaryTable.userId, userId)
        )
      );
  } else {
    // Insert a new entry
    await db.insert(dailySummaryTable).values({ date, userId, totalCalories });
  }
};

export const updateTotalWaterForDay = async ({
  date,
  userId,
}: DailySummaryParams) => {
  // Calculate total water for the day
  const result = await getWaterEntriesByDay({ date, userId });

  const totalWater = result.reduce((acc, entry) => {
    return acc + entry.waterConsumed;
  }, 0);

  // Update the dailySummaryTable with the total water
  // Check if there's already an entry for the day
  const existingEntry = await db
    .select()
    .from(dailySummaryTable)
    .where(
      and(
        eq(dailySummaryTable.date, date),
        eq(dailySummaryTable.userId, userId)
      )
    );

  if (existingEntry.length > 0) {
    // Update the existing entry
    await db
      .update(dailySummaryTable)
      .set({ totalWater })
      .where(
        and(
          eq(dailySummaryTable.date, date),
          eq(dailySummaryTable.userId, userId)
        )
      );
  } else {
    // Insert a new entry
    await db.insert(dailySummaryTable).values({ date, userId, totalWater });
  }
};

export const getDailySummaryByDay = async ({
  date,
  userId,
}: DailySummaryParams) => {
  return await db
    .select()
    .from(dailySummaryTable)
    .where(
      and(
        eq(dailySummaryTable.date, date),
        eq(dailySummaryTable.userId, userId)
      )
    );
};
