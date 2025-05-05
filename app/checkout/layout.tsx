import OrderSummary from "@/components/OrderSummary";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-4 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-5">
        <div className=" w-full lg:w-3/4">{children}</div>
        <div className="w-full lg:w-1/4 bg-white h-max p-2 rounded-md">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Layout;
