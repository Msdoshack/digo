"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import Link from "next/link";

const ProfileIcon = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="relative ">
      <Button
        className="cursor-pointer"
        size={"sm"}
        variant={"outline"}
        onClick={() => setOpenProfile((prev) => !prev)}
      >
        <User />
      </Button>

      {openProfile && (
        <div className="absolute flex flex-col items-center gap-2 right-0 p-2 border rounded-lg mt-2 z-20 bg-white">
          <Link href={"/customer/account"} className="text-sm">
            Account
          </Link>

          <Button size={"sm"} variant={"outline"} className="border-0 text-sm">
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
