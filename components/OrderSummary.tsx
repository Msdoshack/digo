"use client";
import React from "react";
import { Button } from "./ui/button";
import { useOrdersStore } from "@/store/userOrder";
import { usePathname } from "next/navigation";

const OrderSummary = () => {
  const { totalItems, productSubTotal, subTotal, deliveryFee, address, cart } =
    useOrdersStore((state) => state);

  const pathname = usePathname();

  const isCreateRoute = pathname === "/checkout/addresses/create";
  return (
    <div>
      <h5 className="p-2 border-b border-gray-200 font-medium">
        Order summary
      </h5>

      <div className="p-2 border-b border-gray-200  text-sm">
        <p className="flex items-center justify-between">
          <span>Item&apos;s total ({totalItems})</span>
          <span className="font-medium">
            # {productSubTotal.toLocaleString()}
          </span>
        </p>
        <p className="flex items-center justify-between">
          <span>delivery fee</span>
          <span className="font-medium"># {deliveryFee.toLocaleString()}</span>
        </p>
      </div>

      <div className="flex p-2 border-b border-gray-200 items-center justify-between text-sm">
        <span>Total</span>
        <h4 className="text-base sm:text-lg font-medium">
          # {subTotal.toLocaleString()}
        </h4>
      </div>

      <Button
        className="w-full brand-bg hover:brand-bg hover:opacity-85 disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!address?.address || cart.length < 1 || isCreateRoute}
      >
        Confirm Order
      </Button>
    </div>
  );
};

export default OrderSummary;
