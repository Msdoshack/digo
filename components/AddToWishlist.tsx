"use client";
import React, { useState } from "react";
import { useWishlistStore } from "@/store/userWishlist";
import VariantModal from "./modals/VariantModal";
import { Heart } from "lucide-react";

type PropsType = {
  product: ProductCardType;
  showText?: boolean;
};

type BtnPropsType = {
  product: ProductCardType;
  addFn: () => void;
  showText?: boolean;
};

const AddToWishlistBtn = ({
  product,
  addFn,
  showText = false,
}: BtnPropsType) => {
  const { wishlist } = useWishlistStore((state) => state);

  const alreadyAdded = wishlist.find((item) => item.id === product.id);

  return (
    <button
      className="flex items-center gap-1"
      onClick={addFn}
      title="add to wishlist"
    >
      <Heart
        className={`size-5 sm:size-6 brand-color ${
          alreadyAdded && "fill-[#f33c7a]"
        }`}
      />

      <span className={`text-[10px] ${showText ? "inline" : "hidden"}`}>
        Add to wish
      </span>
    </button>
  );
};

const AddToWishlistWrapper = ({ product, showText = false }: PropsType) => {
  const [showVariantModal, setShowVariantModal] = useState(false);
  const { addToWishlist, wishlist } = useWishlistStore((state) => state);

  const AlreadyInWishlist = wishlist.find((item) => item.id === product.id);

  const handleAddToWishlistClick = () => {
    if (!AlreadyInWishlist && product.variants && product.variants.length > 1) {
      setShowVariantModal(true);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        img: product.imgs[0],
        price: product.price,
        isAvailable: product?.isAvailable,
        oldPrice: product.oldPrice,
        brand: product.brand,
        qty: 1,
        unitLeft: product.unitLeft,
        variant: {
          color: (product.variants && product.variants[0].color) || null,
          size: (product.variants && product.variants[0].size) || null,
        },
      });
    }
  };
  return (
    <>
      <AddToWishlistBtn
        product={product}
        addFn={handleAddToWishlistClick}
        showText={showText}
      />
      {showVariantModal && (
        <VariantModal
          onClose={() => setShowVariantModal(false)}
          product={product}
          addFn={addToWishlist}
        />
      )}
    </>
  );
};

export default AddToWishlistWrapper;
