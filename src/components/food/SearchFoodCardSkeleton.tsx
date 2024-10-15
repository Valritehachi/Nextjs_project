import { Skeleton } from "@/components/ui/skeleton";

const SearchFoodCardSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex gap-2 overflow-hidden items-center">
          <Skeleton className="h-7 w-7 rounded-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </>
  );
};

export default SearchFoodCardSkeleton;
