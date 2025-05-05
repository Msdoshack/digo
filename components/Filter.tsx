import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { categories, placements } from "@/constants";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap ">
        <Select name="category">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Category" />
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

        <Select name="placements">
          <SelectTrigger className="w-[120px]">
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

        <Input placeholder="min price" className="w-32" />

        <Input placeholder="max price" className="w-32" />
      </div>

      <div>
        <Select name="type">
          <SelectTrigger className="w-[120px]">
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
