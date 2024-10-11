"use client";
import { Input } from "@/components/ui/input";
import { searchInstant } from "@/utils/api/searchInstant";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFoodActions from "@/store/foodPage/useFoodActions";

const AddFood = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { updateCurrentFood } = useFoodActions();

  const searchInstantData = useQuery({
    queryKey: ["food", searchTerm],
    queryFn: () => searchInstant(searchTerm),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  return (
    <div className="flex flex-col gap-2">
      <DialogHeader>
        <DialogTitle>Add Food</DialogTitle>
        <DialogDescription>Add food to your log</DialogDescription>
      </DialogHeader>
      <Input
        value={searchTerm}
        type="search"
        placeholder="Search foods..."
        onChange={(event: FormEvent<HTMLInputElement>) => {
          setSearchTerm(event.currentTarget.value);
        }}
      />
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
                        onClick={() => updateCurrentFood(item.food_name)}
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
                        onClick={() => updateCurrentFood(item.food_name)}
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
