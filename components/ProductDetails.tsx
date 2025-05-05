"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { calculateDisCount } from "@/util";
import { useCartStore } from "@/store/userCart";
import AddToWishlistBtn from "./AddToWishlistBtn";

type PropsType = {
  product: ProductCardType;
};
const ProductDetails = ({ product }: PropsType) => {
  const [colorIdx, setColorIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors[colorIdx]?.color
  );
  const { addProduct } = useCartStore((state) => state);

  const [sizeIdx, setSizeIdx] = useState(0);

  const [selectedSize, setSelectedize] = useState(
    product.sizes[sizeIdx]?.size || ""
  );

  const [qty, setQty] = useState(1);

  const unitLeft = product.unitLeft;

  const increase = () => {
    if (qty < unitLeft) {
      setQty((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  const handleSizeClick = (size: string, idx: number) => {
    setSelectedize(size);
    setSizeIdx(idx);
  };
  const handleColorClick = (color: string, idx: number) => {
    setSelectedColor(color);
    setColorIdx(idx);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Price */}
      <div>
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-xl">
            # {product.price.toLocaleString()}
          </h3>

          {product.oldPrice && (
            <div className="flex gap-4 items-center">
              <h4 className="text-gray-500 line-through text-sm">
                # {product.oldPrice.toLocaleString()}
              </h4>
              <span className="text-sm text-red-400">
                - {calculateDisCount(product.oldPrice, product.price)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="h-[2px] bg-gray-100" />

      {/* Colors */}
      {!!product.colors.length && (
        <div>
          <h4 className="font-medium mb-3">
            {product.colors.length > 1 ? "Choose a color" : "Color"}
          </h4>
          <ul className="flex items-center gap-6">
            {product.colors?.map((item, i) =>
              item.isAvailable ? (
                <li
                  key={item.color}
                  className="h-8 w-8 ring-1 ring-gray-300 cursor-pointer rounded-full relative"
                  onClick={() => handleColorClick(item.color, i)}
                  style={{ backgroundColor: item.color }}
                >
                  {colorIdx === i && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 ring-blue-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  key={item.color}
                  className="h-8 w-8 ring-1 ring-gray-300 cursor-not-allowed rounded-full relative"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="absolute w-10 h-[3px] rounded-full bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Sizes */}
      {!!product.sizes.length && (
        <div>
          <h4 className="font-medium mb-3">
            {product.sizes.length > 1 ? "Choose a size" : "Size"}
          </h4>

          <ul className="flex items-center gap-3">
            {product.sizes.map((item, i) =>
              item.isAvailable ? (
                <li
                  key={item.size}
                  onClick={() => handleSizeClick(item.size, i)}
                  className={`ring-1 ring-gray-200 text-pink-500 rounded-md py-1 px-4 text-sm cursor-pointer ${
                    selectedSize === item.size && "ring-2 ring-pink-500"
                  }`}
                >
                  {item.size}
                </li>
              ) : (
                <li
                  key={item.size}
                  className={`ring-1 ring-gray-200 text-gray-300 rounded-md py-1 px-4 text-sm cursor-not-allowed `}
                >
                  {item.size}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      <div>
        <h4 className="font-medium mb-3">Choose Quantity</h4>
        <div className="flex items-center justify-between">
          <div className="flex gap-8 items-center">
            <div className="rounded-lg bg-gray-100 flex items-center gap-4 w-max">
              <button
                className="p-2 cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed"
                onClick={decrease}
                disabled={qty <= 1}
              >
                <Minus size={15} />
              </button>

              <span className="p-2">{qty}</span>

              <button
                className="p-2 cursor- disabled:text-gray-300"
                disabled={qty === unitLeft}
              >
                <Plus size={15} onClick={increase} />
              </button>
            </div>
            <div className="max-w-[100px] text-xs sm:text-sm">
              {unitLeft <= 20 && (
                <p>
                  Only <span className="brand-color">{unitLeft}</span> left
                  Dont&apos;t miss it
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5">
            <div className="">
              <AddToWishlistBtn
                product={{
                  id: product.id,
                  name: product.name,
                  img: product.imgs[0],
                  price: product.price,
                  isAvailable: product?.isAvailable,
                  oldPrice: product.oldPrice,
                  brand: product.brand,
                  qty: 1,
                  unitLeft: product.unitLeft,
                  variant: {
                    color: selectedColor,
                    size: selectedSize,
                  },
                }}
              />
            </div>

            <Button
              onClick={() => {
                addProduct({
                  id: product.id,
                  img: product.imgs[0],
                  isAvailable: product.isAvailable,
                  name: product.name,
                  price: product.price,
                  qty: qty,
                  unitLeft: product.unitLeft,
                  brand: product.brand,
                  oldPrice: product?.oldPrice,
                  variant: { color: selectedColor, size: selectedSize },
                });
              }}
              size={"sm"}
              className=" text-xs! font-medium brand-bg"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
