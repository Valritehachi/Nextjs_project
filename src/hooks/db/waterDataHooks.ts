import {
  addWaterEntry,
  deleteWaterEntry,
  getWaterEntriesByDay,
  updateWaterEntry,
} from "@/utils/db/waterTableUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentDate, useFoodPageUserId } from "../food/useFood";

const useQueryKey = (today?: boolean) => {
  const userId = useFoodPageUserId();
  const date = useDate(today);

  return ["water", "query", date, userId];
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

export const useGetWaterEntriesByDay = (today?: boolean) => {
  const queryKey = useQueryKey(today);
  const userId = useFoodPageUserId();
  const date = useDate(today);
  return useQuery({
    queryFn: () => getWaterEntriesByDay({ date, userId }),
    queryKey,
  });
};

export const useAddWaterEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: addWaterEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateWaterEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: updateWaterEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteWaterEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: deleteWaterEntry,
    onSuccess: invalidateDailyQueries,
  });
};
