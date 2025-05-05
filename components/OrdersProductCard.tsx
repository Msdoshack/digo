"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type PropsType = {
  product: OrderedProductType;
  orderId: string;
};
const OrdersProductCard = ({ product, orderId }: PropsType) => {
  const pathname = usePathname();
  const ongoingAndDelivered = "/customer/order";
  return (
    <div className="flex w-full gap-4 border border-gray-200 p-4 rounded-md">
      {/* IMAGE */}
      <div className="relative h-28 w-28 sm:w-36 sm:h-36 bg-gray-300">
        <Image
          src={product.img}
          alt=""
          fill
          className="object-cover h-full w-full"
        />
      </div>

      {/* DETAILS */}
      <div className="flex w-full flex-col justify-between gap-y-2">
        <div className="flex justify-between">
          <div className="flex gap-[1px] flex-col ">
            <p className="text-xs text-gray-500">Order {orderId}</p>

            <h4 className="text-xs sm:text-base line-clamp-2">
              {product.name}
            </h4>
            <p className="text-sm sm:text-base font-semibold">
              # {product.price.toLocaleString()}
            </p>
          </div>

          <Link
            href={`/customer/order/detail/${orderId}`}
            className="text-xs sm:text-sm brand-color text-nowrap"
          >
            See Details
          </Link>
        </div>

        <div>
          {pathname === ongoingAndDelivered ? (
            <div>
              <p
                className={`text-[10px]  p-[3px] w-max text-white uppercase ${
                  product.status === "delivered"
                    ? "bg-lime-500"
                    : product.status === "processing"
                    ? "bg-orange-400"
                    : "bg-cyan-700"
                }`}
              >
                {product.status}
              </p>

              {product.status === "delivered" && (
                <p className="text-gray-600 font-medium text-xs sm:text-base">
                  ON 28-08-2024
                </p>
              )}
            </div>
          ) : (
            <div>
              <p className="text-[10px]  p-[3px] w-max text-white uppercase bg-gray-400 font-medium">
                Cancelled
              </p>

              <p className="text-gray-600 font-medium text-xs sm:text-base">
                ON 28-08-2024
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersProductCard;
