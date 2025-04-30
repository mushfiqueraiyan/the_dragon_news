import { CircleUser } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <nav className="flex items-center justify-between mb-3">
      <div></div>
      <div className="flex gap-4 text-gray-600 items-center justify-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      {/* Login button section will be dynamic */}
      <div className="login-btn flex items-center gap-2">
        <CircleUser size={35} />
        <button className="btn bg-gray-900 rounded-none text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Menu;
