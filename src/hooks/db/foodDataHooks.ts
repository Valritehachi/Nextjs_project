import {
  addFoodEntry,
  deleteEntry,
  getFoodEntriesByDay,
  updateFoodEntry,
} from "@/utils/db/foodTableUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const currentDate = new Date().toLocaleDateString();

const useQueryKey = (userId: string) => {
  return ["food", "query", currentDate, userId];
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

export const useGetFoodEntriesByDay = (userId: string, date: string) => {
  const queryKey = useQueryKey(userId);
  return useQuery({
    queryFn: () => getFoodEntriesByDay({ date: date, userId }),
    queryKey,
  });
};

export const useAddFoodEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: addFoodEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateFoodEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: updateFoodEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteFoodEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: deleteEntry,
    onSuccess: invalidateDailyQueries,
  });
};
