"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useCreateOrUpdateWeightEntry,
  useGetWeightEntry,
} from "@/hooks/db/weightDataHooks";
import {
  useCurrentDate,
  useIsPast,
  useFoodPageUserId,
} from "@/hooks/food/useFood";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { useRef } from "react";

const WeightData: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isPast = useIsPast();
  const currentDate = useCurrentDate();
  const userId = useFoodPageUserId();
  const { toast } = useToast();

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const addWeightMutation = useCreateOrUpdateWeightEntry();

  const handleAddWeight = async () => {
    await addWeightMutation.mutateAsync({
      userId,
      weight: String(inputRef.current?.value),
      date: currentDate,
    });
    resetInput();
    toast({
      title: "Weight added",
      description: `Weight added successfully for ${format(
        currentDate,
        "PPPP"
      )}`,
    });
  };

  return (
    <div className="px-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="weight">
          <AccordionTrigger>Weight</AccordionTrigger>
          <AccordionContent>
            <div className="flex w-full gap-2 flex-col sm:flex-row ">
              <div className="flex gap-1">
                <Input ref={inputRef} type="number" placeholder="Kg" />
                <Button
                  onClick={handleAddWeight}
                  disabled={!isPast || addWeightMutation.isPending}
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
export default WeightData;
