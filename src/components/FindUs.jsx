import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold text-[1.2rem]">Find Us On</h1>

      <div className="mt-5">
        <div className="flex items-center gap-3 border-1 border-gray-100 p-3">
          <div className="p-3 rounded-full bg-gray-100">
            <FacebookIcon color="blue" />
          </div>
          <h1>Facebook</h1>
        </div>
        <div className="flex items-center gap-3 border-1 border-gray-100 p-3">
          <div className="p-3 rounded-full bg-gray-100">
            <TwitterIcon color="black" />
          </div>
          <h1>Facebook</h1>
        </div>
        <div className="flex items-center gap-3 border-1 border-gray-100 p-3">
          <div className="p-3 rounded-full bg-gray-100">
            <InstagramIcon color="purple" />
          </div>
          <h1>Facebook</h1>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
