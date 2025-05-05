"use client";

import Image from "next/image";
import React, { useState } from "react";

type PropsType = {
  product: ProductCardType;
};

const ProductImages = ({ product }: PropsType) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] lg:h-[500px] lg:w-[500px]  relative bg-gray-300">
          <Image
            src={product?.imgs[currentIdx]}
            alt=""
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-6 bg-gray-100">
        {product?.imgs.map((img, i) => (
          <div
            key={i}
            className={`relative h-20 w-20 cursor-pointer bg-gray-300  ${
              currentIdx === i && "ring-4 ring-blue-200 rounded-lg"
            }`}
            onClick={() => setCurrentIdx(i)}
          >
            <Image
              src={img}
              alt=""
              sizes="30vw"
              fill
              key={i}
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
