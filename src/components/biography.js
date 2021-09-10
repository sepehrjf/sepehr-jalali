import React from "react";
import { tile } from "./tile.module.css";

function Biography(props) {
  return (
    <div className="container flex flex-col flex-grow flex-auto text-gray-800 mx-auto pt-2 pb-4">
      <div className="px-5 sm:px-10 md:px-24 lg:px-48">
        <div className="flex mb-4 relative">
          <div className={tile}></div>
          <div
            className="question text-xs sm:text-sm lowercase"
            style={{
              fontFamily: "Mulish, sans-serif",
              letterSpacing: "0.13em",
              lineHeight: "1rem",
            }}
          >
            {props.question}
          </div>
        </div>
        {/* <div
          className="title mb-4 leading-relaxed text-xl md:text-3xl font-normal"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          {props.title}
        </div> */}
        <div
          className="description mb-4 leading-relaxed text-base lg:text-lg font-normal text-gray-700"
          style={{
            fontFamily: "Mulish, sans-serif",
          }}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default Biography;
