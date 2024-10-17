import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addWeightEntry,
  updateWeightEntry,
  deleteWeightEntry,
  createOrUpdateWeightEntry,
  getWeightEntry,
  getDayWeightEntry,
} from "@/utils/db/weightTableUtils";
import { WeightInsert, WeightSelect } from "@/db/schema";
import { useBodyPageUserId } from "../bodyPage/useBodyPageDetails";
import { useFoodPageUserId } from "../food/useFood";
import { subDays } from "date-fns";

const useQueryKey = (date: string) => {
  const userId = useBodyPageUserId();
  return ["weight", "query", userId, date];
};

const useInvalidateDailyQueries = (date: string) => {
  const queryKey = useQueryKey(date);
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };
};

export const useAddWeightEntry = () => {
  const date = new Date().toLocaleDateString();
  const invalidateDailyQueries = useInvalidateDailyQueries(date);

  return useMutation({
    mutationFn: addWeightEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useGetWeightEntry = () => {
  const date = new Date().toLocaleDateString();
  const queryKey = useQueryKey(date);
  const userId = useFoodPageUserId();
  return useQuery({
    queryFn: () => getWeightEntry({ userId }),
    queryKey,
  });
};

export const useGetDayWeightEntry = (date: string) => {
  const queryKey = useQueryKey(date);
  const userId = useFoodPageUserId();
  return useQuery({
    queryFn: () => getDayWeightEntry({ userId, date }),
    queryKey,
  });
};

export const useUpdateWeightEntry = () => {
  const date = new Date().toLocaleDateString();
  const invalidateDailyQueries = useInvalidateDailyQueries(date);

  return useMutation({
    mutationFn: updateWeightEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteWeightEntry = () => {
  const date = new Date().toLocaleDateString();
  const invalidateDailyQueries = useInvalidateDailyQueries(date);

  return useMutation({
    mutationFn: deleteWeightEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useCreateOrUpdateWeightEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: createOrUpdateWeightEntry,
    onSuccess: invalidateDailyQueries,
  });
};
