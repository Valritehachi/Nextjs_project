import SetUserId from "@/components/food/setUserId";
import CaloriesWaterOverview from "@/components/overview/CaloriesWaterOverview";
import WeightOverview from "@/components/overview/WeightOverview";
import { getUserId } from "@/utils/auth/getUserId";
import { ScrollArea } from "@/components/ui/scroll-area";

const OverviewPage = async () => {
  const userId = await getUserId();
  return (
    <div>
      <SetUserId userId={userId} />
      <div className="flex flex-col gap-2 container mx-auto h-full">
        <CaloriesWaterOverview />
        <WeightOverview />
      </div>
    </div>
  );
};

export default OverviewPage;
