import type { SearchInstantType } from "../../types/api/searchInstant";
import type { SearchInstantOptionsType } from "../../types/api/searchInstantOptions";

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
    const finalParams = new URLSearchParams();
    for (const key in params) {
      finalParams.append(
        key,
        String(params[key as keyof SearchInstantOptionsType])
      );
    }
    const finalParamsString = finalParams.toString();

    const url =
      process.env.NEXT_PUBLIC_BASE_URL! +
      "/search/instant?" +
      finalParamsString;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env.NEXT_PUBLIC_X_APP_ID!,
        "x-app-key": process.env.NEXT_PUBLIC_X_APP_KEY!,
        "x-remote-user-id": "0",
      },
      next: {
        revalidate: 0,
      },
    });
    const data = (await res.json()) as SearchInstantType;
    return data;
  } catch (error) {
    throw error;
  }
};
