import { getCalories, type getCaloriesType } from "./getCalories";
import {
  convertImperialHeightToMetric,
  convertLbToKg,
  getCaloriesPerDayFromKg,
} from "./conversions";
import { ExerciseOptionData } from "../../data/activityData";

describe("getCalories", () => {
  it("should calculate calories for male with metric units", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "BMR",
    };

    const result = getCalories(input);
    expect(result).toBe(1668);
  });

  it("should calculate calories for female with metric units", () => {
    const input: getCaloriesType = {
      gender: "female",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "BMR",
    };

    const result = getCalories(input);
    expect(result).toBe(1502);
  });

  it("should calculate calories for male with imperical units", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 165,
      height: { feet: 5, inches: 10 },
      age: 20,
      imperial: true,
      activity: "BMR",
    };

    const result = getCalories(input);
    expect(result).toBe(1765);
  });

  it("should calculate calories for female with imperical units", () => {
    const input: getCaloriesType = {
      gender: "female",
      weight: 165,
      height: { feet: 5, inches: 10 },
      age: 20,
      imperial: true,
      activity: "BMR",
    };

    const result = getCalories(input);
    expect(result).toBe(1599);
  });

  it("should calculate calories for male with metric units and Sedentary", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "Sedentary",
    };

    const result = getCalories(input);
    expect(result).toBe(1998);
  });

  it("should calculate calories for male with metric units and Lightly Active", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "Lightly Active",
    };

    const result = getCalories(input);
    expect(result).toBe(2219);
  });

  it("should calculate calories for male with metric units and Moderately Active", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "Moderately Active",
    };

    const result = getCalories(input);
    expect(result).toBe(2439);
  });

  it("should calculate calories for male with metric units and Very Active", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "Very Active",
    };

    const result = getCalories(input);
    expect(result).toBe(2770);
  });

  it("should calculate calories for male with metric units and Extremely Active", () => {
    const input: getCaloriesType = {
      gender: "male",
      weight: 70,
      height: 170,
      age: 20,
      imperial: false,
      activity: "Extremely Active",
    };

    const result = getCalories(input);
    expect(result).toBe(3211);
  });
});
