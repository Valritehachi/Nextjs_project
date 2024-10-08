import { getWeightLoss } from "./getWeightLoss";

describe("getWeightLoss", () => {
  it("Return the correct weight loss given the calories input", () => {
    const calories = 1500;
    const result = getWeightLoss(calories);
    const expected = {
      maintain: calories,
      WeightGainOptions: {
        extreme: 2602,
        mild: 1776,
        moderate: 2051,
      },
      WeightLossOptions: {
        extreme: 398,
        mild: 1224,
        moderate: 949,
      },
    };
    expect(result).toEqual(expected);
  });

  it("Return the correct weight loss given the calories input", () => {
    const calories = 2000;
    const result = getWeightLoss(calories);
    const expected = {
      maintain: calories,
      WeightGainOptions: {
        extreme: 3102,
        mild: 2276,
        moderate: 2551,
      },
      WeightLossOptions: {
        extreme: 898,
        mild: 1724,
        moderate: 1449,
      },
    };
    expect(result).toEqual(expected);
  });
});
