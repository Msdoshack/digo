import AddToHistoryComp from "@/components/AddToHistoryComp";
import ProductDetails from "@/components/ProductDetails";
import ProductImages from "@/components/ProductImages";
import ReactRating from "@/components/ReactRating";
import RecentlyViewedProduct from "@/components/RecentlyViewedProduct";
import { productsData } from "@/constants";
import React from "react";

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const product = productsData.find((item) => item.id === slug);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-8">
        {product ? (
          <>
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
              <ProductImages product={product} />
            </div>

            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div>
                <div className="flex justify-between gap-5 w-full items-start">
                  <h1 className="text sm:text-xl lg:text-2xl font-medium">
                    {product.name}
                  </h1>
                </div>
                <p className="my-2 text-gray-600">
                  Brand: <span className="uppercase">{product.brand}</span>
                </p>
                <div className="flex gap-4 items-center">
                  {/* Rating */}
                  <ReactRating rating={product.rating} />

                  <p className="text-blue-700">
                    ( {product.rating.length} verified ratings )
                  </p>
                </div>
              </div>

              <div className="h-[2px] bg-gray-100" />
              <ProductDetails product={product} />
              <div className="h-[2px] bg-gray-100" />

              <div className="text-sm">
                <h4 className="font-medium mb-4 uppercase">Product Info</h4>
                <p className="text-gray-500">{product.desc}</p>
              </div>

              <div className="text-sm">
                <h4 className="font-medium mb-4 uppercase">
                  Return & Refund Policy
                </h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus veniam sint aliquam, praesentium delectus repudiandae
                  explicabo, ullam debitis reiciendis facere suscipit odit. In
                  accusamus labore quas pariatur nisi accusantium inventore.
                </p>
              </div>

              <div className="text-sm">
                <h4 className="font-medium mb-4 uppercase">Shipping Info</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minus veniam sint aliquam, praesentium delectus repudiandae
                  explicabo, ullam debitis reiciendis facere suscipit odit. In
                  accusamus labore quas pariatur nisi accusantium inventore.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="h-[calc(100vh-80px)] flex items-center justify-center">
            Product Not Found
          </div>
        )}
      </div>

      <RecentlyViewedProduct />

      {product && <AddToHistoryComp product={product} />}
    </div>
  );
};

// Product Info
// Return & Refund Policy
// Shipping Info

export default page;
