import BackButton from "@/components/BackButton";
import ChangEmailForm from "@/components/ChangEmailForm";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <BackButton />
      </div>
      <h4 className="text-xl font-bold mt-8 text-center">change email</h4>

      <div className="w-full flex justify-center">
        <ChangEmailForm />
      </div>
    </div>
  );
};

export default page;
