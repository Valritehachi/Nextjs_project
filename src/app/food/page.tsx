import ShowFoods from "./ShowFoods";
import { getUserId } from "@/utils/auth/getUserId";
import DailyData from "./DailyData";
import WaterData from "./WaterData";
import PickDate from "./PickDate";
import AddFood from "./AddFood";
import SetUserId from "./setUserId";

const FoodPage = async () => {
  const userId = await getUserId();
  return (
    <div className="flex flex-col gap-4 p-2 min-h-full">
      <SetUserId userId={userId} />
      <AddFood today />
      <PickDate />
      <DailyData />
      <ShowFoods />
      <WaterData />
    </div>
  );
};

export default FoodPage;
