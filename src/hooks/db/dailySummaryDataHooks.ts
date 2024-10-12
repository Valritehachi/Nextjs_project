import {
  getDailySummaryByDay,
  updateTotalCaloriesForDay,
  updateTotalWaterForDay,
} from "@/utils/db/dailySummaryTableUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const currentDate = new Date().toLocaleDateString();

const useQueryKey = (userId: string) => {
  return ["dailySumary", "query", currentDate, userId];
};

const useInvalidateDailyQueries = (userId: string) => {
  const queryKey = useQueryKey(userId);
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };
};

export const useGetDailyEntriesByDay = (userId: string, date: string) => {
  const queryKey = useQueryKey(userId);
  return useQuery({
    queryFn: () => getDailySummaryByDay({ date, userId }),
    queryKey,
  });
};

export const useUpdateTotalCaloriesForDay = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: updateTotalCaloriesForDay,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateTotalWaterForDay = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: updateTotalWaterForDay,
    onSuccess: invalidateDailyQueries,
  });
};
