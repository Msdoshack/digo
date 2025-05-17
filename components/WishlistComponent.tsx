"use client";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import WIshlistProductCard from "@/components/WIshlistProductCard";
import { useWishlistStore } from "@/store/userWishlist";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const WishlistComponent = () => {
  const { wishlist, totalItem } = useWishlistStore();

  const searchParams = useSearchParams();

  const page = searchParams.get("p") ?? 1;

  const itemsPerPage = 10;

  const startIndex = (Number(page) - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const paginatedData = wishlist.slice(startIndex, endIndex);

  return wishlist?.length > 0 ? (
    <div>
      <h4 className="p-2 font-medium sm:text-lg border-b border-gray-200">
        Wishlist ({totalItem})
      </h4>

      <div className="flex flex-col gap-8 mt-5">
        {paginatedData.map((item) => (
          <WIshlistProductCard product={item} key={item.id} />
        ))}
      </div>
      <Pagination productLength={wishlist.length} limit={10} />
    </div>
  ) : (
    <div className="flex flex-col gap-2 justify-center items-center h-[40vh]">
      <p>Your wishlist is empty</p>
      <Button className="brand-bg" size={"sm"}>
        <Link href={"/products"}>Add product </Link>
      </Button>
    </div>
  );
};

export default WishlistComponent;
