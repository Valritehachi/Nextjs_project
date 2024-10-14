"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import { ArrowLeft, ArrowRight, CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useFood from "@/hooks/food/useFood";
import useFoodActions from "@/hooks/food/useFoodActions";

const PickDate: React.FC = () => {
  const today = new Date().toLocaleDateString();
  const { currentDate } = useFood();
  const { updateCurrentDate } = useFoodActions();
  const todayBadge = today === currentDate;

  const handleDatePick = (date: Date | undefined) => {
    if (!date) return;
    updateCurrentDate(date.toLocaleDateString());
  };

  const handleDateChange = (days: number) => {
    const date = addDays(new Date(currentDate), days).toLocaleDateString();
    updateCurrentDate(date);
  };

  return (
    <div className="flex justify-between">
      <Button
        variant={"secondary"}
        className="rounded-full "
        onClick={() => handleDateChange(-1)}
      >
        <ArrowLeft />
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-center">
            <Button
              variant={"link"}
              className={cn(
                "w-[240px] pl-3 text-left font-normal",
                !currentDate && "text-muted-foreground"
              )}
            >
              {currentDate ? (
                format(currentDate, "PPPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
            {todayBadge && <Badge variant="outline">Today</Badge>}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={new Date(currentDate)}
            onSelect={handleDatePick}
          />
        </PopoverContent>
      </Popover>
      <Button
        variant={"secondary"}
        className="rounded-full "
        onClick={() => handleDateChange(1)}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PickDate;
