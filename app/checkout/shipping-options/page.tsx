"use client";
import { useOrdersStore } from "@/store/userOrder";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type OrderProps = {
  name: string;
  price: number;
  img: string;
  qty: number;
  id: string;
  variant?: {
    size: string | null;
    color: string | null;
  };
};

const OrderCard = ({ img, name, qty, id, price, variant }: OrderProps) => {
  return (
    <Link
      href={`/products/${id}`}
      className="flex w-full gap-2  border p-1 rounded-md"
    >
      <div className="relative h-20 w-20">
        <Image src={img} alt="" fill className="object-cover w-full h-full" />
      </div>

      <div className="flex-1">
        <p className="line-clamp-2 text-xs sm:text-sm text-gray-700">{name}</p>

        <p className="text-xs text-gray-800 font-medium">
          # {price.toLocaleString()}
        </p>

        {variant && (
          <div className="flex items-center text-xs text-gray-500">
            {variant.size && <p>Size: {variant.size}</p>}

            {variant.color && (
              <div className="flex items-center gap-1">
                Color:
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: variant.color! }}
                />
              </div>
            )}
          </div>
        )}

        <p className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <span>QTY</span>
          <span>{qty}</span>
        </p>
      </div>
    </Link>
  );
};

const OrderSummaryPage = () => {
  const { cart, address } = useOrdersStore((state) => state);

  return (
    <ol className=" flex flex-col gap-4">
      <li className=" bg-white p-2 rounded-md relative ">
        <Check
          size={13}
          className="text-white bg-green-500 rounded-full absolute left-1 top-5"
        />
        <h4 className="text-gray-700 py-2 border-gray-200 font-medium inline-block px-6">
          Customer Address
        </h4>
        <div className="border-t border-gray-200 py-1 ">
          <h5 className="text-gray-500 font-medium capitalize text-sm">
            {` ${address?.lastName} ${address?.firstName}`}
          </h5>

          <p className="text-xs text-gray-500 line-clamp-2">
            {` ${address?.address} 
            ${address?.phone[0].countryCode}  ${address?.phone[0].no}`}
          </p>
        </div>
      </li>

      <li className="bg-white  mb-8 rounded-md relative pb-2">
        <Check
          size={13}
          className="text-white bg-green-500 rounded-full absolute left-1 top-1"
        />
        <h4 className="font-medium inline-block capitalize text-gray-700 px-6">
          Shipment
        </h4>
        <p className="text-xs text-gray-500 mt-2">
          Delivery between 01 May and 05 May.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2   gap-y-6 gap-x-4 mt-5 p-2 border border-gray-200 rounded-md">
          {cart.map((item) => (
            <OrderCard
              key={item?.id}
              name={item?.name}
              price={item?.price}
              img={item?.img}
              qty={item?.qty}
              id={item?.id}
              variant={item?.variant}
            />
          ))}
        </div>
      </li>
    </ol>
  );
};

export default OrderSummaryPage;
