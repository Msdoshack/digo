"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import NavModal from "./modals/NavModal";
import { AnimatePresence } from "motion/react";

const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        {open ? <X className="text-red-500" size={28} /> : <Menu size={20} />}
      </div>

      <AnimatePresence>
        <NavModal onClose={onClose} isOpen={open} />
      </AnimatePresence>
    </div>
  );
};

export default MobileNavMenu;
