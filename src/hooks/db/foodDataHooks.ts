import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useFood from "../food/useFood";
import {
  addFoodEntry,
  deleteFoodEntry,
  getFoodEntriesByDay,
  updateFoodEntry,
} from "@/utils/db/foodTableUtils";

const useQueryKey = (today?: boolean) => {
  const userId = useFood().userId;
  const date = useDate(today);

  return ["food", "query", date, userId];
};

const useDate = (today?: boolean) => {
  const { currentDate } = useFood();
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

export const useGetFoodEntriesByDay = (today?: boolean) => {
  const queryKey = useQueryKey(today);
  const date = useDate(today);
  const userId = useFood().userId;
  return useQuery({
    queryFn: () => getFoodEntriesByDay({ date, userId }),
    queryKey,
  });
};

export const useAddFoodEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: addFoodEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateFoodEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: updateFoodEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteFoodEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: deleteFoodEntry,
    onSuccess: invalidateDailyQueries,
  });
};
