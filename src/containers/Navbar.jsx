/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Navbar() {
  const bDisplay = {
    display: "none",
  };

  const bStyle = {
    display: "block",
  };

  const [burger, setBurger] = useState(bDisplay);
  const [flag, setFlag] = useState(false);

  const handleBurger = () => {
    console.log("burger is being handled");

    if (flag) {
      setBurger((x) => (x = bStyle));
      setFlag(false);
    } else {
      setBurger((x) => (x = bDisplay));
      setFlag(true);
    }
  };

  return (
    <div className="pl-[5rem] pr-[5rem] pt-[2rem] flex flex-row items-center overflow-hidden">
      <div className="flex flex-row items-center basis-1/2">
        <h1 className="text-[2rem] lg:mr-[5rem]">
          <strong>Shortly</strong>
        </h1>
        <ul className="justify-between hidden lg:block">
          <li className="inline">
            <a href="" className="text-[#9c9ba1] hover:text-black">
              Features
            </a>
          </li>
          <li className="inline ml-[2rem]">
            <a href="" className="text-[#9c9ba1] hover:text-black">
              Pricing
            </a>
          </li>
          <li className="inline ml-[2rem]">
            <a href="" className="text-[#9c9ba1] hover:text-black">
              Resources
            </a>
          </li>
        </ul>
      </div>

      <div className="basis-1/2">
        <div className="hidden lg:block">
          <div className="flex flex-row justify-end gap-[2rem]">
            <a href="" className="p-[0.7rem] text-[#9c9ba1] hover:text-black">
              Login
            </a>
            <a href="">
              <div className="bg-[#23d4ce] hover:bg-[#98e3e0] pt-[0.7rem] pb-[0.7rem] pr-[1.3rem] pl-[1.3rem] rounded-full">
                Sign Up
              </div>
            </a>
          </div>
        </div>
        <div
          className="flex lg:hidden basis justify-end cursor-pointer"
          onClick={() => handleBurger()}
        >
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center w-full ml-[5rem] mr-[5rem] pl-[2rem] pr-[2rem] translate-y-[12rem] absolute -translate-x-[10rem]"
        style={burger}
      >
        <div className="mt-[1rem] p-[1rem] text-center leading-[2.5rem] bg-[#3a3053] cursor-default rounded-xl lg:hidden">
          <ul>
            <li>
              <a href="" className="text-white">
                Features
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Resources
              </a>
            </li>
          </ul>
          <hr className="mt-[1rem] mb-[1rem] divide-slate-600" />
          <a href="" className="text-white">
            Login
          </a>
          <a href="">
            <div className="bg-[#23d4ce] hover:bg-[#98e3e0] pt-[0.4rem] pb-[0.4rem] pr-[1rem] pl-[1rem] mt-[1rem] rounded-full text-white">
              Sign Up
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
