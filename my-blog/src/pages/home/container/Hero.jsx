import React from "react";
import { image } from "../../../constants";

const Hero = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-0 py-0 flex flex-col lg:flex-row items-center justify-center h-full">
      <div className="relative flex-1 lg:w-1/2">
        <img
          className="w-full max-w-screen-xl mx-auto"
          src={image.Hero}
          alt="hero"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
            Wellcome to my blog
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
