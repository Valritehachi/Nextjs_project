"use client";
import { differenceInCalendarDays } from "date-fns";

const useRelativeDate = (date: string) => {
  const todaysDate = new Date().toLocaleDateString();
  const difference = differenceInCalendarDays(date, todaysDate);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const total = rtf.format(difference, "day");
  return total.charAt(0).toUpperCase() + total.slice(1);
};

export default useRelativeDate;
