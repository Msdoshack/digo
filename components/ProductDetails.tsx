"use client";
import { useState } from "react";
import { calculateDisCount } from "@/util";

import AddToWishlistBtn from "./AddToWishlistBtn";
import { useWishlistStore } from "@/store/userWishlist";
import VariantModal from "./modals/VariantModal";
import AddToCartBtn from "./AddToCartBtn";

type PropsType = {
  product: ProductCardType;
};
const ProductDetails = ({ product }: PropsType) => {
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

  const validSizes = product.variants?.filter((item) => item.size !== null);

  const validColors = product.variants?.filter((item) => item.color !== null);

  return (
    <div className="flex flex-col gap-5">
      {/* Price */}
      <div>
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-xl">
            # {product.price.toLocaleString()}
          </h3>

          {product.oldPrice && (
            <div className="flex gap-4 items-center">
              <h4 className="text-gray-500 line-through text-sm">
                # {product.oldPrice.toLocaleString()}
              </h4>
              <span className="text-sm text-red-400">
                - {calculateDisCount(product.oldPrice, product.price)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="h-[2px] bg-gray-100" />

      {/* Colors */}
      {validColors && validColors?.length > 0 && (
        <div>
          <h4 className="font-medium mb-1">
            {validColors?.length > 1 ? "Colors" : "Color"}
          </h4>
          <ul className="flex items-center gap-6">
            {validColors.map((item) =>
              item.isAvailable ? (
                <li
                  key={item.color}
                  className="h-8 w-8 ring-1 ring-gray-300 cursor-pointer rounded-full relative"
                  style={{ backgroundColor: item.color! }}
                ></li>
              ) : (
                item.color && (
                  <li
                    key={item.color}
                    className="h-8 w-8 ring-1 ring-gray-300 cursor-not-allowed rounded-full relative"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="absolute w-10 h-[3px] rounded-full bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  </li>
                )
              )
            )}
          </ul>
        </div>
      )}

      {/* Sizes */}
      {validSizes && validSizes?.length > 0 && (
        <div>
          <h4 className="font-medium mb-1">
            {validSizes?.length > 1 ? "Sizes" : "Size"}
          </h4>

          <ul className="flex items-center gap-3">
            {validSizes.map((item) =>
              item.isAvailable && item.size ? (
                <li
                  key={item.size}
                  className={`ring-1 ring-gray-200 text-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer `}
                >
                  {item.size}
                </li>
              ) : (
                <li
                  key={item.size}
                  className={`ring-1 ring-gray-200 text-gray-300 rounded-md py-1 px-4 text-sm cursor-not-allowed `}
                >
                  {item.size}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      <div>
        <div className="flex items-center justify-end">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="">
              <AddToWishlistBtn
                addFn={handleAddToWishlistClick}
                product={product}
              />
            </div>

            <AddToCartBtn product={product} />
          </div>
        </div>
      </div>

      {showVariantModal && (
        <VariantModal
          onClose={() => setShowVariantModal(false)}
          product={product}
          addFn={addToWishlist}
        />
      )}
    </div>
  );
};

export default ProductDetails;
