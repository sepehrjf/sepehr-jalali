import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"'>
          <span className="ml-3 text-xl">Sepehr Jalali</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="" className="mr-5 hover:text-gray-900">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
