import axios from "axios";
import type { SearchNaturalNutrientsOptionsType } from "../../types/api/SearchNaturalNutrientsOptions";
import type { SearchNaturalNutrientsType } from "../../types/api/searchNaturalNutrients";

export const searchNaturalNutrients = async (
  query: string
): Promise<SearchNaturalNutrientsType> => {
  try {
    const data: SearchNaturalNutrientsOptionsType = {
      query,
      num_servings: 3,
    };
    const headers = {
      "Content-Type": "application/json",
      "x-app-id": process.env.X_APP_ID!,
      "x-app-key": process.env.X_APP_KEY!,
      "x-remote-user-id": 0,
    };
    const url = process.env.BASE_URL! + "/natural/nutrients";
    const res = await axios.post(url, data, { headers });
    return res.data as SearchNaturalNutrientsType;
  } catch (error) {
    throw error;
  }
};

const data = await searchNaturalNutrients("grape");

console.log(data);
