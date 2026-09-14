import React from "react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center text-center py-10 sm:py-0">
        <div className="text-[#414141]">
          {/* Subtitle Top */}
          <div className="flex items-center justify-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLER</p>
          </div>

          {/* Title */}
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          {/* Button / Subtitle Bottom */}
          <div className="flex items-center justify-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right SIde */}
      <img className="w-full sm:w-1/2" src={assets.hero} alt="" />
    </div>
  );
};

export default Hero;
