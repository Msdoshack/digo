import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Spinner from "../Spinner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUserStore } from "@/store/user";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  firstName: z.string().min(1, "please provide a firstName"),

  middleName: z.string(),

  lastName: z.string().min(1, "please provide a lastName"),

  gender: z.string().min(1, "please provide your gender"),

  email: z.string().min(1, "please provide your email"),

  phone: z.string().min(1, "please provide your phone number"),

  phone2: z.string(),
});

const SetUserModal = () => {
  const { setUser } = useUserStore((state) => state);
  const isPending = false;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      gender: "",
      phone: "",
      phone2: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUser({ ...values, id: uuidv4().slice(0, 8) });
  };
  return (
    <div className="fixed left-0 top-0 w-full h-screen overflow-hidden bg-[#000000e8] z-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md min-w-sm h-full overflow-y-scroll">
        <h1 className="text-center mb-4">
          Hi There! Welcome to{" "}
          <span className="text-sm font-bold brand-color">(DIGO DEMO)</span>{" "}
        </h1>

        <div>
          <h1 className="text-center text-sm text-gray-600">
            Pls fill the form to continue
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-ful gap-y-4 mt-4 flex flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>First Name</FormLabel>
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
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Middle Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Middle Name (optional)"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
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
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Gender"
                        {...field}
                        className="py-5 text-sm"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
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
                  <FormItem className="">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone No"
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
                name="phone2"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Additional Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Additional Phone Number"
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
                className="bg brand-bg hover:brand-bg hover:opacity-85"
              >
                {isPending ? <Spinner /> : "Continue"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SetUserModal;
