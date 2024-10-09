import MealPlanner from "@/components/MealPlanner";
import Sidebar from "@/components/Sidebar";

const FoodPage = () => {
  return (
    <div className="grid grid-cols-10 max-w-screen max-h-screen min-h-screen">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-8 flex flex-col gap-2 px-2 py-2 h-full">
        <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight text-center">
          Meal Columns
        </h2>
        <div className="grid grid-cols-3 gap-2 h-full overflow-y-auto">
          <div className="h-full max-h-full overflow-auto ">
            <MealPlanner title="BREAKFAST" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
