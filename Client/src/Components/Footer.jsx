import React from 'react';
import { FaPinterest } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import '../Styles/globals.css';

const Footer = () => {
  return (
    <>
      <div className="bg-cyan-800 h-96">
        <div className="z-30 p-5 rounded-xl shadow-xl flex flex-row w-auto relative  h-[20rem] mx-[2rem] justify-around bg-cyan-800">
          <div className="basis-[35] w-full h-full flex flex-col mr-[4rem]">
            <p className="flex items-center">
              <span className="text-[2.5rem] font-semibold whitespace-nowrap text-white font-[Lobster]  tracking-[2px]">
                TravelPro
              </span>
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2 mx-1 font-bold">
              Welcome To Sri Lanka
            </p>
          </div>
          <div className="basis-[15] w-full h-full mt-4">
            <p className="flex items-center">
              <span className="text-[1rem] font-semibold whitespace-nowrap text-white  tracking-[2px]">
                QUICK LINKS
              </span>
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              About
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              Blog
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              Contact
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              FAQ
            </p>
          </div>
          <div className="basis-[15] w-full h-full mt-4">
            <p className="flex items-center">
              <span className="text-[1rem] font-semibold whitespace-nowrap text-white  tracking-[2px]">
                ACCOUNT
              </span>
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              My Account
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              Orders Tracking
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              Checkout
            </p>
            <p className="text-[#40a6da] tracking-[1.5px] text-[0.8rem] mb-4 mt-2">
              Wishlist
            </p>
          </div>
          <div className="basis-[35] w-full h-full flex flex-col mr-[4rem] leading-[4rem]">
            <p className="flex items-center">
              <span className="text-[1rem] font-semibold whitespace-nowrap text-white  tracking-[2px]">
                NEWSLETTER
              </span>
            </p>
            <div className="relative mb-8">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[20rem] text-left"
                placeholder="Email"
                required=""
              />
              <button
                type="submit"
                className=" w-28 h-9 text-white absolute bottom-2 end-2 bg-[#2bc0e6] hover:bg-[#09deff] font-medium rounded-[20rem] text-sm dark:bg-[#00FFFF] dark:focus:ring-[#00FFFF]"
              >
                Subscribe
              </button>
            </div>
            <div className="flex flex-row justify-between">
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaFacebookF />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaTwitter />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaYoutube />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <AiFillInstagram />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaPinterest />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[75%] bg-[#000] h-[1px] items-center justify-center block m-auto" />
        <p className="text-[#96969f] tracking-[1px] text-[0.8rem] mb-4 mt-2 text-center">
          TravelPro Copyright © 2024 All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
