import React from "react";
import FeedBack from "./Feedback/FeedBack";

const CustomerTestimonials = ({ feedbacks }) => {
  return (
    <div className="bg-[#F5FCFF] py-1 ">
      <div className="m-16 md:m-18 lg:m-24">
        <p className="text-sm font-bold mb-6">Clients Feedback</p>
        <h3 className="text-5xl font-bold mb-20">Customer testimonials</h3>
        <div className="flex flex-col md:flex-row justify-between justify-items-center gap-2">
          {feedbacks.map((feedback, index) => (
            <FeedBack key={index} data={feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
