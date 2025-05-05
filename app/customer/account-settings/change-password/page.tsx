import BackButton from "@/components/BackButton";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <h4 className="text-xl font-bold mt-8 text-center">Edit Phone Number</h4>
      <div className="w-full flex justify-center">
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default page;
