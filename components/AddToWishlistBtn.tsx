"use client";
import { useWishlistStore } from "@/store/userWishlist";
import { Heart } from "lucide-react";

type PropsType = {
  productId: string;
  addFn: () => void;
  showText?: boolean;
};

const AddToWishlistBtn = ({
  productId,
  addFn,
  showText = false,
}: PropsType) => {
  const { wishlist } = useWishlistStore((state) => state);

  const alreadyAdded = wishlist.find((item) => item.id === productId);

  return (
    <button
      className="flex items-center gap-1"
      onClick={addFn}
      title="add to wishlist"
    >
      <Heart
        className={`size-5 sm:size-6 brand-color ${
          alreadyAdded && "fill-[#f33c7a]"
        }`}
      />

      <span className={`text-[10px] ${showText ? "inline" : "hidden"}`}>
        Add to wish
      </span>
    </button>
  );
};

export default AddToWishlistBtn;
