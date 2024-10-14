"use client";
import SelectFood from "./SelectFood";
import {
  Dialog,
  DialogTrigger,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog";
import FoodType from "./FoodType";
import { Button } from "@/components/ui/button";
import SaveFood from "./SaveFood";
import FoodCard from "./FoodCard";
import useFood from "@/hooks/food/useFood";

const AddFood: React.FC<{ today?: boolean }> = ({ today }) => {
  const currentToday = new Date().toLocaleDateString();
  const { currentDate } = useFood();
  const isToday = currentDate === currentToday;
  let buttonText: string = "Add food";
  if (!isToday && today) {
    buttonText = "Add food for " + currentToday;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <FoodCard />
        <SelectFood />
        <FoodType />
        <DialogFooter>
          <DialogTrigger>
            <SaveFood today={today} />
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddFood;
