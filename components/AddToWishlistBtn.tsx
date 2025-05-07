"use client";
import { useWishlistStore } from "@/store/userWishlist";
import { Heart } from "lucide-react";

type PropsType = {
  product: ProductCardType;
  addFn: () => void;
};

const AddToWishlistBtn = ({ product, addFn }: PropsType) => {
  const { wishlist } = useWishlistStore((state) => state);

  const alreadyAdded = wishlist.find((item) => item.id === product.id);

  return (
    <button
      className="flex items-center gap-1"
      onClick={addFn}
      title="add to wishlist"
    >
      <Heart className={` brand-color ${alreadyAdded && "fill-[#f33c7a]"}`} />

      <span className="text-[10px]">Add to wish</span>
    </button>
  );
};

export default AddToWishlistBtn;
