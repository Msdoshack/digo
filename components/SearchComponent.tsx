"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchComponent = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const search = formData.get("search");

    if (search) {
      router.push(`/products?s=${search}`);
    }
  };
  return (
    <div className="w-full h-full">
      <form className="relative px-4 md:px-24 lg:px-0" onSubmit={handleSearch}>
        <Input
          placeholder="Search for products"
          name="search"
          className="text-sm md:text-base"
        />
        <Button
          size={"sm"}
          className="absolute right-4 md:right-24 lg:right-0 top-0 bottom-0 border-0 z-10"
          variant={"outline"}
          type="submit"
        >
          <Search />
        </Button>
      </form>
    </div>
  );
};

export default SearchComponent;
