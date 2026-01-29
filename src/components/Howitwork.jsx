//how it work section
import React from "react";
import { IoMdMail } from 'react-icons/io';
import icon1 from "../assets/workimg/icon1.png";
import icon2 from "../assets/workimg/icon2.png";
import icon3 from "../assets/workimg/icon3.png";
import photo from "../assets/workimg/photo.png";

const HowItWorks = () => {
  const steps = [
    {
      title: "Setup Your Wallet",
      desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
      img: icon1,
    },
    {
      title: "Create Collection",
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
      img: icon2,
    },
    {
      title: "Start Earning",
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      img: icon3,
    },
  ];

  return (
    <section className="bg-[#2B2B2B] py-20 px-4 sm:px-6 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-semibold mb-2">
          How It Works
        </h2>
        <p className="text-gray-300 text-base sm:text-lg lg:text-[22px]">
          Find Out How To Get Started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 py-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#3B3B3B] rounded-3xl p-6 sm:p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-contain"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#3B3B3B] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="md:w-1/2 w-full">
            <img
              src={photo}
              alt="Newsletter"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold mb-4">
              Join Our Weekly Digest
            </h3>
            <p className="text-base sm:text-lg lg:text-[22px] text-white mb-8">
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </p>

            <div className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-[#2B2B2B] outline-none w-full"
              />
              <button className="w-full sm:w-[211px] h-[60px] bg-[#A259FF] rounded-2xl flex items-center justify-center gap-2 sm:gap-4 text-white font-semibold text-[16px] mt-2 sm:mt-0">
                <IoMdMail size={24} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
