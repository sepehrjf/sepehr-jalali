import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header>
      <div
        className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
        style={{ fontFamily: "Mulish, sans-serif" }}
      >
        <Link
          to="/"
          className="flex items-center mb-4 md:mb-0"
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            textTransform: "lowercase",
            letterSpacing: "0.13em",
          }}
        >
          <span className="ml-3 text-xl">sepehrjalali</span>
        </Link>
        <nav
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
          style={{
            fontSize: "0.9357rem",
            fontWeight: "400",
            textTransform: "lowercase",
            letterSpacing: "0.13em",
          }}
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
