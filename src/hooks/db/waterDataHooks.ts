import {
  addWaterEntry,
  deleteWaterEntry,
  getWaterEntriesByDay,
  updateWaterEntry,
} from "@/utils/db/waterTableUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const currentDate = new Date().toLocaleDateString();

const useQueryKey = (userId: string) => {
  return ["water", "query", currentDate, userId];
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

export const useGetWaterEntriesByDay = (userId: string, date: string) => {
  const queryKey = useQueryKey(userId);
  return useQuery({
    queryFn: () => getWaterEntriesByDay({ date, userId }),
    queryKey,
  });
};

export const useAddWaterEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: addWaterEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateWaterEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: updateWaterEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteWaterEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: deleteWaterEntry,
    onSuccess: invalidateDailyQueries,
  });
};
