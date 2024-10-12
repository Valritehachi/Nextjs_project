import {
  addUserEntry,
  deleteUserEntry,
  getUserEntry,
  updateUserEntry,
} from "@/utils/db/userTableUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const currentDate = new Date().toLocaleDateString();

const useQueryKey = (userId: string) => {
  return ["user", "query", currentDate, userId];
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

export const useGetUserEntry = (userId: string) => {
  const queryKey = useQueryKey(userId);
  return useQuery({
    queryFn: () => getUserEntry({ userId }),
    queryKey,
  });
};

export const useAddUserEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: addUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateUserEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: updateUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteUserEntry = (userId: string) => {
  const invalidateDailyQueries = useInvalidateDailyQueries(userId);

  return useMutation({
    mutationFn: deleteUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};
