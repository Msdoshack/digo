import BrandCard2 from "@/components/BrandCard2";
import { brands } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 min-h-screen bg-gray-100 pb-16">
      <h1 className="py-10 font-medium text-gray-700 text-lg sm:text-xl">
        Shop By Brands
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {brands.map((item) => (
          <BrandCard2 brand={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
