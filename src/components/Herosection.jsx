import React from "react";
import nftImage from "../assets/avatar/img1.png";
import { AirplaneInFlight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import j from "../assets/creator/avatar10.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#2B2B2B] text-white flex items-center px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover <br />
            Digital Art & <br />
            Collect NFTs
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white max-w-lg mx-auto lg:mx-0 work-sans-regular1 font-[22px]">
            NFT Marketplace UI Created With Anima For Figma.
            Collect, Buy And Sell Art From More Than 20k NFT Artists.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center space-x-2 px-6 py-3 bg-purple-500 text-white rounded-[20px]">
              <AirplaneInFlight size={32} weight="bold" className="transform -rotate-45" />
              <span>Get Started</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 pt-8">
            <div>
              <h3 className="text-3xl space-mono-regular text-center lg:text-left">240k+</h3>
              <p className="text-white text-[24px] text-center lg:text-left">Total Sale</p>
            </div>
            <div>
              <h3 className="text-3xl space-mono-regular text-center lg:text-left">100k+</h3>
              <p className="text-white text-[24px] text-center lg:text-left">Auctions</p>
            </div>
            <div>
              <h3 className="text-3xl space-mono-regular text-center lg:text-left">240k+</h3>
              <p className="text-white text-[24px] text-center lg:text-left">Artists</p>
            </div>
          </div>
        </div>
       <div className="flex justify-end mt-4 lg:-mt-15 lg:mr-10 w-full">
  <Link to="#" className="w-full sm:w-[400px] lg:w-[510px]">
    <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl w-full flex flex-col">
      <div className="w-full lg:h-[401px]">
        <img
          src={nftImage}
          alt="Space Walking NFT"
          className="w-full h-auto lg:w-[510px] lg:h-[401px] object-cover"
        />
      </div>
      <div className="p-4 bg-[#3B3B3B] bg-opacity-80 flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold">Space Walking</h3>
        <div className="flex items-center gap-3 mt-4">
          <img
            src={j}
            alt="AnimaKid profile"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-white font-medium">AnimaKid</span>
        </div>
      </div>
    </div>
  </Link>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
