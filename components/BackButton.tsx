"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = ({
  header,
  showBorder,
}: {
  header?: string;
  showBorder?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex items-center gap-2  ${
        showBorder && "py-2 border-b border-b-gray-200 "
      }`}
      onClick={() => router.back()}
    >
      <div className="p-2 cursor-pointer">
        <ChevronLeft />
      </div>
      <h4 className="font-medium text-lg capitalize"> {header}</h4>
    </div>
  );
};

export default BackButton;
