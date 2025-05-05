import OrdersNav from "@/components/OrdersNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <OrdersNav />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
