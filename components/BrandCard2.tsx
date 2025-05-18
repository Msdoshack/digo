import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  brand: BrandType;
};

const BrandCard2 = ({ brand }: PropsType) => {
  const lowerCasedBrand = brand.name.toLowerCase();
  return (
    <Link href={`/products?b=${lowerCasedBrand}`} className="w-full h-full">
      <div className="relative bg-gray-200 w-full h-40 sm:h-60 lg:h-72">
        <Image
          src={brand.img}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="py-2 text-sm sm:text-base md:text-lg tracking-wide text-center capitalize bg-gray-50 rounded-b-md border-b">
        {brand.name}
      </h1>
    </Link>
  );
};

export default BrandCard2;
