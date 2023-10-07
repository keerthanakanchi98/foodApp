import { motion } from "framer-motion";
import React from "react";
import { buttonClcik, staggerFadeInOut } from "../animations";
import { Delivery, HeroBg, homebg } from "../assets";
import { randomData } from "../utils/styles";

const Home = () => {
  return (
    // <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">

    <div className="w-screen h-screen relative overflow-hidden flex  flex-col bg-homebg">
      {/* <img
          src={LoginBg}
          className="w-full h-full object-cover absolute top-0 left-0"
          alt=""
        /> */}
      <div>
        <img
          className="h-full object-cover absolute top-0 right-0"
          src={homebg}
          alt=""
        />
      </div>
      <div className="flex items-center justify-enter gap-6">
        <div className="items-center justify-center text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold tracking-wider w-1/2 pl-[80px] pt-[215px]">
          Discover Homemade Delights Within A{" "}
          <span className="text-orange-600"> Budget. </span>
        </div>
      </div>
      {/* <motion.button
        {...buttonClcik}
        className="bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-black text-base font-semibold"
      >
        Order Now
      </motion.button> */}
      ;
      {/* <div className="w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14">
          {randomData &&
            randomData.map((data, i) => (
              <motion.div
                key={i}
                {...staggerFadeInOut(i)}
                className=" w-32 h-36 md:h-auto  md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageURL}
                  className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain "
                  alt=""
                />
              </motion.div>
            ))}
        </div> */}
    </div>
    // </motion.div>
  );
};

export default Home;
