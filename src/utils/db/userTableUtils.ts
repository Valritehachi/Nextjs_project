"use server";
import { db } from "@/db/db";
import { userTable, type UserInsert, type UserSelect } from "@/db/schema";
import { and, eq } from "drizzle-orm";

interface GetUserEntryParams {
  userId: UserSelect["userId"];
}

interface UpdateUserEntryParams {
  userId: UserSelect["userId"];
  update: Partial<UserInsert>;
}

interface DeleteEntryParams {
  userId: UserSelect["userId"];
}

export const addUserEntry = async (entry: UserInsert) => {
  await db.insert(userTable).values(entry);
};

export const getUserEntry = async ({ userId }: GetUserEntryParams) => {
  return await db
    .select()
    .from(userTable)
    .where(and(eq(userTable.userId, userId)));
};

export const updateUserEntry = async ({
  userId,
  update,
}: UpdateUserEntryParams) => {
  await db.update(userTable).set(update).where(eq(userTable.userId, userId));
};

export const deleteUserEntry = async ({ userId }: DeleteEntryParams) => {
  await db.delete(userTable).where(eq(userTable.userId, userId));
};
