import React from "react";
//import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
