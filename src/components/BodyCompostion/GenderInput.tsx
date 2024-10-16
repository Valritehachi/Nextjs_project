import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control } from "react-hook-form";
import { Button } from "../ui/button";

import { GetCaloriesMetricType } from "./MetricInputs";
import { GetCaloriesImperialType } from "./ImperialInputs";

export type GenderInputProps =
  | {
      control: Control<GetCaloriesMetricType, any>;
      imperial?: false;
    }
  | {
      control: Control<GetCaloriesImperialType, any>;
      imperial: true;
    };

const GenderInput = ({ control, imperial }: GenderInputProps) => {
  return (
    <div>
      {imperial ? (
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex justify-start gap-4 "
                >
                  <FormItem className="flex items-center space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" className="hidden" />
                    </FormControl>
                    <Button
                      onClick={() => field.onChange("male")}
                      variant={field.value === "male" ? "default" : "outline"}
                    >
                      Male
                    </Button>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" className="hidden" />
                    </FormControl>
                    <Button
                      onClick={() => field.onChange("female")}
                      variant={field.value === "female" ? "default" : "outline"}
                    >
                      Female
                    </Button>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ) : (
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex justify-start gap-4 "
                >
                  <FormItem className="flex items-center space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" className="hidden" />
                    </FormControl>
                    <Button
                      onClick={() => field.onChange("male")}
                      variant={field.value === "male" ? "secondary" : "outline"}
                    >
                      Male
                    </Button>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" className="hidden" />
                    </FormControl>
                    <Button
                      onClick={() => field.onChange("female")}
                      variant={
                        field.value === "female" ? "secondary" : "outline"
                      }
                    >
                      Female
                    </Button>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

export default GenderInput;
