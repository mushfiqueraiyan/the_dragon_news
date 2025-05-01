import { CircleUser } from "lucide-react";
import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/UserProvider";

const Menu = () => {
  const { user, logout, setUser } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log("Error is: ", error);
      });
  };

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
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <p>
              Hello! <span className="font-bold">{user.displayName}</span>
            </p>
          </div>
        ) : (
          <CircleUser size={35} />
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-gray-900  text-white"
          >
            Logout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn bg-gray-900  text-white">
            Login/Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Menu;
