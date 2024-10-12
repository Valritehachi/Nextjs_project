"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdateTotalWaterForDay } from "@/hooks/db/dailySummaryDataHooks";
import { useAddWaterEntry } from "@/hooks/db/waterDataHooks";
import { useRef } from "react";

type WaterDataProps = {
  userId: string;
};

const WaterData: React.FC<WaterDataProps> = ({ userId }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const currentDate = new Date().toLocaleDateString();

  const addWaterMutation = useAddWaterEntry(userId);
  const updateDailySummaryWaterMutation = useUpdateTotalWaterForDay(userId);

  const handleAddWater = async () => {
    await addWaterMutation.mutateAsync({
      dateConsumed: currentDate,
      userId,
      waterConsumed: Number(inputRef.current?.value),
    });
    await updateDailySummaryWaterMutation.mutateAsync({
      date: currentDate,
      userId,
    });
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="water">
          <AccordionTrigger>Water</AccordionTrigger>
          <AccordionContent>
            <div className="flex w-full gap-2 flex-col sm:flex-row ">
              <div className="flex gap-1">
                <Input ref={inputRef} type="number" placeholder="ml" />
                <Button onClick={handleAddWater}>Add</Button>
              </div>

              <div className=""></div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default WaterData;
