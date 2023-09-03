import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-2xl rounded-lg">
        <figure>
          <img src="./img/project1.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Shoes!</h2>
          <p className="">If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions mt-5">
            <button className="bg-base-100 capitalize Project-button text-xs font-bold hover:text-[#0a49a7]">
              view in dribbble
              {` `}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ color: "#086814" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
