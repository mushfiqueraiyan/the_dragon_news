import React from "react";
import { Outlet } from "react-router";
import Menu from "../components/Menu";

const AuthProvider = () => {
  return (
    <div className="bg-gray-100">
      <header className="py-5 max-w-screen-2xl mx-auto">
        <Menu />
      </header>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthProvider;
