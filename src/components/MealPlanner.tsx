"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface MealPlannerProps {
  title: string;
}

const MealPlanner: React.FC<MealPlannerProps> = ({ title }) => {
  const [meals, setMeals] = useState<string[]>([]);

  const clearMeals = () => {
    setMeals([]);
  };

  const handleAdd = () => {
    setMeals([...meals, "Meal Meal Meal Meal Meal Meal Meal Meal Meal Meal"]);
  };

  return (
    <div className="bg-muted rounded-md flex flex-col items-stretch gap-2 max-h-full min-h-full">
      <div className="flex items-center flex-col grow justify-start">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </h3>

        <div>
          <Button
            variant="outline"
            onClick={handleAdd}
            className="rounded-full"
            size="icon"
          >
            <Plus />
          </Button>
        </div>
        <div className="px-2 text-ellipsis overflow-y-hidden grow-0">
          {meals.map((meal, index) => (
            <p key={index}>{meal}</p>
          ))}
          {meals.length === 0 && <p>No meals added yet</p>}
        </div>
      </div>

      <div className="flex gap-2 w-full p-2 bottom-0">
        <Button variant={"outline"} className="w-full" onClick={clearMeals}>
          Clear
        </Button>
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default MealPlanner;
