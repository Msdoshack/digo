"use client";
import HistoryProductCard from "@/components/HistoryProductCard";
import Pagination from "@/components/Pagination";
import { useUserStore } from "@/store/user";
import { useSearchParams } from "next/navigation";

const HistoryComponent = () => {
  const { history } = useUserStore((state) => state);

  const searchParams = useSearchParams();

  const page = searchParams.get("p") ?? 1;

  const itemsPerPage = 10;

  const startIndex = (Number(page) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = history.slice(startIndex, endIndex);

  return history.length > 0 ? (
    <div>
      <h4 className="p-2 font-medium sm:text-lg border-b border-gray-200">
        Recently Viewed ({history.length})
      </h4>

      <div className="flex flex-col gap-8 mt-5">
        {paginatedData.map((item) => (
          <HistoryProductCard product={item} key={item.id} />
        ))}
      </div>

      <Pagination productLength={history.length} limit={10} />
    </div>
  ) : (
    <div className="h-[100vh-80px] flex items-center justify-center">
      No History
    </div>
  );
};

export default HistoryComponent;
