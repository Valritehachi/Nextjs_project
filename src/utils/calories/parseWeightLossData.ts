import { getWeightLoss } from "./getWeightLoss";

export const parseWeightLossData = (data: ReturnType<typeof getWeightLoss>) => {
  const { WeightLossOptions, WeightGainOptions, maintain } = data;
  return [
    {
      type: "Lose",
      level: "mild",
      value: WeightLossOptions.mild,
    },
    {
      type: "Lose",
      level: "moderate",
      value: WeightLossOptions.moderate,
    },
    {
      type: "Lose",
      level: "extreme",
      value: WeightLossOptions.extreme,
    },
    {
      type: "Gain",
      level: "mild",
      value: WeightGainOptions.mild,
    },
    {
      type: "Gain",
      level: "moderate",
      value: WeightGainOptions.moderate,
    },
    {
      type: "Gain",
      level: "extreme",
      value: WeightGainOptions.extreme,
    },
    {
      type: "maintain",
      level: "maintain",
      value: maintain,
    },
  ];
};
