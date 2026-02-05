// profile
import React, { useState } from "react";

import imgbg from "../assets/profile/imgbg.png";
import imgprofile from "../assets/profile/imgprofile.png";

import img from "../assets/profile/img.png";
import img1 from "../assets/profile/img1.png";
import img2 from "../assets/profile/img2.png";
import img3 from "../assets/profile/img3.png";
import img4 from "../assets/profile/img4.png";
import img5 from "../assets/profile/img5.png";
import img6 from "../assets/profile/img6.png";
import img7 from "../assets/profile/img7.png";
import img8 from "../assets/profile/img8.png";

const items = [
  { title: "Distant Galaxy", img },
  { title: "Life On Edena", img: img1 },
  { title: "AstroFiction", img: img2 },
  { title: "CryptoCity", img: img3 },
  { title: "Colorful Dog 0524", img: img4 },
  { title: "Space Tales", img: img5 },
  { title: "Cherry Blossom Girl 037", img: img6 },
  { title: "Dancing Robots 0987", img: img7 },
  { title: "IceCream Ape", img: img8 }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Created");

  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white">
      <div className="h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] w-full">
        <img src={imgbg} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 -mt-14 relative z-10">

        <img
          src={imgprofile}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl"
          alt=""
        />

        <div className="flex flex-col md:flex-row md:items-center mt-6 gap-4 md:gap-6">

          <h1 className="work-sans-regular1 text-2xl sm:text-3xl md:text-4xl lg:text-[51px] font-semibold">
            Animakid
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:ml-auto">
            <button className="bg-[#A259FF] px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium">
              0xc0E...B79C
            </button>
            <button className="border border-[#A259FF] px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium">
              Follow
            </button>
          </div>
        </div>
        <div className="space-mono-regular flex flex-wrap gap-6 md:gap-12 mt-6 text-sm sm:text-lg">
          <div>
            <p className="font-bold">250k+</p>
            <p className="text-gray-400">Volume</p>
          </div>
          <div>
            <p className="font-bold">50+</p>
            <p className="text-gray-400">NFTs Sold</p>
          </div>
          <div>
            <p className="font-bold">3000+</p>
            <p className="text-gray-400">Followers</p>
          </div>
        </div>
        <div className="space-mono-regular mt-6 max-w-xl">
          <p className="text-gray-400 text-sm sm:text-lg">Bio</p>
          <p className="mt-2 text-sm sm:text-base">
            The Internet's Friendliest Designer Kid.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-[#3B3B3B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center gap-4 sm:gap-6 md:gap-12 py-4 text-xs sm:text-sm md:text-sm flex-wrap">
          {["Created", "Owned", "Collection"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 sm:pb-4 ${
                activeTab === tab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400"
              }`}
            >
              {tab}
              <span className="ml-1 sm:ml-2 bg-[#3B3B3B] px-1 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-xs">
                {tab === "Created" ? "302" : tab === "Owned" ? "67" : "4"}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#3B3B3B] py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-[#2B2B2B] rounded-2xl overflow-hidden">
              <img
                src={item.img}
                className="w-full h-[180px] sm:h-[200px] md:h-[260px] lg:h-[300px] object-cover"
                alt=""
              />

              <div className="p-4 sm:p-5">
                <h3 className="work-sans-regular1 font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-gray-400">
                  <img
                    src={imgprofile}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                    alt=""
                  />
                  Animakid
                </div>

                <div className="space-mono-regular flex justify-between mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm">
                  <div>
                    <p className="text-gray-400">Price</p>
                    <p className="text-white">1.63 ETH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">Highest Bid</p>
                    <p className="text-white">0.33 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
