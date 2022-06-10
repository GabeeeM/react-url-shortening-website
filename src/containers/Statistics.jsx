import React from "react";
import brandRecog from "../images/icon-brand-recognition.svg";
import deRec from "../images/icon-detailed-records.svg";
import fuCu from "../images/icon-fully-customizable.svg";

function Statistics() {
  return (
    <div className="bg-[#f0f1f6]">
      <div className="pt-[12rem] flex flex-col justify-center items-center">
        <div className="flex flex-col w-[31rem] max-w-fit">
          <h1 className="text-[3rem] text-center">
            <strong>Advanced Statistics</strong>
          </h1>
          <p className="mt-[2rem] text-center text-[#9c9ba1] mb-[5rem]">
            Track how your links are performing across the web with our advanced
            dashboard
          </p>
        </div>
        <div className="flex flex-col 2xl:flex-row items-center mb-[7rem]">
          <div className="bg-white w-[25rem] pl-[3rem] pr-[3rem] pb-[3rem] flex flex-col items-center 2xl:items-start 2xl:-translate-y-[3rem]">
            <div className="bg-[#3a3053] p-[1.5rem] w-[6rem] rounded-full -translate-y-[3rem] max-w-fit">
              <img src={brandRecog} alt="" srcset="" className="w-[10rem]" />
            </div>
            <h1 className="text-[1.5rem] mb-[1.5rem] text-center 2xl:text-left">
              <strong>Brand Recognition</strong>
            </h1>
            <p className="text-center 2xl:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </p>
          </div>
          <div className="w-[0.5rem] h-[5rem] 2xl:w-[2rem] 2xl:h-[0.5rem] bg-[#2ad2d2]" />
          <div className="bg-white w-[25rem] pl-[3rem] pr-[3rem] pb-[3rem] flex flex-col items-center 2xl:items-start">
            <div className="bg-[#3a3053] p-[1.5rem] w-[6rem] rounded-full -translate-y-[3rem]">
              <img src={deRec} alt="" srcset="" className="w-[10rem]" />
            </div>
            <h1 className="text-[1.5rem] mb-[1.5rem] text-center 2xl:text-left">
              <strong>Detailed Records</strong>
            </h1>
            <p className="text-center 2xl:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="w-[0.5rem] h-[5rem] 2xl:w-[2rem] 2xl:h-[0.5rem] bg-[#2ad2d2]" />
          <div className="bg-white w-[25rem] pl-[3rem] pr-[3rem] pb-[3rem] flex flex-col items-center 2xl:items-start 2xl:translate-y-[3rem]">
            <div className="bg-[#3a3053] p-[1.5rem] w-[6rem] rounded-full -translate-y-[3rem]">
              <img src={fuCu} alt="" srcset="" className="w-[10rem]" />
            </div>
            <h1 className="text-[1.5rem] mb-[1.5rem] text-center 2xl:text-left">
              <strong>Fully Customizable</strong>
            </h1>
            <p className="text-center 2xl:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
