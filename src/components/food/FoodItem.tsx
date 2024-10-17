"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { FoodSelect } from "@/db/schema";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useDeleteFoodEntry } from "@/hooks/db/foodDataHooks";
import { useUpdateTotalCaloriesForDay } from "@/hooks/db/dailySummaryDataHooks";
import { useCurrentDate, useFoodPageUserId } from "@/hooks/food/useFood";
import { useToast } from "@/hooks/use-toast";

export const FoodItem: React.FC<{
  item: FoodSelect;
}> = ({ item }) => {
  const currentDate = useCurrentDate();
  const userId = useFoodPageUserId();
  const mutation = useDeleteFoodEntry();
  const { toast } = useToast();
  const updateDailySummary = useUpdateTotalCaloriesForDay();

  const handleDeleteFood = async () => {
    await mutation.mutateAsync({ id: item.id, userId });
    await updateDailySummary.mutateAsync({ date: currentDate, userId });
    toast({
      title: "Food deleted",
      variant: "destructive",
      description: `Food item successfully deleted.`,
    });
  };
  return (
    <div>
      <div className="grid grid-cols-7 gap-2 items-center">
        <div className="">
          {item.photo && (
            <div className="h-10 w-10 rounded-full flex items-center justify-center">
              <Image
                src={item.photo}
                alt="foodImage"
                className=" h-7 w-7 rounded-full bg-accent"
                height={30}
                width={30}
              />
            </div>
          )}
          {!item.photo && <Skeleton className="h-10 w-10 rounded-full" />}
        </div>
        <div className="flex flex-col col-span-3 gap-1 items-center">
          <p>{item.foodName}</p>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <p className="font-bold">{item.calories}</p>
          <p> Cal</p>
        </div>
        <div className="text-center">
          <p>{item.quantity}</p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            variant={"destructive"}
            className=""
            onClick={handleDeleteFood}
            disabled={mutation.isPending || updateDailySummary.isPending}
          >
            <X />
          </Button>
        </div>
      </div>
    </div>
  );
};
