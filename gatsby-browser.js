import React from "react";
import { AnimatePresence } from "framer-motion";

import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "./src/styles/global.css";
import "@fontsource/mulish";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
