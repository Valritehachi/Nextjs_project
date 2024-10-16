"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import { getCalories } from "@/utils/calories/getCalories";
import { getWeightLoss } from "@/utils/calories/getWeightLoss";
import { parseWeightLossData } from "@/utils/calories/parseWeightLossData";

import GenderInput from "@/components/BodyCompostion/GenderInput";
import AgeInput from "@/components/BodyCompostion/AgeInput";
import WeightInput from "@/components/BodyCompostion/WeightInput";
import HeightInput from "@/components/BodyCompostion/HeightInput";
import ActivityInput from "@/components/BodyCompostion/ActivityInput";
import useBodyPageActions from "@/hooks/bodyPage/useBodyPageActions";

const bodyCompositionMetricSchema = z.object({
  gender: z.enum(["male", "female"], { message: "Please select one" }),
  age: z.coerce.number().min(15).max(80),
  weight: z.coerce.number().min(1).max(1000),
  height: z.coerce.number().min(1).max(300),
  activity: z.enum([
    "BMR",
    "Sedentary",
    "Lightly Active",
    "Moderately Active",
    "Very Active",
    "Extremely Active",
  ]),
});

export type GetCaloriesMetricType = z.infer<typeof bodyCompositionMetricSchema>;

const MetricInputs: React.FC = () => {
  const form = useForm<GetCaloriesMetricType>({
    defaultValues: {
      activity: "BMR",
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
    },
    resolver: zodResolver(bodyCompositionMetricSchema),
  });
  const { updateCurrentBodyCalories } = useBodyPageActions();

  const onSubmit: SubmitHandler<GetCaloriesMetricType> = (data) => {
    const calorieData = getCalories(data);
    updateCurrentBodyCalories(calorieData);
  };

  return (
    <div className="min-h-full">
      <Card className="">
        {/* <CardHeader>
        <CardTitle>Metric</CardTitle>
        <CardDescription>
          Make changes to get your calorie intake. Click save when you&#39;re
          done.
        </CardDescription>
      </CardHeader> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 pt-6"
          >
            <CardContent className="flex flex-col gap-2">
              <GenderInput control={form.control} />
              <AgeInput control={form.control} />
              <WeightInput control={form.control} />
              <HeightInput control={form.control} />
              <ActivityInput control={form.control} />
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
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
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default MetricInputs;
