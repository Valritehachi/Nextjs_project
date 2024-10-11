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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { searchNaturalNutrients } from "@/utils/api/searchNaturalNutrients";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import {
  setCurrentAlternative,
  setCurrentCalories,
  setCurrentQuantity,
} from "@/store/foodPage/foodPageSlice";

const SelectFood = () => {
  const currentFood = useAppSelector((state) => state.foodPage.currentFood);
  const currentQuantity = useAppSelector(
    (state) => state.foodPage.currentQuantity
  );
  const currentCalories = useAppSelector(
    (state) => state.foodPage.currentCalories
  );
  const currentAlternative = useAppSelector(
    (state) => state.foodPage.currentAltnative
  );
  const dispatch = useAppDispatch();

  const searchNaturalData = useQuery({
    queryKey: ["food", currentFood],
    queryFn: () => searchNaturalNutrients(currentFood),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  const handleSelectChange = (value: string) => {
    dispatch(setCurrentAlternative(value));

    if (!searchNaturalData.data?.foods) return;
    const selectedFood = searchNaturalData.data?.foods[0].alt_measures?.find(
      (item) => item.measure === currentAlternative
    );

    const fullCalories = searchNaturalData.data?.foods[0].nf_calories;

    const fullServingWeight =
      searchNaturalData.data?.foods[0].serving_weight_grams;

    const currentServingWeight = selectedFood?.serving_weight;

    if (!currentServingWeight) {
      const fullCaloriesRounded = Math.round(fullCalories);
      dispatch(setCurrentCalories(fullCaloriesRounded));
    } else {
      const totalCaloriesTaken =
        (currentServingWeight / fullServingWeight) * fullCalories;
      const totalCaloriesTakenRounded = Math.round(totalCaloriesTaken);
      dispatch(setCurrentCalories(totalCaloriesTakenRounded));
    }
  };

  const handleQuantityChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setCurrentQuantity(Number(e.currentTarget.value)));
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
