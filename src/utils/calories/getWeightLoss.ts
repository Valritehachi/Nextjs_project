import { WeightLossOptionData } from "../../data/activityData";
import { getCaloriesPerDayFromKg } from "./conversions";

export const getWeightLoss = (BMR: number) => {
  const mildCalories = getCaloriesPerDayFromKg(WeightLossOptionData.mild);
  const moderateCalories = getCaloriesPerDayFromKg(
    WeightLossOptionData.moderate
  );
  const extremeCalories = getCaloriesPerDayFromKg(WeightLossOptionData.extreme);

  const WeightLossOptions = {
    mild: Math.round(BMR - mildCalories),
    moderate: Math.round(BMR - moderateCalories),
    extreme: Math.round(BMR - extremeCalories),
  };
  const WeightGainOptions = {
    mild: Math.round(BMR + mildCalories),
    moderate: Math.round(BMR + moderateCalories),
    extreme: Math.round(BMR + extremeCalories),
  };

  return { WeightLossOptions, WeightGainOptions, maintain: BMR };
};
