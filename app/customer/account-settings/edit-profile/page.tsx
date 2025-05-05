import BackButton from "@/components/BackButton";
import EditProfileForm from "@/components/EditProfileForm";

import React from "react";

const EditProfilePage = () => {
  return (
    <div className="px-2">
      <div>
        <BackButton />
      </div>
      <h4 className="text-xl font-bold mt-8 text-center">Edit Profile</h4>

      <EditProfileForm />
    </div>
  );
};

export default EditProfilePage;
