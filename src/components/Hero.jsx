import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="bg-[#2699fb] w-full  h-[50vh] flex flex-col justify-center items-center">
      <h3 className="font-bold md:text-3xl text-2xl mb-2">Learn with us</h3>
      <h1 className="font-bold text-white md:text-6xl text-4xl mb-[20px]">
        Grow with us.
      </h1>
      <h2 className="font-bold text-white md:text-4xl text-2xl mb-[19px]">
        Learn
        <Typed
          className="pl-2"
          strings={[
            "Web Devlopment",
            "Digital Marketing",
            "Ethical Hacking",
            "BlockChain Developer",
          ]}
          typeSpeed={120}
          loop={true}
          backSpeed={100}
        />
      </h2>
      <button className="px-8 py-3 text-white bg-transparent border-black border-2 hover:bg-black hover:text-white transition duration-300  rounded-lg">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
