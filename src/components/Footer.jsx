import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2699fb] overflow-x-hidden">
      <div className="max-w-[1240px] md:grid  md:grid-cols-2 xl:grid-cols-4 mx-auto justify-between p-6">
        <div className="mt-3">
          <h1 className="text-3xl font-bold mb-2">WsCube Tech.</h1>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            itaque iure voluptate adipisci;
          </p>
          <div className="flex gap-5">
            <BsFacebook className="text-2xl cursor-pointer hover:text-green-300 transition duration-300" />
            <BsInstagram className="text-2xl cursor-pointer hover:text-green-300 transition duration-300" />
            <BsTwitter className="text-2xl cursor-pointer hover:text-green-300 transition duration-300" />
            <BsLinkedin className="text-2xl cursor-pointer hover:text-green-300 transition duration-300" />
          </div>
        </div>
        <div className="mt-5">
          <ul>
            <li>
              <h1 className="text-2xl font-bold">Soluations</h1>
            </li>
            <li className="mt-2 text-white">Analytics</li>
            <li className="mt-2 text-white">Marketing</li>
            <li className="mt-2 text-white">Commerce</li>
            <li className="mt-2 text-white">Insights</li>
          </ul>
        </div>
        <div className="mt-5">
          <ul>
            <li>
              <h1 className="text-2xl font-bold">Support</h1>
            </li>
            <li className="mt-2 text-white">Pricing</li>
            <li className="mt-2 text-white">Documentation</li>
            <li className="mt-2 text-white">Guide</li>
            <li className="mt-2 text-white">Api Status</li>
          </ul>
        </div>
        <div>
          <ul className="mt-5">
            <li>
              <h1 className="text-2xl font-bold">Company</h1>
            </li>
            <li className="mt-2 text-white ">About</li>
            <li className="mt-2 text-white ">Blog</li>
            <li className="mt-2 text-white ">Jobs</li>
            <li className="mt-2 text-white ">Press</li>
            <li className="mt-2 text-white ">Careers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
