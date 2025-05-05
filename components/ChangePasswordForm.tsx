"use client";
import Spinner from "@/components/Spinner";
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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    password: z.string().min(1, "please enter your acc password"),
    newPassword: z.string().min(1, "please provide a retypePassword"),

    retypePassword: z.string().min(1, "please provide a retypePassword"),
  })
  .refine((data) => data.newPassword === data.retypePassword, {
    message: "Passwords do not match",
    path: ["retypePassword"],
  });

const ChangePasswordForm = () => {
  const isPending = false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      retypePassword: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-x-4 gap-y-8 mt-8  max-w-lg"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter acc password"
                  {...field}
                  type="password"
                  className="py-5 text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="enter new password"
                  {...field}
                  className="py-5 text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="retypePassword"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Re-type new password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Re-type new password"
                  {...field}
                  className="py-5 text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className=" brand-bg hover:brand-bg hover:opacity-85"
        >
          {isPending ? <Spinner /> : "Change"}
        </Button>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
