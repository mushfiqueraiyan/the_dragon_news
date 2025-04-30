import React, { Suspense } from "react";
import LeftLayout from "../layouts/LeftLayout";

const LeftContainer = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <LeftLayout />
      </Suspense>
    </div>
  );
};

export default LeftContainer;
