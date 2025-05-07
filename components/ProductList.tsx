import React from "react";

import ProductCard from "./ProductCard";

type PropsType = {
  products: ProductCardType[];
};

const ProductList = ({ products }: PropsType) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 ">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
