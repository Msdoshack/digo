"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { customersMenu } from "@/constants";
import { MapPin, Settings, User2 } from "lucide-react";

export default function CustomerNavMobile() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Select
      defaultValue={pathName}
      onValueChange={(value) => {
        router.push(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Account" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={"/customer/account"}>
          <User2 className="text-white bg-black rounded-full" /> Account
        </SelectItem>

        {customersMenu.map((item) => (
          <SelectItem key={item.id} value={item.link}>
            {<item.icon />} {item.name}
          </SelectItem>
        ))}

        <SelectItem
          value={"/customer/address"}
          className="border-t border-gray-200 pt-2"
        >
          <MapPin /> Address Book
        </SelectItem>

        <SelectItem value={"/customer/account-settings"}>
          <Settings /> Account Settings
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
