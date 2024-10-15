import useFoodActions from "@/hooks/food/useFoodActions";
import Image from "next/image";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import type { BrandedEntity, CommonEntity } from "@/types/api/searchInstant";

type SearchFoodCardProps = {
  item: CommonEntity | BrandedEntity;
};

const SearchFoodCard: React.FC<SearchFoodCardProps> = ({ item }) => {
  const { updateCurrentFood, updateCurrentPhoto } = useFoodActions();

  const handleFoodClick = useCallback(
    (foodName: string, photoThumb: string) => {
      updateCurrentFood(foodName);
      updateCurrentPhoto(photoThumb);
    },
    [updateCurrentFood, updateCurrentPhoto]
  );

  return (
    <div className="flex gap-2 overflow-hidden ">
      <Image
        src={item.photo.thumb}
        alt="foodImage"
        className=" h-7 w-7 rounded-full bg-accent"
        height={30}
        width={30}
      />
      <Button
        variant={"link"}
        className="text-card-foreground"
        onClick={() => handleFoodClick(item.food_name, item.photo.thumb)}
      >
        <span className="text-balance max-w-full grow-0">{item.food_name}</span>
      </Button>
    </div>
  );
};

export default SearchFoodCard;
