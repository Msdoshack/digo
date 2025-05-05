import OrdersProductCard from "@/components/OrdersProductCard";
import { orders } from "@/constants";
import React from "react";

const ClosedOrderPage = () => {
  return (
    <div>
      <>
        {orders.length ? (
          <div className="flex flex-col gap-5 mt-6">
            {orders
              .slice(2)
              .map((item) =>
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
