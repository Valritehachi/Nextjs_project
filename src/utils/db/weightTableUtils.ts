"use server";
import { db } from "@/db/db";
import { weightTable, type WeightInsert, type WeightSelect } from "@/db/schema";
import { and, eq, gte, lt, lte } from "drizzle-orm";

interface GetWeightEntryParams {
  userId: WeightSelect["userId"];
}

interface GetDayWeightEntryParams {
  userId: WeightSelect["userId"];
  date: WeightSelect["date"];
}

interface UpdateWeightEntryParams {
  userId: WeightSelect["userId"];
  update: Partial<WeightInsert>;
}

interface DeleteEntryParams {
  userId: WeightSelect["userId"];
}

export const addWeightEntry = async (entry: WeightInsert) => {
  await db.insert(weightTable).values(entry);
};

export const getWeightEntry = async ({ userId }: GetWeightEntryParams) => {
  return await db
    .select()
    .from(weightTable)
    .where(and(eq(weightTable.userId, userId)));
};

export const getDayWeightEntry = async ({ userId, date }: GetDayWeightEntryParams) => {
  return await db
    .select()
    .from(weightTable)
    .where(and(eq(weightTable.userId, userId), eq(weightTable.date, date)));
};

export const updateWeightEntry = async ({
  userId,
  update,
}: UpdateWeightEntryParams) => {
  await db
    .update(weightTable)
    .set(update)
    .where(eq(weightTable.userId, userId));
};

export const deleteWeightEntry = async ({ userId }: DeleteEntryParams) => {
  await db.delete(weightTable).where(eq(weightTable.userId, userId));
};

export const createOrUpdateWeightEntry = async ({
  userId,
  ...update
}: WeightInsert) => {
  if (!update.date) return;
  const existingEntry = await db
    .select()
    .from(weightTable)
    .where(
      and(eq(weightTable.userId, userId), eq(weightTable.date, update.date))
    );

  if (existingEntry.length > 0) {
    // Update the existing entry
    await updateWeightEntry({ userId, update });
  } else {
    // Create a new entry
    await addWeightEntry({ userId, ...update });
  }
};
