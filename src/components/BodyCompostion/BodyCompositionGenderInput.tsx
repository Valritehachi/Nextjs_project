import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
  } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control } from "react-hook-form";

interface BodyCompositionGenderInputProps {
    control: any
}
const BodyCompositionGenderInput = ({ control }:BodyCompositionGenderInputProps) => {
    return (
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
                    className="flex justify-start gap-6 py-4"
                    >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                        <RadioGroupItem value="male" className="hidden" />
                        </FormControl>
                        {/* <FormLabel className="font-normal">Male</FormLabel> */}

                        <button
                            type="button"
                            onClick={() => field.onChange("male")}
                            className={`px-8 py-3 border-2 rounded-lg text-lg font-semibold transition-colors ${
                                field.value === "male"
                                ? "bg-white text-black border-black shadow-md" 
                                : "bg-transparent text-gray-500 border-gray-300"
                            }`}
                            >
                            Male
                        </button>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                        <RadioGroupItem value="female" className="hidden" />
                        </FormControl>
                        {/* <FormLabel className="font-normal">Female</FormLabel> */}

                        <button
                            type="button"
                            onClick={() => field.onChange("female")} 
                            className={`px-8 py-3 border-2 rounded-lg text-lg font-semibold transition-colors ${
                                field.value === "female"
                                ? "bg-white text-black border-black shadow-md"  
                                : "bg-transparent text-gray-500 border-gray-300"
                            }`}
                            >
                            Female
                        </button>
                    </FormItem>
                    </RadioGroup>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default BodyCompositionGenderInput