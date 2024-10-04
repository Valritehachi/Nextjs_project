// -----------------------------------------------------------------------------
// Height Conversions
// -----------------------------------------------------------------------------

export const convertKgToLb = (kg: number) => {
  return kg * 2.20462;
};

export const convertLbToCalories = (lb: number) => {
  return lb * 3500;
};

export const convertCaloriesToLb = (calories: number) => {
  return calories / 3500;
};

export const getCaloriesFromKg = (kg: number) => {
  return convertLbToCalories(convertKgToLb(kg));
};

// *****************************************************************************
// Most Important
// *****************************************************************************

export const convertLbToKg = (lb: number) => {
  return lb / 2.20462;
};

export const getKgFromCalories = (calories: number) => {
  return convertLbToKg(convertCaloriesToLb(calories));
};

export const getCaloriesPerDayFromKg = (kg: number) => {
  return getCaloriesFromKg(kg) / 7;
};

// -----------------------------------------------------------------------------
// Height Conversions
// -----------------------------------------------------------------------------

export const convertFtToIn = (ft: number) => {
  return ft * 12;
};

export const convertInToCm = (inches: number) => {
  return inches * 2.54;
};

export const convertCmToIn = (cm: number) => {
  return cm / 2.54;
};

// *****************************************************************************
// Most Important
// *****************************************************************************

export const convertImperialHeightToMetric = (feet: number, inches: number) => {
  const totalInches = convertFtToIn(feet) + inches;
  return +convertInToCm(totalInches);
};

export const convertMetricHeightToImperial = (cm: number) => {
  const totalInches = convertCmToIn(cm);
  const feet = Math.floor(totalInches / 12);
  const remainingInches = totalInches % 12;
  return { feet, inches: remainingInches };
};

// -----------------------------------------------------------------------------
// Completed conversions
// -----------------------------------------------------------------------------

// .3 kg = 330.69 calories
// .5 kg = 551.16 calories
// .7 kg = 771.62 calories
// 1.0 kg = 1102.31 calories
// 1.3 kg = 1433.00 calories

// To lose .25 kg 275.57 calories
// To lose .5 kg 551.16 calories
// to lose 1.0 kg 1102.31 calories
