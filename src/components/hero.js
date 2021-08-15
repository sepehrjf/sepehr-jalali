import React from "react";
import ButtonYellow from "./buttonYellow";

const Hero = (props) => {
  return (
    <div className="flex-grow flex-auto mb-auto text-gray-600">
      <div className="container flex flex-col md:flex-row items-center mx-auto px-5 py-24">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          style={{ fontFamily: "Mulish, sans-serif" }}
        >
          <p
            className="greeting sm:text-sm text-xs lowercase mb-4 relative text-gray-900"
            style={{ letterSpacing: "0.16em" }}
          >
            {props.greeting}
          </p>
          <h1
            className="title sm:text-7xl text-5xl font-bold mb-4 relative text-gray-900"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {props.title}
          </h1>
          <p className="description md:text-xl sm:text-lg text-base mb-8 leading-relaxed font-normal">
            {props.description}
          </p>
          <ButtonYellow name="see work" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
