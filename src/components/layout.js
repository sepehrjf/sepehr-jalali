import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: { duration: duration },
  },
};

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col min-h-screen mx-auto xl:max-w-screen-xl">
        <title>{pageTitle}</title>
        <Navbar />
        <motion.main
          className="flex-grow"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
