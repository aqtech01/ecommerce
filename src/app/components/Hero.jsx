import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="px-4 md:px-20 mt-10">
      <div className="text-2xl md:text-3xl font-bold ml-4 md:ml-20 mt-10 md:mt-20">
        Why I Do?
      </div>

      <div className="">
        <p className="text-2xl md:text-5xl font-extrabold ml-4 md:ml-20 mt-10 md:mt-20 leading-snug">
          I explain and teach Technology, solve tech problems, and help you make
          gadget buying decisions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className=" font-semibold md:text-3xl ">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
        </div>

        {/* Horizontal Line Section */}
        <div className="flex justify-center items-center">
          <hr className="w-64  h-1 md:w-64 border-white" />
        </div>
      </div>
    </div>
  );
};
