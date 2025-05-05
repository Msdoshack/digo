import Link from "next/link";
import React from "react";
import MobileNavMenu from "./MobileNavMenu";
import { navItems, productsData } from "@/constants";
import SearchComponent from "./SearchComponent";
import NavRight from "./NavRight";
import CartButton from "./CartButton";
import ProfileIcon from "./ProfileIcon";

const cartProducts = productsData.slice(0, 5);

const Navbar = () => {
  return (
    <div className="py-2 h-max lg:h-20 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64 sticky top-0 z-30 bg-white flex items-center justify-center w-full shadow-2xl">
      {/* Mobile */}
      <div className="w-full  md:hidden">
        <div className="w-full flex items-center justify-between relative gap-4 mb-2">
          <div className="flex items-center gap-4">
            <MobileNavMenu />

            <Link href={"/"}>
              <div className="text-xl tracking-wide font-bold">DIGO</div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ProfileIcon />
            <CartButton cartProducts={cartProducts} />
          </div>
        </div>
        <div className="w-full">
          <SearchComponent />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="w-full hidden md:block">
        <div className="w-full flex items-center gap-8 justify-between ">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide font-bold">DIGO</div>
          </Link>

          <div className="hidden lg:block w-full">
            <SearchComponent />
          </div>

          {/* Left */}
          <div className=" flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="hover:border-b border-black text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right */}
          <NavRight cartProducts={cartProducts} />
        </div>
        <div className="lg:hidden mt-2">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
