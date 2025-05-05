"use client";
import { calculateDisCount } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useWishlistStore } from "@/store/userWishlist";
import { useCartStore } from "@/store/userCart";

type PropsType = {
  product: WishlistType;
};

const WIshlistProductCard = ({ product }: PropsType) => {
  const removeFn = useWishlistStore((state) => state.removeFromWishlist);

  const { addProduct } = useCartStore((state) => state);

  return (
    <div className="border border-gray-200 p-4 rounded-md">
      <Link
        href={`/products/${product.id}`}
        className={`flex gap-4 ${
          !product.isAvailable && "opacity-40 pointer-events-none"
        }`}
      >
        <div className="relative w-30 h-30">
          <Image
            src={product.img}
            className="object-cover w-full h-full"
            alt=""
            fill
          />
        </div>

        <div>
          <h4 className="line-clamp-2 text-xs sm:text-sm lg:text-base">
            {product.name}
          </h4>
          <p className="font-semibold text-sm sm:text-base">
            {" "}
            # {product.price.toLocaleString()}
          </p>

          <div className="flex items-center gap-3 text-xs">
            <p className="flex items-center gap-3 line-through text-gray-500 font-semibold text-xs sm:text-sm">
              {product.oldPrice?.toLocaleString()}
            </p>
            {product.oldPrice && (
              <p className="text-red-500 text-xs">
                -
                {calculateDisCount(
                  product.oldPrice,
                  product.price
                ).toLocaleString()}
                %
              </p>
            )}
          </div>

          {product.variant && (
            <div className="flex items-center gap-3 text-xs my-[2px] text-gray-500">
              {product.variant.size && (
                <span>Size: {product.variant.size}</span>
              )}
              {product.variant.color && (
                <div className="flex items-center gap-1">
                  <span>Color: </span>
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: product.variant.color }}
                  />
                </div>
              )}
            </div>
          )}

          {product.isAvailable && (
            <p className="text-xs text-green-500 sm:text-sm">Available</p>
          )}
        </div>
      </Link>

      <div className="w-full flex justify-end mt-4">
        <div className="flex gap-4 items-center ">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={() => {
              removeFn(product.id);
            }}
            className="text-xs!"
          >
            Remove
          </Button>

          <Button
            onClick={() => {
              addProduct({
                name: product.name,
                id: product.id,
                img: product.img,
                isAvailable: product.isAvailable,
                price: product.price,
                oldPrice: product.oldPrice,
                variant: product.variant,
                brand: product.brand,
                qty: product.qty,
                unitLeft: product.unitLeft,
              });
            }}
            size={"sm"}
            className="text-xs! font-medium brand-bg hover:brand-bg hover:opacity-85"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WIshlistProductCard;
