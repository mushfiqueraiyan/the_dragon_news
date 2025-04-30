import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const LeftLayout = () => {
  const categories = use(categoryPromise);
  return (
    <div className="px-3">
      <h1 className="font-bold">All Categories</h1>
      <div className="grid grid-cols-1 mt-3 gap-2">
        {categories.map((category) => {
          return (
            <NavLink
              key={category.div}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending.."
                  : isActive
                  ? "bg-gray-100 p-3"
                  : "hover:bg-gray-100 p-3"
              }
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftLayout;
