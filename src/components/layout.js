import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="flex flex-col mx-auto min-h-screen xl:max-w-screen-xl">
      <title>{pageTitle}</title>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
