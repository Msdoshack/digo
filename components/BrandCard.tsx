import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  brand: BrandType;
};

const BrandCard = ({ brand }: PropsType) => {
  const lowerCasedBrand = brand.name.toLowerCase();
  return (
    <Link
      href={`/products?b=${lowerCasedBrand}`}
      className="shrink-0 w-[70%] sm:w-1/2 lg:w-1/4 border p-2 rounded-md"
    >
      <div className="relative  w-full h-52 sm:h-72">
        <Image
          src={brand.img}
          alt=""
          fill
          sizes="20vw"
          className="object-contain"
        />
      </div>
      <h1 className="p-2 bg-gray-100 rounded-b-md md:text-lg tracking-wide text-center capitalize">
        {brand.name}
      </h1>
    </Link>
  );
};

export default BrandCard;
