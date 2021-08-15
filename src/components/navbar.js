import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div
      className="container flex flex-col md:flex-row mx-auto items-center px-7 pb-5 pt-9"
      style={{ fontFamily: "Mulish, sans-serif", letterSpacing: "0.13em" }}
    >
      <Link
        to="/"
        className="flex items-center text-base font-semibold mb-4 md:mb-0 lowercase"
      >
        <span className="text-xl">sepehrjalali</span>
      </Link>
      <div
        className="md:ml-auto flex flex-wrap items-center text-base font-normal justify-center lowercase"
        style={{ fontSize: "0.9357rem" }}
      >
        <Link to="/about" className="mr-5 hover:text-gray-900">
          about
        </Link>
        <Link to="/projects" className="hover:text-gray-900">
          projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
