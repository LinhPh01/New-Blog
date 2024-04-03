import React from "react";
import { image } from "../../../constants";
import TextEffect from "../../../components/TextEffect";

const Hero = () => {
  return (
    <section className="w-full max-w-screen-3xl mx-auto px-0 lg:px-0 py-0 lg:py-0 flex flex-col lg:flex-row items-center justify-center h-screen lg:h-auto">
      <div className="relative flex-1 lg:w-1/2 h-full">
        <img
          className="w-full h-full object-cover relative"
          src={image.Hero}
          alt="hero"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="font-roboto text-3xl font-bold text-white md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px] text-center">
            WELCOME TO MY BLOG
          </h1>
          <TextEffect />
        </div>
      </div>
    </section>
  );
};

export default Hero;
