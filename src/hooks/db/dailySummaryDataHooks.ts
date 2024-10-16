import {
  getDailySummaryByDay,
  updateTotalCaloriesForDay,
  updateTotalWaterForDay,
} from "@/utils/db/dailySummaryTableUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentDate, useFoodPageUserId } from "../food/useFood";

const useQueryKey = (today?: boolean) => {
  const userId = useFoodPageUserId();
  const date = useDate(today);
  return ["dailySumary", "query", date, userId];
};

const useDate = (today?: boolean) => {
  const currentDate = useCurrentDate();
  return today ? new Date().toLocaleDateString() : currentDate;
};

const useInvalidateDailyQueries = (today?: boolean) => {
  const queryKey = useQueryKey(today);
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };
};

export const useGetDailyEntriesByDay = (today?: boolean) => {
  const queryKey = useQueryKey(today);
  const date = useDate(today);
  const userId = useFoodPageUserId();
  return useQuery({
    queryFn: () => getDailySummaryByDay({ date, userId }),
    queryKey,
  });
};

export const useUpdateTotalCaloriesForDay = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: updateTotalCaloriesForDay,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateTotalWaterForDay = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: updateTotalWaterForDay,
    onSuccess: invalidateDailyQueries,
  });
};

export const useGetDailyEntriesOverviewPage = (date: string) => {
  const userId = useFoodPageUserId();
  return useQuery({
    queryFn: () => getDailySummaryByDay({ date, userId }),
    queryKey: ["dailySumary", "query", date, userId],
  });
};
