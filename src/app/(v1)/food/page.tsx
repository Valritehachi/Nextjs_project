import MealPlanner from "@/components/MealPlanner";

const FoodPage = () => {
  return (
    <div className=" flex flex-col gap-2 p-2 h-full">
      <h2 className="scroll-m-20 border-b text-3xl font-semibold tracking-tight text-center">
        Meal Columns
      </h2>
      <div className="grid grid-cols-3 gap-2 h-full overflow-y-auto">
        <div className="h-full max-h-full overflow-auto ">
          <MealPlanner title="BREAKFAST" />
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
