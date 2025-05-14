import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { productsData } from "@/constants";
import Image from "next/image";
import React from "react";

type ParamType = Promise<{ c?: string; s?: string; q: string; p: string }>;

const Products = async ({ searchParams }: { searchParams: ParamType }) => {
  // IF ALL CATEGORY IS SELECTED THEN SET CATEGORY TO BE EMPTY STRING
  const category =
    (await searchParams).c === "all" ? "" : (await searchParams).c ?? "";

  // const sort = (await searchParams).s ?? "";
  const search = (await searchParams).q ?? "";

  const page = (await searchParams).p ?? 1;

  const itemsPerPage = 30; // You can change this as needed
  const startIndex = (Number(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData =
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

  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 min-h-screen bg-gray-100 pb-16">
      {/* CAMPAIGN */}
      <div className="bg-pink-50 px-4 flex justify-between h-48 sm:h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-lg sm:text-4xl font-semibold leading-[24px] sm:leading-[48px] text-gray-700">
            Grab up to 50% off on <br className="hidden sm:block" /> Selected
            Products
          </h1>
          <Button size={"sm"} className="brand-bg text-xs! sm:text-sm!">
            Buy Now
          </Button>
        </div>

        <div className="relative w-1/3">
          <Image src={"/woman.png"} alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />

      <div className="-mx-2">
        <div className="mt-8 mb-4 sm:mb-8 text-gray-600 font-semibold text-sm">
          {!category && !search && (
            <p className="text-lg font-semibold">Products</p>
          )}
          {category && (
            <div className="flex items-center gap-5">
              <p>Category: {category}</p>{" "}
              <span className="text-gray-600 font-medium text-xs">
                ({paginatedData?.length} Results){" "}
              </span>
            </div>
          )}
          {search && (
            <div className="flex items-center gap-5">
              <p>Search results: {search}</p>
              <span className="text-gray-600 font-medium text-xs">
                ({paginatedData?.length} Results){" "}
              </span>
            </div>
          )}
        </div>
        {paginatedData?.length > 0 ? (
          <ProductList products={paginatedData} />
        ) : (
          <div className="h-[20vh] flex items-center justify-center text-gray-600">
            No Result Found
          </div>
        )}
      </div>

      <Pagination productLength={filteredData.length} />
    </div>
  );
};

export default Products;
