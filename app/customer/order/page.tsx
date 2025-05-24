"use client";
import OrdersProductCard from "@/components/OrdersProductCard";
import { useOrdersStore } from "@/store/userOrder";
import React from "react";

const OrdersPage = () => {
  const { orders } = useOrdersStore();

  return (
    <>
      {orders.length ? (
        <div className="flex flex-col gap-5 mt-6">
          {orders.map((item) =>
            item.products.map((order) => (
              <OrdersProductCard
                product={order}
                orderId={item.id}
                key={order.id}
              />
            ))
          )}
        </div>
      ) : (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center w-full">
          No order made yet
        </div>
      )}
    </>
  );
};

export default OrdersPage;
