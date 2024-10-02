// searchItem.test.ts
import { searchItem } from "./searchItem";
import type { SearchItemType } from "../../types/api/searchItem";

global.fetch = jest.fn();

describe("searchItem", () => {
  const query = "test";
  const mockResponse: SearchItemType = {};

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

    const result = await searchItem(query);

    const expectedUrl = "https://api.example.com/search/item?query=test";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "test-app-id",
        "x-app-key": "test-app-key",
        "x-remote-user-id": "0",
      },
    };
    expect(fetch).toHaveBeenCalledWith(expectedUrl, options);
    expect(result).toEqual(mockResponse);
  });

  it("should throw an error on failed API call", async () => {
    const errorMessage = "Network Error";
    (fetch as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(searchItem(query)).rejects.toThrow(errorMessage);
  });
});
