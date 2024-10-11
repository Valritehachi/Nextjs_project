import AddFood from "./AddFood";
import SelectFood from "./SelectFood";
import {
  Dialog,
  DialogTrigger,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog";
import FoodType from "./FoodType";
import { Button } from "@/components/ui/button";
import ShowFoods from "./ShowFoods";

const FoodPage = async () => {
  return (
    <div className="flex flex-col gap-2 p-2 min-h-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add food</Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <AddFood />
          <SelectFood />
          <FoodType />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ShowFoods />
    </div>
  );
};

export default FoodPage;
