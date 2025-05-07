"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";

import { useRouter } from "next/navigation";

const ProfileIcon = () => {
  const [openProfile, setOpenProfile] = useState(false);

  const profileModalRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleNav = () => {
    router.push("/customer/account");
    setOpenProfile(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(e.target as Node)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
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
        <div
          ref={profileModalRef}
          className="absolute flex flex-col items-center gap-2 right-0 p-2 border rounded-lg mt-2 z-20 bg-white cursor-pointer"
        >
          <div onClick={handleNav} className="text-sm">
            Account
          </div>

          <Button size={"sm"} variant={"outline"} className="border-0 text-sm">
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
