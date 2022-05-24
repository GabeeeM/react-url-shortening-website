import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <div className="bg-[#232027] flex justify-center p-[4rem] gap-[6rem]">
      <div>
        <h1 className="text-[2rem] mr-[5rem] text-white -translate-y-[1rem] w-[15rem]">
          <strong>Shortly</strong>
        </h1>
      </div>

      <div>
        <p className="text-white mb-[1rem]">
          <strong>Features</strong>
        </p>

        <ul>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Link Shortening</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Branded Links</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Analytics</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-white mb-[1rem]">
          <strong>Resources</strong>
        </p>

        <ul>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Blog</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Developers</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Support</a>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-white mb-[1rem]">
          <strong>Company</strong>
        </p>

        <ul>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">About</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Our Team</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Careers</a>
          </li>
          <li className="mb-[0.5rem] text-[#adaab1]">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <img
              src={facebook}
              alt=""
              srcset=""
              className="inline mr-[1rem] cursor-pointer hover:fill-cyan-700"
            />
            <img src={twitter} alt="" srcset="" className="inline mr-[1rem]" />
            <img
              src={pinterest}
              alt=""
              srcset=""
              className="inline mr-[1rem]"
            />
            <img src={instagram} alt="" srcset="" className="inline" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
