"use client";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

type PropsType = {
  product: ProductCardType;
};

const AddToHistoryComp = ({ product }: PropsType) => {
  const { addHistory } = useUserStore((state) => state);

  useEffect(() => {
    addHistory(product);
  }, []);
  return null;
};

export default AddToHistoryComp;
