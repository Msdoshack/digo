import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-8 pb-24 bg-gray-100 text-sm mt-24 ">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide font-semibold">DIGO</div>
          </Link>
          <p>69 WInding way, Centralk plaza , ikeja Lagos</p>
          <span className="font-semibold">digo@gmail.com</span>
          <span className="font-semibold">+2347063433942</span>
          <div className="flex gap-6">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>

        {/* Center */}
        <div className="w-full md:w-1/2 flex lg:flex justify-between gap-5 text-xs sm:text-sm">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg mb-1">
              COMPANY
            </h1>
            <div className="flex flex-col gap-6">
              <Link href={"/about"}>About Us</Link>
              <Link href={"/legal"}>Legal</Link>

              <Link href={"/legal"}>Legal</Link>

              <Link href={"/t&c"}>Terms And Condition</Link>
              <Link href={"/contact-us"}>Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg mb-1">
              SHOP
            </h1>
            <div className="flex flex-col gap-6">
              <Link href={"/products"}>All Products</Link>

              <Link href={"/products?c=reconmended"}>Reconmended</Link>

              <Link href={"/products?s=desc"}>New Arrivals</Link>

              <Link href={"/products?c=bestSelling"}>Best Selling</Link>

              <Link href={"/products?c=hotDeal"}>Hot Deals</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-sm sm:text-base lg:text-lg mb-1">
              HELP
            </h1>
            <div className="flex flex-col gap-6">
              <Link href={"/cs"}>Customer Service</Link>

              <Link href={"/account"}>Account</Link>

              <Link href={"/store"}>Our Store</Link>

              <Link href={"/policy"}>Refund Policy</Link>

              <Link href={"/products?c=hotDeal"}>Legal & Privacy</Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="uppercase font-medium text-sm sm:text-base lg:text-lg">
            Subscribe
          </h1>

          <p className="text-xs sm:text-sm">
            Be the first to get the latest news about trends, promotions, and
            much more
          </p>
          <div className="flex">
            <Input
              placeholder="Email Address"
              className="w-3/4! text-sm sm:text-base"
            />

            <Button size={"sm"} className="w-max rounded-l-none">
              Subscribe
            </Button>
          </div>

          <span className="text-sm sm:text-base font-semibold">
            Secure Payments
          </span>

          <div className="flex justify-between">
            <Image src={"/discover.png"} alt="" width={40} height={20} />
            <Image src={"/mastercard.png"} alt="" width={40} height={20} />
            <Image src={"/visa.png"} alt="" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-xs sm:text-sm md:text-base">
        <div className=" ">
          @ {new Date().getFullYear()}{" "}
          <span className="font-medium text-sm sm:text-base">DIGO Shop</span>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4 ">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>

          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">Naira</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
