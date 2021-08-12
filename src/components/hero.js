import React from "react";
import { container } from "./hero.module.css";
import ButtonYellow from "./buttonYellow";

const Hero = () => {
  return (
    <section className={container}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          <p
            className="sm:text-sm text-xs lowercase mb-4 relative text-gray-900"
            style={{ letterSpacing: "0.16em" }}
          >
            hello, world!
          </p>
          <h1
            className="sm:text-7xl text-5xl font-bold mb-4 relative text-gray-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            I am a Software Engineer
          </h1>
          <p className="md:text-xl sm:text-lg text-base mb-8 leading-relaxed font-normal">
            I am passionate about problem solving, web development, and enjoy
            making the Internet a more beautiful place.
          </p>
          <ButtonYellow name="see work" />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
