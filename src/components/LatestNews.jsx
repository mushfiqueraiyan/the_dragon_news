import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-gray-200 p-2 mb-5 flex items-center gap-3">
      <button className="btn border-0 rounded-none bg-[#D72050] text-white">
        Latest
      </button>
      <Marquee speed={70} pauseOnHover>
        Match Highlights: Germany vs Spain — as it happened! Match Highlights:
        Germany vs Spain — as it happened!
      </Marquee>
    </div>
  );
};

export default LatestNews;
