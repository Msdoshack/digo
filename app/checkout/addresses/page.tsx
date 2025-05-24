"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAddressStore } from "@/store/userAddress";
import { useCartStore } from "@/store/userCart";
import { useOrdersStore } from "@/store/userOrder";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddressBookCard = ({
  addresses,
  onSelect,
  selectedAddress,
}: {
  addresses: AddressType[];
  onSelect: (id: string) => void;
  selectedAddress: string;
}) => {
  return (
    <div className="">
      {addresses ? (
        <RadioGroup
          defaultValue={selectedAddress}
          className="flex flex-col gap-8"
          onValueChange={(val) => onSelect(val)}
        >
          {addresses.map((address) => (
            <div
              className="flex items-center space-x-2 border border-gray-200 p-3 rounded-md"
              key={address.id}
            >
              <RadioGroupItem
                value={address.id}
                id={address.id}
                defaultChecked
              />
              <Label htmlFor={address.id}>
                <div>
                  <h5 className="text-gray-600 capitalize text-sm font-medium">
                    {`${address.lastName} ${address.firstName} - ${address.state}, ${address.lga}`}
                  </h5>
                  <div className="text-xs text-gray-500">
                    <p className="">{address.address}</p>
                    <p className="text-xs text-gray-500">
                      {address.phone.map((no) => no.countryCode + no.no)}
                    </p>

                    {address.isDefault && (
                      <p className="uppercase bg-gray-100 w-max">
                        Default Address
                      </p>
                    )}
                  </div>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        <div className="h-[30vh] w-full flex items-center justify-center">
          No address
        </div>
      )}
    </div>
  );
};

const Addresses = () => {
  const { address } = useAddressStore((state) => state);

  const defaultAddress =
    address.find((address) => address.isDefault)?.id || address[0]?.id;

  const [selectedAddress, setSelectedAddress] = useState(defaultAddress);

  const { setOrder } = useOrdersStore((state) => state);

  const cart = useCartStore((state) => state.cart);

  const handleSelect = (id: string) => {
    setSelectedAddress(id);
  };

  const router = useRouter();

  const handleClick = () => {
    const ad = address.find((address) => address.id === selectedAddress)!;

    setOrder(ad, cart, 10000);

    router.push("/checkout/shipping-options");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-md p-2">
        <h3 className="p-3 border-b border-gray-200">1. Customer Address</h3>
        <div>
          <h4 className="text-sm font-medium text-gray-600 p-3">
            Address book ({address.length})
          </h4>

          <AddressBookCard
            addresses={address}
            onSelect={handleSelect}
            selectedAddress={selectedAddress}
          />

          <Link
            href="/checkout/addresses/create"
            className="mt-2 flex items-center gap-2 brand-color p-3 border-b border-gray-200 w-full"
          >
            <Plus size={18} />
            Add address
          </Link>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xs brand-color capitalize sm:text-sm">
              Select An Address to Continue
            </p>
            <div className="flex items-center gap-5 p-2 ">
              <Button size={"sm"} variant={"outline"}>
                Cancel
              </Button>
              <Button
                onClick={handleClick}
                size={"sm"}
                className="brand-bg hover:bg-brand-bg hover:opacity-85"
                disabled={!selectedAddress}
              >
                {/* <Link href=""> */}
                Select address
                {/* </Link> */}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-gray-500 p-2 uppercase bg-white text-sm font-medium">
        Delivery Details
      </div>

      <div className="text-gray-500 uppercase text-sm p-2 font-medium bg-white">
        Payment Method
      </div> */}

      <Button variant={"link"} className="text-xs w-max text-blue-600">
        back & continue shopping
      </Button>
    </div>
  );
};

export default Addresses;
