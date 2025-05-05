"use client";

import DeleteModal from "@/components/modals/DeleteModal";
import { Button } from "@/components/ui/button";
import { useAddressStore } from "@/store/userAddress";

import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({
  id,
  firstName,
  lastName,
  address,
  phone,
  isDefault,
  state,
  lga,
}: AddressType) => {
  const { makeDefault, deleteAddress } = useAddressStore((state) => state);
  const [openDelModal, setOpenDelModal] = useState(false);

  const handleClose = () => {
    setOpenDelModal(false);
  };

  const handleDelFn = () => {
    deleteAddress(id);
  };
  return (
    <div
      className={`w-full shrink-0 sm:w-[45%] border-2 border-gray-200 rounded-md  mt-8 flex flex-col justify-between ${
        isDefault && "bg-gray-100"
      }`}
    >
      <div className="py-3 flex flex-col  gap-1 px-3">
        <h4 className="font-medium text-gray-700 capitalize">
          {` ${firstName} ${lastName} - ${state}, ${lga}`}
        </h4>
        <p className="text-sm text-gray-500">{address}</p>
        <p className="text-sm text-gray-500">
          {phone.map((item) => `${item.countryCode}${item.no},`)}
        </p>

        {isDefault && (
          <p className="text-green-500 text-sm mt-2">Default Address</p>
        )}
      </div>

      <div className="flex items-center justify-between mt-3 px-3  border-t pt-3 border-gray-200">
        <Button
          onClick={() => {
            makeDefault(id);
          }}
          variant={"link"}
          className={`text-sm no-underline ${
            isDefault ? "text-gray-500" : "brand-color"
          }`}
        >
          {isDefault ? (
            <span className="text-xs uppercase font-semibold">Default</span>
          ) : (
            " Set as isDefault"
          )}
        </Button>
        <div className="flex items-center gap-5 brand-color">
          <Link href={`/customer/address/edit/${id}`}>
            <Edit size={18} />
          </Link>

          <button onClick={() => setOpenDelModal(true)}>
            <Trash size={18} />
          </button>
        </div>
      </div>
      {openDelModal && (
        <DeleteModal onClose={handleClose} delFn={handleDelFn} />
      )}
    </div>
  );
};

const Addresspage = () => {
  const { address, totalNo } = useAddressStore((state) => state);

  return (
    <div>
      {/* TOP */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <h4 className="text-lg font-medium text-gray-700">
          Addresses ({totalNo})
        </h4>

        <Button className="brand-bg" size={"sm"}>
          <Link href={"/customer/address/create"}>Add new address</Link>
        </Button>
      </div>

      {address.length > 0 ? (
        <div className="flex flex-wrap gap-5 w-full">
          {address.map((address) => (
            <Card
              key={address.id}
              id={address.id}
              state={address.state}
              lga={address.lga}
              address={address.address}
              firstName={address.firstName}
              lastName={address.lastName}
              phone={address.phone}
              isDefault={address.isDefault}
            />
          ))}
        </div>
      ) : (
        <div className="h-[30vh] w-full flex items-center justify-center">
          No address yet
        </div>
      )}
    </div>
  );
};

export default Addresspage;
