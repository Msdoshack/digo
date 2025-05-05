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

const formSchema = z.object({
  password: z.string().min(1, "please enter your acc password"),
  email: z.string().min(1, "please provide a email"),
});

const ChangEmailForm = () => {
  const isPending = false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",

      email: "msdosdarapper@gmail.com",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-lg gap-x-4 gap-y-8 mt-8"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter acc password"
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
          name="email"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  type="email"
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

export default ChangEmailForm;
