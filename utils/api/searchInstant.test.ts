import { searchInstant } from "./searchInstant";
import type { SearchInstantType } from "../../types/api/searchInstant";

global.fetch = jest.fn();

describe("searchInstant", () => {
  const query = "test";
  const common = true;
  const branded = true;
  const mockResponse: SearchInstantType = {};

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.X_APP_ID = "test-app-id";
    process.env.X_APP_KEY = "test-app-key";
    process.env.BASE_URL = "https://api.example.com";
  });

  it("should return data on successful API call searchInstant", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await searchInstant(query, common, branded);
    const expectedUrl =
      "https://api.example.com/search/instant?query=test&common=true&branded=true";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "test-app-id",
        "x-app-key": "test-app-key",
        "x-remote-user-id": "0",
      },
      next: {
        revalidate: 0,
      },
    };
    expect(fetch).toHaveBeenCalledWith(expectedUrl, options);
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect((fetch as jest.Mock).mock.calls[0][0]).toEqual(expectedUrl);
    expect((fetch as jest.Mock).mock.calls[0][1]).toEqual(options);
    expect((fetch as jest.Mock).mock.lastCall).toEqual([expectedUrl, options]);
  });

  it("should throw an error on failed API call searchInstant", async () => {
    const errorMessage = "Network Error";
    (fetch as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await expect(searchInstant(query, common, branded)).rejects.toThrow(
      errorMessage
    );
  });
});
