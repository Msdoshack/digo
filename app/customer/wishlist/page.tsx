"use client";
import { Button } from "@/components/ui/button";
import WIshlistProductCard from "@/components/WIshlistProductCard";
import { useWishlistStore } from "@/store/userWishlist";
import Link from "next/link";
import React from "react";

const WishListPage = () => {
  const { wishlist, totalItem } = useWishlistStore();

  return (
    <div>
      <h4 className="p-2 font-medium sm:text-lg border-b border-gray-200">
        Wishlist ({totalItem})
      </h4>

      {wishlist.length > 0 ? (
        <div className="flex flex-col gap-8 mt-5">
          {wishlist.map((item) => (
            <WIshlistProductCard product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center h-[40vh]">
          <p>Your wishlist is empty</p>
          <Button className="brand-bg" size={"sm"}>
            <Link href={"/products"}>Add product </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishListPage;
