"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WeightLossOptionData } from "@/data/activityData";
import useBodyPageActions from "@/hooks/bodyPage/useBodyPageActions";
import { useCurrentBodyCalories } from "@/hooks/bodyPage/useBodyPageDetails";
import { getWeightLoss } from "@/utils/calories/getWeightLoss";
import { parseWeightLossData } from "@/utils/calories/parseWeightLossData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "../ui/label";
import { Check } from "lucide-react";

const CalorieDetails: React.FC = () => {
  const calorieData = useCurrentBodyCalories();
  const weightLoss = getWeightLoss(calorieData);
  const parsedData = parseWeightLossData(weightLoss);

  const { updateCaloriesLimit } = useBodyPageActions();

  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Recommended Calories</CardTitle>
          {/* <CardDescription>Recommended Calories</CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className=" flex flex-col">
            <div className="h-full">
              {!calorieData && (
                <div className="h-full flex items-center justify-center">
                  <p className="text-center h-full">
                    Please fill out the form.
                  </p>
                </div>
              )}
              {calorieData > 0 && (
                <div>
                  {parsedData.Loss.map((calorie, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full">
                        <span className="font-bold">{calorie.value} </span>
                        <Label>
                          {`Lose ${
                            WeightLossOptionData[
                              calorie.level as keyof typeof WeightLossOptionData
                            ]
                          } kg each week`}
                        </Label>
                      </div>
                      <Button
                        variant={"ghost"}
                        onClick={() => updateCaloriesLimit(calorie.value)}
                        className="text-primary rounded-full"
                      >
                        <Check />
                      </Button>
                    </div>
                  ))}
                  {parsedData.Gain.map((calorie, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full">
                        <span className="font-bold">{calorie.value} </span>
                        <Label>
                          {`Gain ${
                            WeightLossOptionData[
                              calorie.level as keyof typeof WeightLossOptionData
                            ]
                          } kg each week`}
                        </Label>
                      </div>
                      <Button
                        variant={"ghost"}
                        onClick={() => updateCaloriesLimit(calorie.value)}
                        className="text-primary rounded-full"
                      >
                        <Check />
                      </Button>
                    </div>
                  ))}
                  {parsedData.maintain && (
                    <div className="flex items-center">
                      <div className="w-full">
                        <span className="font-bold">
                          {parsedData.maintain}{" "}
                        </span>
                        <Label>{`Maintain current weight`}</Label>
                      </div>
                      <Button
                        variant={"ghost"}
                        onClick={() => updateCaloriesLimit(parsedData.maintain)}
                        className="text-primary rounded-full"
                      >
                        <Check />
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalorieDetails;
