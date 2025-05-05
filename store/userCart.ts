import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

interface ICartStore {
  cart: CartProductType[];
  totalItems: number;
  subTotal: number;
  addProduct: (product: CartProductType) => void;
  removeProduct: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
}

// type State = {
//   cart: CartProductType[];
//   totalItems: number;
//   subTotal: number;
// };

// type Actions = {
//   addProduct: (product: CartProductType) => void;
//   removeProduct: (productId: string) => void;
//   updateQty: (productId: string, qty: number) => void;
// };

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      totalItems: 0,
      subTotal: 0,

      addProduct: (product) => {
        const state = get();
        const existingProduct = state.cart.find(
          (item) => item.id === product.id
        );

        let updatedCart;
        if (existingProduct) {
          updatedCart = state.cart.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + product.qty }
              : item
          );
        } else {
          updatedCart = [...state.cart, product];
        }

        const updatedSubTotal = updatedCart.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );

        toast.success(`${product.name} - added to cart!`);

        return set({
          cart: updatedCart,
          totalItems: updatedCart.length,
          subTotal: updatedSubTotal,
        });
      },

      removeProduct: (productId) => {
        const updatedCart = get().cart.filter((item) => item.id !== productId);
        const updatedSubTotal = updatedCart.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );

        toast.success("Removed from cart");

        return set({
          cart: updatedCart,
          totalItems: updatedCart.length,
          subTotal: updatedSubTotal,
        });
      },

      updateQty: (productId, qty) => {
        const updatedCart = get().cart.map((product) =>
          product.id === productId ? { ...product, qty } : product
        );

        const subTotal = updatedCart.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );

        return set({
          cart: updatedCart,
          totalItems: updatedCart.length,
          subTotal,
        });
      },
    }),
    {
      name: "cart-storage", // key in localStorage
      partialize: (state) => ({
        cart: state.cart,
        totalItems: state.totalItems,
        subTotal: state.subTotal,
      }),
    }
  )
);

// export const useCartStore = create<State & Actions>((set) => ({
//   cart: [],
//   totalItems: 0,
//   subTotal: 0,

//   addProduct: (product) =>
//     set((state) => {
//       // Check if product already exists
//       const existingProduct = state.cart.find((item) => item.id === product.id);

//       let updatedCart;
//       if (existingProduct) {
//         // Update quantity if it exists
//         updatedCart = state.cart.map((item) =>
//           item.id === product.id
//             ? { ...item, qty: item.qty + product.qty }
//             : item
//         );
//       } else {
//         updatedCart = [...state.cart, product];
//       }

//       const updatedSubTotal = updatedCart.reduce(
//         (sum, item) => sum + item.price * item.qty,
//         0
//       );

//       toast.success(`${product.name} -  added to cart!`);

//       return {
//         cart: updatedCart,
//         totalItems: updatedCart.length,
//         subTotal: updatedSubTotal,
//       };
//     }),

//   removeProduct: (productId) =>
//     set((state) => {
//       const updatedCart = state.cart.filter((item) => item.id !== productId);

//       const updatedSubTotal = updatedCart.reduce(
//         (prev, item) => prev + item.price * item.qty,
//         0
//       );

//       const updatedTotalItem = updatedCart.length;

//       toast.success("removed");

//       return {
//         cart: updatedCart,
//         totalItems: updatedTotalItem,
//         subTotal: updatedSubTotal,
//       };
//     }),

//   updateQty: (productId, qty) =>
//     set((state) => {
//       const updatedCart = state.cart.map((product) =>
//         product.id === productId ? { ...product, qty: qty } : product
//       );

//       const subTotal = updatedCart.reduce(
//         (prev, product) => prev + product.price * product.qty,
//         0
//       );

//       const totalItems = updatedCart.length;

//       return { cart: updatedCart, subTotal, totalItems };
//     }),
// }));
