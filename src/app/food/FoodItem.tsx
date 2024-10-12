import { Skeleton } from "@/components/ui/skeleton";
import { FoodSelect } from "@/db/schema";
import Image from "next/image";

export const FoodItem: React.FC<{
  item: FoodSelect;
}> = ({ item }) => (
  <div>
    <div className="flex gap-2 justify-around items-center">
      <div className="">
        {item.photo && (
          <div className="h-10 w-10 rounded-full flex items-center justify-center">
            <Image
              src={item.photo}
              alt="foodImage"
              height={40}
              width={40}
              className="rounded-full "
            />
          </div>
        )}
        {!item.photo && <Skeleton className="h-10 w-10 rounded-full" />}
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p>{item.foodName}</p>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <p className="font-bold">{item.calories}</p>
        <p> Cal</p>
      </div>
      <div className="">
        <p>{item.quantity}</p>
      </div>
    </div>
  </div>
);
