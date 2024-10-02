import axios from "axios";
import type { SearchItemType } from "../../types/api/searchItem";
import type { SearchItemOptionsType } from "../../types/api/searchItemOptions";

export const searchItem = async (query: string): Promise<SearchItemType> => {
  try {
    const params: SearchItemOptionsType = {
      nix_item_id: query,
    };
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-app-id": process.env.X_APP_ID!,
      "x-app-key": process.env.X_APP_KEY!,
      "x-remote-user-id": 0,
    };
    const url = process.env.BASE_URL! + "/search/item";
    const data = await axios.get(url, {
      headers,
      params,
    });
    return data.data as SearchItemType;
  } catch (error) {
    throw error;
  }
};

const data = await searchItem("65c3399c5641780008f6f038");

console.log(data);
