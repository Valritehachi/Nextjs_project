import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addUserEntry,
  createOrUpdateUserEntry,
  deleteUserEntry,
  getUserEntry,
  updateUserEntry,
} from "@/utils/db/userTableUtils";
import { useCurrentDate, useFoodPageUserId } from "../food/useFood";

const useQueryKey = () => {
  const userId = useFoodPageUserId();
  return ["user", "query", userId];
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

export const useGetUserEntry = () => {
  const queryKey = useQueryKey();
  const userId = useFoodPageUserId();
  return useQuery({
    queryFn: () => getUserEntry({ userId }),
    queryKey,
  });
};

export const useAddUserEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: addUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useUpdateUserEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: updateUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};
export const useCreateOrUpdateUserEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: createOrUpdateUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};

export const useDeleteUserEntry = () => {
  const invalidateDailyQueries = useInvalidateDailyQueries();

  return useMutation({
    mutationFn: deleteUserEntry,
    onSuccess: invalidateDailyQueries,
  });
};
