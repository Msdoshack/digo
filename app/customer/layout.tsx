import CustomerNavMobile from "@/components/CustomerNavMobile";

import { customersMenu } from "@/constants";
import { Power, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <div className="px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col md:flex-row gap-4 md:py-5">
        <div className="md:w-1/4  md:block bg-white rounded-md p-2 sticky top-[80px] md:top-[96px] h-max">
          <div className="hidden md:flex flex-col gap-1 ">
            <Link
              href={"/customer/account"}
              className="p-3 border-b border-gray-200 flex items-center gap-3 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <User size={20} /> My Account
            </Link>
            {customersMenu.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="p-3 flex items-center gap-3 hover:bg-gray-100 rounded-md text-sm lg:text-base"
              >
                <item.icon size={20} /> {item.name}
              </Link>
            ))}

            <Link
              href={"/customer/address"}
              className="p-3 border-t border-gray-200  hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              Address Book
            </Link>
            <Link
              href={"/customer/account-settings"}
              className="p-3 border-gray-200  hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              Account Settings
            </Link>

            <Link
              href={"/customer/account-settings"}
              className="p-3 border-t border-gray-200  hover:bg-gray-100 rounded-md text flex items-center gap-3 brand-color text-sm pt-8"
            >
              <Power size={18} /> Logout
            </Link>
          </div>

          <div className="md:hidden">
            <CustomerNavMobile />
          </div>
        </div>

        <div className="w-full md:w-3/4 bg-white rounded-md p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
