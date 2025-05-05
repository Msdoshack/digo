"use client";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  firstName: z.string().min(1, "please provide a firstName"),
  lastName: z.string().min(1, "please provide a lastName"),
  phone: z.string().min(1, "please provide your phone number"),
  phone2: z.string(),
  deliveryAddress: z.string().min(1, "please delivery address"),
});

const CreateAddressPage = () => {
  const isPending = false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      phone2: "",
      deliveryAddress: "",
      // deadline: undefined,
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-md p-2">
        <h3 className="p-2 border-b border-gray-200 uppercase text-sm font-medium">
          1. Customer Address
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full  items-center gap-x-4 gap-y-8 mt-4  flex-wrap"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="firstName"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="firstName"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-[45%]">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Phone No"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone2"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Additional Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Additional Phone Number"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter delivery Address"
                      {...field}
                      className="py-5 w-full"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full items-center justify-between gap-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="default" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Set as default
                </label>
              </div>

              <div className="flex items-center gap-5">
                <Button type="submit" size={"sm"} variant={"outline"}>
                  <Link href={"/checkout/addresses"}>Cancel</Link>
                </Button>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg brand-bg hover:brand-bg hover:opacity-85"
                >
                  {isPending ? <Spinner /> : "Save"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateAddressPage;
