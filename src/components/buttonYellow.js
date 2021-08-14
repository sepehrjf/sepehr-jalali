import React from "react";

const ButtonYellow = (props) => {
  return (
    <div className="flex justify-center">
      <button
        className="name inline-flex text-black bg-yellow-400 border border-solid border-transparent py-2 px-6 my-3.5 mr-3 focus:outline-none hover:bg-yellow-100 rounded-sm text-lg cursor-pointer font-bold text-center lowercase no-underline transition ease-out duration-700 transform hover:scale-110"
        style={{
          fontSize: "0.9375rem",
          letterSpacing: "0.095em",
        }}
      >
        {props.name}
      </button>
    </div>
  );
};

export default ButtonYellow;
