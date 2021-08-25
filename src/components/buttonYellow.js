import React from "react";
import { Link } from "gatsby";

const ButtonYellow = (props) => {
  return (
    <div className="flex justify-center">
      <Link
        to={props.link}
        target="_blank"
        className="border-4 border-solid border-yellow-400 py-2 px-6 my-3.5 mr-3 rounded-sm font-bold text-center lowercase text-lg text-black bg-yellow-400 hover:bg-yellow-100 hover:border-yellow-100 cursor-pointer no-underline transition ease-out duration-700 transform hover:scale-110"
        style={{
          fontSize: "0.9375rem",
          letterSpacing: "0.095em",
        }}
      >
        {props.name}
      </Link>
    </div>
  );
};

export default ButtonYellow;
