import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { calculateDisCount } from "@/util";
import { Trash } from "lucide-react";
type PropsType = {
  product: CartProductType;
};
const ExcudedCartCard = ({ product }: PropsType) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-2 lg:justify-between px-1 text-gray-400">
        <div className="flex gap-2">
          <div className="relative h-20 w-20 opacity-40 bg-gray-300">
            <Image src={product.img} alt="" className="object-cover" fill />
          </div>

          <div className="flex flex-col">
            <h4 className="font-medium max-w-sm ">{product.name}</h4>
            <p className="flex items-center gap-1">
              <span className="text-gray-500 text-sm">Brand:</span>{" "}
              {product.brand}
            </p>
            <p className=" text-xs">
              {product.isAvailable ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="font-semibold"># {product.price.toLocaleString()}</h4>
          {product.oldPrice && (
            <div className="flex items-center gap-4">
              <span className=" line-through text-sm">
                #{product.oldPrice.toLocaleString()}
              </span>
              <span className="text-xs">
                -{calculateDisCount(product.oldPrice, product.price)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <Button
          variant={"link"}
          className="flex items-center gap-4 brand-color px-1! hover:no-underline"
        >
          <Trash /> Remove
        </Button>
        <Button className="bg-gray-400 text-white">Sold Out</Button>
      </div>
    </div>
  );
};

export default ExcudedCartCard;
