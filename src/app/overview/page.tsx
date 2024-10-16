import SetUserId from "@/components/food/setUserId";
import CaloriesOverview from "@/components/overview/CaloriesOverview";
import WaterOverview from "@/components/overview/WaterOverview";
import WeightOverview from "@/components/overview/WeightOverview";
import { getUserId } from "@/utils/auth/getUserId";

const OverviewPage = async () => {
  const userId = await getUserId();
  return (
    <div>
      <SetUserId userId={userId} />
      <div className="flex flex-col gap-2 container mx-auto h-full">
        <CaloriesOverview />
        <WaterOverview />
        <WeightOverview />
      </div>
    </div>
  );
};

export default OverviewPage;
