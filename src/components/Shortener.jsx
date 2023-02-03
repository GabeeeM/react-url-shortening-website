import axios from "axios";
import React from "react";
import backgroundImg from "../images/bg-shorten-desktop.svg";
import { useState } from "react";

function Shortener() {
  const style = {
    backgroundImage: "url(" + backgroundImg + ")",
  };

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUrl();
    setInput("");
    console.log("fetching url");
  };

  const fetchUrl = async () => {
    console.log("trying");
    let temp = `https://api.shrtco.de/v2/shorten?url=${input}`;
    try {
      let res = await axios(temp);
      setList((prevList) => [
        ...prevList,
        {
          ogLink: input,
          shortLink: res.data.result.full_short_link,
          key: Math.random() * 5000,
        },
      ]);
    } catch (err) {
      // Handle the error if required
    }
};

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex justify-center mt-[6rem] bg-[#f0f1f6]">
      <div className="flex flex-col justify-center items-center -translate-y-[3rem]">
        <div
          className="w-[95%] 2xl:w-[80rem] bg-no-repeat bg-cover flex flex-col 2xl:flex-row justify-center p-[2rem] bg-[#3a3053] rounded-lg mb-[2rem]"
          style={style}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="url"
              value={input}
              placeholder="Shorten a link here..."
              onChange={(input) => setInput(input.target.value)}
              required
              className="h-[2rem] p-[1.5rem] rounded-lg 2xl:basis-3/5 w-full 2xl:w-[60rem]"
            />
            <button
              type="submit"
              name="submit"
              className="bg-[#23d4ce] hover:bg-[#98e3e0] pt-[0.7rem] mt-[1rem] 2xl:mt-0 2xl:ml-[2rem] pb-[0.7rem] pr-[1.3rem] w-full 2xl:w-[8rem] pl-[1.3rem] rounded-lg text-white 2xl:basis-2/5"
            >
              Shorten it!
            </button>
          </form>
        </div>
        <ul className="">
          {list.map((x) => (
            <li key={x.key} className="mb-[1rem]">
              <div className="flex flex-col 2xl:flex-row gap-[1rem] items-center bg-white rounded-md w-[95%] 2xl:w-[80rem] p-[2rem]">
                <p className="2xl:basis-7/12">{x.ogLink}</p>
                <p className="w-full 2xl:basis-4/12 2xl:text-right text-[#23d4ce]">
                  {x.shortLink}
                </p>
                <button
                  className="bg-[#23d4ce] hover:bg-[#98e3e0] active:bg-slate-900 text-white rounded-md p-[0.3rem] 2xl:basis-1/12 w-[95%]"
                  onClick={() => copyText(x.shortLink)}
                >
                  Copy
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shortener;
