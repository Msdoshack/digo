"use client";
import OrdersProductCard from "@/components/OrdersProductCard";

import { useOrdersStore } from "@/store/userOrder";
import React from "react";

const ClosedOrderPage = () => {
  const { orders } = useOrdersStore();

  const closedOrder = orders.filter((order) =>
    order.products.some((product) => product.status === "cancelled")
  );

  return (
    <div>
      <>
        {closedOrder.length ? (
          <div className="flex flex-col gap-5 mt-6">
            {closedOrder.map((item) =>
              item.products.map((order) => (
                <OrdersProductCard
                  orderId={item.id}
                  product={order}
                  key={order.id}
                />
              ))
            )}
          </div>
        ) : (
          <div className="h-[calc(100vh-80px)] flex items-center justify-center w-full">
            No cancelled order
          </div>
        )}
      </>
    </div>
  );
};

export default ClosedOrderPage;
