import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUserAddress {
  address: AddressType[];
  totalNo: number;
  addAddress: (address: AddressType) => void;
  deleteAddress: (addressId: string) => void;
  makeDefault: (addressId: string) => void;
  updateAddress: (addressId: string, data: AddressType) => void;
}

export const useAddressStore = create<IUserAddress>()(
  persist(
    (set, get) => ({
      address: [],
      totalNo: 0,
      addAddress: (address) => {
        const state = get();

        const updatedAddress = [...state.address, address];

        return set({
          address: updatedAddress,
          totalNo: updatedAddress.length,
        });
      },

      deleteAddress: (addressId) => {
        const state = get();
        const filteredAddress = state.address.filter(
          (address) => address.id !== addressId
        );

        toast.success("deleted");

        return set({
          address: filteredAddress,
          totalNo: filteredAddress.length,
        });
      },

      makeDefault: (addressId) => {
        const state = get();

        const updatedAddress = state.address.map((address) =>
          address.isDefault === true
            ? { ...address, isDefault: false }
            : address.id === addressId
            ? { ...address, isDefault: true }
            : address
        );

        toast.success("done");

        return set({
          address: updatedAddress,
          totalNo: updatedAddress.length,
        });
      },

      updateAddress: (addressId, data) => {
        const state = get();

        const updatedAddress = state.address.map((address) =>
          address.id === addressId ? { ...data } : address
        );

        toast.success("address updated");

        return set({
          address: updatedAddress,
          totalNo: updatedAddress.length,
        });
      },
    }),
    {
      name: "address-storage",
      partialize: (state) => ({
        address: state.address,
        totalNo: state.totalNo,
      }),
    }
  )
);
