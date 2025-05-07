import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { productsData } from "@/constants";
import Image from "next/image";
import React from "react";

type ParamType = Promise<{ c?: string; s?: string; q: string }>;

const Products = async ({ searchParams }: { searchParams: ParamType }) => {
  // IF ALL CATEGORY IS SELECTED THEN SET CATEGORY TO BE EMPTY STRING
  const category =
    (await searchParams).c === "all" ? "" : (await searchParams).c ?? "";

  // const sort = (await searchParams).s ?? "";
  const search = (await searchParams).q ?? "";

  const data =
    search || category
      ? productsData.filter((product) => {
          const matchesQuery = search
            ? product.name.toLowerCase().includes(search.toLowerCase()!)
            : false;

          const matchesCategory = category
            ? product.category.toLowerCase() === category.toLowerCase()
            : false;

          return matchesQuery || matchesCategory;
        })
      : productsData;

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

      <div>
        <div className="my-12  text-gray-600 font-semibold">
          {!category && !search && (
            <p className="text-lg font-semibold">Products</p>
          )}
          {category && <p>Category: {category}</p>}
          {search && <p>Search results: {search}</p>}
        </div>
        {data?.length > 0 ? (
          <ProductList products={data} />
        ) : (
          <div className="h-[20vh] flex items-center justify-center text-gray-600">
            No Result Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
