import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactRating from "./ReactRating";
import { calculateDisCount } from "@/util";
import AddToCartBtn from "./AddToCartBtn";
import AddToWishlistWrapper from "./AddToWishlist";

type PropsType = {
  product: ProductCardType;
};

const ProductCard = ({ product }: PropsType) => {
  return (
    <div
      className={`relative bg-white p-2 rounded-md flex flex-col gap-2 ${
        !product.isAvailable && "opacity-40 pointer-events-none"
      }`}
    >
      <Link
        href={`/products/${product.id}`}
        className="w-full flex flex-col gap-1"
      >
        <div className="flex justify-center">
          {/* IMAGE */}
          <div className="relative h-40 w-40 bg-gray-300 ">
            <Image
              src={product.imgs[0]}
              fill
              alt=""
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
            />
            <Image
              src={product.imgs[1]}
              fill
              alt=""
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
        </div>

        <p className="text-medium line-clamp-2 text-xs sm:text-sm ">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm sm:text-base">
            # {product.price.toLocaleString()}
          </p>

          {product.oldPrice && (
            <div className="flex items-center gap-1">
              <p className="text-[10px] sm:text-xs text-gray-500 line-through">
                # {product.oldPrice.toLocaleString()}
              </p>

              <span className="text-[10px] text-red-500 hidden sm:block">
                -{calculateDisCount(product.oldPrice, product.price)}%
              </span>
            </div>
          )}
        </div>

        <ReactRating rating={product.rating} />
      </Link>

      <div className="flex justify-between">
        <AddToCartBtn product={product} />

        <AddToWishlistWrapper product={product} />
      </div>

      {!product.isAvailable && (
        <p className="absolute left-20 z-20 top-36 text-red-500 font-bold bg-black">
          Sold Out
        </p>
      )}
    </div>
  );
};

export default ProductCard;
