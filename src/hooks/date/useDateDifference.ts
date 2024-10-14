import { differenceInCalendarDays } from "date-fns";
import { useMemo } from "react";

const useRelativeDate = (date: string) => {
  const todaysDate = new Date().toLocaleDateString();
  const difference = differenceInCalendarDays(date, todaysDate);
  const isPast = difference < 0;

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const total = rtf.format(difference, "day");
  const totalCase = total.charAt(0).toUpperCase() + total.slice(1);
  return { currentRelativeDate: totalCase, isPast };
};

export default useRelativeDate;
