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

interface BodyCompositionSizeInputProps {
    control: any
}
const BodyCompositionSizeInput = ({ control }:BodyCompositionSizeInputProps) => {
    return (
        <FormField
            control={control}
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
    )
}

export default BodyCompositionSizeInput