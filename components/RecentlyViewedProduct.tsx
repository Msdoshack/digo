"use client";
import Link from "next/link";
import React from "react";
import OtherProductCard from "./OtherProductCard";
import { useUserStore } from "@/store/user";

const RecentlyViewedProduct = () => {
  const { history } = useUserStore((state) => state);

  return (
    <div className="bg-white p-2 mt-16 mb-5 ">
      <div className="w-full flex items-center justify-between  mb-5">
        <h1 className="font-medium text-lg ">Recently Viewed</h1>

        <Link href={"customer/history"} className="brand-color">
          View all
        </Link>
      </div>

      <div className="flex overflow-x-scroll gap-5 hide-scrollbar">
        {history.map((product) => (
          <OtherProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedProduct;
