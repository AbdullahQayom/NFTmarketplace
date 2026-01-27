import React from "react";
import img from "../assets/Signup/img.png";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <main className="min-h-screen bg-[#2B2B2B] text-white flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full">
        <div className="overflow-hidden -ml-2 sm:-ml-4 md:-ml-12 lg:-ml-20">
          <img
            src={img}
            alt="Signup Visual"
            className="w-full"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-8 sm:space-y-10">
          <div>
            <h2 className="work-sans-regular1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Create Account
            </h2>
            <p className="work-sans-regular1 text-white text-sm sm:text-[14px] md:text-[16px] leading-relaxed">
              Welcome! Enter Your Details And Start
              <br />
              Creating, Collecting And Selling NFTs.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-white px-12 py-3 sm:py-4 rounded-full text-black"
              />
            </div>
            <div className="relative w-full max-w-sm sm:max-w-md">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white px-12 py-3 sm:py-4 rounded-full text-black"
              />
            </div>
            <div className="relative w-full max-w-sm sm:max-w-md">
              <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white px-12 py-3 sm:py-4 rounded-full text-black"
              />
            </div>
            <div className="relative w-full max-w-sm sm:max-w-md">
              <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-white px-12 py-3 sm:py-4 rounded-full text-black"
              />
            </div>
            <button className="w-full max-w-sm sm:max-w-md bg-[#A259FF] py-3 sm:py-4 rounded-full font-semibold text-lg transition duration-200">
              Create account
            </button>

          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
