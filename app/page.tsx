import BrandList from "@/components/BrandList";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { productsData } from "@/constants";
import Link from "next/link";

const featuredProduct = productsData.slice(10, 20);

const newArrival = productsData.slice(60, 70);

const topRated = [...productsData]
  .sort((a, b) => {
    const avgA =
      a.rating.reduce((sum, rate) => sum + rate, 0) / a.rating.length || 0;
    const avgB =
      b.rating.reduce((sum, rate) => sum + rate, 0) / b.rating.length || 0;

    return avgB - avgA; // descending
  })
  .slice(0, 10);

export default function Home() {
  return (
    <div className="bg-gray-100 pb-16  ">
      <Slider />
      <div className="mt-24 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-6">
        <div className="flex justify-between mb-5 bg-white p-1 ">
          <h1 className="sm:text-lg rounded-md font-medium">
            Featured Products
          </h1>

          <Link href={"/products?p=featured"} className="text-sm brand-color">
            View all
          </Link>
        </div>
        <ProductList products={featuredProduct} />
      </div>

      <div className="mt-24 px-2 bg-white py-1">
        <div className="flex items-center justify-between">
          <h1 className="sm:text-lg px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-6 mb-4 font-medium">
            Categories
          </h1>

          <Link href={"/category"} className="text-sm pr-1.5 brand-color">
            View all
          </Link>
        </div>

        <CategoryList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-6">
        <div className="flex justify-between mb-5 bg-white p-1 ">
          <h1 className="sm:text-lg rounded-md font-medium">New Products</h1>

          <Link href={"/products?s=desc"} className="text-sm brand-color">
            View all
          </Link>
        </div>
        <ProductList products={newArrival} />
      </div>

      <div className="mt-24 px-2 bg-white py-1">
        <div className="flex items-center justify-between mb-4">
          <h1 className="sm:text-lg px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-6 font-medium">
            Top Brands
          </h1>

          <Link href={"/brand"} className="text-sm pr-1.5 brand-color">
            View all
          </Link>
        </div>

        <BrandList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-6">
        <div className="flex justify-between mb-5 bg-white p-1 ">
          <h1 className="sm:text-lg rounded-md font-medium">
            Top Rated Products
          </h1>

          <Link href={"/products?s=desc"} className="text-sm brand-color">
            View all
          </Link>
        </div>
        <ProductList products={topRated} />
      </div>
    </div>
  );
}
