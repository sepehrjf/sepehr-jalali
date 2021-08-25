import React from "react";

const Project = (props) => {
  return (
    <div className="border border-solid border-transparent shadow-lg bg-white">
      <div className="h-64 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1201x501"
        />
      </div>
      <div className="p-8">
        <h2
          className="font-extralight text-gray-900 mb-3"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2rem",
            lineHeight: "1",
          }}
        >
          {props.title}
        </h2>
        <p
          className="pb-2.5 leading-relaxed text-base font-normal"
          style={{
            fontFamily: "Mulish, sans-serif",
          }}
        >
          {props.description}
        </p>
        <div className="flex">
          <div>{props.buttonYellow}</div>
          <div>{props.buttonWhite}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
