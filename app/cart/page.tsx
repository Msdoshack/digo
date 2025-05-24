"use client";
import CartCard from "@/components/CartCard";
import OtherProductCard from "@/components/OtherProductCard";
import RecentlyViewedProduct from "@/components/RecentlyViewedProduct";
import { productsData } from "@/constants";
import { useCartStore } from "@/store/userCart";
import Link from "next/link";

const product = productsData.slice(0, 5);

const CartPage = () => {
  const { subTotal, cart, totalItems } = useCartStore((state) => state);
  return (
    <div className="bg-gray-100 w-full py-4">
      {cart.length > 0 ? (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
          {/* CART */}
          <div className="flex flex-col lg:flex-row py-4 gap-5">
            {/* CART PRODUCTS*/}
            <div className="w-full lg:w-3/4">
              <div className="flex flex-col gap-2 bg-white">
                <h3 className="font-medium text-lg px-4">
                  Cart ({totalItems})
                </h3>
                {cart.map((product) => (
                  <CartCard product={product} key={product.id} />
                ))}
              </div>
            </div>

            {/* CART SUMMARY */}
            <div className="w-full lg:w-1/4 flex flex-col gap-2 p-2 bg-white rounded-md h-max   lg:sticky top-[96px]">
              <h3 className="font-medium"> Cart Summary</h3>

              <div className="h-[2px] bg-gray-100" />
              <p className="flex items-center justify-between gap-8">
                <span>Subtotal</span>
                <span className="font-semibold text-lg">
                  # {subTotal.toLocaleString()}
                </span>
              </p>

              <p className="text-xs text-gray-500">
                Delivery fees not included yet
              </p>

              <Link
                href="/checkout/addresses"
                className="brand-bg font-semibold py-2 px-4 rounded-md w-max text-white hover:opacity-85 text-xs sm:text-sm text-center"
              >
                Proceed (# {subTotal.toLocaleString()})
              </Link>
            </div>
          </div>

          {/* WISHLIST */}
          <div className="bg-white p-2 my-5">
            <div className="w-full flex items-center justify-between px-4 mb-8 pb-1 border-b border-gray-200">
              <h1 className="font-medium text-lg ">Wish List</h1>

              <Link href={"/customer/wishlist"} className="brand-color text-sm">
                View all
              </Link>
            </div>
            <div className="flex overflow-x-scroll gap-5 mb-4 hide-scrollbar">
              {product.map((product) => (
                <OtherProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>

          {/* RECENTLY VIEWED */}
          <RecentlyViewedProduct />
        </div>
      ) : (
        <div className="w-full h-[50vh] flex items-center justify-center bg-white">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default CartPage;
