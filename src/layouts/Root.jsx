import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import LatestNews from "../components/LatestNews";
import Menu from "../components/Menu";
import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <header>
        <Navbar />
        <section>
          <LatestNews />
        </section>
        <nav>
          <Menu />
        </nav>
      </header>

      <main className="grid grid-cols-12 mt-15">
        <section className="left-container col-span-3">
          <LeftContainer />
        </section>
        <section className="content-container col-span-6">
          <Outlet />
        </section>
        <section className="right-container col-span-3">
          <RightContainer />
        </section>
      </main>
    </div>
  );
};

export default Root;
