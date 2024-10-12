"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { FoodSelect } from "@/db/schema";
import { getFoodEntriesByDay } from "@/utils/db/foodTableUtils";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Image from "next/image";

type FoodTypeDataProps = {
  foodData: FoodSelect[] | undefined;
  type: string;
};

const FoodTypeData: React.FC<FoodTypeDataProps> = ({ foodData, type }) => {
  return (
    <div>
      <AccordionItem value={type}>
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
              foodData.map((item) => (
                <div key={item.id}>
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
                      {!item.photo && (
                        <Skeleton className="h-10 w-10 rounded-full" />
                      )}
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
              ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
export default FoodTypeData;
