import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

const NewsLetterPage = () => {
  return (
    <div>
      <div className="flex">
        <BackButton />

        <h4 className="p-3  border-b border-gray-200 font-medium text-lg">
          Newsletter Preferences
        </h4>
      </div>

      <div className="mt-6">
        <h4 className="text-gray-700 font-medium">Define your preference</h4>

        <RadioGroup
          defaultValue="address-one"
          className="flex flex-col px-3 mt-5"
        >
          <div className="flex items-center space-x-2 rounded-md">
            <RadioGroupItem
              value="address-one"
              id="address-one"
              defaultChecked
            />
            <Label htmlFor="address-one" className="text-base text-gray-700">
              I want to receive daily newsletters
            </Label>
          </div>

          <div className="flex items-center space-x-2   rounded-md">
            <RadioGroupItem value="address-two" id="address-two" />
            <Label htmlFor="address-two" className="text-base text-gray-700">
              I don&apos;t want to receive daily newsletters
            </Label>
          </div>
        </RadioGroup>

        <div className="flex items-center space-x-2 mt-10 mb-10">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to Digo Privacy and Cookie Policy. You can unsubscribe from
            newsletters at any time.
            <span className="brand-color"> I accept the Legal Terms</span>
          </label>
        </div>
        <Button className="w-full brand-bg">Save</Button>
      </div>
    </div>
  );
};

export default NewsLetterPage;
