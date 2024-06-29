import React from "react";
import laptop from "../images/laptop.jpg";
const Banner = () => {
  return (
    <div className="max-w-[1240px] p-4 mx-auto md:grid grid-cols-2 mb-5">
      <div className="md:w-[70%] ">
        <img src={laptop} alt="Laptop Images" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-bold text-[#00df9a] text-[20px] mb-2">LEARN FROM EXPERTS</p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
          reprehenderit perspiciatis hic pariatur blanditiis veniam est saepe.
          Laboriosam, placeat nobis officiis explicabo facilis rerum eius
          maiores dolores accusantium, reprehenderit maxime.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-lg md:w-[50%] lg:w-[30%] w-[50%]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
