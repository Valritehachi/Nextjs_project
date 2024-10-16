"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useFoodActions from "@/hooks/food/useFoodActions";
import { CurrentFoodType } from "@/store/foodPage/foodPageSlice";
import { useCallback } from "react";

const FoodType: React.FC = () => {
  const { updateCurrentFoodType } = useFoodActions();

  const handleTypeChange = useCallback(
    (value: CurrentFoodType) => {
      updateCurrentFoodType(value);
    },
    [updateCurrentFoodType]
  );

  const renderRadioGroupItem = useCallback(
    (value: CurrentFoodType, label: string) => (
      <div className="flex items-center space-x-2" key={value}>
        <RadioGroupItem value={value} id={value} />
        <Label htmlFor={value}>{label}</Label>
      </div>
    ),
    []
  );
  return (
    <RadioGroup defaultValue="breakfast" onValueChange={handleTypeChange}>
      <div className="flex gap-2 justify-between">
        {renderRadioGroupItem("breakfast", "Breakfast")}
        {renderRadioGroupItem("lunch", "Lunch")}
        {renderRadioGroupItem("dinner", "Dinner")}
        {renderRadioGroupItem("snack", "Snack")}
      </div>
    </RadioGroup>
  );
};

export default FoodType;
