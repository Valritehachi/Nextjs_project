import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { GetCaloriesMetricType } from "./MetricInputs";
import { GetCaloriesImperialType } from "./ImperialInputs";

export type AgeInputProps =
  | {
      control: Control<GetCaloriesMetricType, any>;
      imperial?: false;
    }
  | {
      control: Control<GetCaloriesImperialType, any>;
      imperial: true;
    };

const AgeInput = ({ control, imperial }: AgeInputProps) => {
  return (
    <div>
      {imperial ? (
        <FormField
          control={control}
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
      ) : (
        <FormField
          control={control}
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
      )}
    </div>
  );
};

export default AgeInput;
