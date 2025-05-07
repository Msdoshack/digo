"use client";
import HistoryProductCard from "@/components/HistoryProductCard";
import { useUserStore } from "@/store/user";

const HistoryPage = () => {
  const { history } = useUserStore((state) => state);
  return (
    <div>
      <h4 className="p-2 font-medium sm:text-lg border-b border-gray-200">
        Recently Viewed ({history.length})
      </h4>
      {history.length > 0 ? (
        <div className="flex flex-col gap-8 mt-5">
          {history.map((item) => (
            <HistoryProductCard product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="h-[100vh-80px] flex items-center justify-center">
          No History
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
