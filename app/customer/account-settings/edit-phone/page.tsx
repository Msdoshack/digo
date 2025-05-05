import BackButton from "@/components/BackButton";
import EditPhoneForm from "@/components/EditPhoneForm";
import React from "react";

const EditPhonePage = () => {
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <h4 className="text-xl font-bold mt-8 text-center">Edit Phone Number</h4>

      <EditPhoneForm />
    </div>
  );
};

export default EditPhonePage;
