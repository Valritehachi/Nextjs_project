"use client";
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
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

import useFoodActions from "@/hooks/food/useFoodActions";
import useHandleSelectChange from "@/hooks/food/useCalculateCalories";
import { useSearchNatural } from "@/hooks/api/useSearchNatural";
import {
  useCurrentCalories,
  useCurrentFood,
  useCurrentQuantity,
  useTotalCalories,
} from "@/hooks/food/useFood";

const SelectFood: React.FC = () => {
  const currentFood = useCurrentFood();
  const currentQuantity = useCurrentQuantity();
  const totalCalories = useTotalCalories();
  const currentCalories = useCurrentCalories();

  const { updateCurrentQuantity, updateTotalCalories } = useFoodActions();

  const searchNaturalData = useSearchNatural(currentFood);

  const { handleSelectChange } = useHandleSelectChange(searchNaturalData);

  const handleQuantityChange = (e: FormEvent<HTMLInputElement>) => {
    updateCurrentQuantity(Number(e.currentTarget.value));
    updateTotalCalories(currentCalories * Number(e.currentTarget.value));
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
                <div
                  key={item.upc}
                  className="grid grid-cols-7 gap-2 items-center"
                >
                  <Image
                    src={item.photo.thumb}
                    alt="foodImage"
                    height={80}
                    width={80}
                    className="col-span-2"
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
                    <div className="col-span-3 w-full flex flex-col gap-1 items-center">
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
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">{totalCalories}</p>
                    <p>Cal</p>
                  </div>
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
