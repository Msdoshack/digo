"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ScrollToTopOnQueryChange = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchParams.toString()]); // rerun on any query param change

  return null;
};

export default ScrollToTopOnQueryChange;
