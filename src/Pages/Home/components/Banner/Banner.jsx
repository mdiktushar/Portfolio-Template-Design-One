import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between bg-[#F5FCFF] p-20">
      <div className="max-w-[500px] banner-text">
        <p className="text-sm leading-8">
          <strong>Hey, I am John</strong>
        </p>
        <h1 className="text-4xl font-bold leading-20 my-2">
          I create <span className="primary-color">product design</span><br />and brand experience
        </h1>
        <p className="text-sm leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <button className="btn text-xs bg-primary text-white hover:bg-[#7b6db3] max-w-[150px] my-3">Get in Touch</button>
      </div>
      <div>
        <img
          className="bg-[#F5FCFF]"
          src="./img/person1.png"
          width={`500px`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
