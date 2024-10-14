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

export interface BodyCompositionHeightInputProps {
    control: any
}
const BodyCompositionHeightInput = ({ control }:BodyCompositionHeightInputProps) => {
    return (
        <>
            <FormField
                control={control}
                name="height.feet"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Height (Feet)</FormLabel>
                        <FormControl>
                            <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your height in Feet.
                        </FormDescription>
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
        </>
    )
}

export default BodyCompositionHeightInput