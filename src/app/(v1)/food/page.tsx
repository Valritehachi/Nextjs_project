import { getUserId } from "@/utils/auth/getUserId";
import DailyData from "@/components/food/DailyData";
import WaterData from "@/components/food/WaterData";
import AddFood from "@/components/food/AddFood";
import SetUserId from "@/components/food/setUserId";
import ShowFoods from "@/components/food/ShowFoods";
import dynamic from "next/dynamic";
import WeightData from "@/components/food/WeightData";

const PickDate = dynamic(() => import("@/components/food/PickDate"), {
  ssr: false,
});

const FoodPage = async () => {
  const userId = await getUserId();
  return (
    <div className="h-full w-full flex items-center justify-center">
      <SetUserId userId={userId} />
      <div className=" container h-full mx-auto flex flex-col gap-2 p-4tems-center justify-center ">
        <AddFood today />
        <PickDate />
        <DailyData />
        <ShowFoods />
        <WaterData />
        <WeightData />
      </div>
    </div>
  );
};

export default FoodPage;
