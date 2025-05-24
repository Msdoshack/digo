"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/userCart";
import RemoveFromCartBtn from "../RemoveFromCartBtn";

type PropsCardCardType = {
  product: CartProductType;
  onClose: () => void;
};

type PropsType = {
  cartProducts: ProductCardType[];
  onClose: () => void;
};

const CartCard = ({ product, onClose }: PropsCardCardType) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
    onClose();
  };

  return (
    <div
      className={`flex gap-4 border-t border-gray-300 pt-4 ${
        !product.isAvailable && "opacity-30 pointer-events-none"
      }`}
    >
      <div className="relative  w-10 h-10 rounded-md  sm:w-16 sm:h-16 bg-gray-300">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover bg-green-500"
        />
      </div>

      <div className="flex flex-col justify-between w-full cursor-pointer">
        {/* Top */}
        <div onClick={() => handleClick(`/products/${product.id}`)}>
          {/* Product name && Price */}
          <div className="flex items-center justify-between gap-8">
            <h3 className="font-semibold max-w-[150px] sm:max-w-xs line-clamp-2 text-xs sm:text-base">
              {product.name}
            </h3>
            <p className="p-1 bg-gray-50 rounded-sm text-sm sm:text-sm font-medium">
              #{product.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center mt-1 gap-2">
            {product.variant && (
              <div className="text-xs text-gray-500 flex gap-2 items-center ">
                {product?.variant?.size && (
                  <span>Size: {product?.variant.size}</span>
                )}
                {product?.variant?.color && (
                  <div className="flex items-center gap-1">
                    <span>Color:</span>
                    <div
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: product?.variant?.color }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <span className="text-gray-500 text-xs sm:text-sm">
            Qty. {product.qty}
          </span>
        </div>

        {/* Bottom */}
        <div className="flex justify-between text-xs">
          <div
            className={`text-xs sm:text-sm font-medium ${
              product.isAvailable ? "text-green-500" : "brand-color"
            }`}
          >
            {product.isAvailable ? "available" : "Sold Out"}
          </div>

          <RemoveFromCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

const CartModal = ({ onClose }: PropsType) => {
  const userCart = useCartStore((state) => state.cart);

  const subTotal = useCartStore((state) => state.subTotal);

  const router = useRouter();

  const handleViewCart = () => {
    router.push("/cart");
    onClose();
  };

  const handleCheckout = () => {
    router.push("/checkout/addresses");
    onClose();
  };

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="w-max absolute rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 p-4 z-30 max-h-[calc(100vh-80px)] overflow-y-scroll hide-scrollbar"
      ref={modalRef}
    >
      {userCart.length > 0 ? (
        <div className="flex flex-col gap-8">
          <h2 className="text-xl">Shopping Cart</h2>
          {userCart.map((item) => (
            <CartCard product={item} key={item.id} onClose={onClose} />
          ))}

          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>SubTotal</span>
              <span>#{subTotal.toLocaleString()}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex items-center justify-between">
              <Button
                size={"sm"}
                variant={"outline"}
                className="ring-1 ring-gray-300"
                onClick={handleViewCart}
              >
                View Cart
              </Button>
              <Button
                size={"sm"}
                className="brand-bg hover:brand-bg hover:opacity-85"
                onClick={handleCheckout}
              >
                Buy Now
                {/* Checkout */}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full">Cart is Empty</div>
      )}
    </div>
  );
};

export default CartModal;
