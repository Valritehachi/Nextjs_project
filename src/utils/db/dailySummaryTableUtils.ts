"use server";
import { db } from "@/db/db";
import { DailySummaryInsert, dailySummaryTable, foodTable } from "@/db/schema";
import { and, between, eq, gte } from "drizzle-orm";
import { getWaterEntriesByDay } from "./waterTableUtils";
import { getFoodEntriesByDay } from "./foodTableUtils";
import { subDays } from "date-fns";

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

  const totalCalories = result.reduce((acc, entry) => {
    return acc + entry.calories;
  }, 0);

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

export const getDailySummaryByWeek = async ({
  userId,
}: {
  userId: DailySummaryInsert["userId"];
}) => {
  const date = new Date();
  const startDate = subDays(date, 7);

  return await db
    .select()
    .from(dailySummaryTable)
    .where(
      and(
        gte(dailySummaryTable.date, startDate.toLocaleDateString()),
        eq(dailySummaryTable.userId, userId)
      )
    );
};
