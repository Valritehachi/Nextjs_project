import {
  convertKgToLb,
  convertLbToCalories,
  convertCaloriesToLb,
  getCaloriesFromKg,
  convertLbToKg,
  getKgFromCalories,
  getCaloriesPerDayFromKg,
  convertFtToIn,
  convertInToCm,
  convertCmToIn,
  convertImperialHeightToMetric,
  convertMetricHeightToImperial,
} from "./conversions";

describe("Conversions", () => {
  describe("convertKgToLb", () => {
    it("should convert kilograms to pounds", () => {
      expect(convertKgToLb(1)).toBeCloseTo(2.20462);
      expect(convertKgToLb(10)).toBeCloseTo(22.0462);
      expect(convertKgToLb(0)).toBeCloseTo(0);
    });
  });

  describe("convertLbToCalories", () => {
    it("should convert pounds to calories", () => {
      expect(convertLbToCalories(1)).toBe(3500);
      expect(convertLbToCalories(2)).toBe(7000);
      expect(convertLbToCalories(0)).toBe(0);
    });
  });

  describe("convertCaloriesToLb", () => {
    it("should convert calories to pounds", () => {
      expect(convertCaloriesToLb(3500)).toBeCloseTo(1);
      expect(convertCaloriesToLb(7000)).toBeCloseTo(2);
      expect(convertCaloriesToLb(0)).toBeCloseTo(0);
    });
  });

  describe("getCaloriesFromKg", () => {
    it("should convert kilograms to calories", () => {
      expect(getCaloriesFromKg(1)).toBeCloseTo(7716.17);
      expect(getCaloriesFromKg(0.5)).toBeCloseTo(3858.085);
      expect(getCaloriesFromKg(0)).toBeCloseTo(0);
    });
  });

  describe("convertLbToKg", () => {
    it("should convert pounds to kilograms", () => {
      expect(convertLbToKg(1)).toBeCloseTo(0.453592);
      expect(convertLbToKg(10)).toBeCloseTo(4.53592);
      expect(convertLbToKg(0)).toBeCloseTo(0);
    });
  });

  describe("getKgFromCalories", () => {
    it("should convert calories to kilograms", () => {
      expect(getKgFromCalories(3500)).toBeCloseTo(convertLbToKg(1));
      expect(getKgFromCalories(7000)).toBeCloseTo(convertLbToKg(2));
      expect(getKgFromCalories(0)).toBeCloseTo(0);
    });
  });

  describe("getCaloriesPerDayFromKg", () => {
    it("should convert kilograms to calories per day", () => {
      expect(getCaloriesPerDayFromKg(1)).toBeCloseTo(1102.31);
      expect(getCaloriesPerDayFromKg(0.5)).toBeCloseTo(551.155);
      expect(getCaloriesPerDayFromKg(0)).toBeCloseTo(0);
    });
  });

  describe("convertFtToIn", () => {
    it("should convert feet to inches", () => {
      expect(convertFtToIn(1)).toBe(12);
      expect(convertFtToIn(5)).toBe(60);
      expect(convertFtToIn(0)).toBe(0);
    });
  });

  describe("convertInToCm", () => {
    it("should convert inches to centimeters", () => {
      expect(convertInToCm(1)).toBeCloseTo(2.54);
      expect(convertInToCm(10)).toBeCloseTo(25.4);
      expect(convertInToCm(0)).toBeCloseTo(0);
    });
  });

  describe("convertCmToIn", () => {
    it("should convert centimeters to inches", () => {
      expect(convertCmToIn(1)).toBeCloseTo(0.393701);
      expect(convertCmToIn(10)).toBeCloseTo(3.93701);
      expect(convertCmToIn(0)).toBeCloseTo(0);
    });
  });

  describe("convertImperialHeightToMetric", () => {
    it("should convert feet and inches to centimeters", () => {
      expect(convertImperialHeightToMetric(5, 9)).toBeCloseTo(175.26);
      expect(convertImperialHeightToMetric(6, 0)).toBeCloseTo(182.88);
      expect(convertImperialHeightToMetric(0, 0)).toBeCloseTo(0);
    });
  });

  describe("convertMetricHeightToImperial", () => {
    it("should convert centimeters to feet and inches", () => {
      expect(convertMetricHeightToImperial(175.26)).toEqual({
        feet: 5,
        inches: 9,
      });
      expect(convertMetricHeightToImperial(182.88)).toEqual({
        feet: 6,
        inches: 0,
      });
      expect(convertMetricHeightToImperial(0)).toEqual({ feet: 0, inches: 0 });
    });
  });
});
