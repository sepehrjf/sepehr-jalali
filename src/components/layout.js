import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
