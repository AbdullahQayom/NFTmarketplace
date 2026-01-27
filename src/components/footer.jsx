import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';
import { MdStore } from "react-icons/md";

const footer = () => {
  return (
    <footer className="bg-[#3B3B3B] text-white pt-[40px] pb-[40px] px-4 sm:px-8 lg:px-[195px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="space-mono-regular flex items-center gap-1 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold">
              <MdStore size={28} color="#A259FF" />
            </div>
            <h3 className="text-2xl font-bold">
              NFT Marketplace
            </h3>
          </div>

          <p className="work-sans-regular1 text-[#CCCCCC] text-sm">
            NFT marketplace UI created
          </p>
          <p className="work-sans-regular1 text-[#CCCCCC] text-sm mt-1">
            with Anima for Figma.
          </p>

          <p className="work-sans-regular1 text-[#CCCCCC] text-sm mt-4">
            Join our community
          </p>

          <div className="flex gap-4 mt-4">
            <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <FaDiscord size={32} color="#858584" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <FaYoutube size={32} color="#858584" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <FaInstagram size={32} color="#858584" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <FaTwitter size={32} color="#858584" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="space-mono-regular text-2xl font-bold mb-6">Explore</h3>
          <ul className="space-mono-regular space-y-4 text-[#CCCCCC] text-lg">
            <li className="cursor-pointer">Marketplace</li>
            <li className="cursor-pointer">Rankings</li>
            <li className="cursor-pointer">Connect a wallet</li>
          </ul>
        </div>

        <div>
          <h3 className="space-mono-regular text-2xl font-bold mb-6">
            Join Our Weekly Digest
          </h3>
          <p className="space-mono-regular text-[#CCCCCC] text-sm mb-6">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row w-full bg-white rounded-2xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email here"
              className="bg-white px-6 py-4 flex-1 text-[#2B2B2B] text-sm outline-none"
            />
            <button className="bg-[#A259FF] px-8 py-4 font-semibold text-white text-[16px]">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="pt-8 text-[#CCCCCC]">
        <hr />
      </div>

      <div className="work-sans-regular1 text-[#CCCCCC] text-sm pt-5 text-[12px]">
        Ⓒ NFT Market. Use this template freely.
      </div>
    </footer>
  );
};

export default footer;
