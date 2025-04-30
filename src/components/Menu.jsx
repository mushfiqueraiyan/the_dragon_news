import { CircleUser } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <nav className="flex items-center justify-between mb-3">
      <div></div>
      <div className="flex gap-8 text-gray-600 items-center justify-center">
        <NavLink
          className={({ isPending, isActive }) =>
            isPending ? "pending..." : isActive ? "underline" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isPending, isActive }) =>
            isPending ? "pending..." : isActive ? "underline" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isPending, isActive }) =>
            isPending ? "pending..." : isActive ? "underline" : ""
          }
          to={"/career"}
        >
          Career
        </NavLink>
      </div>
      {/* Login button section will be dynamic */}
      <div className="login-btn flex items-center gap-2">
        <CircleUser size={35} />
        <button className="btn bg-gray-900  text-white">Login/Register</button>
      </div>
    </nav>
  );
};

export default Menu;
