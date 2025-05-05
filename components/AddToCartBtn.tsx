"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/userCart";

type PropsType = {
  product: ProductCardType;
};
const AddToCartBtn = ({ product }: PropsType) => {
  const addToCart = useCartStore((state) => state.addProduct);

  const defaultColor = product.colors.find((item) => item.isAvailable === true);

  const defaultSize = product.sizes.find((item) => item.isAvailable === true);

  return (
    <Button
      onClick={() => {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.imgs[0],
          isAvailable: product.isAvailable,
          qty: 1,
          brand: product.brand,
          unitLeft: product.unitLeft,
          oldPrice: product.oldPrice,
          variant: {
            color: defaultColor?.color,
            size: defaultSize?.size,
          },
        });
      }}
      size={"sm"}
      variant={"outline"}
      className="brand-color ring ring-[#f33c7a] text-[12px]! w-max  p-[2px]! px-1!"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
