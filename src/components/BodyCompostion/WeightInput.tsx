import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { Control } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { getCaloriesType } from "@/utils/calories/getCalories";
import { GetCaloriesMetricType } from "./MetricInputs";
import { GetCaloriesImperialType } from "./ImperialInputs";

export type WeightInputProps =
  | {
      control: Control<GetCaloriesMetricType, any>;
      imperial?: false;
    }
  | {
      control: Control<GetCaloriesImperialType, any>;
      imperial: true;
    };

const WeightInput: React.FC<WeightInputProps> = ({ control, imperial }) => {
  return (
    <div>
      {imperial ? (
        <FormField
          control={control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight ({imperial ? "lbs" : "kg"})</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                This is your weight in {imperial ? "lbs" : "kg"}.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <FormField
          control={control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight ({imperial ? "lbs" : "kg"})</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                This is your weight in {imperial ? "lbs" : "kg"}.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default WeightInput;
