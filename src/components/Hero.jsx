import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-300 shadow rounded-xl">
        {/* HeroLeftSide */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-14 sm:py-8">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">
                OUR BESTSELLERS
              </p>
            </div>
            <h1  className="praata uppercase text-3xl sm:py-3 md:text-5xl leading-relaxed">
              Latest arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base uppercase ">
                shop now
              </p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>

        {/* RightSide */}

          <img src={assets.hero_img} className="w-full sm:w-1/2 rounded-tr-xl rounded-br-xl" alt="" />
      </div>
    </>
  );
}

export default Hero;
