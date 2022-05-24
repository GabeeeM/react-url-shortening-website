import React from "react";

function Boost() {
  return (
    <div className="bg-boost bg-[#3a3053] h-[20rem] bg-no-repeat bg-cover flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-[1.6rem] 2xl:text-[4rem]">
          <strong>Boost your links today</strong>
        </h1>

        <a href="#">
          <div className="bg-[#23d4ce] hover:bg-[#98e3e0] pt-[1rem] pb-[1rem] pr-[1.3rem] pl-[1.3rem] rounded-full w-[14rem] 2xl:w-[15rem] mt-[2rem] text-center 2xl:text-[2rem] text-white text-[1.2rem]">
            Get Started
          </div>
        </a>
      </div>
    </div>
  );
}

export default Boost;
