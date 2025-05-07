import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUserWishlist {
  wishlist: WishlistType[];

  totalItem: number;

  addToWishlist: (product: WishlistType) => void;

  removeFromWishlist: (productId: string) => void;
}

export const useWishlistStore = create<IUserWishlist>()(
  persist(
    (set, get) => ({
      wishlist: [],
      totalItem: 0,

      addToWishlist: (product) => {
        const state = get();

        const alreadyExist = state.wishlist.find(
          (item) => item.id === product.id
        );

        let updatedWishlist;

        if (alreadyExist) {
          updatedWishlist = state.wishlist.filter(
            (item) => item.id !== product.id
          );

          toast.success("Removed from wishlist");
        } else {
          updatedWishlist = [product, ...state.wishlist];
          toast.success(`${product.name} - is added to wishlist`);
        }

        const updatedTotalItems = updatedWishlist?.length;

        return set({
          wishlist: updatedWishlist,
          totalItem: updatedTotalItems,
        });
      },

      removeFromWishlist: (productId) => {
        const state = get();
        const filteredWishlist = state.wishlist.filter(
          (item) => item.id !== productId
        );

        toast.success("Removed from wishlist");

        const updatedTotalItems = filteredWishlist.length;

        return set({
          wishlist: filteredWishlist,
          totalItem: updatedTotalItems,
        });
      },
    }),
    {
      name: "wishlist-storage",
      partialize: (state) => ({
        wishlist: state.wishlist,
        totalItem: state.totalItem,
      }),
    }
  )
);
