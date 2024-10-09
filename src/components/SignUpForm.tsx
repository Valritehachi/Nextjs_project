"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, infer as zInfer } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const signUpFormSchema = z.object({
  email: z.string().email(),
  lastname: z.string(),
  firstname: z.string(),
  password: z.string().min(8),
});

const SignUpForm: React.FC = () => {
  const form = useForm<zInfer<typeof signUpFormSchema>>({
    defaultValues: {
      email: undefined,
      firstname: undefined,
      lastname: undefined,
      password: undefined,
    },
    resolver: zodResolver(signUpFormSchema),
  });
  const values = form.getValues();

  const onSubmit: SubmitHandler<z.infer<typeof signUpFormSchema>> = (data) => {
    console.log(data);
  };

  return (
    <div className=" container mx-auto flex flex-col justify-center items-center h-full">
      <div className="bg-muted rounded-md p-8 ring ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 p-2"
          >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center pb-4">
              Register Now
            </h1>

            <div className="grid gap-2 sm:grid-cols-2 grid-cols-1 ">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>This is your first name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>This is your last name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>This is your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>This is your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between pt-4">
              <Button type="submit" disabled={form.formState.isSubmitting}>
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
