import React from "react";
import { MdOutlineDiscount } from "react-icons/md";

const Hero = () => {
  return (
    <div className="grid  px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 max-w-[1240px]">
      <div className="mr-auto mt-20 lg:col-span-6">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white uppercase">
          I'll build you a dream body{" "}
          <span className="text-gray">
            {" "}
            in a short time and without rollback
          </span>
        </h1>

        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-5 mr-3 text-2xl font-bold text-center  text-background rounded-[40px] bg-main "
          >
            Select a Program
          </a>
          <p className="inline-flex items-center justify-center px-8 py-6 text-xl font-bold text-center  text-white rounded-[40px] bg-secondary">
            And get a discount{" "}
            <MdOutlineDiscount className="ml-4 text-main text-" />
          </p>
        </div>
      </div>
      <div className="lg:mt-0 lg:col-span-6 flex justify-end items-center">
        <img
          src="./ArteomHome.png"
          alt="mockup"
          className="transform scale-x-[-1] w-8/12 h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
