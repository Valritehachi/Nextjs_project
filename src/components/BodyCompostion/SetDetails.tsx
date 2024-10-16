"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useBodyPageActions from "@/hooks/bodyPage/useBodyPageActions";
import {
  useBodyPageUserId,
  useCalorieLimit,
  useCurrentBodyCalories,
  useWaterIntakeLimit,
  useWeightDifferencePerWeek,
} from "@/hooks/bodyPage/useBodyPageDetails";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { get } from "http";
import { getKgFromCaloriesPerWeek } from "@/utils/calories/conversions";
import {
  useAddUserEntry,
  useCreateOrUpdateUserEntry,
} from "@/hooks/db/userDataHooks";

const SetDetailsf: React.FC = () => {
  const calorieLimit = useCalorieLimit();
  const currentBodyCalories = useCurrentBodyCalories();
  const waterLimit = useWaterIntakeLimit();
  const weightDifferencePerWeek = useWeightDifferencePerWeek();
  const userId = useBodyPageUserId();

  const {
    updateCaloriesLimit,
    updateWaterIntakeLimit,
    updateWeightDifferencePerWeek,
    resetBodyPageState,
  } = useBodyPageActions();

  const kgPerWeek = getKgFromCaloriesPerWeek(
    calorieLimit - currentBodyCalories
  );
  updateWeightDifferencePerWeek(kgPerWeek);

  let weightPerWeek = "";
  if (kgPerWeek > 0) {
    weightPerWeek = `Gain ${kgPerWeek.toFixed(2)} kg each week`;
  } else {
    weightPerWeek = `Lose ${Math.abs(kgPerWeek).toFixed(2)} kg each week`;
  }

  const addUserData = useCreateOrUpdateUserEntry();

  const handleSaveLimits = () => {
    addUserData.mutate({
      userId,
      preferredCalories: calorieLimit,
      preferredWater: waterLimit,
      bodyCalories: currentBodyCalories,
    });
    resetBodyPageState();
  };

  return (
    <Card>
      {/* <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you're done.
          </CardDescription>
        </CardHeader> */}
      <CardContent className="space-y-2 pt-6">
        <div className="space-y-1">
          <Label htmlFor="calorieLimit">
            {"Daily Calorie Limit (kcal) "}
            <span className="font-bold">above 1500</span>
          </Label>
          <Input
            id="calorieLimit"
            type="number"
            value={calorieLimit}
            onChange={(e) => updateCaloriesLimit(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="waterLimit">
            Water Intake (ml) <span className="font-bold">above 1000</span>
          </Label>
          <Input
            id="waterLimit"
            type="number"
            value={waterLimit}
            onChange={(e) => updateWaterIntakeLimit(Number(e.target.value))}
            className="w-full"
            placeholder="Enter water intake in ml"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-1">
          <Label>{weightPerWeek}</Label>
          <Button
            disabled={
              calorieLimit < 1500 || waterLimit < 1000 || addUserData.isPending
            }
            onClick={handleSaveLimits}
          >
            Save changes
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SetDetailsf;
