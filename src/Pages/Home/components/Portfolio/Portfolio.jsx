import React from "react";
import Project from "./Project/Project";

const Portfolio = () => {
  return (
    <div className="m-16 md:m-18 lg:m-24">
      <div className="flex justify-between items-center mb-20 ">
        <div>
          <p className="font-bold mb-2">Recent Projects</p>
          <h3 className="font-bold text-5xl">My Portfolio</h3>
        </div>
        <button className="btn bg-[#E62872] text-white text-xs normal-case hover:bg-[#ad3f69]">
          <img src="./img/Vector.png" width={`15px`} alt="" />
          Visit My Dribbble
        </button>
      </div>

      <Project />
    </div>
  );
};

export default Portfolio;
