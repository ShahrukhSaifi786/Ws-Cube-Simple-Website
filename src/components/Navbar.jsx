import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4 sticky top-0 z-[1000]">
      <div className="max-w-[1240px] flex items-center py-[10px] justify-between mx-auto">
        <h1 className="text-3xl font-bold">WsCube Tech.</h1>
        {state ? (
          <AiOutlineClose
            onClick={() => setState(!state)}
            className="text-3xl md:hidden text-white"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setState(!state)}
            className="text-3xl md:hidden text-white"
          />
        )}
        <ul className="md:flex hidden  gap-6 text-white text-[17px] ">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul
          className={`duration-500 text-[17px] bg-black text-white w-full h-screen md:hidden fixed left-[-100%] top-[86px] ${
            state ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
