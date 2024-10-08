"use client";

import { ExerciseOptionsDescriptionSelect } from "@/data/activityData";
import { getCalories, getCaloriesType } from "@/utils/calories/getCalories";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const getCaloriesSchema = z.object({
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

const BodyCompositionForm: React.FC = () => {
  const [calories, setCalories] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<getCaloriesType>({
    defaultValues: {
      activity: "BMR",
      age: undefined,
      gender: undefined,
      weight: undefined,
      height: undefined,
      imperial: true,
    },
    resolver: zodResolver(getCaloriesSchema),
  });
  const formValues = watch();

  const onSubmit: SubmitHandler<getCaloriesType> = (data) => {
    console.log(data);
    const calorieData = getCalories(data);
    setCalories(calorieData);
    console.log(calorieData);
  };

  return (
    <div className="flex flex-col items-center container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 bg-white p-8 rounded-lg shadow-md w-full  max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Body Composition
        </h2>
        <FormControl error={!!errors.gender}>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              {...register("gender")}
            />
            <FormControlLabel
              {...register("gender")}
              value="male"
              control={<Radio />}
              label="Male"
            />
          </RadioGroup>
          <FormHelperText>{errors.gender?.message}</FormHelperText>
        </FormControl>
        <FormControlLabel
          {...register("imperial")}
          control={<Switch defaultChecked={formValues.imperial} />}
          label={`${formValues.imperial ? "Imperial" : "Metric"}`}
        />
        <TextField
          type="number"
          {...register("age")}
          label="Age"
          id="age"
          variant="outlined"
          error={!!errors.age}
          helperText={errors.age?.message}
        />
        <TextField
          type="number"
          {...register("weight")}
          label={`Weight`}
          id="weight"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  {formValues.imperial ? "lbs" : "kg"}
                </InputAdornment>
              ),
            },
          }}
          error={!!errors.weight}
          helperText={errors.weight?.message}
        />
        {formValues.imperial ? (
          <div className="flex gap-2">
            <TextField
              type="number"
              {...register("height.feet")}
              label={`Height`}
              id="heightImp"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">Feet</InputAdornment>
                  ),
                },
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              error={!!(errors.height as any)?.feet}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              helperText={(errors.height as any)?.feet?.message}
            />
            <TextField
              type="number"
              {...register("height.inches")}
              label={`Height`}
              id="heightInches"
              defaultValue={0}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">Inches</InputAdornment>
                  ),
                },
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              error={!!(errors.height as any)?.inches}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              helperText={(errors.height as any)?.inches?.message}
            />
          </div>
        ) : (
          <TextField
            type="number"
            {...register("height")}
            label={`Height`}
            id="height"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              },
            }}
            error={!!errors.height}
            helperText={errors.height?.message}
          />
        )}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="BMR"
          {...register("activity")}
          helperText="Please select your activity level"
        >
          {ExerciseOptionsDescriptionSelect.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className="flex justify-between">
          <button
            className="w-full mr-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            type="submit"
            disabled={isSubmitting}
          >
            Calculate
          </button>
          <button
            className="w-full ml-2 bg-gray-200 text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
            onClick={() => reset()}
          >
            Clear
          </button>
        </div>
      </form>

      {/* Done Button outside the form */}
      <div className="mt-6">
        <Link href="/food" passHref>
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Done
          </button>
        </Link>
      </div>
      {calories && <h1>{calories} </h1>}
    </div>
  );
};

export default BodyCompositionForm;
