import BackButton from "@/components/BackButton";
import Link from "next/link";
import React from "react";

const Card = ({
  value,
  placeholder,
}: {
  value: string;
  placeholder: string;
}) => {
  return (
    <div className="py-4 border-b border-gray-200">
      <p className="text-sm sm:text-base text-gray-500 capitalize">
        {placeholder}
      </p>
      <h4 className="font-medium mt-1">{value}</h4>
    </div>
  );
};

const ProfileDetailsPage = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 pb-4">
      <div>
        <BackButton />
      </div>
      <h4 className="text-xl font-bold mt-8 text-center">Profile Details</h4>

      <div className="flex flex-col gap-2">
        <Card placeholder="first name" value="Solomon" />
        <Card placeholder="middle name" value="" />
        <Card placeholder="last name" value="Moses" />
        <Card placeholder="email" value="msdosdarapper@gmail.com" />
        <Card placeholder="gender" value="M" />
        <Card placeholder="birth date" value="1982-06-24" />
        <Card placeholder="phone number" value="+234 7063433942" />
      </div>

      <Link
        href={"/customer/account-settings/edit-profile"}
        className="brand-color w-full text-center mt-8 inline-block font-medium"
      >
        Edit Profile
      </Link>
    </div>
  );
};

export default ProfileDetailsPage;
