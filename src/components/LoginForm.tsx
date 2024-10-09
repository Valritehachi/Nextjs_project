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

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginForm: React.FC = () => {
  const form = useForm<zInfer<typeof loginFormSchema>>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
    resolver: zodResolver(loginFormSchema),
  });
  const values = form.getValues();

  const onSubmit: SubmitHandler<z.infer<typeof loginFormSchema>> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-full container mx-auto p-2"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Welcome Back!
        </h1>

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

        <div className="flex justify-between">
          <Button
            variant={"link"}
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Forgot your password?
          </Button>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
