import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  product: ProductCardType;
};
const OtherProductCard = ({ product }: PropsType) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className={`relative flex flex-col gap-[2px] w-full ${
        !product.isAvailable && "opacity-40 pointer-events-none"
      }`}
    >
      <div className="relative w-36 h-36 bg-gray-300">
        <Image src={product.imgs[0]} alt="" fill className="object-cover" />
      </div>
      <p className="text-xs sm:text-sm line-clamp-2">{product.name}</p>
      <p className="text-sm sm:text-base font-medium">
        # {product.price.toLocaleString()}
      </p>
      <p className="text-xs text-gray-500 line-through ">
        {product.oldPrice && (
          <span> # {product.oldPrice.toLocaleString()}</span>
        )}
      </p>
      {!product.isAvailable && (
        <p className="absolute left-1/2 z-20 top-1/2 text-red-500 font-bold bg-black text-xs">
          Sold Out
        </p>
      )}
    </Link>
  );
};

export default OtherProductCard;
