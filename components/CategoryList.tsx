import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "@/constants";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll hide-scrollbar">
      <div className="flex gap-4 md:gap-8">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
