"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BackButton from "./BackButton";

const OrdersNav = () => {
  const pathName = usePathname();

  return pathName.includes("/customer/order/detail") ? (
    <BackButton header="Order Details" showBorder />
  ) : (
    <div className="flex gap-2 w-full">
      <Link
        href={"/customer/order"}
        className={`p-3 text-[9px] sm:text-sm font-medium text-gray-600 ${
          pathName === "/customer/order" && "border-b-2 border-[#f33c7a]"
        } `}
      >
        ONGOING/DELIVERED (14)
      </Link>
      <Link
        href={"/customer/order/closed"}
        className={`text-[9px]  sm:text-sm font-medium text-gray-600  p-3 ${
          pathName === "/customer/order/closed" && "border-b-2 border-[#f33c7a]"
        } `}
      >
        CANCELED/RETURNED (26)
      </Link>
    </div>
  );
};

export default OrdersNav;
