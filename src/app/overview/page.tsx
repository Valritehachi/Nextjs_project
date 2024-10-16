import SetUserId from "@/components/food/setUserId";
import CaloriesOverview from "@/components/overview/CaloriesOverview";
import { getUserId } from "@/utils/auth/getUserId";

const OverviewPage = async () => {
  const userId = await getUserId();
  return (
    <div>
      <SetUserId userId={userId} />
      <CaloriesOverview />
    </div>
  );
};

export default OverviewPage;
