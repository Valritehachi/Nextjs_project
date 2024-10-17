import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addWeightEntry,
  updateWeightEntry,
  deleteWeightEntry,
  createOrUpdateWeightEntry,
  getWeightEntry,
} from "@/utils/db/weightTableUtils";
import { WeightInsert, WeightSelect } from "@/db/schema";
import { useBodyPageUserId } from "../bodyPage/useBodyPageDetails";
import { useFoodPageUserId } from "../food/useFood";
import { subDays } from "date-fns";

const useQueryKey = () => {
  const userId = useBodyPageUserId();
  return ["weight", "query", userId];
};

const useInvalidateDailyQueries = () => {
  const queryKey = useQueryKey();
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };
};

export const useAddWeightEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: addWeightEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useGetWeightEntry = () => {
  const queryKey = useQueryKey();
  const userId = useFoodPageUserId();
  return useQuery({
    queryFn: () => getWeightEntry({ userId }),
    queryKey,
  });
};

export const useUpdateWeightEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: updateWeightEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteWeightEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

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
