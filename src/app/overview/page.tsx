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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center content-center container mx-auto h-full">
        <CaloriesOverview />
        <WaterOverview />
        <WeightOverview />
      </div>
    </div>
  );
};

export default OverviewPage;
