import React from "react";
import { container } from "./layout.module.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
