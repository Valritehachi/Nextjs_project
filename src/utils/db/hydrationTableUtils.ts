import { db } from "@/db/db";
import {
  hydrationTable,
  type HydrationInsert,
  type HydrationSelect,
} from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const addWaterEntry = async (entry: HydrationInsert) => {
  await db.insert(hydrationTable).values(entry);
};

export const getWaterEntriesByDay = async (
  date: HydrationSelect["dateConsumed"],
  userId: HydrationSelect["userId"]
) => {
  return await db
    .select()
    .from(hydrationTable)
    .where(
      and(
        eq(hydrationTable.dateConsumed, date),
        eq(hydrationTable.userId, userId)
      )
    );
};

export const updateWaterEntry = async (
  id: HydrationSelect["id"],
  userId: HydrationSelect["userId"],
  update: Partial<HydrationInsert>
) => {
  await db
    .update(hydrationTable)
    .set(update)
    .where(and(eq(hydrationTable.id, id), eq(hydrationTable.userId, userId)));
};

export const deleteEntry = async (
  id: HydrationSelect["id"],
  userId: HydrationSelect["userId"]
) => {
  await db
    .delete(hydrationTable)
    .where(and(eq(hydrationTable.id, id), eq(hydrationTable.userId, userId)));
};
