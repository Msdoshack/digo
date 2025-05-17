"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type PropsType = {
  productLength: number;
  limit?: number;
};

const Pagination = ({ productLength, limit = 30 }: PropsType) => {
  const [page, setPage] = useState(1);
  // const limit = 30;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const totalPages = Math.ceil(productLength / limit);

  const handleNext = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set("p", nextPage.toString());
      router.replace(`${pathname}?${params}`);
    }
  };

  const handlePrev = () => {
    const prevPage = page - 1;
    if (prevPage >= 1) {
      const params = new URLSearchParams(searchParams);
      params.set("p", prevPage.toString());
      router.replace(`${pathname}?${params}`);
    }
  };

  const disablePrev = page <= 1;
  const disableNext = page >= totalPages;

  // ✅ Sync page state with searchParams
  useEffect(() => {
    const currentPage = Number(searchParams.get("p")) || 1;
    setPage(currentPage);
  }, [searchParams]);

  return (
    <div className="w-full flex items-center justify-between mt-16">
      <Button
        disabled={disablePrev}
        onClick={handlePrev}
        variant={"outline"}
        className="brand-color"
      >
        Prev
      </Button>
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>
      <Button
        disabled={disableNext}
        onClick={handleNext}
        variant={"outline"}
        className="brand-color"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
