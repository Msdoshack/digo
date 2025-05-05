"use client";
import { useWishlistStore } from "@/store/userWishlist";
import { Heart } from "lucide-react";

type PropsType = {
  product: WishlistType;
};

const AddToWishlistBtn = ({ product }: PropsType) => {
  const { addToWishlist, wishlist } = useWishlistStore((state) => state);

  const alreadyAdded = wishlist.find((item) => item.id === product.id);

  return (
    <button
      className=""
      onClick={() => {
        addToWishlist(product);
      }}
      title="add to wishlist"
    >
      <Heart className={` brand-color ${alreadyAdded && "fill-[#f33c7a]"}`} />
    </button>
  );
};

export default AddToWishlistBtn;
