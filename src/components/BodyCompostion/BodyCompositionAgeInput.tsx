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

export interface BodyCompositionAgeInputProps {
    control: any
}


const BodyCompositionAgeInput = ({ control }:BodyCompositionAgeInputProps) => {
    return (
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
    )
}

export default BodyCompositionAgeInput