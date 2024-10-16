import CalorieDetails from "@/components/BodyCompostion/CalorieDetails";
import ImperialInputs from "@/components/BodyCompostion/ImperialInputs";
import MetricInputs from "@/components/BodyCompostion/MetricInputs";
import SetDetails from "@/components/BodyCompostion/SetDetails";
import SetUserId from "@/components/food/setUserId";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserId } from "@/utils/auth/getUserId";

const BodyCompositionPage: React.FC = async () => {
  const userId = await getUserId();
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div>
        <SetUserId userId={userId} />
        <Tabs defaultValue="metric" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="metric">Metric</TabsTrigger>
            <TabsTrigger value="imperial">Imperial</TabsTrigger>
          </TabsList>
          <TabsContent value="metric">
            <MetricInputs />
          </TabsContent>
          <TabsContent value="imperial">
            <ImperialInputs />
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <CalorieDetails />
        <SetDetails />
      </div>
    </div>
  );
};

export default BodyCompositionPage;
