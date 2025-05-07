"use client";
import { useState } from "react";
import { calculateDisCount } from "@/util";
import { useWishlistStore } from "@/store/userWishlist";
import VariantModal from "./modals/VariantModal";
import AddToCartBtn from "./AddToCartBtn";
import AddToWishlist from "./AddToWishlist";

type PropsType = {
  product: ProductCardType;
};
const ProductDetails = ({ product }: PropsType) => {
  const [showVariantModal, setShowVariantModal] = useState(false);

  const { addToWishlist } = useWishlistStore((state) => state);

  const validSizes = product.variants?.filter((item) => item.size !== null);

  const validColors = product.variants?.filter((item) => item.color !== null);

  return (
    <div className="flex flex-col gap-3">
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
        <>
          <div className="flex items-center gap-2">
            <h4 className="font-medium  text-sm sm:text-base">
              {validColors?.length > 1 ? "Colors: " : "Color: "}
            </h4>
            <ul className="flex items-center gap-6">
              {validColors.map((item) =>
                item.isAvailable ? (
                  <li
                    key={item.color}
                    className="h-6 w-6 sm:h-8 sm:w-8 ring-1 ring-gray-300 cursor-pointer rounded-full relative"
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
          <div className="h-[2px] bg-gray-100" />
        </>
      )}

      {/* Sizes */}
      {validSizes && validSizes?.length > 0 && (
        <>
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-sm sm:text-base">
              {validSizes?.length > 1 ? "Sizes: " : "Size: "}
            </h4>

            <ul className="flex items-center gap-3">
              {validSizes.map((item) =>
                item.isAvailable && item.size ? (
                  <li
                    key={item.size}
                    className={`ring-1 ring-gray-200 text-pink-500 rounded-md py-1 px-2 text-sm cursor-pointer`}
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
          <div className="h-[2px] bg-gray-100" />
        </>
      )}

      <div>
        <div className="flex items-center justify-between ">
          <AddToCartBtn product={product} />

          <AddToWishlist product={product} showText />
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
