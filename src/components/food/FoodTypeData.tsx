import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { FoodSelect } from "@/db/schema";
import { FoodItem } from "./FoodItem";
import { cn } from "@/lib/utils";

type FoodTypeDataProps = {
  foodData: FoodSelect[] | undefined;
  type: string;
};

const FoodTypeData: React.FC<FoodTypeDataProps> = ({ foodData, type }) => {
  return (
    <div className={cn(foodData?.length === 0 && "bg-muted", "p-2 rounded-md")}>
      <AccordionItem value={type} disabled={foodData?.length === 0}>
        <AccordionTrigger>{type}</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            {foodData?.length === 0 && (
              <div className="flex gap-2 justify-around items-center">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-20 " />
                <Skeleton className="h-4 w-14 " />
                <Skeleton className="h-4 w-10 " />
              </div>
            )}
            {foodData &&
              foodData.map((item) => <FoodItem key={item.id} item={item} />)}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
export default FoodTypeData;
