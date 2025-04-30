import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div>
        <img src={logo} alt="" />
      </div>
      <p className="mt-4 my-3 text-gray-600">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[1.1rem] font-[500] text-gray-500">
        {format(new Date(), "EEE, MMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Navbar;
