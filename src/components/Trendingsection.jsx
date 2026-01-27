import React from "react";
import { Link } from "react-router-dom";
import dsgnimage from "../assets/avatar/img2.png";
import dsgn1 from "../assets/avatar/img3.png";
import dsgn2 from "../assets/avatar/img4.png";
import magic from "../assets/avatar/img5.png";
import robot from "../assets/avatar/img6.png";
import avatar from "../assets/avatar/avatar1.png";
import avatar1 from "../assets/avatar/avatar2.png";
import avatar2 from "../assets/avatar/avatar3.png";
import NftPage from "./nftpage";

const trendingItems = [
  {
    id: 1,
    title: "DSGN Animals",
    subtitle: "MrFox",
    image: dsgnimage,
    avatars: [dsgn1, dsgn2],
    profilePic: avatar,
    count: "1025+",
  },
  {
    id: 2,
    title: "Magic Mushrooms",
    subtitle: "Shroomie",
    image: magic,
    avatars: [magic, magic],
    profilePic: avatar1,
    count: "1025+",
  },
  {
    id: 3,
    title: "Disco Machines",
    subtitle: "BeKind2Robots",
    image: robot,
    avatars: [robot, robot],
    profilePic: avatar2,
    count: "1025+",
  },
];

const TrendingSection = () => {
  return (
    <section className="bg-[#2B2B2B] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[36px] font-semibold work-sans-regular1">
            Trending Collection
          </h2>
          <p className="text-white mt-2 text-[22px] work-sans-regular1">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center">
          {trendingItems.map((item) => (
            <div key={item.id} className="flex flex-col items-start">
              <a href={NftPage}>
                <div className="rounded-2xl overflow-hidden mb-4 cursor-pointer w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </a>

              <div className="flex items-start gap-4 mb-2">
                {item.avatars.map((avatarImg, index) => (
                  <a href="#" key={index}>
                    <img
                      src={avatarImg}
                      alt={item.subtitle}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
                    />
                  </a>
                ))}

                <div className="bg-purple-500 w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                  {item.count}
                </div>
              </div>

              <h3 className="font-bold text-2xl">{item.title}</h3>

              <div className="flex items-center gap-2 mt-1">
                <Link to="/Profile">
                  <img
                    src={item.profilePic}
                    alt={item.subtitle}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                </Link>
                <span className="text-white">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
