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

const AddFood: React.FC<{ today?: boolean }> = ({ today }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add food</Button>
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
