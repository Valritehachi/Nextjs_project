"use client";
import { Input } from "@/components/ui/input";
import { searchInstant } from "@/utils/api/searchInstant";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFoodActions from "@/store/foodPage/useFoodActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddFood = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { updateCurrentFood, updateCurrentPhoto } = useFoodActions();

  const inputRef = useRef<HTMLInputElement>(null);

  const searchInstantData = useQuery({
    queryKey: ["food", "search", searchTerm],
    queryFn: () => searchInstant(searchTerm),
    staleTime: Infinity,
  });

  const handleSearchClick = () => {
    if (inputRef.current) {
      setSearchTerm(inputRef.current.value);
    }
  };

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
                {searchInstantData.data?.common &&
                  searchInstantData.data?.common.slice(0, 5).map((item) => (
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
                        onClick={() => {
                          updateCurrentFood(item.food_name);
                          updateCurrentPhoto(item.photo.thumb);
                        }}
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
                {searchInstantData.data?.branded &&
                  searchInstantData.data?.branded.slice(0, 5).map((item) => (
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
                        onClick={() => {
                          updateCurrentFood(item.food_name);
                          updateCurrentPhoto(item.photo.thumb);
                        }}
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

export default AddFood;
