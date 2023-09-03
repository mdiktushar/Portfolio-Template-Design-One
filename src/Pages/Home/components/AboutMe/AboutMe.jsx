import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center m-16 md:m-18 lg:m-24 gap-20">
      <img src="./img/AboutMe.jpg" width={`600px`} alt="" />
      <div className="max-w-3xl">
        <p className="font-bold mb-2">About</p>
        <h3 className="font-bold text-5xl mb-3">About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque.
          <br />
          <br />
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
          eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
          risus r.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
