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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nigeriaStates } from "@/constants/nigeria";
import { useAddressStore } from "@/store/userAddress";
import { v4 as uuidv4 } from "uuid";

import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user";

const formSchema = z.object({
  firstName: z.string().min(1, "please provide a firstName"),
  lastName: z.string().min(1, "please provide a lastName"),
  state: z.string().min(1, "please provide state"),
  lga: z.string().min(1, "please provide local govt area"),
  phone: z.string().min(1, "please provide your phone number"),
  phone2: z.string(),
  address: z.string().min(1, "please delivery address"),
  isDefault: z.boolean(),
});

const CreateAddressPage = () => {
  const { addAddress } = useAddressStore((state) => state);

  const { user } = useUserStore();

  const isPending = false;

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      phone: user?.phone || "",
      phone2: user?.phone2 || "",
      address: "",
      isDefault: false,
    },
  });

  const selectedState = form.watch("state");

  const stateObj = nigeriaStates.find((s) => s.state === selectedState);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data = {
      id: uuidv4().slice(0, 8),
      address: values.address,
      firstName: values.firstName,
      lastName: values.lastName,
      isDefault: values.isDefault,
      state: values.state,
      lga: values.lga,
      phone: [
        { countryCode: "+234", no: values.phone },
        { countryCode: "+234", no: values.phone2 },
      ],
    };

    addAddress(data);

    router.push("/checkout/addresses");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-md p-2">
        <h3 className="p-2 border-b border-gray-200 uppercase text-sm font-medium mb-10">
          Add Delivery Address
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full items-center gap-x-4 gap-y-8 mt-4  flex-wrap"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="firstName"
                      {...field}
                      className="py-5 text-sm capitalize"
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
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="firstName"
                      {...field}
                      className="py-5 text-sm capitalize"
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
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Phone No"
                      {...field}
                      className="py-5  text-sm"
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
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>Additional Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Additional Phone Number"
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
              name="state"
              render={({ field }) => (
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        {nigeriaStates.map((s) => (
                          <SelectItem key={s.alias} value={s.state}>
                            {s.state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lga"
              render={({ field }) => (
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>LGA</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Local govt" />
                      </SelectTrigger>
                      <SelectContent>
                        {stateObj?.lgas.map((l) => (
                          <SelectItem key={l} value={l}>
                            {l}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full sm:w-[45%]">
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter delivery Address"
                      {...field}
                      className="py-5"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full items-center justify-between gap-5">
              <FormField
                control={form.control}
                name="isDefault"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-1">
                    <FormControl>
                      <Checkbox
                        id="default"
                        checked={field.value}
                        // onCheckedChange={(v) => field.onChange(Boolean(v))}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel
                      className="text-xs sm:text-sm brand-color"
                      htmlFor="default"
                    >
                      Set as default address
                    </FormLabel>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-5">
                <Button type="button" size={"sm"} variant={"outline"}>
                  <Link href={"/checkout/addresses"}>Cancel</Link>
                </Button>

                <Button
                  type="submit"
                  disabled={isPending}
                  className=" brand-bg hover:brand-bg hover:opacity-85"
                >
                  {isPending ? <Spinner /> : "Save"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>

      {/* <div className="text-gray-500 p-2 uppercase bg-white text-sm font-medium">
        Delivery Details
      </div>

      <div className="text-gray-500 uppercase text-sm p-2 font-medium bg-white">
        Payment Method
      </div> */}

      <Link href={"/products"} className="text-xs w-max text-blue-600">
        back & continue shopping
      </Link>
    </div>
  );
};

export default CreateAddressPage;
