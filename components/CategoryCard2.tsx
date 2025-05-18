import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  category: CategoryType;
};

const CategoryCard2 = ({ category }: PropsType) => {
  const lowerCaseCat = category.name.toLowerCase();
  return (
    <Link href={`/products?c=${lowerCaseCat}`} className="w-full h-full">
      <div className="relative bg-gray-200 w-full h-40 sm:h-60 lg:h-72">
        <Image
          src={category.img}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="py-2 text-sm sm:text-base md:text-lg tracking-wide text-center bg-gray-50 rounded-b-md border-b">
        {category.name}
      </h1>
    </Link>
  );
};

export default CategoryCard2;
