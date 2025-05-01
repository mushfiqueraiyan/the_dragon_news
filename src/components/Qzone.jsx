import React from "react";
import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png";
import classImg from "../assets/class.png";

const Qzone = () => {
  return (
    <div>
      <div className="p-4 max-w-md mx-auto bg-gray-100 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>

        {/* Card 1 */}
        <div className="bg-white rounded-md shadow overflow-hidden mb-4">
          <img src={swimming} alt="Swimming" className="w-full  " />
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-md shadow overflow-hidden mb-4">
          <img src={classImg} alt="Class" className="w-full  " />
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-md shadow overflow-hidden">
          <img src={playground} alt="Play" className="w-full  " />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
