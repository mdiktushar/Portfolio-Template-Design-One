import React, { useEffect, useState } from "react";
import Expertise from "./Expertise/Expertise";

const Expertises = () => {
  const [expertises, setExpertises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Effect to fetch data from the JSON file when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`./data/Expertise.json`);
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const data = await response.json();
        setExpertises(data); // Update the state with fetched data
        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
        setIsLoading(false);
      }
    };
    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  // console.log(expertises);
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
    <div className="m-24">
      <p>My Skills</p>
      <h2>My Expertise</h2>
      <div className="flex gap-5">
        {expertises.map((expertise, index) => (
          <Expertise key={index} expertise={expertise} />
        ))}
      </div>
    </div>
  );
};

export default Expertises;
