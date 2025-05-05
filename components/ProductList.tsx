import React from "react";

import ProductCard from "./ProductCard";
import { productsData } from "@/constants";

const ProductList = () => {
  return (
    // flex mt-8 gap-x-4 lg:gap-x-6 gap-y-4 md:gap-y-8  flex-wrap
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 ">
      {productsData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
