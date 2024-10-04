import type { SearchItemType } from "../../types/api/searchItem";
import type { SearchItemOptionsType } from "../../types/api/searchItemOptions";

export const searchItem = async (query: string): Promise<SearchItemType> => {
  try {
    const params: SearchItemOptionsType = {
      nix_item_id: query,
    };
    const finalParams = new URLSearchParams();
    for (const key in params) {
      finalParams.append(
        key,
        String(params[key as keyof SearchItemOptionsType])
      );
    }
    const finalParamsString = finalParams.toString();

    const url = process.env.BASE_URL! + "/search/item?" + finalParamsString;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env.X_APP_ID!,
        "x-app-key": process.env.X_APP_KEY!,
        "x-remote-user-id": "0",
      },
      next: {
        revalidate: 0,
      },
    });
    const data = (await res.json()) as SearchItemType;
    return data;
  } catch (error) {
    throw error;
  }
};
