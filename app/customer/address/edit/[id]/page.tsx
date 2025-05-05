"use client";
import BackButton from "@/components/BackButton";
import EditAddressForm from "@/components/EditAddressForm";
import { useAddressStore } from "@/store/userAddress";
import { useParams } from "next/navigation";

import React from "react";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// { params }: PageProps

const EditAddressPage = () => {
  const { address } = useAddressStore((state) => state);

  const { id } = useParams();

  // const { id } = params;

  const foundAddress = address.find((item) => item.id === id);

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-md p-2">
        <div className="flex items-center mb-8 -ms-5">
          <BackButton />
          <h3 className="p-2  texx-lg font-medium">Edit Address</h3>
        </div>

        <EditAddressForm address={foundAddress!} />
      </div>
    </div>
  );
};

export default EditAddressPage;
