"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { calculateDisCount } from "@/util";
import { useCartStore } from "@/store/userCart";

type PropsType = {
  product: CartProductType;
};

const CartCard = ({ product }: PropsType) => {
  const { removeProduct, updateQty } = useCartStore((state) => state);
  const [qty, setQty] = useState(product.qty);

  const increase = () => {
    if (qty < product.unitLeft) {
      const newQty = qty + 1;
      setQty(newQty);
      updateQty(product.id, newQty);
    }
  };

  const decrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      updateQty(product.id, newQty);
    }
  };
  return (
    <div className="border-t border-gray-200 pt-4 pb-2 px-1">
      <div>
        <Link
          href={`/products/${product.id}`}
          className={`flex flex-col lg:flex-row gap-2 lg:justify-between px-1 ${
            !product.isAvailable && "pointer-events-none opacity-45"
          }`}
        >
          {!product.isAvailable && (
            <div className="mb-2">
              <h4 className="font-medium text-gray-600">Not Included</h4>

              <p className="text-xs text-gray-500">
                (items not included in your cart because it is out of stock)
              </p>
            </div>
          )}
          <div className="flex gap-2">
            <div className="relative w-26 h-26">
              <Image src={product.img} alt="" className="object-cover" fill />
            </div>

            <div className="flex flex-col flex-1">
              <h4 className="font-medium max-w-sm text-sm sm:text-base">
                {product.name}
              </h4>
              <p className="flex items-center gap-1">
                <span className="text-gray-500 text-sm">Brand:</span>
                {product.brand}
              </p>
              <div className="flex items-center  gap-3">
                {product.variant && (
                  <div className="text-xs text-gray-500 flex gap-2 items-center ">
                    {product?.variant?.size && (
                      <p className="flex items-center gap-1">
                        <span>Size</span>
                        <span>{product?.variant.size}</span>
                      </p>
                    )}
                    {product?.variant?.color && (
                      <div className="flex items-center gap-1">
                        <span>Color: </span>
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: product?.variant?.color }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <p className="text-green-500 text-xs">
                {product.isAvailable ? "Available" : "Out of Stock"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-sm sm:text-base">
              # {product.price.toLocaleString()}
            </h4>
            {product.oldPrice && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through text-sm">
                  #{product.oldPrice.toLocaleString()}
                </span>
                <span className="text-xs text-red-500">
                  -{calculateDisCount(product.oldPrice, product.price)}%
                </span>
              </div>
            )}
          </div>
        </Link>

        <div className="mt-1 flex items-center justify-between">
          <Button
            onClick={() => {
              removeProduct(product.id);
            }}
            variant={"link"}
            className="flex items-center gap-4 brand-color px-1! hover:no-underline"
          >
            <Trash /> Remove
          </Button>

          <div
            className={`flex items-center gap-4 pr-1 ${
              !product.isAvailable && "pointer-events-none opacity-45"
            }`}
          >
            <Button
              disabled={qty === 1 || !product.isAvailable}
              onClick={decrease}
              className="brand-bg hover:brand-bg! hover:opacity-85"
              size={"sm"}
            >
              <Minus color="white" />
            </Button>

            <p>{qty}</p>

            <Button
              disabled={qty === product.unitLeft || !product.isAvailable}
              onClick={increase}
              className="brand-bg hover:brand-bg! hover:opacity-85"
              size={"sm"}
            >
              <Plus color="white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
