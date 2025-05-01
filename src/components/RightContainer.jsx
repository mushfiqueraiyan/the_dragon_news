import React from "react";
import RightLayout from "../layouts/RightLayout";
import bg from "../assets/bg.png";

const RightContainer = () => {
  return (
    <div>
      <RightLayout />
      <img src={bg} className="w-full mt-5" />
    </div>
  );
};

export default RightContainer;
