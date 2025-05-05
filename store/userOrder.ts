import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUserOrder {
  address: AddressType | null;
  cart: CartProductType[];
  deliveryFee: number;
  totalItems: number;
  productSubTotal: number;
  subTotal: number;

  setOrder: (
    address: AddressType,
    cart: CartProductType[],
    deliveryFee: number
  ) => void;
}

export const useOrdersStore = create<IUserOrder>()(
  persist(
    (set, get) => ({
      address: null,
      cart: [],
      deliveryFee: 0,
      productSubTotal: 0,
      totalItems: 0,
      subTotal: 0,

      setOrder: (address, cart, deliveryFee) => {
        const newAddress = address;
        const updatedCart = cart.filter(
          (product) => product.isAvailable !== false
        );
        const updatedDeliveryFee = deliveryFee;

        const updatedSubtotal = cart.reduce(
          (prev, item) => prev + item.price * item.qty,
          0
        );

        const updatedSubTotal = updatedSubtotal + updatedDeliveryFee;

        return set({
          address: newAddress,
          cart: updatedCart,
          totalItems: updatedCart.length,
          productSubTotal: updatedSubtotal,
          subTotal: updatedSubTotal,
          deliveryFee: updatedDeliveryFee,
        });
      },
    }),
    {
      name: "order-storage",
      partialize: (state) => ({
        address: state.address,
        cart: state.cart,
        deliveryFee: state.deliveryFee,
        productSubTotal: state.productSubTotal,
        totalItems: state.totalItems,
        subTotal: state.subTotal,
      }),
    }
  )
);
