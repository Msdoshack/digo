import HistoryComponent from "@/components/HistoryComponent";
import LoadingComponent from "@/components/LoadingComponent";

import { Suspense } from "react";

const HistoryPage = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <HistoryComponent />
    </Suspense>
  );
};

export default HistoryPage;
