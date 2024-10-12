import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useFood from "../food/useFood";
import {
  addUserEntry,
  deleteUserEntry,
  getUserEntry,
  updateUserEntry,
} from "@/utils/db/userTableUtils";

const useQueryKey = (today?: boolean) => {
  const userId = useFood().userId;
  const date = useDate(today);

  return ["user", "query", date, userId];
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

export const useGetUserEntry = (today?: boolean) => {
  const queryKey = useQueryKey(today);
  const userId = useFood().userId;
  return useQuery({
    queryFn: () => getUserEntry({ userId }),
    queryKey,
  });
};

export const useAddUserEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: addUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateUserEntry = (today?: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: updateUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteUserEntry = (today: boolean) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(today);

  return useMutation({
    mutationFn: deleteUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};
