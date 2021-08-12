import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header>
      <div
        className="container mx-auto flex flex-wrap px-5 pb-5 pt-9 flex-col md:flex-row items-center"
        style={{ fontFamily: "Mulish, sans-serif", letterSpacing: "0.13em" }}
      >
        <Link
          to="/"
          className="flex items-center text-base font-semibold mb-4 md:mb-0 lowercase"
        >
          <span className="ml-3 text-xl">sepehrjalali</span>
        </Link>
        <nav
          className="md:ml-auto flex flex-wrap items-center text-base font-normal justify-center lowercase"
          style={{ fontSize: "0.9357rem" }}
        >
          <Link to="/about" className="mr-5 hover:text-gray-900">
            about
          </Link>
          <Link to="" className="mr-5 hover:text-gray-900">
            projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
