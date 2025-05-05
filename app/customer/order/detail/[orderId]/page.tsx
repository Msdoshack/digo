import { Button } from "@/components/ui/button";
import { orders } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Card = ({ order }: { order: OrderedProductType }) => {
  return (
    <div className="py-5 px-2 border border-gray-200 rounded-md mt-5">
      <div className="flex gap-4 justify-between ">
        <div>
          <p className="text-xs sm:text-sm uppercase p-[2px] text-gray-700">
            Cancelled - payment Unsuccessfull
          </p>
          <p className="text-sm  mb-5">On Monday, 28-04</p>
        </div>

        <div>
          <Button className="brand-bg" size={"sm"}>
            Buy Again
          </Button>
        </div>
      </div>
      <div className="flex gap-4 mb-5">
        <div className="relative h-24 w-24 sm:w-28 sm:h-28">
          <Image src={order.img!} alt="" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-between text-sm sm:text-base">
          <p className="line-clamp-2">{order.name}</p>
          <p>QTY: {order?.qty}</p>
          <p className="flex gap-3 font-medium">
            # {order?.price.toLocaleString()}
            {order?.oldPrice && (
              <span className="text-sm line-through">
                # {order.oldPrice.toLocaleString()}
              </span>
            )}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Product no longer eligible for return.
        <Link href={"/return-policy"} className="text-blue-600">
          {" "}
          Access our Return Policy.
        </Link>
      </p>
    </div>
  );
};

type Params = Promise<{ orderId: string }>;

export default async function Page({ params }: { params: Params }) {
  const { orderId } = await params;

  const order: UserOrderType = orders.find(
    (item) => item.id.toString() === orderId
  )!;

  const totalOrder = order?.products.reduce(
    (prev, item) => prev + item.price,
    0
  );

  return (
    <div>
      <div>
        {/* Order No */}
        <h4 className="font-medium">Order No - {order?.id}</h4>

        <div className="text-sm text-gray-500 py-5 border-b border-gray-200">
          <p className="text-sm text-gray-500">
            {order?.products.length} items
          </p>
          <p>Placed on 28-04-2025</p>
          <p>Total: # {totalOrder.toLocaleString()}</p>
        </div>

        <div>
          <h5 className="uppercase p-2 text-sm">Items in your order</h5>

          {order.products.map((item) => (
            <Card order={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="flex gap-3 w-full mt-5">
        <div className=" w-1/2 border pb-8 border-gray-200 rounded-md">
          <div className="border-b border-gray-200">
            <h4 className="uppercase text-sm px-3 py-2">Payment Information</h4>
          </div>

          <div className="flex flex-col gap-5 mt-5 px-2">
            <div className="">
              <h4 className="font-medium text-gray-700"> Payment Method</h4>
              <p className="text-sm text-gray-500">
                Pay with Cards, Bank Transfer or USSD
              </p>
            </div>

            <div className="text-gray-500 text-sm flex flex-col gap-1 ">
              <h4 className="font-medium text-base text-gray-700">
                Payment Details
              </h4>
              <p className="text-sm text-gray-500">
                Items total: #{" "}
                {order.paymentDetails.itemsTotal.toLocaleString()}
              </p>

              <p>
                Delivery Fees: #{" "}
                {order.paymentDetails.deliveryFees.toLocaleString()}
              </p>

              <p className="text-gray-600 font-medium">
                Total: # {order.paymentDetails.total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className=" w-1/2 border border-gray-200 rounded-md pb-8">
          <div className="border-b border-gray-200">
            <h4 className="uppercase text-sm px-3 py-2">
              Delivery Information
            </h4>
          </div>

          <div className="mt-6 flex flex-col gap-5 px-2">
            <div>
              <h4 className="font-medium text-gray-700">Delivery Method</h4>
              <p className="text-gray-500 text-sm">Home Address</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">Address</h4>
              <p className="text-gray-500 text-sm">{order.address}</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">Phone No.</h4>
              <p className="text-gray-500 text-sm">
                {order.phoneNo.map((no) => no + " , ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link href={"/help"} className="block w-full mt-8 bg-color text-center">
        Need help?
      </Link>
    </div>
  );
}

// export default page;
