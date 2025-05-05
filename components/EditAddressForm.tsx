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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { nigeriaStates } from "@/constants/nigeria";
import { useAddressStore } from "@/store/userAddress";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(1, "please provide a firstName"),
  lastName: z.string().min(1, "please provide a lastName"),
  phone: z.string().min(1, "please provide your phone number"),
  state: z.string().min(1, "please provide a state"),
  lga: z.string().min(1, "please provide a state"),
  phone2: z.string(),
  address: z.string().min(1, "please delivery address"),
});

type PropsType = {
  address: AddressType;
};
const EditAddressForm = ({ address }: PropsType) => {
  const { updateAddress } = useAddressStore((state) => state);
  const isPending = false;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: address?.firstName,
      lastName: address?.lastName,
      state: address?.state,
      lga: address?.lga,
      phone: address?.phone[0].no,
      phone2: address?.phone[1].no,
      address: address?.address,
      // deadline: undefined,
    },
  });

  const router = useRouter();

  const selectedState = form.watch("state");

  const stateObj = nigeriaStates.find((s) => s.state === selectedState);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data = {
      id: address.id,
      address: values.address,
      firstName: values.firstName,
      lastName: values.lastName,
      isDefault: address.isDefault,
      state: values.state,
      lga: values.lga,
      phone: [
        { countryCode: "+234", no: values.phone },
        { countryCode: "+234", no: values.phone2 },
      ],
    };

    updateAddress(address.id, data);

    router.push("/customer/address");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full  items-center gap-x-4 gap-y-8 mt-4  flex-wrap"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[45%]">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="firstName" {...field} className="py-5" />
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
                <Input placeholder="firstName" {...field} className="py-5" />
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
            <FormItem className="w-full sm:w-[45%]">
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
          name="state"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[45%]">
              <FormLabel>State</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="state" />
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
                    <SelectItem value="F">Female</SelectItem>
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

        <div className="flex w-full justify-end gap-5">
          <Button
            type="submit"
            disabled={isPending}
            className=" brand-bg hover:brand-bg hover:opacity-85"
          >
            {isPending ? <Spinner /> : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditAddressForm;
