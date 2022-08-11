/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import hero from "../images/illustration-working.svg";

function Hero() {
  return (
    <div className="flex flex-col-reverse xl:flex-row mt-[4rem] xl:ml-[5rem]">
      <div className="flex flex-col basis-1/2 mt-[5rem] xl:justify-start justify-center xl:items-start items-center">
        <h1 className="text-[3rem] text-center xl:text-left xl:text-[6.5rem] xl:pr-[2rem] leading-tight">
          <strong>More than just shorter links</strong>
        </h1>

        <h2 className="text-center xl:text-left xl:text-[2rem] xl:pr-[2rem] m-[1rem] xl:m-0 text-[#9c9ba1]">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h2>

        <a href="">
          <div className="bg-[#23d4ce] hover:bg-[#98e3e0] pt-[1rem] pb-[1rem] pr-[1.3rem] pl-[1.3rem] rounded-full w-[10rem] xl:w-[15rem] mt-[2rem] text-center xl:text-[2rem] text-white">
            Get Started
          </div>
        </a>
      </div>
      <div className="flex flex-col basis-1/2 ml-[1rem] mr-[1rem] xl:ml-0 xl:mr-0">
        <img src={hero} alt="guy working" srcset="" />
      </div>
    </div>
  );
}

export default Hero;
