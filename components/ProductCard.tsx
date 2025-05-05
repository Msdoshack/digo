import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactRating from "./ReactRating";
import { calculateDisCount } from "@/util";
import AddToCartBtn from "./AddToCartBtn";

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
        className="w-full flex flex-col gap-2"
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

        <p className="font-semibold text-xs sm:text-sm">
          # {product.price.toLocaleString()}
        </p>

        {product.oldPrice && (
          <div className="-mt-1 flex items-center gap-5">
            <p className="text-xs text-gray-500 line-through">
              # {product.oldPrice.toLocaleString()}
            </p>

            <span className="text-xs text-red-500">
              -{calculateDisCount(product.oldPrice, product.price)}%
            </span>
          </div>
        )}

        <ReactRating rating={product.rating} />
      </Link>

      <AddToCartBtn product={product} />

      {!product.isAvailable && (
        <p className="absolute left-20 z-20 top-36 text-red-500 font-bold bg-black">
          Sold Out
        </p>
      )}
    </div>
  );
};

export default ProductCard;
