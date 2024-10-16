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
import { getCalories } from "@/utils/calories/getCalories";
import GenderInput from "@/components/BodyCompostion/GenderInput";
import AgeInput from "@/components/BodyCompostion/AgeInput";
import WeightInput from "@/components/BodyCompostion/WeightInput";
import HeightInput from "@/components/BodyCompostion/HeightInput";
import ActivityInput from "@/components/BodyCompostion/ActivityInput";
import useBodyPageActions from "@/hooks/bodyPage/useBodyPageActions";
import { Form } from "../ui/form";

const bodyCompositionImperialSchema = z.object({
  gender: z.enum(["male", "female"], { message: "Please select one" }),
  age: z.coerce.number().min(15).max(80),
  weight: z.coerce.number().min(1).max(1000),
  height: z.object({
    feet: z.coerce.number().min(1).max(9),
    inches: z.coerce.number().min(0).max(11),
  }),
  activity: z.enum([
    "BMR",
    "Sedentary",
    "Lightly Active",
    "Moderately Active",
    "Very Active",
    "Extremely Active",
  ]),
});

export type GetCaloriesImperialType = z.infer<
  typeof bodyCompositionImperialSchema
>;

const ImperialInputs: React.FC = () => {
  const form = useForm<GetCaloriesImperialType>({
    defaultValues: {
      activity: "BMR",
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
    },
    resolver: zodResolver(bodyCompositionImperialSchema),
  });

  const { updateCurrentBodyCalories } = useBodyPageActions();

  const onSubmit: SubmitHandler<GetCaloriesImperialType> = (data) => {
    const calorieData = getCalories({ ...data, imperial: true });
    updateCurrentBodyCalories(calorieData);
  };
  return (
    <Card>
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
            <GenderInput control={form.control} imperial={true} />
            <AgeInput control={form.control} imperial={true} />
            <WeightInput control={form.control} imperial={true} />
            <HeightInput control={form.control} imperial={true} />
            <ActivityInput control={form.control} imperial={true} />
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
  );
};

export default ImperialInputs;
