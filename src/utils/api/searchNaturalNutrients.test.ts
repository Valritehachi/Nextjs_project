import { searchNaturalNutrients } from "./searchNaturalNutrients";
import type { SearchNaturalNutrientsType } from "../../types/api/searchNaturalNutrients";

global.fetch = jest.fn();

describe("searchNaturalNutrients", () => {
  const query = "apple";
  const mockResponse: SearchNaturalNutrientsType = {};

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.X_APP_ID = "test-app-id";
    process.env.X_APP_KEY = "test-app-key";
    process.env.BASE_URL = "https://api.example.com";
  });

  it("should return data on successful API call", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    const result = await searchNaturalNutrients(query);

    const expectedUrl = "https://api.example.com/natural/nutrients";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "test-app-id",
        "x-app-key": "test-app-key",
        "x-remote-user-id": "0",
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 0,
      },
    };
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(expectedUrl, options);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect((fetch as jest.Mock).mock.calls[0][0]).toEqual(expectedUrl);
    expect((fetch as jest.Mock).mock.calls[0][1]).toEqual(options);
    expect((fetch as jest.Mock).mock.lastCall).toEqual([expectedUrl, options]);
  });

  it("should throw an error on failed API call", async () => {
    const errorMessage = "Network Error";
    (fetch as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(searchNaturalNutrients(query)).rejects.toThrow(errorMessage);
  });
});
