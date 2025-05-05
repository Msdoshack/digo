import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  category: CategoryType;
};

const CategoryCard = ({ category }: PropsType) => {
  return (
    <Link
      href={`/products?c=${category.name}`}
      className="shrink-0 w-[80%] sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-72">
        <Image
          src={category.img}
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
      </div>
      <h1 className="mt-2 md:text-lg tracking-wide text-center">
        {category.name}
      </h1>
    </Link>
  );
};

export default CategoryCard;
