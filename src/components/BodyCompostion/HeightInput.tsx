import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { GetCaloriesImperialType } from "./ImperialInputs";
import { GetCaloriesMetricType } from "./MetricInputs";

export type HeightInputProps =
  | {
      control: Control<GetCaloriesMetricType, any>;
      imperial?: false;
    }
  | {
      control: Control<GetCaloriesImperialType, any>;
      imperial: true;
    };

const HeightInput: React.FC<HeightInputProps> = ({ control, imperial }) => {
  return (
    <>
      {!imperial ? (
        <FormField
          control={control}
          name="height"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Height (cm)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>This is your height in cm.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 grid-cols-1 col-span-2">
          <FormField
            control={control}
            name="height.feet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (Feet)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>This is your height in Feet.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
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
    </>
  );
};

export default HeightInput;
