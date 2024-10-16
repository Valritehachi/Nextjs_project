import { getWeightLoss } from "./getWeightLoss";

export const parseWeightLossData = (data: ReturnType<typeof getWeightLoss>) => {
  const { WeightLossOptions, WeightGainOptions, maintain } = data;
  return {
    Loss: [
      {
        level: "mild",
        value: WeightLossOptions.mild,
      },
      {
        level: "moderate",
        value: WeightLossOptions.moderate,
      },
      {
        level: "extreme",
        value: WeightLossOptions.extreme,
      },
    ],
    Gain: [
      {
        level: "mild",
        value: WeightGainOptions.mild,
      },
      {
        level: "moderate",
        value: WeightGainOptions.moderate,
      },
      {
        level: "extreme",
        value: WeightGainOptions.extreme,
      },
    ],
    maintain,
  };
};
