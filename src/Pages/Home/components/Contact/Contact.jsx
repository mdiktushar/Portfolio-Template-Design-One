import React from "react";

const Contact = () => {
    const messageHandler = (event) => {
        event.preventDefault();

        console.log('Message Sended..!');
    }

  return (
    <div className="text-center my-24">
      <p className="text-xs font-bold mb-4">Get In Touch</p>
      <h2 className="text-5xl font-bold mb-6">Contact me</h2>
      <p className="text-xs mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </p>

      <form onSubmit={messageHandler} className="flex flex-col items-center gap-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">First name</span>
            </label>
            <input
              type="text"
              name="fName"
              className="input input-bordered border-[#0a49a7] w-[300px] lg:w-[400px]"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Last name</span>
            </label>
            <input
              type="text"
              name="lName"
              className="input input-bordered border-[#0a49a7] w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered border-[#0a49a7] w-[300px] lg:w-[400px]"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Phone number</span>
            </label>
            <input
              type="text"
              name="phone"
              className="input input-bordered border-[#0a49a7] w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="form-control">
            <label className="label justify-start">
              <span className="label-text">Choos a topic</span>
            </label>
            <select name="topic" className="select select-bordered border-[#0a49a7] w-[300px] lg:w-[820px]">
              <option defaultValue>
                Pick one....
              </option>
              <option>Topic 1</option>
              <option>Topic 2</option>
              <option>Topic 3</option>
              <option>Topic 4</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 border-[#0a49a7] w-[300px] lg:w-[820px]"
              name="message"
              placeholder="Type your message..."
            ></textarea>
          </div>
        </div>
        <button className="btn bg-primary text-white normal-case hover:bg-[#223a5e]">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
