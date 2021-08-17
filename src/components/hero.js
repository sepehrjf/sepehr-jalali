import React from "react";
import ButtonYellow from "./buttonYellow";

const Hero = (props) => {
  return (
    <div className="flex-grow flex-auto mb-auto text-gray-600">
      <div className="container flex flex-col md:flex-row mx-auto px-5 py-24">
        <div
          className="md:flex-grow flex flex-col lg:pr-36 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          <p
            className="greeting text-xs sm:text-sm lowercase mb-4 relative text-gray-900"
            style={{ letterSpacing: "0.16em" }}
          >
            {props.greeting}
          </p>
          <h1
            className="title text-5xl sm:text-6xl md:text-7xl font-bold mb-4 relative text-gray-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {props.title}
          </h1>
          <p className="description text-base sm:text-lg md:text-2xl mb-8 leading-relaxed font-normal">
            {props.description}
          </p>
          <div>{props.button}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
