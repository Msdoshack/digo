"use client";
import React from "react";

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

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
  phone: z.string().min(1, "please provide a firstName"),
  countryCode: z.string().min(1, "please provide a lastName"),
});

const EditPhoneForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "7063433942",
      countryCode: "+234",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mt-8 px-5 sm:px-10 xl:px-32"
      >
        <div className="flex w-full gap-x-2 mb-4">
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem className="w-16">
                <FormLabel></FormLabel>
                <FormControl>
                  <Input
                    placeholder="Middle Name"
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
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel></FormLabel>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    {...field}
                    className="py-5 text-sm"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full brand-bg font-medium">Update Phone No</Button>
      </form>
    </Form>
  );
};

export default EditPhoneForm;
