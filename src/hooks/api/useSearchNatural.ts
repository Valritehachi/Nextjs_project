import { searchNaturalNutrients } from "@/utils/api/searchNaturalNutrients";

import { useQuery } from "@tanstack/react-query";

const useQueryKey = (currentFood: string) => {
  return ["search", "natural", currentFood];
};

export const useSearchNatural = (currentFood: string) => {
  const queryKey = useQueryKey(currentFood);
  return useQuery({
    queryFn: () => searchNaturalNutrients(currentFood),
    queryKey,
    staleTime: Infinity,
  });
};
