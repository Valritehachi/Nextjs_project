"use client";
import { Input } from "@/components/ui/input";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFoodActions from "@/hooks/food/useFoodActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchInstant } from "@/hooks/api/useSearchInstant";
import SearchFoodCard from "./SearchFoodCard";
import SearchFoodCardSkeleton from "./SearchFoodCardSkeleton";

const FoodCard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { updateCurrentFood, updateCurrentPhoto } = useFoodActions();

  const inputRef = useRef<HTMLInputElement>(null);

  const searchInstant = useSearchInstant(searchTerm);

  const handleSearchClick = () => {
    setSearchTerm(inputRef.current?.value ?? "");
  };

  const handleFoodClick = useCallback(
    (foodName: string, photoThumb: string) => {
      updateCurrentFood(foodName);
      updateCurrentPhoto(photoThumb);
    },
    [updateCurrentFood, updateCurrentPhoto]
  );

  return (
    <div className="flex flex-col gap-2">
      <DialogHeader>
        <DialogTitle>Add Food</DialogTitle>
        <DialogDescription>Add food to your log</DialogDescription>
      </DialogHeader>
      <div className="flex gap-1">
        <Input ref={inputRef} type="search" placeholder="Search foods..." />
        <Button onClick={handleSearchClick} disabled={searchInstant.isLoading}>
          Search
        </Button>
      </div>
      <Tabs defaultValue="common" className="w-full min-h-[50%]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="common">Common</TabsTrigger>
          <TabsTrigger value="branded">Branded</TabsTrigger>
        </TabsList>
        <TabsContent value="common">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Common</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1  justify-center">
                {searchInstant.data?.common &&
                  searchInstant.data?.common
                    .slice(0, 5)
                    .map((item) => (
                      <SearchFoodCard key={item.tag_id} item={item} />
                    ))}
                {searchInstant.isLoading && <SearchFoodCardSkeleton />}
                {searchInstant.data?.common?.length === 0 && (
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    No results found
                  </h4>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="branded">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Branded</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1  justify-center ">
                {searchInstant.data?.branded &&
                  searchInstant.data?.branded
                    .slice(0, 5)
                    .map((item) => (
                      <SearchFoodCard key={item.nix_item_id} item={item} />
                    ))}
                {searchInstant.isLoading && <SearchFoodCardSkeleton />}
                {searchInstant.data?.branded?.length === 0 && (
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    No results found
                  </h4>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoodCard;
