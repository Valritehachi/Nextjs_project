import type { SearchInstantType } from "../../types/api/searchInstant";
import type { SearchInstantOptionsType } from "../../types/api/searchInstantOptions";
import axios from "axios";

export const searchInstant = async (
  query: string,
  common: boolean = true,
  branded: boolean = true
): Promise<SearchInstantType> => {
  try {
    const params: SearchInstantOptionsType = {
      query,
      common,
      branded,
    };
    const headers = {
      "Content-Type": "application/json",
      "x-app-id": process.env.X_APP_ID!,
      "x-app-key": process.env.X_APP_KEY!,
      "x-remote-user-id": 0,
    };
    const url = process.env.BASE_URL! + "/search/instant";
    const data = await axios.get(url, {
      headers,
      params,
    });
    return data.data as SearchInstantType;
  } catch (error) {
    throw error;
  }
};
