"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { categories, placements } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

const Filter = () => {
  const [category, setCategory] = useState("all");

  const router = useRouter();
  const searchParams = useSearchParams();

  const pathName = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleCategoryChange = (value: string) => {
    const c = value.toLowerCase();

    setCategory(c);

    params.set("c", c);
    router.replace(`${pathName}?${params}`);
  };

  const handleClearFilter = () => {
    router.replace(pathName);
  };

  useEffect(() => {
    const category = params.get("c");

    if (category) {
      setCategory(category);
    }
  }, []);

  return (
    <div className="mt-12 flex lg:justify-between bg-white -mx-4 p-4 rounded-md">
      <div className="flex gap-2 sm:gap-4 md:gap-6 gap-y-4 flex-wrap ">
        {/* CATEGORY */}
        <Select
          name="category"
          value={category}
          onValueChange={(e) => handleCategoryChange(e)}
        >
          <SelectTrigger className="w-[100px] sm:w-[120px] text-xs! sm:text-sm!">
            <SelectValue placeholder="Category" className="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {categories.map((item) => (
              <SelectItem key={item.id} value={item.name.toLowerCase()}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* MIN PRICE */}
        <Input
          placeholder="Min price"
          className="w-[100px] sm:w-[120px] text-xs! sm:text-sm"
        />

        {/* MAX PRICE */}
        <Input
          placeholder="Max price"
          className="w-[100px] sm:w-[120px] text-xs! sm:text-sm"
        />

        {/* PLACEMENT  */}
        <Select name="placements">
          <SelectTrigger className="w-[100px] sm:w-[120px] text-xs! sm:text-sm">
            <SelectValue placeholder="Placements" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {placements.map((item) => (
              <SelectItem key={item.id} value={item.name.toLowerCase()}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleClearFilter}
          className="text-[12px]! bg-white brand-color
          ring-1 ring-[#f33c7a] hover:bg-[#f33c7a] hover:text-white!"
          size={"sm"}
        >
          Clear filter
        </Button>
      </div>

      <div>
        <Select name="type">
          <SelectTrigger className="w-[100px] sm:w-[120px] text-xs! sm:text-sm">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="priceAsc">Price (low to high)</SelectItem>
            <SelectItem value="priceDesc">Price (high to low)</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="desc">Newest</SelectItem>
            <SelectItem value="asc">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
