"use client";
import React from "react";
import { Bell } from "lucide-react";
import Link from "next/link";
import ProfileIcon from "./ProfileIcon";

import CartButton from "./CartButton";

type PropsType = {
  cartProducts: ProductCardType[];
};
const NavRight = ({ cartProducts }: PropsType) => {
  return (
    <div className="flex gap-5 items-center relative">
      <Link href={"/notification"}>
        <Bell size={20} />
      </Link>

      <ProfileIcon />

      <CartButton cartProducts={cartProducts} />
    </div>
  );
};

export default NavRight;
