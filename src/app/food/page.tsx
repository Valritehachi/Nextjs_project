import { getUserId } from "@/utils/auth/getUserId";
import DailyData from "@/components/food/DailyData";
import WaterData from "@/components/food/WaterData";
import AddFood from "@/components/food/AddFood";
import SetUserId from "@/components/food/setUserId";
import ShowFoods from "@/components/food/ShowFoods";
import dynamic from "next/dynamic";

const PickDate = dynamic(() => import("@/components/food/PickDate"), {
  ssr: false,
});

const FoodPage = async () => {
  const userId = await getUserId();
  return (
    <div
      className=" container mx-auto flex flex-col gap-4 p-2 h-full"
      suppressHydrationWarning
    >
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
