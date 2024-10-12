"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ExerciseOptionsDescriptionSelect,
  WeightLossOptionData,
} from "@/data/activityData";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getCalories,
  type getCaloriesType,
} from "@/utils/calories/getCalories";
import { getWeightLoss } from "@/utils/calories/getWeightLoss";
import { parseWeightLossData } from "@/utils/calories/parseWeightLossData";

const bodyCompositionSchema = z.object({
  gender: z.enum(["male", "female"], { message: "Please select one" }),
  age: z.coerce.number().min(15).max(80),
  weight: z.coerce.number().min(1).max(1000),
  height: z.union([
    z.coerce.number().min(1).max(300),
    z.object({
      feet: z.coerce.number().min(1).max(9),
      inches: z.coerce.number().min(0).max(11),
    }),
  ]),
  activity: z.enum([
    "BMR",
    "Sedentary",
    "Lightly Active",
    "Moderately Active",
    "Very Active",
    "Extremely Active",
  ]),
  imperial: z.boolean(),
});

const BodyCompositionPage: React.FC = () => {
  const [calories, setCalories] = useState<ReturnType<
    typeof parseWeightLossData
  > | null>(null);
  const [limit, setLimit] = useState<number>(0);
  const form = useForm<getCaloriesType>({
    defaultValues: {
      activity: "BMR",
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
      imperial: false,
    },
    resolver: zodResolver(bodyCompositionSchema),
  });
  const values = form.getValues();

  const onSubmit: SubmitHandler<getCaloriesType> = (data) => {
    const calorieData = getCalories(data);
    const weightLoss = getWeightLoss(calorieData);
    const parsedData = parseWeightLossData(weightLoss);
    setCalories(parsedData);
  };

  return (
    <div className="flex h-full w-full bg-muted p-4">
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        <div className="flex justify-stretch flex-col h-full w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col ring rounded-md gap-2 justify-between h-full container mx-auto p-2"
            >
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                Body Composition
              </h1>
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="imperial"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Imperial</FormLabel>
                      <FormDescription>
                        Enable imperial units for weight and height.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    {/* <FormDescription>This is your age.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Weight ({values.imperial ? "lbs" : "kg"})
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your weight in {values.imperial ? "lbs" : "kg"}.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {!values.imperial ? (
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your height in cm.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <div className="grid gap-2 sm:grid-cols-2 grid-cols-1 ">
                  <FormField
                    control={form.control}
                    name="height.feet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height (Feet)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your height in Feet.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="height.inches"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height (Inches)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your height in Inches.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <FormField
                control={form.control}
                name="activity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Activity</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ExerciseOptionsDescriptionSelect.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      select your activity level
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  variant={"destructive"}
                  disabled={form.formState.isSubmitting}
                  onClick={() => form.reset()}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  Calculate
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex  ring rounded-md h-full w-full flex-col  justify-between p-2 gap-3">
          <div className="h-full">
            <div className="ring ring-black rounded-md h-full">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                Recommended Calories
              </h1>
              <div>
                {!calories && (
                  <p className="text-center">Please fill out the form.</p>
                )}
                {calories && (
                  <div>
                    {calories.map((calorie, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between p-2">
                          <p>
                            <span className="font-bold">{calorie.value} </span>
                            {calorie.type === "maintain"
                              ? "Maintain the current Weight"
                              : `${calorie.type} ${
                                  WeightLossOptionData[
                                    calorie.type as keyof typeof WeightLossOptionData
                                  ]
                                } kg each week`}
                          </p>
                          <Button
                            variant={"ghost"}
                            onClick={() => setLimit(calorie.value)}
                            className="text-primary"
                          >
                            Use this
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="ring ring-black rounded-md flex flex-col gap-4 p-4">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                Daily calorie limit
              </h1>
              <Input
                type="number"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              />
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCompositionPage;
