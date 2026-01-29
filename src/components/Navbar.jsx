// navbar section
import React from "react";
import { MdStore } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#2B2B2B] text-white shadow-md px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">

      <div className="flex items-center text-2xl font-bold space-x-2">
        <MdStore size={28} color="#A259FF"/>
        <a href="/">NFT Marketplace</a>
      </div>

      <ul className="hidden md:flex flex-1 justify-end space-x-6 lg:space-x-8 mr-6">
        <li><a href="#Marketplace">Marketplace</a></li>
        <li><a href="#Ranking">Ranking</a></li>
        <li><a href="#ConnectWallet">Connect a wallet</a></li>
      </ul>
      <div className="flex items-center">
        <Link to="/signup">
          <button className="bg-purple-500 hover:bg-purple-600 w-[140px] sm:w-[152px] h-[50px] sm:h-[60px] rounded-[20px] flex items-center justify-center gap-2 sm:gap-3 text-white font-semibold transition text-sm sm:text-base">
            <FaRegUser size={18} />
            <span>Sign Up</span>
          </button>
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
