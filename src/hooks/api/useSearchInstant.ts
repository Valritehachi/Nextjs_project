import { searchInstant } from "@/utils/api/searchInstant";
import { useQuery } from "@tanstack/react-query";

const useQueryKey = (currentFood: string) => {
  return ["search", "instant", currentFood];
};

export const useSearchInstant = (currentFood: string) => {
  const queryKey = useQueryKey(currentFood);
  return useQuery({
    queryFn: () => searchInstant(currentFood),
    queryKey,
    staleTime: Infinity,
  });
};
