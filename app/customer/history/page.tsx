import WIshlistProductCard from "@/components/WIshlistProductCard";
import { productsData } from "@/constants";
import React from "react";

const data = productsData.slice(10, 15);

const HistoryPage = () => {
  return (
    <div>
      <h4 className="p-2 font-medium sm:text-lg border-b border-gray-200">
        Recently Viewed (32)
      </h4>
      <div className="flex flex-col gap-8 mt-5">
        {data.map((item) => (
          <WIshlistProductCard
            product={{
              id: item.id,
              img: item.imgs[0],
              isAvailable: item.isAvailable,
              name: item.name,
              price: item.price,
              oldPrice: item.oldPrice,
              brand: item.brand,
              qty: 1,
              unitLeft: item.unitLeft,
              variant: {
                color: item.colors[0]?.color,
                size: item.sizes[0]?.size,
              },
            }}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
