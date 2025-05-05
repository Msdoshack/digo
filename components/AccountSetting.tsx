"use client";
import {
  ChevronDown,
  ChevronRight,
  Lock,
  LucideProps,
  User2,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Card = ({ name, href = "#" }: { name: string; href?: string }) => {
  return name === "Delete Account" ? (
    <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-100 hover:bg-gray-50">
      <Button
        variant={"link"}
        className="text-red-500 font-medium cursor-pointer no-underline!"
      >
        {name}
      </Button>
    </div>
  ) : (
    <Link
      href={href!}
      className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-100 hover:bg-gray-50"
    >
      {name}
    </Link>
  );
};

const CardWrapper = ({
  children,
  title,
  Icon,
}: {
  children: React.ReactNode;
  title: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) => {
  const [collaspe, setCollapse] = useState(true);
  return (
    <div className="mt-2 flex flex-col gap-4 border border-gray-200 p-3 rounded-md">
      <div
        className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-100 hover:bg-gray-50"
        onClick={() => setCollapse((prev) => !prev)}
      >
        <div className="flex items-center gap-5">
          <Icon className="bg-black text-white rounded-full" />
          <p className="font-medium">{title}</p>
        </div>

        <div className="cursor-pointer">
          {collaspe ? (
            <ChevronRight color="#f33c7a" />
          ) : (
            <ChevronDown color="#f33c7a" />
          )}
        </div>
      </div>

      {!collaspe && <div className="flex flex-col gap-4">{children}</div>}
    </div>
  );
};

const AccountSetting = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <CardWrapper title="Profile Details" Icon={User2}>
        <Card
          name="Basic Details"
          href="/customer/account-settings/profile-details"
        />
        <Card
          name="Edit Phone Number"
          href="/customer/account-settings/edit-phone"
        />
      </CardWrapper>

      <CardWrapper title="Security Settings" Icon={Lock}>
        <Card
          name="Change Password"
          href="/customer/account-settings/change-password"
        />
        <Card
          name="Change Email"
          href="/customer/account-settings/change-email"
        />
        <Card name="Delete Account" />
      </CardWrapper>
    </div>
  );
};

export default AccountSetting;
