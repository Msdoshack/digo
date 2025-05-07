"use client";
import { calculateDisCount } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useWishlistStore } from "@/store/userWishlist";
import AddToCartBtn from "./AddToCartBtn";

type PropsType = {
  product: ProductCardType;
};

const HistoryProductCard = ({ product }: PropsType) => {
  const removeFn = useWishlistStore((state) => state.removeFromWishlist);

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
            src={product.imgs[0]}
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

          {product.isAvailable && (
            <p className="text-xs text-green-500 sm:text-sm">Available</p>
          )}
        </div>
      </Link>

      <div className="w-full flex justify-end">
        <div className="flex gap-4 items-center ">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={() => {
              removeFn(product.id);
            }}
            className="text-xs!"
          >
            remove
          </Button>

          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default HistoryProductCard;
