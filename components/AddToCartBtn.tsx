"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/userCart";
import VariantModal from "./modals/VariantModal";

type PropsType = {
  product: ProductCardType;
};
const AddToCartBtn = ({ product }: PropsType) => {
  const { addProduct, cart } = useCartStore((state) => state);

  const alreadyInCart = cart.find((item) => item.id === product.id);

  const [showVariantModal, setShowVariantModal] = useState(false);

  const handleAddToCartClick = () => {
    if (!alreadyInCart && product.variants && product.variants?.length > 1) {
      setShowVariantModal(true);
    } else {
      addProduct({
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
          size: (product.variants && product.variants[0].size) || null,
          color: (product.variants && product.variants[0].color) || null,
        },
      });
    }
  };

  const handleModalClose = () => {
    setShowVariantModal(false);
  };

  return (
    <>
      <Button
        onClick={handleAddToCartClick}
        size={"sm"}
        variant={alreadyInCart ? "default" : "outline"}
        className={`text-[10px] sm:text-[12px]! w-max   ${
          alreadyInCart?.id
            ? "brand-bg "
            : "brand-color ring ring-[#f33c7a] p-[2px]! px-1!"
        }`}
      >
        {alreadyInCart ? "In Cart" : "Add to cart"}
      </Button>
      {showVariantModal && (
        <VariantModal
          onClose={handleModalClose}
          addFn={addProduct}
          product={product}
          isCart
        />
      )}
    </>
  );
};

export default AddToCartBtn;
