"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight, Power, X } from "lucide-react";
import { categories, customersMenu } from "@/constants";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

type PropsType = {
  onClose: () => void;
  isOpen: boolean;
};

const navVariant = {
  initial: {
    translateX: "-100%",
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    translateX: 0,
    opacity: 1,

    transition: {
      duration: 0.6,
    },
  },
};

const NavModal = ({ onClose, isOpen }: PropsType) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
    onClose();
  };
  return (
    <motion.div
      variants={navVariant}
      initial="initial"
      animate={isOpen ? "animate" : "initial"}
      exit={"exit"}
      className="fixed top-0 left-0 w-full bg-[#00000099] h-screen gap-4 items-center text-white z-50 "
    >
      <div className="w-3/4 h-full  gap-8  bg-white text-black overflow-y-scroll hide-scrollbar pb-8">
        <div className="flex items-center gap-4 p-3 border-b border-gray-200">
          <X
            size={25}
            className="brand-color cursor-pointer"
            onClick={onClose}
          />
          <Link href={"/"} className="text-2xl tracking-wide font-medium">
            DIGO
          </Link>
        </div>

        <>
          <div
            onClick={() => handleClick("/customer/account")}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-xs cursor-pointer flex items-center  justify-between gap-3 uppercase font-medium w-full "
          >
            My Digo Account
            <ChevronRight />
          </div>

          {customersMenu.map((item) => (
            <div
              onClick={() => handleClick(item.link)}
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex items-center gap-3 capitalize"
            >
              <item.icon size={18} /> {item.name}
            </div>
          ))}

          <div
            onClick={() => handleClick("/category")}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-xs cursor-pointer flex items-center  justify-between gap-3 uppercase font-medium w-full  border-t border-gray-200 "
          >
            Products
            <span className="capitalize text-sm brand-color">See all</span>
          </div>

          <div
            onClick={() => handleClick(`/products`)}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex items-center gap-3 capitalize"
          >
            All Products
          </div>

          <div
            onClick={() => handleClick(`/products`)}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex items-center gap-3 capitalize"
          >
            Latest
          </div>
          <div
            onClick={() => handleClick(`/products`)}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex items-center gap-3 capitalize"
          >
            top rated
          </div>

          <div
            onClick={() => handleClick("/category")}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-xs cursor-pointer flex items-center  justify-between gap-3 uppercase font-medium w-full  border-t border-gray-200 "
          >
            Category
            <span className="capitalize text-sm brand-color">See all</span>
          </div>

          {categories.map((item) => (
            <div
              onClick={() => handleClick(`/products?c=${item.name}`)}
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex items-center gap-3 capitalize"
            >
              {item.name}
            </div>
          ))}

          <div
            onClick={() => handleClick(`/help`)}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex items-center gap-3 capitalize border-t border-gray-200"
          >
            help
          </div>

          <div
            onClick={() => handleClick(`/contact-us`)}
            className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer gap-3 capitalize"
          >
            contact us
          </div>

          <div className="px-4 py-2 hover:bg-gray-100 rounded-lg text-sm cursor-pointer flex ">
            <Button variant={"outline"} size={"sm"} className="brand-color">
              <Power /> Logout
            </Button>
          </div>
        </>
      </div>
    </motion.div>
  );
};

export default NavModal;
