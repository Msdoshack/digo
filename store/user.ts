import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  maxNo: 60;
  user: UserType | null;
  setUser: (user: UserType) => void;
  history: ProductCardType[];
  addHistory: (product: ProductCardType) => void;
}

export const useUserStore = create<IUser>()(
  persist(
    (set, get) => ({
      history: [],
      maxNo: 60,
      user: null,

      setUser: (user) => {
        return set({ user });
      },

      addHistory: (product) => {
        const state = get();

        // remove any existing product in history
        const filteredHistory = state.history.filter(
          (item) => item.id !== product.id
        );

        const updatedHistory = [product, ...filteredHistory];

        const trimmedHistory = updatedHistory.slice(-state.history);

        return set({
          history: trimmedHistory,
        });
      },
    }),
    {
      name: "user-storage",

      partialize: (state) => ({
        history: state.history,
        user: state.user,
      }),
    }
  )
);
