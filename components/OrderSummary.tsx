"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useOrdersStore } from "@/store/userOrder";
import { usePathname } from "next/navigation";
import OrderSuccessModal from "./modals/OrderSuccessModal";
import { v4 as uuidv4 } from "uuid";
import { useCartStore } from "@/store/userCart";

const OrderSummary = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    totalItems,
    productSubTotal,
    subTotal,
    deliveryFee,
    address,
    cart,
    placeOrder,
  } = useOrdersStore();

  const { clearCart } = useCartStore();

  const pathname = usePathname();

  const enableConfirmOrder = pathname === "/checkout/shipping-options";

  const orderProducts: OrdersProductType[] = cart.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    qty: product.qty,
    status: "pending",
  }));

  const handleClose = () => {
    setShowSuccessModal(false);
  };

  const handleConfirmOrder = () => {
    placeOrder({
      id: uuidv4().substring(0, 8),
      address: address!,
      paymentDetails: {
        deliveryFees: deliveryFee,
        itemsTotal: totalItems,
        total: subTotal,
      },
      paymentMethod: "Card",

      products: orderProducts,
    });

    clearCart();

    setShowSuccessModal(true);
  };

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
        onClick={handleConfirmOrder}
        disabled={!address?.address || cart.length < 1 || !enableConfirmOrder}
      >
        Confirm Order
      </Button>
      {showSuccessModal && <OrderSuccessModal onClose={handleClose} />}
    </div>
  );
};

export default OrderSummary;
