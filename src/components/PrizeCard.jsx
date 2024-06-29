import React from "react";
import single from "../images/single.png";
import double from "../images/double.png";
import triple from "../images/triple.png";

const Data = [
  {
    url: single,
    heading: "Web Development",
    price: "$149",
    title1: "Lorem Ipsum is simply",
    title2: "Lorem Ipsum is simple dummy text of the printing",
    title3: "Lorem Ipsum is simple dumm.",
  },
  {
    url: double,
    heading: "App Development",
    price: "$180",
    title1: "Lorem Ipsum is simply",
    title2: "Lorem Ipsum is simple dummy text of the printing",
    title3: "Lorem Ipsum is simple dumm.",
  },
  {
    url: triple,
    heading: "Digital Marketing",
    price: "$190",
    title1: "Lorem Ipsum is simply",
    title2: "Lorem Ipsum is simple dummy text of the printing",
    title3: "Lorem Ipsum is simple dumm.",
  },
  {
    url: double,
    heading: "BlockChain Developer",
    price: "$210",
    title1: "Lorem Ipsum is simply",
    title2: "Lorem Ipsum is simple dummy text of the printing",
    title3: "Lorem Ipsum is simple dumm.",
  },
];

const PrizeCard = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 my-[50px] px-5">
      {Data.map((item, key) => {
        return (
          <div
            key={key}
            className="px-4 py-[50px] mt-8 relative text-center bg-gray-100 shadow-2xl rounded-lg hover:scale-105 transition duration-500"
          >
            <img
              src={item.url}
              alt=""
              className="w-[50px] mx-auto absolute top-[-20px] left-[40%]"
            />
            <h2 className="pt-4 text-2xl font-bold mb-2">{item.heading}</h2>
            <h1 className="mb-2 text-3xl font-bold">{item.price}</h1>
            <p className="mb-2 text-[18px]">{item.title1}</p>
            <p className="mb-2 text-[18px]">{item.title2}</p>
            <p className="mb-4 text-[18px]">{item.title3}</p>
            <button className="px-8 py-2 text-white font-semibold bg-[#19969ffe] ">
              Start Trial
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PrizeCard;
