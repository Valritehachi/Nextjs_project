"use server";
import { db } from "@/db/db";
import { foodTable, type FoodInsert, type FoodSelect } from "@/db/schema";
import { and, eq } from "drizzle-orm";

interface GetFoodEntriesByDayParams {
  date: FoodSelect["dateConsumed"];
  userId: FoodSelect["userId"];
}

interface UpdateFoodEntryParams {
  id: FoodSelect["id"];
  userId: FoodSelect["userId"];
  update: Partial<FoodInsert>;
}

interface DeleteEntryParams {
  id: FoodSelect["id"];
  userId: FoodSelect["userId"];
}

export const addFoodEntry = async (entry: FoodInsert) => {
  await db.insert(foodTable).values(entry);
};

export const getFoodEntriesByDay = async ({
  date,
  userId,
}: GetFoodEntriesByDayParams) => {
  return await db
    .select()
    .from(foodTable)
    .where(and(eq(foodTable.dateConsumed, date), eq(foodTable.userId, userId)));
};

export const updateFoodEntry = async ({
  id,
  userId,
  update,
}: UpdateFoodEntryParams) => {
  await db
    .update(foodTable)
    .set(update)
    .where(and(eq(foodTable.id, id), eq(foodTable.userId, userId)));
};

export const deleteEntry = async ({ id, userId }: DeleteEntryParams) => {
  await db
    .delete(foodTable)
    .where(and(eq(foodTable.id, id), eq(foodTable.userId, userId)));
};
