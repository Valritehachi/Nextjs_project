export const ExerciseOptionData = {
  BMR: 0,
  Sedentary: 0.3,
  "Lightly Active": 0.5,
  "Moderately Active": 0.7,
  "Very Active": 1.0,
  "Extremely Active": 1.4,
};

export const ExerciseOptionsDescription = {
  BMR: "Basal Metabolic Rate",
  Sedentary: "Exercise 1-3 times per week",
  "Lightly Active": "Exercise 4-5 times per week",
  "Moderately Active": "Daily exercise or intense exercise 3-4 times per week",
  "Very Active": "Intense exercise 6-7 times per week",
  "Extremely Active": "Very intense exercise daily or highly physical job",
};

export const WeightLossOptionData = {
  maintain: 0,
  mild: 0.25,
  moderate: 0.5,
  extreme: 1,
};

export const WeightLossDescription = {
  maintain: "Maintain current weight",
  mild: "Mild weight loss (.25 kg)",
  moderate: "Moderate weight loss (.5 kg)",
  extreme: "Extreme weight loss (1 kg)",
};

// .3 kg = 330.69 calories
// .5 kg = 551.16 calories
// .7 kg = 771.62 calories
// 1.0 kg = 1102.31 calories
// 1.3 kg = 1433.00 calories

// To lose .25 kg 275.57 calories
// To lose .5 kg 551.16 calories
// to lose 1.0 kg 1102.31 calories

//  { "Exercise 1-3 times per week": 0.3 }
//  { "Exercise 4-5 times per week": 0.5 }
//  { "Daily exercise or intense exercise 3-4 times per week": 0.7 }
//  { "Intense exercise 6-7 times per week": 1.0 }
//  { "Very intense exercise daily or highly physical job": 1.4 };
