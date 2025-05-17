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
      className="shrink-0 w-[80%] sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-72">
        <Image
          src={brand.img}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="mt-2 md:text-lg tracking-wide text-center">
        {brand.name}
      </h1>
    </Link>
  );
};

export default BrandCard;
