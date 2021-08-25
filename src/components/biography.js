import React from "react";

function Biography(props) {
  return (
    <div className="container flex flex-col flex-grow flex-auto text-gray-800 mx-auto py-20">
      <div className="px-5 sm:px-10 md:px-24 lg:px-48">
        <div
          className="question mb-4 relative text-xs sm:text-sm lowercase"
          style={{
            fontFamily: "Mulish, sans-serif",
            letterSpacing: "0.13em",
          }}
        >
          {props.question}
        </div>
        <div
          className="title mb-4 leading-relaxed text-xl md:text-3xl font-normal"
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          {props.title}
        </div>
        <div
          className="description mb-4 leading-relaxed text-base md:text-lg font-normal"
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
