import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addUserEntry,
  deleteUserEntry,
  getUserEntry,
  updateUserEntry,
} from "@/utils/db/userTableUtils";
import { useCurrentDate, useUserId } from "../food/useFood";

const useQueryKey = (today?: boolean) => {
  const userId = useUserId();
  const date = useDate(today);

  return ["user", "query", date, userId];
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

export const useGetUserEntry = (today?: boolean) => {
  const queryKey = useQueryKey(today);
  const userId = useUserId();
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
