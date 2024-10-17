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
import {
  useCurrentDate,
  useIsPast,
  useFoodPageUserId,
} from "@/hooks/food/useFood";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { useRef } from "react";

const WaterData: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isPast = useIsPast();
  const currentDate = useCurrentDate();
  const userId = useFoodPageUserId();
  const { toast } = useToast();

  const addWaterMutation = useAddWaterEntry();
  const updateDailySummaryWaterMutation = useUpdateTotalWaterForDay();
  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

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
    resetInput();
    toast({
      title: "Water intake added",
      description: `Water intake added successfully for ${format(
        currentDate,
        "PPPP"
      )}`,
    });
  };

  return (
    <div className="px-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="water">
          <AccordionTrigger>Water</AccordionTrigger>
          <AccordionContent>
            <div className="flex w-full gap-2 flex-col sm:flex-row ">
              <div className="flex gap-1">
                <Input ref={inputRef} type="number" placeholder="ml" />
                <Button
                  onClick={handleAddWater}
                  disabled={
                    !isPast ||
                    addWaterMutation.isPending ||
                    updateDailySummaryWaterMutation.isPending
                  }
                >
                  Add
                </Button>
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
