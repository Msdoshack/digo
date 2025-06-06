"use client";
import { useUserStore } from "@/store/user";
import { useAddressStore } from "@/store/userAddress";
import Link from "next/link";
import React from "react";
const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full sm:w-[45%] border rounded-md border-gray-200 px-3 shrink-0 mt-5">
      <h4 className="uppercase py-3 border-b text-sm text-gray-700 font-medium">
        {title}
      </h4>

      <div className="my-5">{children}</div>
    </div>
  );
};
const AccountComponent = () => {
  const { user } = useUserStore((state) => state);

  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const middleName = user?.middleName || "";
  const phone = user?.phone || "";
  const phone2 = user?.phone2;
  const gender = user?.gender || "";
  const email = user?.email || "";

  const { address } = useAddressStore((state) => state);

  const dAddress = address.find((item) => item.isDefault == true) || address[0];

  return (
    <div>
      <h1 className="text-lg font-medium p-3 border-b">Account Overview</h1>

      <div className="flex  flex-wrap w-full gap-4">
        <Card title="Account Details">
          <h4 className="text-gray-700">
            Fullname:
            {`${firstName} ${middleName} ${lastName}`}
          </h4>
          <p className="text-gray-500 text-sm">Email: {email}</p>
          <p className="text-gray-500 text-sm">Phone: {`${phone}`}</p>
          {phone2 && (
            <p className="text-gray-500 text-sm">
              Additional Phone: {`${phone2}`}
            </p>
          )}

          <p className="text-gray-500 text-sm">Gender: {gender}</p>
        </Card>
        <Card title="Address book">
          {dAddress ? (
            <>
              <h4 className="text-gray-700">Your default shipping address:</h4>
              <p className="text-gray-500 text-sm">{dAddress.address}</p>
            </>
          ) : (
            <p className="text-center text-gray-500">No Address set yet</p>
          )}
        </Card>
        <Card title="News letter">
          <p className="text-sm mb-6">
            Manage your email communications to stay updated with the latest
            news and offers.
          </p>
          <Link href="/customer/newsletter" className="brand-color">
            Edit news letter preference
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default AccountComponent;
