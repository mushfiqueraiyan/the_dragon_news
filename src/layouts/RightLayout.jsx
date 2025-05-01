import React, { use } from "react";
import SocialLogin from "../components/SocialLogin";
import FindUs from "../components/FindUs";
import Qzone from "../components/Qzone";
import { AuthContext } from "../providers/UserProvider";

const RightLayout = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      {user ? (
        ""
      ) : (
        <div>
          <SocialLogin />
        </div>
      )}
      <div className="mt-8">
        <FindUs />
      </div>
      <div className="mt-8">
        <Qzone />
      </div>
    </div>
  );
};

export default RightLayout;
