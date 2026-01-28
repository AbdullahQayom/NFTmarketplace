//Discover components 
import React from "react";
import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import dis1 from "../assets/discover/discover1.png";
import dis2 from "../assets/discover/discover2.png";
import dis3 from "../assets/discover/discover3.png";
import dispr1 from "../assets/discover/discoverpr1.png";
import dispr2 from "../assets/discover/discoverpr2.png";
import dispr3 from "../assets/discover/discoverpr3.png";
import mash from "../assets/mashroom/mashroom1.png";
import avt from "../assets/mashroom/avatar.png";

const DiscoverMoreNFTs = () => {
  const trendingNFTs = [
    {
      title: "Distant Galaxy",
      author: "MoonDancer",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
      image: dis1,
      authorAvatar: dispr1,
    },
    {
      title: "Life On Edena",
      author: "NebulaKid",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
      image: dis2,
      authorAvatar: dispr2,
    },
    {
      title: "AstroFiction",
      author: "Spaceone",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
      image: dis3,
      authorAvatar: dispr3,
    },
  ];

  const featuredNFT = {
    title: "Magic Mushrooms",
    author: "Shroomie",
    image: mash,
    authorAvatar: avt,
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold">
              Discover More NFTs
            </h2>
            <p className="text-base sm:text-lg lg:text-[22px]">
              Explore New Trending NFTs
            </p>
          </div>

          <button className="hidden md:flex items-center gap-3 border border-purple-600 px-8 py-4 rounded-2xl">
            <HiOutlineEye className="w-5 h-5" />
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trendingNFTs.map((nft, index) => (
            <Link key={index} to="#" className="block">
              <div className="bg-[#3B3B3B] rounded-3xl overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {nft.title}
                  </h3>

                  <div className="inline-flex items-center gap-2 mb-4 px-1 py-2">
                    <img
                      src={nft.authorAvatar}
                      alt={nft.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[16px]">
                      {nft.author}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-400">Price</p>
                      <p className="font-semibold">{nft.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">Highest Bid</p>
                      <p className="font-semibold">{nft.highestBid}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={featuredNFT.image}
            alt={featuredNFT.title}
            className="w-full h-[420px] sm:h-[520px] lg:h-[640px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-purple-900/20 flex flex-col justify-end p-6 sm:p-10">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-[#3B3B3B] rounded-full w-fit">
              <img
                src={featuredNFT.authorAvatar}
                alt={featuredNFT.author}
                className="w-7 h-7 rounded-full"
              />
              <span className="text-[16px]">
                {featuredNFT.author}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {featuredNFT.title}
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <button className="bg-white text-black px-8 py-4 rounded-2xl w-fit flex items-center gap-3 font-semibold">
                <HiOutlineEye className="w-5 h-5 text-purple-500" />
                See NFT
              </button>

              <div className="bg-[#3B3B3B]/50 rounded-2xl px-6 py-4 sm:ml-auto w-full sm:w-[295px]">
                <p className="text-[12px] mb-2">
                  Auction ends in:
                </p>

                <p className="text-3xl sm:text-4xl font-space-mono-regular font-bold mb-2">
                  59 : 59 : 59
                </p>

                <div className="flex justify-between text-[14px] text-gray-300 font-mono">
                  <span>Hours</span>
                  <span>Minutes</span>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiscoverMoreNFTs;
