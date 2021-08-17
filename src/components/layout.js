import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col min-h-screen mx-auto xl:max-w-screen-xl">
        <title>{pageTitle}</title>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
