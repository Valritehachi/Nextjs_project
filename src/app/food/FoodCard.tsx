"use client";
import { Input } from "@/components/ui/input";
import { useCallback, useRef } from "react";
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

const FoodCard: React.FC = () => {
  const { updateCurrentFood, updateCurrentPhoto } = useFoodActions();

  const inputRef = useRef<HTMLInputElement>(null);
  const searchTerm = inputRef.current?.value;

  const searchInstant = useSearchInstant(searchTerm ?? "");

  const handleSearchClick = useCallback(() => {
    if (inputRef.current) {
      searchInstant.refetch();
    }
  }, [searchInstant]);

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
        <Button onClick={handleSearchClick}>Search</Button>
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
                  searchInstant.data?.common.slice(0, 5).map((item) => (
                    <div key={item.tag_id} className="flex gap-2">
                      <Image
                        src={item.photo.thumb}
                        alt="foodImage"
                        height={30}
                        width={30}
                      />
                      <Button
                        variant={"link"}
                        className="text-card-foreground"
                        onClick={() =>
                          handleFoodClick(item.food_name, item.photo.thumb)
                        }
                      >
                        {item.food_name}
                      </Button>
                    </div>
                  ))}
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
                  searchInstant.data?.branded.slice(0, 5).map((item) => (
                    <div key={item.nix_item_id} className="flex gap-2">
                      <Image
                        src={item.photo.thumb}
                        alt="foodImage"
                        height={30}
                        width={30}
                      />
                      <Button
                        variant={"link"}
                        className="text-card-foreground"
                        onClick={() =>
                          handleFoodClick(item.food_name, item.photo.thumb)
                        }
                      >
                        {item.food_name}
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FoodCard;
