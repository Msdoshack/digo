"use client";
import React, { useState } from "react";
import RemoveFromCartModal from "./modals/RemoveFromCartModal";
import { LucideProps } from "lucide-react";

type PropsType = {
  product: WishlistType;
  className?: string;
  Icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const RemoveFromCartBtn = ({ product, className, Icon }: PropsType) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className={`flex items-center gap-2 brand-color no-underline text-sm  ${className}`}
      >
        {Icon && <Icon size={15} />}remove
      </button>

      {openModal && (
        <RemoveFromCartModal
          product={product}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default RemoveFromCartBtn;
