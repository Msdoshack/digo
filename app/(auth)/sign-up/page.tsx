"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "please type in registered email address")
    .max(50)
    .email("provide a valid email address"),
  password: z.string().min(1, "Pls type in your password"),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-[calc(100vh-80px)] flex items-center justify-center w-full">
      <div className="w-full">
        <h3 className="text-center mb-8 font-semibold text-xl">Sign Up</h3>

        <div className="w-full max-w-lg border p-4 py-8 rounded-lg bg-white">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="  flex flex-col gap-8"
            >
              <FormField
                // control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email"
                        {...field}
                        type="email"
                        className="py-5"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                // control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    {/* <ShowPassword
                        fn={handleShowPassword}
                        isShowPassword={isShowPassword}
                      /> */}

                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        {...field}
                        // type={isShowPassword ? "text" : "password"}
                        className="py-5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                // disabled={isPending}
              >
                Sign Up
                {/* {isPending ? <Spinner /> : "Login"} */}
              </Button>
            </form>
          </Form>
          <div className="mt-10 text-center">
            Dont&apos;t have an Account?{" "}
            <Link href={"/login"} className="text-orange-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
