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

const FoodPage = () => {
  return (
    <div className="flex h-full flex-col gap-2 p-2 min-h-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add food</Button>
        </DialogTrigger>
        <div className="flex h-full w-full flex-col gap-2 p-2">
          <DialogContent className="w-full">
            <AddFood />
            <SelectFood />
            <FoodType />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default FoodPage;
