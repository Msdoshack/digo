import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  category: CategoryType;
};

const CategoryCard = ({ category }: PropsType) => {
  const lowerCaseCat = category.name.toLowerCase();
  return (
    <Link
      href={`/products?c=${lowerCaseCat}`}
      className="shrink-0 w-[70%] sm:w-1/2 lg:w-1/4 xl:w-1/6 border p-2 rounded-md"
    >
      <div className="relative bg-slate-100 w-full h-52 sm:h-72">
        <Image
          src={category.img}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="p-2 bg-gray-100 rounded-b-md md:text-lg tracking-wide text-center">
        {category.name}
      </h1>
    </Link>
  );
};

export default CategoryCard;
