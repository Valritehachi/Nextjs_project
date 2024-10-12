"use server";
import { db } from "@/db/db";
import {
  hydrationTable,
  type HydrationInsert,
  type HydrationSelect,
} from "@/db/schema";
import { and, eq } from "drizzle-orm";

interface GetWaterEntriesByDayParams {
  date: HydrationSelect["dateConsumed"];
  userId: HydrationSelect["userId"];
}

interface UpdateWaterEntryParams {
  id: HydrationSelect["id"];
  userId: HydrationSelect["userId"];
  update: Partial<HydrationInsert>;
}

interface DeleteEntryParams {
  id: HydrationSelect["id"];
  userId: HydrationSelect["userId"];
}

export const addWaterEntry = async (entry: HydrationInsert) => {
  await db.insert(hydrationTable).values(entry);
};

export const getWaterEntriesByDay = async ({
  date,
  userId,
}: GetWaterEntriesByDayParams) => {
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

export const updateWaterEntry = async ({
  id,
  userId,
  update,
}: UpdateWaterEntryParams) => {
  await db
    .update(hydrationTable)
    .set(update)
    .where(and(eq(hydrationTable.id, id), eq(hydrationTable.userId, userId)));
};

export const deleteWaterEntry = async ({ id, userId }: DeleteEntryParams) => {
  await db
    .delete(hydrationTable)
    .where(and(eq(hydrationTable.id, id), eq(hydrationTable.userId, userId)));
};
