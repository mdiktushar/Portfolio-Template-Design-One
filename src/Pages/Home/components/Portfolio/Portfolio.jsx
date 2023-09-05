import React, { useEffect, useState } from "react";
import Project from "./Project/Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./data/Portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .then(setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

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

      <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4">
        {projects.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
