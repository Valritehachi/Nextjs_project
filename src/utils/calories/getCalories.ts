import { ExerciseOptionData } from "../../data/activityData";
import type { ExcerciseType } from "../../types/exerciseActivity/exerciseOptions";
import {
  convertImperialHeightToMetric,
  convertLbToKg,
  getCaloriesPerDayFromKg,
} from "./conversions";

export type getCaloriesType = getCaloriesExtrasType &
  (
    | ({
        imperial?: false;
        height: number;
      } & getCaloriesExtrasType)
    | {
        imperial: true;
        height: { feet: number; inches: number };
      }
  );

type getCaloriesExtrasType = {
  gender: "male" | "female";
  weight: number;
  age: number;
  activity: ExcerciseType;
};

// export type getCaloriesFormType = {
//   gender: "male" | "female";
//   weight: number;
//   age: number;
//   activity: ExcerciseType;
//   imperial: boolean;
//   heightCm?: number;
//   heightImp?: { feet: number; inches: number };
// };

export const getCalories = ({
  gender,
  weight,
  height,
  age,
  imperial,
  activity,
}: getCaloriesType) => {
  let finalHeight: number;
  let finalWeight: number;
  let BMR;

  if (imperial && imperial === true) {
    finalHeight = convertImperialHeightToMetric(height.feet, height.inches);
    finalWeight = convertLbToKg(weight);
  } else {
    finalHeight = height;
    finalWeight = weight;
  }

  if (gender === "male") {
    BMR = 10 * finalWeight + 6.25 * finalHeight - 5 * age + 5;
  } else {
    BMR = 10 * finalWeight + 6.25 * finalHeight - 5 * age - 161;
  }
  const kilogramsBurnedPerDay = ExerciseOptionData[activity];
  const caloriesBurnedPerDay = getCaloriesPerDayFromKg(kilogramsBurnedPerDay);

  const finalBMR = BMR + caloriesBurnedPerDay;

  return Math.round(finalBMR);
};
