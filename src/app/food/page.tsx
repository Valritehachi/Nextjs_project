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
import { getUserId } from "@/utils/auth/getUserId";
import SaveFood from "./SaveFood";
import DailyData from "./DailyData";
import WaterData from "./WaterData";
import PickDate from "./PickDate";

const FoodPage = async () => {
  const userId = await getUserId();
  return (
    <div className="flex flex-col gap-4 p-2 min-h-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add food</Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <AddFood />

          <SelectFood />

          <FoodType />
          <DialogFooter>
            <DialogTrigger>
              <SaveFood userId={userId} />
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <PickDate />
      <DailyData userId={userId} />

      <ShowFoods userId={userId} />
      <WaterData userId={userId} />
    </div>
  );
};

export default FoodPage;
