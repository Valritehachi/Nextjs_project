import { db } from "@/db/db";
import { foodTable, type FoodInsert, type FoodSelect } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export const addFoodEntry = async (entry: FoodInsert) => {
  await db.insert(foodTable).values(entry);
};

export const getFoodEntriesByDay = async (
  date: FoodSelect["dateConsumed"],
  userId: FoodSelect["userId"]
) => {
  return await db
    .select()
    .from(foodTable)
    .where(and(eq(foodTable.dateConsumed, date), eq(foodTable.userId, userId)));
};

export const updateFoodEntry = async (
  id: FoodSelect["id"],
  userId: FoodSelect["userId"],
  update: Partial<FoodInsert>
) => {
  await db
    .update(foodTable)
    .set(update)
    .where(and(eq(foodTable.id, id), eq(foodTable.userId, userId)));
};

export const deleteEntry = async (
  id: FoodSelect["id"],
  userId: FoodSelect["userId"]
) => {
  await db
    .delete(foodTable)
    .where(and(eq(foodTable.id, id), eq(foodTable.userId, userId)));
};
