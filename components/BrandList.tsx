import React from "react";

import { brands } from "@/constants";
import BrandCard from "./BrandCard";

const topBrands = brands.filter((product) => product?.topBrand === true);

const BrandList = () => {
  return (
    <div className="px-4 overflow-x-scroll hide-scrollbar">
      <div className="flex gap-4 md:gap-8">
        {topBrands.map((category) => (
          <BrandCard brand={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default BrandList;
