import LoadingComponent from "@/components/LoadingComponent";
import WishlistComponent from "@/components/WishlistComponent";
import React, { Suspense } from "react";

const WishListPage = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <WishlistComponent />
    </Suspense>
  );
};

export default WishListPage;
