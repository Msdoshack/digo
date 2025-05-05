import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 min-h-screen bg-gray-100 pb-16">
      {/* CAMPAIGN */}
      <div className="bg-pink-50 px-4 flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-2xl sm:text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <Button size={"sm"} className="brand-bg">
            Buy Now
          </Button>
        </div>

        <div className="relative w-1/3">
          <Image src={"/woman.png"} alt="" fill className="object-contain" />
        </div>
      </div>

      <Filter />

      <h1 className="mt-12 text-xl font-semibold">Products</h1>

      <ProductList />
    </div>
  );
};

export default Products;
