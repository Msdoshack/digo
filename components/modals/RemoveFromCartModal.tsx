import React from "react";
import { Button } from "../ui/button";

import { useWishlistStore } from "@/store/userWishlist";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useCartStore } from "@/store/userCart";

type PropsType = {
  onClose: () => void;
  product: WishlistType;
};

const RemoveFromCartModal = ({ onClose, product }: PropsType) => {
  const { addToWishlist } = useWishlistStore((product) => product);
  const { removeProduct } = useCartStore((product) => product);

  const handleAddToWishlist = () => {
    removeProduct(product.id);
    addToWishlist(product);
    onClose();
  };

  const handleRemoveFromCart = () => {
    removeProduct(product.id);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000000e9] flex items-center justify-center z-50">
      <div className="py-5 flex  flex-col items-center bg-white rounded-lg w-xs px-4 gap-4">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-center text-gray-700 font-semibold text-base">
            Remove From Cart
          </h4>

          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-gray-500 text-sm">
          Do you really want to remove this item from cart?
        </p>

        <div className="flex flex-col items-center gap-3  mt-5 w-full">
          <Button
            onClick={handleAddToWishlist}
            className="flex items-center gap-2 py-1 px-3 rounded-md ring ring-[#f33c7a] w-full"
            size={"sm"}
            variant={"outline"}
          >
            Add to wishlist <Heart />
          </Button>

          <Button
            onClick={handleRemoveFromCart}
            size={"sm"}
            variant={"destructive"}
            className=" w-full brand-bg"
          >
            Remove from cart <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RemoveFromCartModal;
