import React from "react";
import { AirplaneInFlight } from "@phosphor-icons/react";
import a from "../assets/creator/avatar1.png";
import b from "../assets/creator/avatar2.png";
import c from "../assets/creator/avatar3.png";
import d from "../assets/creator/avatar4.png";
import e from "../assets/creator/avatar5.png";
import f from "../assets/creator/avatar6.png";
import g from "../assets/creator/avatar7.png";
import h from "../assets/creator/avatar8.png";
import i from "../assets/creator/avatar9.png";
import j from "../assets/creator/avatar10.png";
import k from "../assets/creator/avatar11.png";
import l from "../assets/creator/avatar12.png";

const topCreators = [
  { id: 1, name: "Keepitreal", sales: "34.53 ETH", img: a },
  { id: 2, name: "DigiLab", sales: "34.53 ETH", img: b },
  { id: 3, name: "GravityOne", sales: "34.53 ETH", img: c },
  { id: 4, name: "Juanie", sales: "34.53 ETH", img: d },
  { id: 5, name: "BlueWhale", sales: "34.53 ETH", img: e },
  { id: 6, name: "Mr Fox", sales: "34.53 ETH", img: f },
  { id: 7, name: "Shroomie", sales: "34.53 ETH", img: g },
  { id: 8, name: "Robotica", sales: "34.53 ETH", img: h },
  { id: 9, name: "RustyRobot", sales: "34.53 ETH", img: i },
  { id: 10, name: "Animakid", sales: "34.53 ETH", img: j },
  { id: 11, name: "Dotgu", sales: "34.53 ETH", img: k },
  { id: 12, name: "Ghiblier", sales: "34.53 ETH", img: l },
];

const TopCreators = () => {
  return (
    <section className="top-creators py-8 bg-[#2B2B2B] text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold work-sans-regular1">
            Top Creators
          </h2>
          <p className="text-white text-sm md:text-base lg:text-lg work-sans-regular1 mt-1">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
        </div>

        <button className="border border-purple-600 text-white w-full sm:w-auto h-[50px] rounded-2xl bg-transparent flex items-center justify-center gap-2 px-4 py-2 hover:bg-purple-700 hover:text-white transition">
          <AirplaneInFlight
            size={24}
            weight="bold"
            className="transform -rotate-45 text-purple-600"
          />
          <span className="work-sans-regular1">View Rankings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-12 lg:px-20 justify-center">
        {topCreators.map((creator, index) => (
          <a
            key={creator.id}
            href="#"
            className="relative bg-[#3B3B3B] rounded-xl text-center w-full max-w-[240px] h-[240px] flex flex-col items-center justify-center hover:shadow-lg transition mx-auto"
          >
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#2B2B2B] flex items-center justify-center text-gray-300 font-bold">
              <span className="text-[#858584]">{index + 1}</span>
            </div>

            <div className="w-20 h-20 mb-2 rounded-full overflow-hidden">
              <img
                src={creator.img}
                alt={creator.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold mb-1 work-sans-regular1">{creator.name}</p>
            <p className="text-[#858584] text-sm space-mono-regular">
              Total Sales: <span className="text-white">{creator.sales}</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopCreators;
