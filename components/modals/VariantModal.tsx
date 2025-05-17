"use client";
import { Heart, Minus, Plus, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

type PropsType = {
  product: ProductCardType;
  onClose: () => void;
  addFn: (product: CartProductType) => void;
  isCart?: boolean;
};

const VariantModal = ({
  product,
  onClose,
  addFn,
  isCart = false,
}: PropsType) => {
  const [idx, setIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product.variants && product.variants[idx].color
  );
  const [selectedSize, setSelectedSize] = useState(
    product.variants && product.variants[0].size
  );

  //   only return sizes that are not null
  const validSizes = product.variants?.filter((size) => size.size !== null);

  //   only return colors that are not null
  const validColors = product.variants?.filter((size) => size.color !== null);

  //   the total numbers of products left
  const unitLeft = product.unitLeft;

  //   increase no of qty
  const increase = () => {
    if (qty < unitLeft) {
      setQty((prev) => prev + 1);
    }
  };

  //   decrease no of qty
  const decrease = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  // handle click on color
  const handleColorClick = (i: number, color: string) => {
    setIdx(i);
    setSelectedColor(color);
  };

  // handle click on size
  const handleSizeClick = (i: number, size: string) => {
    setIdx(i);
    setSelectedSize(size);
  };

  //   Add the product to cart
  const handleAddToCartClick = () => {
    addFn({
      name: product.name,
      brand: product.brand,
      id: product.id,
      img: product.imgs[0],
      isAvailable: product.isAvailable,
      price: product.price,
      oldPrice: product.oldPrice,
      qty: qty,
      unitLeft: product.unitLeft,
      variant: {
        size: selectedSize ?? null,
        color: selectedColor ?? null,
      },
    });

    onClose();
  };

  return (
    <div className="fixed h-screen w-full top-0 left-0 overflow-hidden z-50 bg-[#00000099] flex items-center justify-center px-5">
      <div className="bg-white p-5 w-sm rounded-md">
        <div className="flex items-center justify-between mb-5">
          <h4 className="font-medium text-lg text-gray-700">
            Please select a variation
          </h4>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* SIZES OPTIONS */}
        {validSizes && validSizes.length > 0 && (
          <div className="mb-5">
            <h5 className="text-gray-600 mb-3 font-medium">Choose Size:</h5>

            <div className="flex gap-3 flex-wrap ">
              {validSizes.map((item, i) => (
                <button
                  onClick={() => handleSizeClick(i, item.color!)}
                  key={i}
                  className={` text-pink-500 rounded-md py-1 px-2 text-sm cursor-pointer ${
                    idx === i ? "ring-2 ring-[#f33c7a]" : "ring-1 ring-gray-200"
                  }`}
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* COLORS OPTIONS */}
        {validColors && validColors?.length > 0 && (
          <div className="my-8">
            <h5 className=" text-gray-600 font-medium mb-3">Choose Color:</h5>

            <ul className="flex items-center gap-6">
              {validColors.map((item, i) =>
                item.isAvailable ? (
                  <li
                    key={item.color}
                    className="h-8 w-8 ring-1 ring-gray-300 cursor-pointer rounded-full relative"
                    onClick={() => handleColorClick(i, item.color!)}
                    style={{ backgroundColor: item.color! }}
                  >
                    {idx === i && (
                      <div className="absolute w-10 h-10 rounded-full ring-2 ring-blue-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                  </li>
                ) : (
                  item.color && (
                    <li
                      key={item.color}
                      className="h-8 w-8 ring-1 ring-gray-300 cursor-not-allowed rounded-full relative"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="absolute w-10 h-[3px] rounded-full bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                    </li>
                  )
                )
              )}
            </ul>
          </div>
        )}

        {/* QUANTITY OPTIONS */}
        <div>
          <h4 className="font-medium mb-3 text-gray-600">Choose Quantity</h4>
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
        </div>

        {/* Add Button */}
        <Button className="brand-bg w-full mt-8" onClick={handleAddToCartClick}>
          {isCart ? <ShoppingCart /> : <Heart />}
          {isCart ? "Add to cart" : " Add to wishlist"}
        </Button>
      </div>
    </div>
  );
};

export default VariantModal;
