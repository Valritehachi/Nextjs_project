"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  type CurrentFoodType,
  setCurrentFoodType,
} from "@/store/foodPage/foodPageSlice";
import { useAppDispatch } from "@/store/hooks";

const FoodType = () => {
  const dispatch = useAppDispatch();

  const handleTypeChange = (value: CurrentFoodType) => {
    dispatch(setCurrentFoodType(value));
  };
  return (
    <RadioGroup defaultValue="breakfast" onValueChange={handleTypeChange}>
      <div className="flex gap-2 justify-between">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="breakfast" id="breakfast" />
          <Label htmlFor="breakfast">Breakfast</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lunch" id="lunch" />
          <Label htmlFor="lunch">Lunch</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dinner" id="dinner" />
          <Label htmlFor="dinner">Dinner</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="snack" id="snack" />
          <Label htmlFor="snack">Snack</Label>
        </div>
      </div>
    </RadioGroup>
  );
};

export default FoodType;
