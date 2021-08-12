import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="flex flex-col min-h-screen 2xl:mx-52 xl:mx-32 lg:mx-12">
      <title>{pageTitle}</title>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
