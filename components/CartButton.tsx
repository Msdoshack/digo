"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import CartModal from "./modals/CartModal";
import { useCartStore } from "@/store/userCart";

type PropsType = {
  cartProducts: ProductCardType[];
};

const CartButton = ({ cartProducts }: PropsType) => {
  const [showCart, setShowCart] = useState(false);
  const userCartItems = useCartStore((state) => state.totalItems);

  const onClose = () => {
    setShowCart(false);
  };
  return (
    <div>
      <Button
        variant={"outline"}
        size={"sm"}
        className="relative border-0 cursor-pointer"
        onClick={() => setShowCart((prev) => !prev)}
      >
        <ShoppingCart />
        <div className="absolute -top-1 sm:-top-3 right-0 brand-bg rounded-full min-h-4 min-w-4 sm:min-h-6 sm:min-w-6 p-[2px] text-[10px] sm:text-xs flex items-center justify-center text-white">
          {userCartItems}
        </div>
      </Button>

      {showCart && <CartModal cartProducts={cartProducts} onClose={onClose} />}
    </div>
  );
};

export default CartButton;
