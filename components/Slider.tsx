"use client";
import { slides } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-92px)] lg:h-[60vh] overflow-hidden relative">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col lg:flex-row`}
          >
            {/* Text Container */}
            <div className="h-1/2  lg:w-1/2 flex flex-col items-center lg:h-full justify-center gap-8 2xl:gap-12">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-center">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <Button className="brand-bg">Shop Now</Button>
              </Link>
            </div>

            {/* Image Container */}
            <div className="relative lg:h-full h-1/2 lg:w-1/2">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute m-auto left-1/2 bottom-8 flex items-center gap-4">
        {slides.map((item, i) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              currentSlide === i ? "scale-150" : ""
            } `}
            key={item.id}
            onClick={() => setCurrentSlide(i)}
          >
            {currentSlide === i && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
