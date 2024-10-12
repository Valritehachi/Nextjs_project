"use server";
import type { SearchNaturalNutrientsOptionsType } from "../../types/api/SearchNaturalNutrientsOptions";
import type { SearchNaturalNutrientsType } from "../../types/api/searchNaturalNutrients";

export const searchNaturalNutrients = async (
  query: string
): Promise<SearchNaturalNutrientsType> => {
  try {
    const params: SearchNaturalNutrientsOptionsType = {
      query,
    };
    const url = process.env.BASE_URL! + "/natural/nutrients";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env.X_APP_ID!,
        "x-app-key": process.env.X_APP_KEY!,
        "x-remote-user-id": "0",
      },
      body: JSON.stringify(params),
      next: {
        revalidate: 0,
      },
    });
    const data = (await res.json()) as SearchNaturalNutrientsType;
    return data;
  } catch (error) {
    throw error;
  }
};
