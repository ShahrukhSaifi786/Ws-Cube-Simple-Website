import React from "react";

const Newslater = () => {
  return (
    <div className="w-full bg-[#2699fb] mb-5 py-5 px-3">
      <div className="max-w-[1240px] mx-auto md:flex justify-between">
        <div className="md:p-3 p-2">
          <h1 className="text-white font-bold md:text-4xl text-[20px] md:mb-2">
            Want to learn latest I.T skills ?
          </h1>
          <p className="text-white">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="p-3">
          <div className="">
            <input
              type="text"
              placeholder="Enter Email"
              className="p-2 outline-none border-none mr-2 rounded-lg mb-3 sm:w-full "
            />
            <button className="px-6 py-2 bg-black text-white rounded-lg mb-2">
              Notify Me
            </button>
          </div>
          <p className="mb-2 text-white">We care about the protection of your data . Read Our</p>
          <button>Privacy Policy</button>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
