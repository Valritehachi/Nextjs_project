"use client";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchNaturalNutrients } from "@/utils/api/searchNaturalNutrients";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

import useFood from "@/store/foodPage/useFood";
import useFoodActions from "@/store/foodPage/useFoodActions";
import useHandleSelectChange from "@/store/foodPage/useCalculateCalories";

const SelectFood = () => {
  const { currentFood, currentQuantity, currentCalories, currentAlternative } =
    useFood();

  const {
    updateCurrentQuantity,
    updateCurrentCalories,
    updateCurrentAlternative,
    updateTotalCalories,
  } = useFoodActions();

  const searchNaturalData = useQuery({
    queryKey: ["food", currentFood],
    queryFn: () => searchNaturalNutrients(currentFood),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  const { handleSelectChange } = useHandleSelectChange(searchNaturalData);

  const handleQuantityChange = (e: FormEvent<HTMLInputElement>) => {
    updateCurrentQuantity(Number(e.currentTarget.value));
  };

  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Selected food</CardTitle>
        </CardHeader>
        <CardContent>
          {searchNaturalData.data && (
            <div>
              {searchNaturalData.data?.foods?.map((item) => (
                <div key={item.upc} className="flex gap-2 items-center">
                  <Image
                    src={item.photo.thumb}
                    alt="foodImage"
                    height={80}
                    width={80}
                  />
                  <div className="flex flex-col gap-1 items-center">
                    <Input
                      type="number"
                      defaultValue={currentQuantity}
                      onChange={handleQuantityChange}
                    />
                    <span>Quantity</span>
                  </div>
                  {item.alt_measures && (
                    <div className="w-full flex flex-col gap-1 items-center">
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* <SelectLabel>Fruits</SelectLabel> */}
                            {item.alt_measures.map((measure) => (
                              <SelectItem
                                key={measure.seq}
                                value={measure.measure}
                              >
                                {measure.measure}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <span>Type</span>
                    </div>
                  )}
                  <p>{currentCalories} Cal</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectFood;
