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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import {
    ExerciseOptionsDescriptionSelect,
    WeightLossOptionData,
  } from "@/data/activityData";

interface BodyCompositionActivityInputProps {
    control: any
}
const BodyCompositionActivityInput = ({ control }:BodyCompositionActivityInputProps) => {
    return (
        <FormField
            control={control}
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
)
}

export default BodyCompositionActivityInput