// the browse components 
import React from 'react';
import z from "../assets/categories/icon1.png";
import y from "../assets/categories/icon2.png";
import x from "../assets/categories/icon3.png";
import w from "../assets/categories/icon4.png";
import v from "../assets/categories/icon5.png";
import u from "../assets/categories/icon6.png";
import t from "../assets/categories/icon7.png";
import s from "../assets/categories/icon8.png";

const categories = [
  { name: 'Art', bgImage: z, link: '/art' },
  { name: 'Collectibles', bgImage: y, link: '/art' },
  { name: 'Music', bgImage: x, link: '/art' },
  { name: 'Photography', bgImage: w, link: '/art' },
  { name: 'Video', bgImage: v, link: '/art' },
  { name: 'Utility', bgImage: u, link: '/art' },
  { name: 'Sport', bgImage: t, link: '/art' },
  { name: 'Virtual Worlds', bgImage: s, link: '/art' },
];

const BrowseCategories = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 xl:px-28 bg-[#2B2B2B] text-white">
      <h2 className="text-2xl sm:text-3xl xl:text-[38px] font-semibold work-sans-regular1 mb-12 xl:mb-20 text-left xl:text-left">
        Browse Categories
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-10 place-items-center max-w-6xl mx-auto">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.link}
            className="w-[240px] h-[316px] rounded-3xl overflow-hidden bg-[#3B3B3B] flex flex-col cursor-pointer"
          >
            <div
              className="h-[240px] bg-cover bg-center"
              style={{ backgroundImage: `url(${category.bgImage})` }}
            />

            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-center">
                {category.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
