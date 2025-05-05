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

const AccountPage = () => {
  return (
    <div>
      <h1 className="text-lg font-medium p-3 border-b">Account Overview</h1>

      <div className="flex  flex-wrap w-full gap-4">
        <Card title="Account Details">
          <h4 className="text-gray-700">Fullname: Solomon Moses</h4>
          <p className="text-gray-500 text-sm">
            Email: msdosdarapper@gmail.com
          </p>
          <p className="text-gray-500 text-sm">Phone: +2347063433942</p>
          <p className="text-gray-500 text-sm">Gender: Male</p>
        </Card>
        <Card title="Address book">
          <h4 className="text-gray-700">Your default shipping address:</h4>
          <p className="text-gray-500 text-sm">
            Moses Solomon Ijebu ode... makelewo, back of cele church The
            celestial church after de-sky comfort hotel Ijebu Ode Folagbade,
            Ogun +234 8025437724
          </p>
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

export default AccountPage;
